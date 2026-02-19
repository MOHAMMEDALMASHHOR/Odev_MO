# 💧 Çocuklarda İşeme Sağlığı ve Takip Uygulaması

## 📝 Kısa Proje Notu
* **Hedef Kullanıcı Kitlesi:** Tuvalet eğitimi sürecindeki çocuklar ve enürezis (yatak ıslatma/idrar kaçırma) problemi yaşayan çocukların ebeveynleri.
* **Çözülmek İstenen Problem:** Tıbbi ve stresli olabilen tuvalet eğitimi/takibi sürecini çocuklar için oyunlaştırılmış ve sevimli bir formata dönüştürürken, ebeveynler için de düzenli takip yapılabilecek eğitici bir platform sunmak.
* **Panodan Alınan İlham:** Bana atanan Pinterest panosundaki o temiz, ferah ve çocuksu atmosferi yansıtmayı hedefledim. Suyu ve temizliği temsil eden açık mavi tonlarını ana vurgu rengi olarak kullandım. Karmaşadan uzak, yumuşak köşeli kartlar (border-radius) ve sade ikonlarla güven veren bir UI inşa ettim.

---

## 🚀 Projenin Kısa Açıklaması
Bu proje, "Mobile App Geliştirme Challenge" kapsamında 2 saatlik süre kısıtlamasına uygun olarak geliştirilmiştir. Uygulama; ebeveynlere yönelik eğitim makaleleri, çocuklar için oyun yönlendirmeleri ve günlük işeme alışkanlıklarının kaydedilebildiği bir takip günlüğü (tracker) barındıran temiz arayüzlü bir prototiptir.

---

## 🛠 Kullanılan Teknolojiler
* **Framework:** React Native + Expo ⚛️
* **Navigasyon:** Expo Router (Stack & Bottom Tabs Navigator)
* **State & Veri:** Statik JSON / Mock Data (Proje gereksinimlerine uygun olarak hızlı prototipleme için)
* **Tasarım:** React Native StyleSheet (Flexbox mimarisi)

---

## 💻 Kurulum & Çalıştırma Adımları

**1. Projeyi Klonlayın ve Klasöre Girin:**
```bash
git clone [GITHUB_REPO_LINKINI_BURAYA_YAZ]
cd [PROJE_KLASOR_ADI]
2. Bağımlılıkları Yükleyin:

Bash
npm install
3. Geliştirme Sunucusunu Başlatın:

Bash
npx expo start
📺 Android Studio'da Çalıştırma Rehberi
Kodları inceledikten sonra projeyi Android Studio emülatöründe (veya fiziksel cihazda) nasıl çalıştırabileceğinizi anlattığım videoya aşağıdaki linkten ulaşabilirsiniz:
👉 [Uygulama Çalıştırma Videosu (YouTube)](https://www.youtube.com/watch?v=DFKMZb-w4S8)

📦 Teslim Çıktısı
Kaynak Kodlar: Tamamı bu GitHub reposunda güncel commit geçmişiyle birlikte yer almaktadır.

Yükleme/Hata Durumları (Kriter): Eğitim detay listelerinde veri akışı simüle edilmiş ve basit UX pratikleri (ActivityIndicator vb.) eklenmiştir.


1.
Open an Android Emulator: Launch your desired virtual device from the Device Manager in Android Studio.
2.
Run the start command: Open the terminal within Android Studio and execute:
Shell Script
bun start
3.
Launch on the emulator: Once the Metro bundler is running, press a in the terminal. This will install and launch the app on your running emulator.
git add README.md
git commit -m "docs: readme dosyasi challenge kriterlerine gore güncellendi ve youtube linki eklendi"
git push
