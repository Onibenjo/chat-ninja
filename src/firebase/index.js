import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: `${process.env.VUE_APP_API_KEY}`,
  authDomain: `${process.env.VUE_APP_APPNAME}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_APPNAME}.firebaseio.com`,
  projectId: `${process.env.VUE_APP_APPNAME}`,
  storageBucket: `${process.env.VUE_APP_APPNAME}.appspot.com`,
  messagingSenderId: `${process.env.VUE_APP_MSG_ID}`,
  appId: `${process.env.VUE_APP_APPID}`,
  measurementId: `${process.env.VUE_APP_MEASUREMENT_ID}`
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const db = firebase.firestore();
