import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDMxOa3vEBpFgeQsoNkUd1UTJvQWRpZs1U',
  authDomain: 'vue-firebase-project-fdbed.firebaseapp.com',
  projectId: 'vue-firebase-project-fdbed',
  storageBucket: 'vue-firebase-project-fdbed.appspot.com',
  messagingSenderId: '12852834673',
  appId: '1:12852834673:web:e2256aab6cc26c2464c6d0',
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
