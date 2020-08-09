import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { getToken } from "./getToken";


export const requestMessagingFirebasePermission = async () => {

  if (Platform.OS == 'ios')
    await requestIosPermission()
  else
    await requestAndroidPermission()

  getToken()

}

const requestAndroidPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  // if (enabled)
  //   console.log('Authorization status:', authStatus);
}

// Docs suggest include setting to request permission for ios
const requestIosPermission = async () => {


  const authStatus = await messaging().requestPermission({
    sound: true,
    announcement: false,
    badge: true,
  });

  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  // if (enabled)
  //   console.log('Authorization status:', authStatus);

}

export const checkPermission = async () => {
  const hasPermision = await messaging().hasPermission()

  // console.log(hasPermision)
}