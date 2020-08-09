import messaging from "@react-native-firebase/messaging";

export const registerDevice = async () =>
  await messaging().registerDeviceForRemoteMessages();
