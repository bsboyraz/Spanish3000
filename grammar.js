window.GRAMMAR_TOPICS = [
  {
    id:'alfabe', title:'Alfabe', level:'A1', icon:'🔤',
    summary:'İspanyol alfabesi, harf adları ve temel telaffuz kuralları.',
    lesson:`İspanyolca alfabede 27 harf vardır ve ñ ayrı bir harftir. Genel olarak yazıldığı gibi okunur. Önemli noktalar: <b>h</b> okunmaz (hola), <b>j</b> boğazdan güçlü bir h sesi verir (jardín), <b>ñ</b> “ny” gibi okunur (niño), <b>ll</b> çoğu bölgede “y”ye yakın okunur, <b>c</b> e/i önünde İspanya'da “th”, Latin Amerika'da “s” olabilir. <b>g</b> e/i önünde j benzeri duyulur.`,
    examples:[['hola','merhaba'],['niño','çocuk'],['jardín','bahçe'],['llave','anahtar']],
    exercises:[
      {q:'“h” harfi hola kelimesinde nasıl okunur?',options:['Okunmaz','Türkçe h gibi','j gibi','k gibi'],a:0,why:'İspanyolcada h genellikle sessizdir.'},
      {q:'“ñ” hangi Türkçe ses grubuna en yakındır?',options:['ny','ş','ç','ğ'],a:0,why:'ñ, Türkçedeki “ny” birleşimine yakındır.'}
    ]
  },
  {
    id:'llamarse', title:'Llamarse', level:'A1', icon:'👋',
    summary:'Adını söyleme ve birine adını sorma.',
    lesson:`<b>Llamarse</b> dönüşlü bir fiildir ve “adı olmak/adlandırılmak” anlamında kullanılır. Çekim: <b>me llamo, te llamas, se llama, nos llamamos, os llamáis, se llaman</b>. “¿Cómo te llamas?” = Adın ne? “Me llamo Sare.” = Benim adım Sare.`,
    examples:[['¿Cómo te llamas?','Adın ne?'],['Me llamo Ana.','Benim adım Ana.'],['Se llama Carlos.','Onun adı Carlos.']],
    exercises:[
      {q:'Yo ___ Marta.',options:['me llamo','te llamas','se llama','nos llamamos'],a:0,why:'Yo ile dönüşlü zamir me ve çekim llamo kullanılır.'},
      {q:'¿Cómo ___ llamas?',options:['te','me','se','nos'],a:0,why:'Tú için dönüşlü zamir te olur.'}
    ]
  },
  {
    id:'pronombres', title:'Kişi zamirleri', level:'A1', icon:'👥',
    summary:'Yo, tú, él/ella/usted, nosotros, vosotros, ellos/ustedes.',
    lesson:`Temel özne zamirleri: <b>yo</b> ben, <b>tú</b> sen, <b>él/ella/usted</b> o/siz-resmî, <b>nosotros/as</b> biz, <b>vosotros/as</b> sizler (özellikle İspanya), <b>ellos/ellas/ustedes</b> onlar/sizler. Fiil çekimi özneyi zaten gösterdiği için zamir çoğu zaman söylenmeyebilir.`,
    examples:[['Yo estudio español.','İspanyolca çalışıyorum.'],['Ella vive en Madrid.','O Madrid’de yaşıyor.'],['Nosotros trabajamos.','Biz çalışıyoruz.']],
    exercises:[
      {q:'“Biz” hangisidir?',options:['nosotros','vosotros','ellos','usted'],a:0,why:'Nosotros/nosotras = biz.'},
      {q:'İspanya’da samimi çoğul “siz” hangisidir?',options:['vosotros','ustedes','ellos','nosotros'],a:0,why:'Vosotros/as özellikle İspanya’da kullanılır.'}
    ]
  },
  {
    id:'articulos', title:'Artikeller', level:'A1', icon:'🧩',
    summary:'El, la, los, las; un, una, unos, unas.',
    lesson:`Belirli artikeller: <b>el, la, los, las</b>. Belirsiz artikeller: <b>un, una, unos, unas</b>. Artikel ismin cinsiyeti ve sayısıyla uyum sağlar: el libro, la casa, los libros, las casas. Bazı istisnalar vardır: el día, la mano.`,
    examples:[['el libro','kitap'],['la mesa','masa'],['unos amigos','bazı arkadaşlar'],['unas casas','bazı evler']],
    exercises:[
      {q:'___ casa',options:['la','el','los','un'],a:0,why:'Casa dişil tekildir: la casa.'},
      {q:'___ libros (belirli çoğul)',options:['los','las','un','una'],a:0,why:'Libro eril, çoğulu libros → los libros.'}
    ]
  },
  {
    id:'colores', title:'Renkler', level:'A1', icon:'🎨',
    summary:'Renklerin isimlerle cinsiyet ve sayı uyumu.',
    lesson:`Birçok renk sıfat gibi isimle uyum sağlar: <b>rojo/roja/rojos/rojas</b>, blanco/blanca. Bazıları aynı kalır: <b>azul → azules</b>, verde → verdes. Renk çoğunlukla isimden sonra gelir: una camiseta roja.`,
    examples:[['una casa blanca','beyaz bir ev'],['dos coches negros','iki siyah araba'],['ojos azules','mavi gözler']],
    exercises:[
      {q:'Una falda ___',options:['roja','rojo','rojos','rojas'],a:0,why:'Falda dişil tekildir → roja.'},
      {q:'Ojos ___',options:['azules','azul','azulas','azulo'],a:0,why:'Azul çoğulda azules olur.'}
    ]
  },
  {
    id:'ser-estar', title:'Ser y Estar', level:'A1', icon:'⚖️',
    summary:'Kimlik/özellik ile geçici durum/konumu ayırma.',
    lesson:`<b>Ser</b>: kimlik, meslek, köken, saat, genel/kalıcı özellik. <b>Estar</b>: konum, geçici durum, sonuç hâli. Örnek: Soy estudiante. Madrid está en España. Estoy cansada. La sopa está caliente.`,
    examples:[['Soy turca.','Türküm.'],['Estoy cansada.','Yorgunum.'],['Es médico.','O doktordur.'],['Está en casa.','Evde.']],
    exercises:[
      {q:'Madrid ___ en España.',options:['está','es','soy','estoy'],a:0,why:'Konum için estar kullanılır.'},
      {q:'Ana ___ profesora.',options:['es','está','eres','están'],a:0,why:'Meslek/kimlik için ser kullanılır.'}
    ]
  },
  {
    id:'nacionalidad-profesion', title:'Millet ve Meslek', level:'A1', icon:'🌍',
    summary:'Milliyet ve meslek söylerken ser kullanımı.',
    lesson:`Milliyet ve mesleklerde genellikle <b>ser</b> kullanılır: Soy turca. Él es alemán. Somos estudiantes. Meslekten önce belirsiz artikel çoğu zaman kullanılmaz: <b>Soy profesora</b>. Bir sıfatla nitelenirse artikel gelebilir: Es un buen médico.`,
    examples:[['Soy española.','İspanyolum.'],['Él es ingeniero.','O mühendis.'],['Somos estudiantes.','Biz öğrenciyiz.']],
    exercises:[
      {q:'Yo ___ profesora.',options:['soy','estoy','tengo','hay'],a:0,why:'Meslek için ser → soy.'},
      {q:'Carlos es ___.',options:['mexicano','México','mexicana','mexicanos'],a:0,why:'Carlos eril tekil → mexicano.'}
    ]
  },
  {
    id:'tener', title:'Tener', level:'A1', icon:'🎒',
    summary:'Sahiplik, yaş ve bazı kalıp ifadeler.',
    lesson:`Tener = sahip olmak. Şimdiki zaman: <b>tengo, tienes, tiene, tenemos, tenéis, tienen</b>. Yaş İspanyolcada tener ile söylenir: Tengo 25 años. Ayrıca <b>tener hambre, sed, frío, calor, miedo, sueño</b> gibi kalıplar vardır.`,
    examples:[['Tengo un coche.','Bir arabam var.'],['Tengo 20 años.','20 yaşındayım.'],['Tenemos hambre.','Açız.']],
    exercises:[
      {q:'Yo ___ 25 años.',options:['tengo','soy','estoy','tiene'],a:0,why:'Yaş tener ile söylenir.'},
      {q:'Nosotros ___ hambre.',options:['tenemos','somos','estamos','tienen'],a:0,why:'Nosotros için tener → tenemos.'}
    ]
  },
  {
    id:'numeros', title:'Sayılar', level:'A1', icon:'🔢',
    summary:'0’dan büyük sayılara temel sayı sistemi.',
    lesson:`0 cero, 1 uno, 2 dos, 3 tres, 4 cuatro, 5 cinco, 6 seis, 7 siete, 8 ocho, 9 nueve, 10 diez. 11 once, 12 doce, 13 trece, 14 catorce, 15 quince, 16 dieciséis, 20 veinte, 21 veintiuno, 30 treinta. 31 = treinta y uno. 100 = cien/ciento.`,
    examples:[['veintidós','22'],['treinta y cinco','35'],['cien','100']],
    exercises:[
      {q:'“16” hangisidir?',options:['dieciséis','seis','sesenta','diecisiete'],a:0,why:'16 = dieciséis.'},
      {q:'“42” hangisidir?',options:['cuarenta y dos','cuatro y dos','cuarenta dos','cuarentidós'],a:0,why:'30’dan sonra onlar + y + birler: cuarenta y dos.'}
    ]
  },
  {
    id:'horas', title:'Saatler', level:'A1', icon:'🕒',
    summary:'Saati sorma ve söyleme.',
    lesson:`“Saat kaç?” = <b>¿Qué hora es?</b> 1 için <b>Es la una</b>, diğer saatlerde <b>Son las...</b>. 2:15 = Son las dos y cuarto. 2:30 = y media. 2:45 = Son las tres menos cuarto.`,
    examples:[['Es la una.','Saat bir.'],['Son las tres y media.','Saat üç buçuk.'],['Son las cinco menos cuarto.','Beşe çeyrek var.']],
    exercises:[
      {q:'1:00 nasıl söylenir?',options:['Es la una.','Son las una.','Es las uno.','Son la uno.'],a:0,why:'Bir tekil olduğu için Es la una.'},
      {q:'3:30?',options:['Son las tres y media.','Son las tres y cuarto.','Es la tres media.','Son las cuatro menos media.'],a:0,why:'Yarım = y media.'}
    ]
  },
  {
    id:'dias', title:'Günler', level:'A1', icon:'📅',
    summary:'Haftanın günleri ve kullanım.',
    lesson:`lunes, martes, miércoles, jueves, viernes, sábado, domingo. Gün adları İspanyolcada normalde küçük harfle yazılır. “Pazartesi günü” = el lunes; “pazartesileri” = los lunes.`,
    examples:[['Hoy es lunes.','Bugün pazartesi.'],['El viernes trabajo.','Cuma günü çalışıyorum.'],['Los domingos descanso.','Pazarları dinleniyorum.']],
    exercises:[
      {q:'Miércoles hangi gündür?',options:['Çarşamba','Salı','Perşembe','Pazar'],a:0,why:'miércoles = Çarşamba.'},
      {q:'“Pazarları” nasıl denir?',options:['los domingos','el domingo','las domingo','un domingos'],a:0,why:'Düzenli tekrarda çoğul artikel: los domingos.'}
    ]
  },
  {
    id:'meses', title:'Aylar', level:'A1', icon:'🗓️',
    summary:'Yılın ayları ve tarih söyleme.',
    lesson:`enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre. Ay adları küçük harfle yazılır. Tarih: <b>Hoy es el 22 de agosto</b>.`,
    examples:[['enero','Ocak'],['junio','Haziran'],['diciembre','Aralık'],['el 5 de mayo','5 Mayıs']],
    exercises:[
      {q:'“Ağustos” hangisidir?',options:['agosto','abril','octubre','enero'],a:0,why:'Ağustos = agosto.'},
      {q:'“12 Mart” doğru ifade?',options:['el 12 de marzo','12 marzo de','el marzo 12','de 12 marzo'],a:0,why:'Tarih: el + sayı + de + ay.'}
    ]
  },
  {
    id:'fisiksel-karakter', title:'Fiziksel ve Karakteristik Özellikler', level:'A1', icon:'🙂',
    summary:'Ser, tener ve llevar ile insan tarif etme.',
    lesson:`Genel özelliklerde <b>ser</b>: Es alto, simpática, inteligente. Saç/göz gibi sahip olunan özelliklerde <b>tener</b>: Tiene el pelo largo, tiene los ojos verdes. Üzerinde taşınan/giyilen şeylerde <b>llevar</b>: Lleva gafas, lleva una camiseta azul.`,
    examples:[['Es alto y simpático.','Uzun boylu ve sempatik.'],['Tiene el pelo corto.','Saçı kısa.'],['Lleva gafas.','Gözlük takıyor.']],
    exercises:[
      {q:'Ella ___ los ojos azules.',options:['tiene','es','está','lleva de'],a:0,why:'Göz rengi “tener” ile ifade edilir.'},
      {q:'Mi amigo ___ muy amable.',options:['es','tiene','hay','lleva'],a:0,why:'Karakter özelliği için ser.'}
    ]
  },
  {
    id:'preposiciones-lugar', title:'Yer yön edatları', level:'A1', icon:'📍',
    summary:'En, encima de, debajo de, delante de, detrás de, al lado de...',
    lesson:`Konum kalıpları: <b>en</b> içinde/-de, <b>encima de</b> üstünde, <b>debajo de</b> altında, <b>delante de</b> önünde, <b>detrás de</b> arkasında, <b>al lado de</b> yanında, <b>entre</b> arasında, <b>cerca de</b> yakınında, <b>lejos de</b> uzağında. Konum için çoğunlukla estar kullanılır.`,
    examples:[['El libro está encima de la mesa.','Kitap masanın üstünde.'],['El banco está al lado del hotel.','Banka otelin yanında.']],
    exercises:[
      {q:'El gato está ___ la mesa. (masanın altında)',options:['debajo de','encima de','delante de','cerca de'],a:0,why:'debajo de = altında.'},
      {q:'“Yanında” hangisidir?',options:['al lado de','detrás de','lejos de','entre'],a:0,why:'al lado de = yanında.'}
    ]
  },
  {
    id:'conjugacion', title:'Fiil çekimi', level:'A1', icon:'✍️',
    summary:'-ar, -er, -ir düzenli fiillerin presente çekimi.',
    lesson:`Düzenli presente: <b>-AR</b>: o, as, a, amos, áis, an (hablo...). <b>-ER</b>: o, es, e, emos, éis, en (como...). <b>-IR</b>: o, es, e, imos, ís, en (vivo...). Kök + kişiye uygun son ek kullanılır.`,
    examples:[['hablo','konuşuyorum'],['comemos','yiyoruz'],['viven','yaşıyorlar']],
    exercises:[
      {q:'Nosotros (hablar) ___ español.',options:['hablamos','hablan','hablo','habláis'],a:0,why:'Nosotros + -ar → -amos.'},
      {q:'Ella (comer) ___ pan.',options:['come','comes','como','comen'],a:0,why:'Ella + -er → -e.'}
    ]
  },
  {
    id:'comparativos', title:'Karşılaştırmalar (Comparativos)', level:'A2', icon:'📏',
    summary:'Más...que, menos...que, tan...como ve düzensizler.',
    lesson:`Üstünlük: <b>más + sıfat + que</b>. Daha az: <b>menos + sıfat + que</b>. Eşitlik: <b>tan + sıfat + como</b>. İsimlerde tanto/a/os/as...como. Düzensizler: <b>mejor</b> daha iyi, <b>peor</b> daha kötü, <b>mayor</b> daha büyük/yaşlı, <b>menor</b> daha küçük/yaşı küçük.`,
    examples:[['Ana es más alta que Luis.','Ana Luis’ten daha uzun.'],['Es tan rápido como yo.','Benim kadar hızlı.'],['Este libro es mejor.','Bu kitap daha iyi.']],
    exercises:[
      {q:'Mi coche es ___ rápido que el tuyo.',options:['más','tan','tanto','muy'],a:0,why:'Karşılaştırma: más ... que.'},
      {q:'“Benim kadar uzun”',options:['tan alto como yo','más alto que yo','muy alto como yo','tanto alto que yo'],a:0,why:'Sıfatta eşitlik: tan + sıfat + como.'}
    ]
  },
  {
    id:'doler-cuerpo', title:'Doler ve Vücudun Bölümleri', level:'A2', icon:'🩺',
    summary:'Me duele / me duelen ve vücut kelimeleri.',
    lesson:`<b>Doler</b>, gustar gibi işler. Tekil şey ağrıyorsa <b>me duele</b>, çoğulsa <b>me duelen</b>: Me duele la cabeza. Me duelen los pies. Zamirler: me, te, le, nos, os, les. Vücut: cabeza, ojo, boca, brazo, mano, pierna, pie, espalda, estómago...`,
    examples:[['Me duele la cabeza.','Başım ağrıyor.'],['Le duelen las piernas.','Bacakları ağrıyor.']],
    exercises:[
      {q:'Me ___ los ojos.',options:['duelen','duele','dolo','dolen'],a:0,why:'Los ojos çoğul → duelen.'},
      {q:'“Karnım/midem ağrıyor.”',options:['Me duele el estómago.','Soy dolor el estómago.','Tengo duele estómago.','Me duelen estómago.'],a:0,why:'Tekil estómago → me duele.'}
    ]
  },
  {
    id:'interrogativos', title:'Soru kelimeleri', level:'A1', icon:'❓',
    summary:'Qué, quién, dónde, cuándo, cómo, por qué, cuánto, cuál.',
    lesson:`Soru kelimeleri vurgulu yazılır: <b>qué</b> ne, <b>quién</b> kim, <b>dónde</b> nerede, <b>adónde</b> nereye, <b>cuándo</b> ne zaman, <b>cómo</b> nasıl, <b>por qué</b> neden, <b>cuánto/a/os/as</b> ne kadar/kaç, <b>cuál</b> hangisi.`,
    examples:[['¿Dónde vives?','Nerede yaşıyorsun?'],['¿Cuándo llega?','Ne zaman geliyor?'],['¿Por qué estudias español?','Neden İspanyolca çalışıyorsun?']],
    exercises:[
      {q:'¿___ vives? — En Jena.',options:['Dónde','Cuándo','Quién','Cuánto'],a:0,why:'Yer sorusu → dónde.'},
      {q:'¿___ cuesta?',options:['Cuánto','Cómo','Quién','Adónde'],a:0,why:'Fiyat/miktar → cuánto.'}
    ]
  },
  {
    id:'muy-mucho', title:'Muy, mucho, mucha, muchos, muchas', level:'A2', icon:'➕',
    summary:'Sıfat/zarf ile isim/fiil yanında “çok” kullanımı.',
    lesson:`<b>Muy</b> sıfat ve zarftan önce gelir, değişmez: muy bonito, muy rápido. <b>Mucho/a/os/as</b> isimle uyum sağlar: mucha agua, muchos libros. Fiille kullanıldığında <b>mucho</b> değişmez: Trabajo mucho.`,
    examples:[['Es muy interesante.','Çok ilginç.'],['Tengo muchos libros.','Çok kitabım var.'],['Estudio mucho.','Çok çalışıyorum.']],
    exercises:[
      {q:'Tengo ___ amigas.',options:['muchas','muy','mucho','muchos'],a:0,why:'Amigas dişil çoğul → muchas.'},
      {q:'Es ___ fácil.',options:['muy','mucho','mucha','muchas'],a:0,why:'Sıfat fácil’den önce muy.'}
    ]
  },
  {
    id:'irregulares', title:'Düzensiz Fiiller', level:'A2', icon:'⚡',
    summary:'Presente’de sık kullanılan düzensiz fiiller.',
    lesson:`Sık düzensizler: <b>ser</b> soy/eres/es/somos/sois/son; <b>estar</b> estoy/estás/está...; <b>ir</b> voy/vas/va/vamos/vais/van; <b>tener</b> tengo...; <b>hacer</b> hago...; <b>venir</b> vengo...; <b>decir</b> digo...; <b>poder</b> puedo...; <b>querer</b> quiero...; <b>pedir</b> pido...`,
    examples:[['Voy al trabajo.','İşe gidiyorum.'],['Hago ejercicio.','Egzersiz yapıyorum.'],['Quiero café.','Kahve istiyorum.']],
    exercises:[
      {q:'Yo (hacer) ___ la tarea.',options:['hago','haco','hace','hacer'],a:0,why:'Hacer’in yo biçimi hago.'},
      {q:'Ellos (ir) ___ al cine.',options:['van','voy','vais','va'],a:0,why:'Ellos + ir → van.'}
    ]
  },
  {
    id:'posesivos', title:'Los Posesivos', level:'A2', icon:'🔑',
    summary:'Mi, tu, su, nuestro, vuestro ve vurgu biçimleri.',
    lesson:`İsimden önce kısa iyelikler: <b>mi/mis, tu/tus, su/sus, nuestro/a/os/as, vuestro/a/os/as</b>. İsimle sayı/cinsiyet uyumu özellikle nuestro/vuestro’da görülür. Vurgulu bağımsız biçimler: mío/a/os/as, tuyo/a..., suyo/a...`,
    examples:[['mi casa','benim evim'],['nuestros amigos','bizim arkadaşlarımız'],['Este libro es mío.','Bu kitap benim.']],
    exercises:[
      {q:'___ padres (benim)',options:['mis','mi','míos','nuestro'],a:0,why:'Padres çoğul → mis.'},
      {q:'La casa es ___. (benimki)',options:['mía','mi','mío','mis'],a:0,why:'Casa dişil tekil → mía.'}
    ]
  },
  {
    id:'demostrativos', title:'Los Demostrativos', level:'A2', icon:'👉',
    summary:'Este, ese, aquel ile yakınlık dereceleri.',
    lesson:`Yakın: <b>este/esta/estos/estas</b> = bu. Orta/karşı taraf: <b>ese/esa/esos/esas</b> = şu/o. Uzak: <b>aquel/aquella/aquellos/aquellas</b> = şu uzaktaki. Nötr zamirler: esto, eso, aquello.`,
    examples:[['este libro','bu kitap'],['esa casa','şu ev'],['aquellas montañas','şu uzaktaki dağlar']],
    exercises:[
      {q:'___ mesa aquí (bu masa)',options:['esta','este','esa','aquella'],a:0,why:'Mesa dişil ve yakın → esta.'},
      {q:'Uzak “o ev”',options:['aquella casa','esta casa','este casa','eso casa'],a:0,why:'Uzak + dişil tekil → aquella.'}
    ]
  },
  {
    id:'gustar-tambien-tampoco', title:'También, Tampoco ve Gustar', level:'A2', icon:'❤️',
    summary:'Hoşlanma yapısı ve olumlu/olumsuz katılma.',
    lesson:`Gustar’da hoşlanan kişi dolaylı nesne zamiriyle gelir: <b>me, te, le, nos, os, les</b>. Hoşlanılan şey tekil/fiil ise <b>gusta</b>, çoğulsa <b>gustan</b>. “A mí también” = ben de (olumlu), “A mí tampoco” = ben de değil (olumsuz).`,
    examples:[['Me gusta bailar.','Dans etmeyi seviyorum.'],['Me gustan los libros.','Kitapları seviyorum.'],['A mí también.','Ben de.'],['A mí tampoco.','Ben de değil.']],
    exercises:[
      {q:'Me ___ las películas.',options:['gustan','gusta','gusto','gustas'],a:0,why:'Las películas çoğul → gustan.'},
      {q:'— No me gusta el café. — A mí ___.',options:['tampoco','también','muy','más'],a:0,why:'Olumsuz cümleye “ben de değil” → tampoco.'}
    ]
  },
  {
    id:'gustar-hermanos', title:'Gustar’ın Kardeşleri', level:'A2', icon:'💞',
    summary:'Encantar, interesar, molestar, importar, apetecer, preocupar, dar asco/miedo, caer bien/mal.',
    lesson:`Bu yapıların çoğu gustar mantığıyla kişiyi <b>me/te/le/nos/os/les</b> ile gösterir. <b>Me encanta la música</b>, <b>Me interesan los idiomas</b>, <b>Me molesta el ruido</b>, <b>No me importa</b>, <b>Me apetece un café</b>, <b>Me preocupa el examen</b>. “Dar” kalıpları: Me da miedo / me da asco. İnsanlarla: Me cae bien/mal.`,
    examples:[['Me encanta viajar.','Seyahat etmeye bayılıyorum.'],['Me preocupan los exámenes.','Sınavlar beni endişelendiriyor.'],['Me cae bien Ana.','Ana’yı seviyorum/iyi buluyorum.']],
    exercises:[
      {q:'Me ___ los idiomas. (ilgimi çekiyorlar)',options:['interesan','interesa','intereso','interesar'],a:0,why:'Los idiomas çoğul → interesan.'},
      {q:'Las arañas me ___ miedo.',options:['dan','da','hacen','tienen'],a:0,why:'Özne las arañas çoğul → dan miedo.'}
    ]
  },
  {
    id:'reflexivos', title:'Reflexivos', level:'A2', icon:'🪞',
    summary:'Dönüşlü fiiller: levantarse, ducharse, acostarse...',
    lesson:`Dönüşlü zamirler: <b>me, te, se, nos, os, se</b>. Fiil kişiye göre çekilir: me levanto, te duchas, se acuesta, nos despertamos. Mastarla zamir sona eklenebilir: Voy a <b>ducharme</b>.`,
    examples:[['Me levanto a las siete.','Yedide kalkıyorum.'],['Se ducha por la mañana.','Sabah duş alıyor.'],['Vamos a acostarnos.','Yatacağız.']],
    exercises:[
      {q:'Yo ___ levanto temprano.',options:['me','te','se','nos'],a:0,why:'Yo için dönüşlü zamir me.'},
      {q:'Ellos ___ acuestan tarde.',options:['se','me','nos','os'],a:0,why:'Ellos için dönüşlü zamir se.'}
    ]
  },
  {
    id:'ir-a-infinitivo', title:'IR + A + INFINITIVO ve Zaman Zarfları', level:'A2', icon:'🚀',
    summary:'Yakın gelecek ve zaman ifadeleri.',
    lesson:`Yakın gelecek: <b>ir çekimi + a + mastar</b>: voy a estudiar, vas a salir, vamos a viajar. Zaman zarfları: hoy, mañana, esta tarde, esta noche, luego, después, pronto, la semana que viene, el próximo mes.`,
    examples:[['Voy a estudiar mañana.','Yarın ders çalışacağım.'],['Vamos a viajar la semana que viene.','Gelecek hafta seyahat edeceğiz.']],
    exercises:[
      {q:'Nosotros ___ a comer.',options:['vamos','van','voy','vais'],a:0,why:'Nosotros + ir → vamos.'},
      {q:'“Gelecek hafta”',options:['la semana que viene','la semana pasada','ayer','anoche'],a:0,why:'la semana que viene = gelecek hafta.'}
    ]
  },
  {
    id:'clima', title:'Clima y Tiempo Atmosférico', level:'A2', icon:'🌦️',
    summary:'Hava durumunu anlatan hacer, haber, estar kalıpları.',
    lesson:`Hava için sık kalıplar: <b>Hace calor/frío/sol/viento</b>. <b>Hay nubes/niebla/tormenta</b>. <b>Está nublado/despejado</b>. Fiiller: <b>llueve</b> yağmur yağıyor, <b>nieva</b> kar yağıyor. “¿Qué tiempo hace?” = Hava nasıl?`,
    examples:[['Hace frío.','Hava soğuk.'],['Está nublado.','Hava bulutlu.'],['Llueve mucho.','Çok yağmur yağıyor.']],
    exercises:[
      {q:'___ frío hoy.',options:['Hace','Es','Tiene','Soy'],a:0,why:'Hava sıcaklığı: hace frío/calor.'},
      {q:'“Hava bulutlu.”',options:['Está nublado.','Hace nube.','Es nubes.','Hay nublado.'],a:0,why:'Durum sıfatı nublado ile estar.'}
    ]
  },
  {
    id:'estar-gerundio', title:'Estar + Gerundio', level:'A2', icon:'▶️',
    summary:'Şu anda devam eden eylemleri anlatma.',
    lesson:`“Şu anda ... yapıyor olmak”: <b>estar + gerundio</b>. -ar → <b>-ando</b>: hablar → hablando. -er/-ir → <b>-iendo</b>: comer → comiendo, vivir → viviendo. Bazı düzensizler: leer → leyendo, dormir → durmiendo, pedir → pidiendo.`,
    examples:[['Estoy estudiando.','Ders çalışıyorum (şu anda).'],['Está comiendo.','Yemek yiyor.'],['Estamos leyendo.','Okuyoruz.']],
    exercises:[
      {q:'Ella está ___ (hablar).',options:['hablando','habliendo','hablar','hablado'],a:0,why:'-ar fiili → -ando.'},
      {q:'Nosotros estamos ___ (leer).',options:['leyendo','leiendo','leando','leer'],a:0,why:'Leer düzensiz gerundio: leyendo.'}
    ]
  }
];

window.SENTENCE_EXERCISES = [
  {tr:'Benim adım Laura.',es:'Me llamo Laura.'},
  {tr:'Senin adın ne?',es:'¿Cómo te llamas?'},
  {tr:'Ben Türküm.',es:'Soy turca.'},
  {tr:'O Alman.',es:'Él es alemán.'},
  {tr:'Biz öğrenciyiz.',es:'Somos estudiantes.'},
  {tr:'Ev büyük.',es:'La casa es grande.'},
  {tr:'Ben evdeyim.',es:'Estoy en casa.'},
  {tr:'Madrid İspanya’dadır.',es:'Madrid está en España.'},
  {tr:'Yorgunum.',es:'Estoy cansada.'},
  {tr:'25 yaşındayım.',es:'Tengo veinticinco años.'},
  {tr:'Açız.',es:'Tenemos hambre.'},
  {tr:'Bir erkek kardeşim var.',es:'Tengo un hermano.'},
  {tr:'Saat bir.',es:'Es la una.'},
  {tr:'Saat üç buçuk.',es:'Son las tres y media.'},
  {tr:'Bugün pazartesi.',es:'Hoy es lunes.'},
  {tr:'Yarın salı.',es:'Mañana es martes.'},
  {tr:'Doğum günüm mayısta.',es:'Mi cumpleaños es en mayo.'},
  {tr:'Kırmızı bir elbise giyiyor.',es:'Lleva un vestido rojo.'},
  {tr:'Onun mavi gözleri var.',es:'Tiene los ojos azules.'},
  {tr:'O çok nazik.',es:'Es muy amable.'},
  {tr:'Kitap masanın üstünde.',es:'El libro está encima de la mesa.'},
  {tr:'Banka otelin yanında.',es:'El banco está al lado del hotel.'},
  {tr:'Ben İspanyolca konuşuyorum.',es:'Hablo español.'},
  {tr:'Biz ekmek yiyoruz.',es:'Comemos pan.'},
  {tr:'Onlar Madrid’de yaşıyor.',es:'Viven en Madrid.'},
  {tr:'Ana Luis’ten daha uzun.',es:'Ana es más alta que Luis.'},
  {tr:'Bu kitap daha iyi.',es:'Este libro es mejor.'},
  {tr:'Başım ağrıyor.',es:'Me duele la cabeza.'},
  {tr:'Ayaklarım ağrıyor.',es:'Me duelen los pies.'},
  {tr:'Nerede yaşıyorsun?',es:'¿Dónde vives?'},
  {tr:'Bu ne kadar?',es:'¿Cuánto cuesta esto?'},
  {tr:'Neden İspanyolca öğreniyorsun?',es:'¿Por qué aprendes español?'},
  {tr:'Çok kitabım var.',es:'Tengo muchos libros.'},
  {tr:'Bu çok kolay.',es:'Esto es muy fácil.'},
  {tr:'Ben çok çalışıyorum.',es:'Trabajo mucho.'},
  {tr:'Sinemaya gidiyorum.',es:'Voy al cine.'},
  {tr:'Ödevimi yapıyorum.',es:'Hago mi tarea.'},
  {tr:'Bu benim kitabım.',es:'Este es mi libro.'},
  {tr:'Bu kitap benim.',es:'Este libro es mío.'},
  {tr:'Şu uzaktaki ev büyük.',es:'Aquella casa es grande.'},
  {tr:'Dans etmeyi seviyorum.',es:'Me gusta bailar.'},
  {tr:'Kitapları seviyorum.',es:'Me gustan los libros.'},
  {tr:'Ben de.',es:'A mí también.'},
  {tr:'Ben de sevmiyorum.',es:'A mí tampoco.'},
  {tr:'Müziğe bayılıyorum.',es:'Me encanta la música.'},
  {tr:'Sınav beni endişelendiriyor.',es:'Me preocupa el examen.'},
  {tr:'Saat yedide kalkıyorum.',es:'Me levanto a las siete.'},
  {tr:'Yarın ders çalışacağım.',es:'Voy a estudiar mañana.'},
  {tr:'Bugün hava soğuk.',es:'Hoy hace frío.'},
  {tr:'Hava bulutlu.',es:'Está nublado.'},
  {tr:'Şu anda yemek yiyorum.',es:'Estoy comiendo.'},
  {tr:'Biz şu anda okuyoruz.',es:'Estamos leyendo.'},
  {tr:'O duş alıyor.',es:'Se está duchando.'},
  {tr:'Gelecek hafta seyahat edeceğiz.',es:'Vamos a viajar la semana que viene.'},
  {tr:'Kedi sandalyenin altında.',es:'El gato está debajo de la silla.'},
  {tr:'Arkadaşım çok komik.',es:'Mi amigo es muy gracioso.'},
  {tr:'Bir kahve istiyorum.',es:'Quiero un café.'},
  {tr:'Lütfen kapıyı aç.',es:'Abre la puerta, por favor.'},
  {tr:'Bugün çalışmıyorum.',es:'Hoy no trabajo.'},
  {tr:'İspanyolca öğrenmek istiyorum.',es:'Quiero aprender español.'}
];
