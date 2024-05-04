import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";


const firebaseApp = initializeApp({
    apiKey: "AIzaSyBGn4n5_zdeNUTkFxzBdWOQCh-Re2j4NSU",
    authDomain: "qrcoven.firebaseapp.com",
    projectId: "qrcoven",
    storageBucket: "qrcoven.appspot.com",
    messagingSenderId: "923906153191",
    appId: "1:923906153191:web:530012524ec70691d9e042"
});

const db = getFirestore(firebaseApp);

getDoc(doc(db, 'test/test')).then(x => console.log(x.data()))


const unsub = onSnapshot(doc(db, "test", "test"), (doc) => {
    console.log("Current data: ", doc.data());
});

unsub();