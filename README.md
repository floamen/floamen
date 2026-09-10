# FLOAMEN — GitHub Pages site

## www.floamen.com


## Bağlantıları değiştirme

`assets/js/links.js` içindeki tırnaklar arasını düzenleyin. Tüm Etsy ve sosyal bağlantılar buradan okunur. Etsy boşken düğmeler bağlantısız “Etsy Store — Coming Soon” gösterir. Geçerli HTTPS mağaza adresini ekleyince hepsi “Shop on Etsy” olur. Boş veya geçersiz sosyal adresler bağlantısız kalır.

## Kullanım videosu ve kalıcı QR adresi

Paket kasıtlı olarak `installationVideo: ""` ile gelir. Video adresini aynı dosyaya ekleyin. YouTube watch?v=, youtu.be, shorts, embed ve live biçimleri desteklenir. Video boş veya geçersizse oynatıcı yerine “Installation video coming soon.” görünür. Ziyaretçi video yükleme düğmesine basana kadar YouTube'a istek yapılmaz; tıkladığında youtube-nocookie.com oynatıcısı yüklenir. Otomatik oynatma kapalıdır; başlatmak için oynatıcıdaki play düğmesine basılır.

Kalıcı kutu QR hedefi: **https://www.floamen.com/#installation-video**

`id="installation-video"` değerini değiştirmeyin. Yeni bir YouTube videosuna geçerken yalnızca links.js dosyasını güncelleyin. Site yayına alındıktan sonra QR kodunu telefonla deneyin.

## Görselleri değiştirme

`assets/images/` içindeki WebP dosyasını aynı isimde yeni WebP ile değiştirin:

- hero.webp
- product-fragrance.webp
- installed-closeup.webp
- how-it-works.webp
- whats-included.webp
- customization.webp
- lifestyle.webp

Aynı en-boy oranını kullanmak önerilir. Oran değişirse index.html içindeki ilgili width ve height değerlerini de gerçek boyutlara göre güncellemek sayfa kaymasını önler. Kullanım görseli kırpılmadan gösterilir. Logo `assets/logo/floamen-logo.svg`, favicon `assets/logo/favicon.png` dosyasındadır. Logonun kaynak çizimi değiştirilmedi; koyu zeminde CSS invert filtresi ile beyaz gösterilir.

## Yayın öncesi tamamlanacak alanlar

Footer'daki Impressum ve Privacy Policy açılabilir yer tutucu alanlardır, tamamlanmış hukuki metin değildir. `[LEGAL_NAME]`, `[LEGAL_ADDRESS]`, `[LEGAL_EMAIL]` alanlarını ve gerekli gerçek metinleri yayından önce tamamlayın. Etsy ve video bağlantılarını hazır olduklarında ekleyin. Tarayıcıda mobil/masaüstü görünümünü ve gerçek video oynatımını kontrol edin.

Sitede takip kodu, sepet, üyelik, dış font veya framework bulunmaz. Haricî sosyal ve Etsy bağlantıları yeni sekmede açılır. Başlık, açıklama, canonical, Open Graph, robots.txt ve sitemap.xml dahildir. Open Graph görsel URL'si paylaşım tarayıcıları için mutlak www.floamen.com adresidir; sayfa içindeki tüm görseller göreli yerel yollardan yüklenir.
