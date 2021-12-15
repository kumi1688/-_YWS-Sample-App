import { initializeApp } from "firebase/app";
import { LogBox } from "react-native";
import {
  getFirestore,
  setDoc,
  doc,
  getDocs,
  collection,
} from "firebase/firestore";

LogBox.ignoreLogs(["Setting a timer"]);

const fireStoreConfig = {
  apiKey: "AIzaSyAL1Oue79XxoAqvFv2LepF2LECniZmVW2A",
  authDomain: "yws-app-d2828.firebaseapp.com",
  databaseURL: "https://yws-app-d2828.asia-northeast3.firebasedatabase.app",
  storageBucket: "yws-app-d2828.appspot.com",
  projectId: "yws-app-d2828",
};

initializeApp(fireStoreConfig);

const db = getFirestore();
const sizeDict = {};

async function getDocSize(param_collection) {
  return new Promise((resolve, reject) => {
    const ref = collection(db, param_collection);
    getDocs(ref).then((result) => {
      resolve(result.size);
    });
  });
}

async function readData(param_collection) {
  const ref = collection(db, param_collection);
  const result = await getDocs(ref);

  let docs = [];
  result.forEach((doc) => {
    const new_data = { id: doc.id, ...doc.data() };
    docs.push(new_data);
  });
  console.log(docs);
}

async function writeData(param_collection, data) {
  if (!sizeDict[param_collection]) {
    sizeDict[param_collection] = await getDocSize(param_collection);
  }

  sizeDict[param_collection] += 1;
  console.log(param_collection, data);

  data = { ...data, date: new Date() };
  const ref = collection(db, param_collection);
  await setDoc(doc(ref, sizeDict[param_collection].toString()), data);
}

export { writeData, readData };
