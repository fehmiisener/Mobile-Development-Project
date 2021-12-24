import React, { useEffect, useState } from 'react';
import PushNotification, { Importance } from 'react-native-push-notification';

import {
  View,
  SafeAreaView,
  Alert
} from 'react-native';

import { openDatabase } from 'react-native-sqlite-storage';
import call from 'react-native-phone-call';


import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';

import {
  accelerometer,
  setUpdateIntervalForType,
  SensorTypes,
} from 'react-native-sensors'
import { map, filter } from 'rxjs/operators';

var sqliteDB = openDatabase({ name: 'sqlDataBase.db' });
var SharedPreferences = require('react-native-shared-preferences');


const checkIsFirstTime = () => {
  SharedPreferences.getItem('isLogin', function (value) {
    if (value == null) {
      console.log('First time in app');
      Alert.alert(
        'Görünüşe göre aramıza ilk defa katıldın!\n' +
        'Ekranda bulunan çağrı yap butunu ile bizlere ulaşabilirsin :) ',
      );
      SharedPreferences.setItem('isLogin', '1');
    } else {
      console.log('Not first time..');
    }
  });
};
checkIsFirstTime();

const deleteAllUser = () => {
  sqliteDB.transaction(function (tx) {
    tx.executeSql(
      'DELETE FROM tasks',
      (tx, results) => {
        console.log('Sonuçlar', results.rowsAffected);
        if (results.rowsAffected > 0) {
          Alert.alert(
            'Başarılı',
            'Kayıtlar Temizlendi',
            [
              {
                text: 'Tamamlandı',
                onPress: () => navigation.navigate('HomeScreen'),
              },
            ],
            { cancelable: false },
          );
        } else alert('Kayıt Temizlenemedi');
      },
    );
  });
}

const getToken = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "userName": "string",
    "password": "string"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://mobilproje.tolunayesergun.com/api/Auth/login", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.data)
      return result.data;
    })
    .catch(error => console.log('error', error));
}

const checkMessageFromBoss = () => {
  var myHeaders = new Headers();
  var token = getToken();
  myHeaders.append("Authorization", "Bearer " + token);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("https://mobilproje.tolunayesergun.com/api/MessageFromBoss", requestOptions)
    .then(response => response.text())
    .then(result => {
      console.log(result)
      Alert.alert(
        "Patrondan Mesaj Var!",
        "Görevlerini yapmaya devam et! Sana inanıyorum.\n\n" +
        result,
        [
          {
            text: "DEVAM",
            style: "ok",
          },
        ],
        {
          cancelable: true,
        }
      );

    })
    .catch(error => console.log('error', error));
}

PushNotification.createChannel(
  {
    channelId: 'channel-id',
    channelName: 'My channel',
    channelDescription: 'Normal channel',
    playSound: true,
    soundName: 'notification.mp3',
    importance: Importance.HIGH,
    vibrate: true,
  },
  created => console.log(`createChannel returned '${created}'`),
);

const LocalNotification = () => {
  PushNotification.localNotification({
    channelId: 'channel-id',
    autoCancel: true,
    bigText: "Hala tamamlamadığın gövevler var! Bunlara bakmayı ne zaman düşünüyorsun bu yıl içeresinde mi?",
    title: "Hey Biraz Görevlerine Bakmay Artık",
    message: 'Daha fazlasını görmek için kaydır.',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["Yes", "No"]',
    priority: "high"
  });
};

const triggerCall = () => {
  const args = {
    number: '+90 532 243 4061',
    prompt: true,
  };
  call(args).catch(console.error);
};


const HomeScreen = ({ navigation, route }) => {

  const [lastShakeTime, setLastShakeTime] = useState(0);

  useEffect(() => {
    const SHAKE_THRESHOLD = 10;

    const MIN_TIME_BETWEEN_SHAKES_MILLISECS = 1000;
    setUpdateIntervalForType(SensorTypes.accelerometer, 200);

    const subscription = accelerometer
      .pipe(
        map(
          ({ x, y, z }) =>
            Math.sqrt(
              Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2),
            ) /* - SensorManager.GRAVITY_EARTH */,
        ),
        filter((acceleration) => acceleration > SHAKE_THRESHOLD),
      )
      .subscribe((acceleration) => {
        const curTime = new Date().getTime();
        if (curTime - lastShakeTime > MIN_TIME_BETWEEN_SHAKES_MILLISECS) {
          setLastShakeTime(curTime);
          console.log('Shaked device! acceleration: ', acceleration);
          LocalNotification();
        }
      });

    navigation.setOptions({ title: route.params.userName + ' Hoşgeldin!' });
    sqliteDB.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='tasks'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS tasks', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS tasks(task_id INTEGER PRIMARY KEY AUTOINCREMENT, task_name VARCHAR(50), task_date VARCHAR(50), task_descp VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <Mytext text="Proje Yönetimi ve Takibine Hoş Geldin!" />
          <Mybutton
            title="Proje Görevi Ekle"
            customClick={() => navigation.navigate('Register')}
          />
          <Mybutton
            title="Proje Görevi Ara"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="Tüm Görevleri Sorgula"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mytext text="Destek Hattı | Acil Durumlar" />
          <Mybutton
            title="Patrondan Mesaj Var mı?"
            customClick={() => checkMessageFromBoss()}
          />
          {route.params.role === 0 && (
            <Mybutton
              title="Tüm Görevleri temizle"
              customClick={() => deleteAllUser()}
            />
          )}
          <Mybutton
            title="Patronu Ara"
            customClick={() => triggerCall()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
