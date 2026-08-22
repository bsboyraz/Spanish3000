# Spanish 3000

Türkçe arayüzlü, mobil ve masaüstü uyumlu bir İspanyolca çalışma sitesi. Tamamen statiktir; npm, build sistemi veya sunucu gerektirmez. GitHub Pages'a doğrudan yüklenebilir.

## İçerik

- 3.000 sıklık temelli İspanyolca kelime + Türkçe anlam
- Kelime kartı ve anında doğru/yanlış geri bildirimli test
- İspanyolca TTS (Web Speech API; yalnızca `es-*` sesleri kabul edilir)
- 28 gramer konusu
- Her gramer konusu için **Konu Çalış** ve **Gramer Alıştırması Yap** modu
- 60 sürükle/tıkla mantıklı cümle kurma alıştırması
- XP, seri, doğruluk ve öğrenilen kelime takibi
- Cihaz içi liderlik/çalışma geçmişi
- localStorage ile ilerleme kaydı
- Mobil alt menü + masaüstü yan menü

## Gramer konuları

1. Alfabe
2. Llamarse
3. Kişi zamirleri
4. Artikeller
5. Renkler
6. Ser y Estar
7. Millet ve Meslek
8. Tener
9. Sayılar
10. Saatler
11. Günler
12. Aylar
13. Fiziksel ve Karakteristik Özellikler
14. Yer yön edatları
15. Fiil çekimi
16. Karşılaştırmalar (Comparativos)
17. Doler ve vücudun bölümleri
18. Soru kelimeleri
19. Muy / mucho / mucha / muchos / muchas
20. Düzensiz Fiiller
21. Los Posesivos
22. Los Demostrativos
23. También, Tampoco ve Gustar
24. Gustar'ın Kardeşleri
25. Reflexivos
26. IR + A + INFINITIVO ve zaman zarfları
27. Clima y Tiempo Atmosférico
28. Estar + Gerundio

## Çalıştırma

En basit yol `index.html` dosyasını açmaktır. Yerel sunucu istersen:

```bash
python3 -m http.server 8080
```

Sonra tarayıcıda `http://localhost:8080` adresini aç.

## GitHub Pages'a yükleme

1. GitHub'da yeni bir repository oluştur (ör. `spanish-3000`).
2. Bu klasörün **içindeki** tüm dosyaları repository'nin köküne yükle.
3. GitHub'da **Settings → Pages** bölümüne gir.
4. **Deploy from a branch** seç.
5. Branch olarak `main`, klasör olarak `/ (root)` seç ve kaydet.
6. Birkaç dakika sonra GitHub Pages adresin oluşur.

Komut satırıyla yüklemek istersen:

```bash
git init
git add .
git commit -m "Initial Spanish 3000 release"
git branch -M main
git remote add origin REPOSITORY_URLIN
git push -u origin main
```

## Seslendirme

Uygulama `speechSynthesis` içinden yalnızca dil kodu `es-...` olan sesleri kullanır. Öncelik `es-ES` sesindedir. Cihazda İspanyolca ses yoksa İngilizce sese düşmek yerine uyarı verir. iPhone/macOS/Android/Windows'ta sistem ayarlarından İspanyolca TTS sesi eklenebilir.

## Liderlik tablosu

Bu repo tamamen statik ve hesapsız olduğu için gerçek kullanıcılar arası global liderlik tablosu içermez. XP ve ilerleme cihazın `localStorage` alanında saklanır. Global liderlik için daha sonra Supabase/Firebase gibi bir veritabanı ve kullanıcı girişi eklenebilir.

## Kelime verisi ve “Oxford 3000” notu

Bu proje **Oxford 3000 listesinin kopyası değildir**. “Oxford 3000 gibi” öğrenme deneyimi hedeflenmiştir. İspanyolca kelime sırası, `doozan/spanish_data` projesindeki lemma tabanlı `frequency.csv` verisinden yararlanılarak oluşturulmuştur. Bu proje, sıklık verisinin Hermit Dave/FrequencyWords kaynağından geldiğini ve CC-BY-SA koşullarını belirtir:

- https://github.com/doozan/spanish_data
- https://github.com/hermitdave/FrequencyWords

Film altyazısı sıklık verisinden gelen açık özel isimler, İngilizce kırıntıları ve öğrenme listesi için uygun olmayan bazı girdiler ayıklanmış; sonraki sıklık sırasındaki İspanyolca kelimelerle 3.000 kayıt tamamlanmıştır. Türkçe karşılıklar bu proje için hazırlanmış kısa öğrenme karşılıklarıdır; bağlama göre bir kelimenin başka anlamları da olabilir.

`A1 / A2 / B1 / B2` etiketleri uygulama içi çalışma bantlarıdır; Instituto Cervantes/DELE tarafından verilmiş resmî CEFR kelime sınıflandırması değildir.

## Dosyalar

```text
spanish-3000/
├── index.html
├── styles.css
├── app.js
├── .nojekyll
├── README.md
├── LICENSE.md
├── DATA_SOURCES.md
└── data/
    ├── spanish3000.js
    ├── spanish3000.json
    ├── grammar.js
    └── translations_core.tsv
```

## Sonraki sürüm fikirleri

- Supabase ile gerçek hesaplar ve global liderlik
- Günlük hedef ve spaced repetition (SRS)
- Kelimeye özel örnek cümleler
- Gramer konularını A1/A2/B1/B2 filtreleme
- Kullanıcının yanlış yaptığı kelimeler için özel tekrar havuzu
- PWA/offline kurulum

