# FLOAMEN — GitHub Pages site

Saf HTML, CSS ve JavaScript. Kurulum paketi, derleme, Node.js veya backend gerekmez. ZIP'i açıp `index.html` dosyasını tarayıcıda açabilirsiniz. Görsellerin çalışması için assets klasörünü yanında tutun.

## GitHub'a yükleme

1. GitHub'da bir repository oluşturun (örneğin `floamen`).
2. ZIP içindeki dosyaları repository'nin köküne yükleyin. `index.html`, `CNAME` ve `assets` doğrudan kökte olmalı; ZIP dosyasının kendisini yüklemeyin.
3. Settings → Pages → Build and deployment → Source: **Deploy from a branch**.
4. Branch: **main**, folder: **/(root)** seçip kaydedin.

Resmî rehber: [GitHub Pages Quickstart](https://docs.github.com/en/pages/quickstart).

## www.floamen.com

Önce GitHub Settings → Pages → Custom domain alanına `www.floamen.com` yazıp kaydedin. Paketteki CNAME dosyası aynı değeri içerir. Ardından domain sağlayıcınızda `www` için CNAME kaydını `GITHUB_KULLANICI_ADINIZ.github.io` hedefine ayarlayın. Hedefe repository adını, https:// veya yol eklemeyin. DNS kontrolü ve sertifika hazır olduğunda GitHub'da Enforce HTTPS'i etkinleştirin.

`floamen.com` kök adresinin de çalışması için sağlayıcınızda GitHub'ın aşağıdaki resmî rehberine göre apex kayıtlarını yapılandırın. Bu paket domain veya GitHub hesabınızın ayarlarını değiştirmez.

[GitHub özel domain ve DNS rehberi](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

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
