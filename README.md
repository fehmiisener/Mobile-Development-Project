# Mobile-Development-Project

This is a Mobile-Development-Project. It contains various mobile application features.

<img src="/screenshots/1.png" width="200"> <img src="/screenshots/2.png" width="200"> <img src="/screenshots/3.png" width="200"> <img src="/screenshots/4.png" width="200"> <img src="/screenshots/5.png" width="200"> <img src="/screenshots/6.png" width="200"> <img src="/screenshots/7.png" width="200"> 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. If you want to make a change, please use the **develop** branch and open a pull request.

Also you can review our Back-End following [this](https://github.com/tolunayesergun/ProjectTrackerAPI) link. And you can see open end-point on [this](https://mobilproje.tolunayesergun.com/swagger/index.html).

### Prerequisites

The things you will need in order to use the app and how to install them.

- [Node 12 LTS or greater installed](https://nodejs.org/en/download/)

### How to use
First you need to download project.
```
git clone https://github.com/fehmiisener/Mobile-Development-Project.git
```
After you build you can install dependencies.
```
cd Mobile-Development-Project
npm install
```
Now you can start app
```
npx react-native run-android  # you can also use: npm start
```
When the application first starts, you have to log in (usernname = Admin, Password = 1234). Then it checks whether there is an existing database. You can see this control in the "HomeScreen.js" file. Then you can switch to different pages according to the operation you want to do. You can examine all the codes of the application from the "App.js" file and the files under the "pages" folder.

## Built with

* [React Native](https://reactnative.dev/) - The programming language used
* [Android Studio](https://developer.android.com/studio) - For emulator

 ## Features

### Giriş 
* Mobil İşletim Sistemleri : Android & iOS
* Mobil Yazılım Geliştirme : React Native
* Geliştirme Çatıları ve Araçla : .Net Core & Node.js & Visual Studio Code
### Uygulama  Mimarileri 
* Android Mimarisi & IOS Mimarisi
### Uygulama Temel Bileşenleri
* Android (Activity,Service,Content Provider,Broadcast Receiver ...)
### Kalıcı Veri Yönetimi
* Veritabanı Sistemleri RDMBS : Projeleri tutmak için SQLiteç
* Dosya Sistemi : sharedpreferences, uygulamaya ilk defa giriş kontrolü
### Ağ İletişimi / Web / Bulut
* HTTP / RESTful : .Net Core Back-End servisinden patrondan gelen mesajları çekme ve Bearer token alma
### Donanım / Sensör / Konum
* Çağrı / Mesaj Servisleri (SMS) : Butona basarak önceden girilmiş numara arama
* Sensör Tipleri: Hareket(Motion),Pozisyon(Position),Ortam(Environment) : Hareket sensörü algılama
* Alarm / Bildirim (Local/Push) : Telefonu sallandığında Local bildirim gönderme
### Kullanıcı Arayüzü
* Arayüz Bileşenleri : Ekranlar arası navigation ve veri aktarımı
* Dokunma / Giriş Yöntemleri
### Güvenlik / Gizlilik Politikaları
* İzin / Yetki / Oturum Yönetimi : Giriş yaparken Admin/Normal kullanıcı ayrımı ve oturum açma
### Diğer Uygulama Geliştirme Teknikleri
* Hibrit Uygulama : React Native geliştirme çatısı ile hibrit bir uygulama
### Test
* Birim Testler : Back-End servisinde birim testler
* Arayüz Testleri : \_\_test\_\_ klasörü altında HomeScreen ve App dosyaları düzgün render ediliyor mu testi
### Paketleme / Dağıtım
* Uygulama Derleme : npx react-native run-android ile derleniyor ve çalıştırılıyor

## Authors

* **Fehmi Şener** - [Github](https://github.com/fehmiisener)
* **Tolunay Esergün** - [Github](https://github.com/tolunayesergun)

## Resources Used

* https://medium.com/@peacecwz/react-native-sqlite-kullan%C4%B1m%C4%B1-6969e783f136
* https://github.com/andpor/react-native-sqlite-storage
* https://blog.logrocket.com/using-sqlite-with-react-native/
* https://medium.com/@berkekurnaz/flutter-g%C3%BCnl%C3%BCkleri-10-shared-preferences-kavram%C4%B1-8d7682690414
* https://ayselaydin.medium.com/android-sharedpreferences-kullan%C4%B1m%C4%B1-f24501831832
* https://github.com/sriraman/react-native-shared-preferences
* https://medium.com/react-native-training/learning-to-test-react-native-with-jest-part-1-f782c4e30101
* https://medium.com/@charana.am/react-native-shake-event-w-expo-9dbf17033ea9
* https://stackoverflow.com/questions/31506530/sensormanager-what-is-the-gravity-earth
* https://stackoverflow.com/questions/51545064/how-to-make-phone-call-in-react-native
* https://medium.com/arrow-func/react-native-api-i%CC%87%C5%9Flemleri-87fb34b871d7
* https://reactnavigation.org/docs/auth-flow/

