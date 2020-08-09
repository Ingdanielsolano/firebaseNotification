import messaging from "@react-native-firebase/messaging";


export const getToken = async () => {
  const token = await messaging().getToken()
  console.log(`\n\n\nFirebase token: ${token}`);
  return token
}