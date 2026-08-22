(() => {
  'use strict';

  const WORDS = window.SPANISH_3000 || [];
  const TOPICS = window.GRAMMAR_TOPICS || [];
  const SENTENCES = window.SENTENCE_EXERCISES || [];
  const STORAGE_KEY = 'spanish3000_state_v1';
  const view = document.getElementById('view');
  const toastEl = document.getElementById('toast');
  const profileDialog = document.getElementById('profileDialog');
  const playerNameInput = document.getElementById('playerName');

  const defaultState = {
    name: 'Sare', xp: 0, correct: 0, wrong: 0, learned: [],
    streak: 1, lastStudyDate: '', sessions: [], currentWordId: 1,
    vocabRange: 'all', vocabLevel: 'all', grammarMode: 'learn'
  };

  let state = loadState();
  let route = 'home';
  let vocabMode = 'learn';
  let currentQuiz = null;
  let currentTopic = null;
  let grammarExerciseIndex = 0;
  let sentenceIndex = Math.floor(Math.random() * Math.max(1, SENTENCES.length));
  let sentenceSelected = [];
  let sentenceTokens = [];

  function loadState(){
    try { return {...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')}; }
    catch { return {...defaultState}; }
  }
  function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); updateChrome(); }
  function todayKey(){ return new Date().toISOString().slice(0,10); }
  function touchStudy(){
    const today = todayKey();
    if (state.lastStudyDate === today) return;
    if (state.lastStudyDate) {
      const prev = new Date(state.lastStudyDate + 'T12:00:00');
      const now = new Date(today + 'T12:00:00');
      const days = Math.round((now-prev)/86400000);
      state.streak = days === 1 ? Math.max(1,state.streak)+1 : 1;
    } else state.streak = 1;
    state.lastStudyDate = today;
    saveState();
  }
  function gainXP(n, label='Çalışma'){
    state.xp += n; touchStudy();
    state.sessions.unshift({date:new Date().toISOString(),xp:n,label});
    state.sessions = state.sessions.slice(0,30); saveState();
  }
  function recordAnswer(ok, label){
    if(ok){ state.correct++; gainXP(10,label); }
    else { state.wrong++; touchStudy(); saveState(); }
  }
  function toast(msg){
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(()=>toastEl.classList.remove('show'),2600);
  }
  function escapeHtml(s=''){ return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
  function shuffle(a){
    const x=[...a]; for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]];} return x;
  }
  function normalize(s){ return String(s).toLocaleLowerCase('es').replace(/[¿?¡!.,;:]/g,'').replace(/\s+/g,' ').trim(); }
  function accuracy(){ const t=state.correct+state.wrong; return t?Math.round(state.correct/t*100):0; }
  function learnedSet(){ return new Set(state.learned); }
  function updateChrome(){
    document.querySelector('#xpChip b').textContent = `${state.xp} XP`;
    document.querySelector('#streakChip b').textContent = state.streak || 0;
    document.getElementById('avatarLetter').textContent = (state.name || 'S').trim().charAt(0).toLocaleUpperCase('tr') || 'S';
    const learned = state.learned.length;
    document.getElementById('sideProgressText').textContent = `${learned} / 3000`;
    document.getElementById('sideProgressBar').style.width = `${Math.min(100,learned/30)}%`;
  }
  function setActiveNav(name){
    document.querySelectorAll('[data-nav]').forEach(el=>el.classList.toggle('active',el.dataset.nav===name && (el.classList.contains('nav-item')||el.classList.contains('mobile-nav-item'))));
  }
  function navigate(name){ route=name; currentTopic=null; setActiveNav(name); render(); window.scrollTo({top:0,behavior:'smooth'}); }

  function speakSpanish(text){
    if(!('speechSynthesis' in window)){ toast('Bu tarayıcı seslendirmeyi desteklemiyor.'); return; }
    const voices = speechSynthesis.getVoices();
    const spanish = voices.filter(v => (v.lang||'').toLowerCase().startsWith('es'));
    if(!spanish.length){
      toast('Cihazda İspanyolca ses bulunamadı. Sistem ayarlarından bir İspanyolca ses ekle.');
      return;
    }
    const voice = spanish.find(v=>v.lang.toLowerCase()==='es-es') || spanish.find(v=>v.lang.toLowerCase().startsWith('es-es')) || spanish[0];
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang=voice.lang; u.voice=voice; u.rate=.88; u.pitch=1;
    speechSynthesis.speak(u);
  }
  if('speechSynthesis' in window){ speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged=()=>speechSynthesis.getVoices(); }

  function render(){
    updateChrome();
    if(route==='home') renderHome();
    if(route==='vocabulary') renderVocabulary();
    if(route==='grammar') renderGrammar();
    if(route==='sentence') renderSentence();
    if(route==='leaderboard') renderLeaderboard();
  }

  function renderHome(){
    const learned=state.learned.length;
    view.innerHTML = `
      <section class="hero">
        <div class="hero-copy">
          <div class="eyebrow">İspanyolca çalışma alanın</div>
          <h1>Hola, ${escapeHtml(state.name)} 👋</h1>
          <p>3.000 sık kullanılan kelimeyi öğren, İspanyolca telaffuzu dinle, gramer konularını çalış ve cümleleri kendin kur.</p>
          <div class="hero-actions">
            <button class="primary-btn" data-go="vocabulary">Kelimeye devam et →</button>
            <button class="ghost-btn" data-go="grammar">Gramer çalış</button>
          </div>
        </div>
      </section>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-icon">◫</div><strong>${learned}</strong><span>öğrenilen kelime</span></div>
        <div class="stat-card"><div class="stat-icon">⚡</div><strong>${state.xp}</strong><span>toplam XP</span></div>
        <div class="stat-card"><div class="stat-icon">✓</div><strong>%${accuracy()}</strong><span>doğruluk oranı</span></div>
        <div class="stat-card"><div class="stat-icon">🔥</div><strong>${state.streak || 0}</strong><span>günlük seri</span></div>
      </div>
      <div class="section-title"><div><h2>Bugün ne çalışalım?</h2><p>İstediğin çalışma modunu seç.</p></div><span class="pill">${WORDS.length.toLocaleString('tr-TR')} kelime</span></div>
      <div class="feature-grid">
        <button class="feature-card" data-go="vocabulary"><div class="feature-icon">🔊</div><h3>Kelime Öğren</h3><p>Türkçe anlam, İspanyolca seslendirme, seviye ve test modu.</p><span class="feature-arrow">Başla →</span></button>
        <button class="feature-card" data-go="grammar"><div class="feature-icon">✦</div><h3>Gramer</h3><p>${TOPICS.length} konu için “Konu Çalış” veya “Alıştırma Yap” seç.</p><span class="feature-arrow">Konuları aç →</span></button>
        <button class="feature-card" data-go="sentence"><div class="feature-icon">✎</div><h3>Cümle Kur</h3><p>Karışık kelimeleri doğru sıraya diz ve cevabını anında kontrol et.</p><span class="feature-arrow">Cümle kur →</span></button>
      </div>`;
    view.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>navigate(b.dataset.go));
  }

  function filteredWords(){
    let arr=WORDS;
    if(state.vocabRange!=='all'){
      const [a,b]=state.vocabRange.split('-').map(Number); arr=arr.filter(w=>w.id>=a&&w.id<=b);
    }
    if(state.vocabLevel!=='all') arr=arr.filter(w=>w.level===state.vocabLevel);
    return arr;
  }
  function getCurrentWord(){
    const pool=filteredWords();
    let w=pool.find(x=>x.id===state.currentWordId);
    if(!w) w=pool[0]||WORDS[0];
    return w;
  }
  function renderVocabulary(){
    view.innerHTML = `
      <div class="page-head"><div><div class="eyebrow">Spanish 3000</div><h1>Kelime Öğren</h1><p class="lead">Sıklık temelli 3.000 kelime. Dinle, öğrenildi olarak işaretle veya test modunda kendini dene.</p></div><span class="pill">🔊 Yalnızca İspanyolca ses</span></div>
      <div class="toolbar">
        <div class="segmented" id="vocabMode"><button data-mode="learn" class="${vocabMode==='learn'?'active':''}">Öğren</button><button data-mode="quiz" class="${vocabMode==='quiz'?'active':''}">Test</button></div>
        <select id="rangeSelect" class="select" aria-label="Kelime aralığı">
          <option value="all">1–3000</option><option value="1-1000">1–1000</option><option value="1001-2000">1001–2000</option><option value="2001-3000">2001–3000</option>
        </select>
        <select id="levelSelect" class="select" aria-label="Seviye"><option value="all">Tüm seviyeler</option><option>A1</option><option>A2</option><option>B1</option><option>B2</option></select>
        <input id="wordSearch" class="search" placeholder="Kelime ara…" autocomplete="off" />
      </div>
      <div id="vocabContent"></div>`;
    document.getElementById('rangeSelect').value=state.vocabRange;
    document.getElementById('levelSelect').value=state.vocabLevel;
    document.querySelectorAll('#vocabMode button').forEach(b=>b.onclick=()=>{vocabMode=b.dataset.mode;currentQuiz=null;renderVocabulary();});
    document.getElementById('rangeSelect').onchange=e=>{state.vocabRange=e.target.value;currentQuiz=null;saveState();renderVocabContent();};
    document.getElementById('levelSelect').onchange=e=>{state.vocabLevel=e.target.value;currentQuiz=null;saveState();renderVocabContent();};
    document.getElementById('wordSearch').oninput=e=>{
      const q=normalize(e.target.value); if(!q)return;
      const hit=WORDS.find(w=>normalize(w.word).includes(q)||normalize(w.meaning).includes(q));
      if(hit){state.currentWordId=hit.id;saveState();if(vocabMode!=='learn'){vocabMode='learn';} renderVocabContent();}
    };
    renderVocabContent();
  }
  function renderVocabContent(){
    const host=document.getElementById('vocabContent'); if(!host)return;
    if(vocabMode==='quiz') return renderVocabQuiz(host);
    const w=getCurrentWord(); const pool=filteredWords(); const idx=Math.max(0,pool.findIndex(x=>x.id===w.id)); const learned=learnedSet().has(w.id);
    host.innerHTML=`<div class="study-layout">
      <div class="study-card">
        <div class="word-meta"><span class="rank-badge">#${w.id}</span><span class="level-badge">${w.level}</span><span class="pos-badge">${escapeHtml(w.pos)}</span></div>
        <div class="word-main">${escapeHtml(w.word)}</div>
        <div class="word-meaning">${escapeHtml(w.meaning)}</div>
        <button class="speak-btn" id="speakWord" aria-label="Kelimeyi İspanyolca dinle">🔊</button>
        <div class="study-actions">
          <button class="ghost-btn" id="prevWord">← Önceki</button>
          <button class="${learned?'secondary-btn':'primary-btn'}" id="markLearned">${learned?'✓ Öğrenildi':'Öğrendim +5 XP'}</button>
          <button class="ghost-btn" id="nextWord">Sonraki →</button>
        </div>
      </div>
      <div class="study-side">
        <div class="mini-card"><h3>Bu kelime</h3><div class="mini-row"><span>Sıra</span><strong>${w.id} / 3000</strong></div><div class="mini-row"><span>Seviye bandı</span><strong>${w.level}</strong></div><div class="mini-row"><span>Tür</span><strong>${escapeHtml(w.pos)}</strong></div></div>
        <div class="mini-card"><h3>Filtrede ilerleme</h3><div class="mini-row"><span>Konum</span><strong>${idx+1} / ${pool.length}</strong></div><div class="progress-track"><div class="progress-fill" style="width:${pool.length?((idx+1)/pool.length*100):0}%"></div></div></div>
        <div class="mini-card"><h3>İpucu</h3><p style="font-size:12px;color:var(--muted);margin:0">🔊 düğmesi cihazındaki İspanyolca sesi kullanır. İspanyolca ses yoksa İngilizce sese geçmez.</p></div>
      </div></div>`;
    document.getElementById('speakWord').onclick=()=>speakSpanish(w.word);
    document.getElementById('prevWord').onclick=()=>{const n=pool[Math.max(0,idx-1)];state.currentWordId=n.id;saveState();renderVocabContent();};
    document.getElementById('nextWord').onclick=()=>{const n=pool[Math.min(pool.length-1,idx+1)];state.currentWordId=n.id;saveState();renderVocabContent();};
    document.getElementById('markLearned').onclick=()=>{
      if(!learnedSet().has(w.id)){state.learned.push(w.id);gainXP(5,'Kelime öğrenme');toast('+5 XP — kelime öğrenildi!');renderVocabContent();}
      else toast('Bu kelime zaten öğrenildi olarak işaretli.');
    };
  }
  function makeQuiz(){
    const pool=filteredWords(); const target=pool[Math.floor(Math.random()*pool.length)] || WORDS[0];
    let others=shuffle(pool.filter(x=>x.id!==target.id)).slice(0,3);
    while(others.length<3) others.push(...shuffle(WORDS.filter(x=>x.id!==target.id)).slice(0,3-others.length));
    return {target, choices:shuffle([target,...others]), answered:false};
  }
  function renderVocabQuiz(host){
    if(!currentQuiz) currentQuiz=makeQuiz(); const q=currentQuiz;
    host.innerHTML=`<div class="quiz-card"><div class="quiz-top"><span>Kelime testi</span><span>${q.target.level} · #${q.target.id}</span></div>
      <div class="quiz-word">${escapeHtml(q.target.word)}</div><div class="quiz-sub">Doğru Türkçe anlamı seç.</div>
      <div class="options">${q.choices.map((c,i)=>`<button class="option" data-choice="${i}">${escapeHtml(c.meaning)}</button>`).join('')}</div>
      <div id="quizFeedback" class="feedback"></div><div class="next-wrap"><button id="quizNext" class="primary-btn" style="display:none">Sonraki soru →</button></div></div>`;
    host.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>answerVocab(Number(btn.dataset.choice)));
    document.getElementById('quizNext').onclick=()=>{currentQuiz=makeQuiz();renderVocabQuiz(host);};
  }
  function answerVocab(i){
    if(currentQuiz.answered)return; currentQuiz.answered=true;
    const chosen=currentQuiz.choices[i], correct=currentQuiz.target, ok=chosen.id===correct.id;
    const buttons=[...document.querySelectorAll('[data-choice]')];
    buttons.forEach((b,j)=>{b.disabled=true;if(currentQuiz.choices[j].id===correct.id)b.classList.add('correct');});
    if(!ok) buttons[i].classList.add('wrong');
    const fb=document.getElementById('quizFeedback'); fb.className=`feedback show ${ok?'good':'bad'}`;
    fb.innerHTML=ok?`<strong>✓ Doğru!</strong>+10 XP kazandın.`:`<strong>✕ Yanlış.</strong>Doğru cevap: <b>${escapeHtml(correct.meaning)}</b>. Doğrusunu görmeden soru geçmiyor.`;
    document.getElementById('quizNext').style.display='inline-block'; recordAnswer(ok,'Kelime testi');
  }

  function renderGrammar(){
    if(currentTopic) return renderGrammarTopic();
    view.innerHTML=`<div class="page-head"><div><div class="eyebrow">28 konu</div><h1>Gramer</h1><p class="lead">Önce ne yapmak istediğini seç: konuyu öğren veya doğrudan alıştırmaya geç.</p></div></div>
      <div class="grammar-choice">
        <button class="choice-card ${state.grammarMode==='learn'?'active':''}" data-gmode="learn"><span class="icon">📖</span><div><h3>Konu Çalış</h3><p>Türkçe anlatım + İspanyolca örnekler</p></div></button>
        <button class="choice-card ${state.grammarMode==='exercise'?'active':''}" data-gmode="exercise"><span class="icon">✓</span><div><h3>Gramer Alıştırması Yap</h3><p>Doğru/yanlış geri bildirimli sorular</p></div></button>
      </div>
      <div class="topic-grid">${TOPICS.map((t,i)=>`<button class="topic-card" data-topic="${i}"><div class="topic-top"><span class="topic-icon">${t.icon}</span><span class="level-badge">${t.level}</span></div><h3>${escapeHtml(t.title)}</h3><p>${escapeHtml(t.summary)}</p><span class="go">${state.grammarMode==='learn'?'Konuyu çalış →':'Alıştırmayı aç →'}</span></button>`).join('')}</div>`;
    view.querySelectorAll('[data-gmode]').forEach(b=>b.onclick=()=>{state.grammarMode=b.dataset.gmode;saveState();renderGrammar();});
    view.querySelectorAll('[data-topic]').forEach(b=>b.onclick=()=>{currentTopic=TOPICS[Number(b.dataset.topic)];grammarExerciseIndex=0;renderGrammarTopic();window.scrollTo({top:0,behavior:'smooth'});});
  }
  function renderGrammarTopic(){
    const t=currentTopic;
    if(state.grammarMode==='learn'){
      view.innerHTML=`<div class="lesson-panel"><button class="back-btn" id="backTopics">← Tüm konular</button><div class="word-meta" style="justify-content:flex-start"><span class="level-badge">${t.level}</span><span class="pos-badge">${t.icon} ${escapeHtml(t.title)}</span></div><h2>${escapeHtml(t.title)}</h2><div class="lesson-copy">${t.lesson}</div><div class="section-title"><div><h2>Örnekler</h2><p>Hoparlöre basarak İspanyolca dinleyebilirsin.</p></div></div><div class="example-list">${t.examples.map((e,i)=>`<div class="example-row"><div class="es">${escapeHtml(e[0])}<button class="small-speak" data-example="${i}">🔊</button></div><span class="arrow">→</span><div class="tr">${escapeHtml(e[1])}</div></div>`).join('')}</div><div style="margin-top:24px"><button id="practiceTopic" class="primary-btn">Bu konunun alıştırmasını yap →</button></div></div>`;
      document.getElementById('backTopics').onclick=()=>{currentTopic=null;renderGrammar();};
      document.querySelectorAll('[data-example]').forEach(b=>b.onclick=()=>speakSpanish(t.examples[Number(b.dataset.example)][0]));
      document.getElementById('practiceTopic').onclick=()=>{state.grammarMode='exercise';saveState();grammarExerciseIndex=0;renderGrammarTopic();};
    } else renderGrammarExercise();
  }
  function renderGrammarExercise(){
    const t=currentTopic, ex=t.exercises[grammarExerciseIndex % t.exercises.length];
    view.innerHTML=`<div class="quiz-card"><button class="back-btn" id="backTopics">← Tüm konular</button><div class="quiz-top"><span>${t.icon} ${escapeHtml(t.title)}</span><span>Soru ${grammarExerciseIndex+1} / ${t.exercises.length}</span></div><h2 style="font-size:24px;margin:24px 0 6px">${escapeHtml(ex.q)}</h2><div class="quiz-sub" style="text-align:left">Doğru cevabı seç.</div><div class="options">${ex.options.map((o,i)=>`<button class="option" data-ganswer="${i}">${escapeHtml(o)}</button>`).join('')}</div><div id="grammarFeedback" class="feedback"></div><div class="next-wrap"><button id="grammarNext" class="primary-btn" style="display:none">${grammarExerciseIndex+1>=t.exercises.length?'Konulara dön':'Sonraki soru →'}</button></div></div>`;
    document.getElementById('backTopics').onclick=()=>{currentTopic=null;renderGrammar();};
    document.querySelectorAll('[data-ganswer]').forEach(b=>b.onclick=()=>answerGrammar(Number(b.dataset.ganswer)));
    document.getElementById('grammarNext').onclick=()=>{if(grammarExerciseIndex+1>=t.exercises.length){currentTopic=null;renderGrammar();}else{grammarExerciseIndex++;renderGrammarExercise();}};
  }
  function answerGrammar(i){
    const ex=currentTopic.exercises[grammarExerciseIndex % currentTopic.exercises.length];
    const buttons=[...document.querySelectorAll('[data-ganswer]')]; if(buttons.some(b=>b.disabled))return;
    const ok=i===ex.a; buttons.forEach((b,j)=>{b.disabled=true;if(j===ex.a)b.classList.add('correct');}); if(!ok)buttons[i].classList.add('wrong');
    const fb=document.getElementById('grammarFeedback'); fb.className=`feedback show ${ok?'good':'bad'}`; fb.innerHTML=`<strong>${ok?'✓ Doğru!':'✕ Yanlış.'}</strong>${escapeHtml(ex.why)}`;
    document.getElementById('grammarNext').style.display='inline-block'; recordAnswer(ok,'Gramer');
  }

  function buildSentenceTokens(){
    const item=SENTENCES[sentenceIndex]; sentenceSelected=[];
    sentenceTokens=shuffle(item.es.split(/\s+/).map((text,i)=>({id:i,text,used:false})));
  }
  function renderSentence(){
    if(!sentenceTokens.length)buildSentenceTokens(); const item=SENTENCES[sentenceIndex];
    view.innerHTML=`<div class="page-head"><div><div class="eyebrow">Cümle kurma</div><h1>Kelimeleri sıraya diz</h1><p class="lead">Türkçe cümleyi İspanyolca kur. Yanlışsa doğru cevabı gör ve tekrar dene.</p></div><span class="pill">${SENTENCES.length} alıştırma</span></div>
      <div class="sentence-wrap"><div class="prompt-card"><div class="sentence-label">Türkçesi</div><div class="sentence-tr">${escapeHtml(item.tr)}</div><div class="sentence-label">Senin cümlen</div><div id="answerZone" class="answer-zone"></div><div id="wordBank" class="word-bank"></div><div class="sentence-controls"><div><button id="resetSentence" class="ghost-btn">↺ Sıfırla</button> <button id="listenSentence" class="ghost-btn">🔊 Doğru cümleyi dinle</button></div><button id="checkSentence" class="primary-btn">Kontrol et</button></div><div id="sentenceFeedback" class="feedback sentence-feedback"></div></div></div>`;
    paintSentenceTokens();
    document.getElementById('resetSentence').onclick=()=>{buildSentenceTokens();paintSentenceTokens();document.getElementById('sentenceFeedback').className='feedback sentence-feedback';};
    document.getElementById('listenSentence').onclick=()=>speakSpanish(item.es);
    document.getElementById('checkSentence').onclick=checkSentence;
  }
  function paintSentenceTokens(){
    const answer=document.getElementById('answerZone'), bank=document.getElementById('wordBank'); if(!answer||!bank)return;
    answer.innerHTML=sentenceSelected.map((t,i)=>`<button class="token answer-token" data-selected="${i}">${escapeHtml(t.text)}</button>`).join('');
    bank.innerHTML=sentenceTokens.map((t,i)=>`<button class="token ${t.used?'used':''}" data-token="${i}">${escapeHtml(t.text)}</button>`).join('');
    bank.querySelectorAll('[data-token]').forEach(b=>b.onclick=()=>{const t=sentenceTokens[Number(b.dataset.token)];if(t.used)return;t.used=true;sentenceSelected.push(t);paintSentenceTokens();});
    answer.querySelectorAll('[data-selected]').forEach(b=>b.onclick=()=>{const idx=Number(b.dataset.selected),t=sentenceSelected[idx];t.used=false;sentenceSelected.splice(idx,1);paintSentenceTokens();});
  }
  function checkSentence(){
    const item=SENTENCES[sentenceIndex]; const user=sentenceSelected.map(t=>t.text).join(' '); const ok=normalize(user)===normalize(item.es); const fb=document.getElementById('sentenceFeedback'); fb.className=`feedback sentence-feedback show ${ok?'good':'bad'}`;
    if(ok){fb.innerHTML='<strong>✓ Doğru cümle!</strong>+15 XP kazandın. <button id="newSentenceInline" class="primary-btn" style="float:right;padding:7px 10px">Yeni cümle →</button>';state.correct++;gainXP(15,'Cümle kurma');document.getElementById('newSentenceInline').onclick=nextSentence;}
    else{fb.innerHTML=`<strong>✕ Henüz değil.</strong>Doğrusu: <b>${escapeHtml(item.es)}</b>. Kelimelere tekrar basıp düzenleyebilirsin.`;state.wrong++;touchStudy();saveState();}
  }
  function nextSentence(){ sentenceIndex=(sentenceIndex+1)%SENTENCES.length;buildSentenceTokens();renderSentence(); }

  function renderLeaderboard(){
    const badges=[
      {icon:'🌱',name:'İlk Adım',desc:'İlk kelimeni öğren',ok:state.learned.length>=1},
      {icon:'📚',name:'Kelime Avcısı',desc:'100 kelime öğren',ok:state.learned.length>=100},
      {icon:'🔥',name:'Seri Başladı',desc:'3 günlük seri yap',ok:state.streak>=3},
      {icon:'🎯',name:'Keskin Nişancı',desc:'%80 doğruluk',ok:(state.correct+state.wrong)>=10&&accuracy()>=80},
      {icon:'⚡',name:'1000 XP',desc:'1000 XP’ye ulaş',ok:state.xp>=1000}
    ];
    const history=[{name:state.name,xp:state.xp,sub:'Bu cihazdaki profil',me:true},...state.sessions.slice(0,4).map((s,i)=>({name:`Çalışma ${i+1}`,xp:s.xp,sub:new Date(s.date).toLocaleDateString('tr-TR')}))].sort((a,b)=>b.xp-a.xp);
    view.innerHTML=`<div class="page-head"><div><div class="eyebrow">Motivasyon</div><h1>Liderlik Tablosu</h1><p class="lead">XP kazan, serini koru ve kendi çalışma rekorlarını geç.</p></div><span class="pill">⚡ ${state.xp} XP</span></div><div class="local-note"><b>Bu sürüm GitHub Pages’ta sunucusuz çalışıyor.</b> Bu nedenle liderlik ve ilerleme verileri yalnızca bu cihazın tarayıcısında saklanır; sahte bir “global” sıralama göstermiyoruz. Gerçek kullanıcılar arası tablo için Supabase/Firebase bağlanabilir.</div>
      <div class="leader-grid"><div class="leader-card"><h2 style="margin-top:0">Cihaz sıralaması</h2>${history.map((h,i)=>`<div class="leader-head"><span class="rank-num ${i===0?'first':''}">${i+1}</span><div class="player-name"><strong>${escapeHtml(h.name)}${h.me?' · sen':''}</strong><span>${escapeHtml(h.sub)}</span></div><span class="xp-val">${h.xp} XP</span></div>`).join('')}</div><div class="achievement-card"><h2 style="margin-top:0">Rozetler</h2><div class="badge-list">${badges.map(b=>`<div class="badge-item" style="opacity:${b.ok?1:.42}"><span class="badge-icon">${b.ok?b.icon:'🔒'}</span><div><strong>${b.name}</strong><span>${b.desc}</span></div></div>`).join('')}</div></div></div>`;
  }

  document.querySelectorAll('[data-nav]').forEach(el=>el.addEventListener('click',()=>navigate(el.dataset.nav)));
  document.getElementById('profileBtn').onclick=()=>{playerNameInput.value=state.name;profileDialog.showModal();setTimeout(()=>playerNameInput.focus(),50);};
  document.getElementById('profileForm').addEventListener('submit',e=>{e.preventDefault();state.name=(playerNameInput.value||'Sare').trim().slice(0,24);saveState();profileDialog.close();render();toast('Profil adı kaydedildi.');});
  document.querySelector('.brand').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')navigate('home');});
  updateChrome(); render();
})();
