import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// First Firebase project configuration
const firebaseConfig1 = {
  apiKey: "AIzaSyBVvO3ufhCr0NpPt26x0yCz1tWAFNPVrqs",
  authDomain: "form-e0205.firebaseapp.com",
  projectId: "form-e0205",
  storageBucket: "form-e0205.appspot.com",
  messagingSenderId: "24620462460",
  appId: "1:24620462460:web:937bd0e72a2372389134f9"
};
// Second Firebase project configuration
const firebaseConfig2 = {
    apiKey: "AIzaSyAq37FreQulKqX68qMDlj9LHhshffqWjNA",
    authDomain: "loca2form.firebaseapp.com",
    projectId: "loca2form",
    storageBucket: "loca2form.appspot.com",
    messagingSenderId: "151134450069",
    appId: "1:151134450069:web:3523c4867081a1568a469c"
};

// Third Firebase project configuration
const firebaseConfig3 = {
  apiKey: "AIzaSyDQvtM1WxyjcyNauDf4lSoCJb81ZxgmvEg",
  authDomain: "my-form-55a6f.firebaseapp.com",
  projectId: "my-form-55a6f",
  storageBucket: "my-form-55a6f.appspot.com",
  messagingSenderId: "991141376440",
  appId: "1:991141376440:web:fde16f469f365445b29f4d"
};

// Fourth Firebase project configuration
const firebaseConfig4 = {
  apiKey: "AIzaSyDsTTcpocn1FCxy5pbnWjhFXgfRRpeVOdg",
  authDomain: "permitform-c977a.firebaseapp.com",
  projectId: "permitform-c977a",
  storageBucket: "permitform-c977a.appspot.com",
  messagingSenderId: "549837716981",
  appId: "1:549837716981:web:8a5c7e219f61cbd7e934bc"
};
// for live chat and login
const firebaseConfig5 = {
  apiKey: "AIzaSyA2w20RBeAL5M2U8TYrX-fVGCyT1J61cyo",
  authDomain: "messageform-fcef9.firebaseapp.com",
  projectId: "messageform-fcef9",
  storageBucket: "messageform-fcef9.appspot.com",
  messagingSenderId: "477250890731",
  appId: "1:477250890731:web:1be999b1e3a97f9b39c7ae"
};

// Initialize the first Firebase project
const app1 = firebase.initializeApp(firebaseConfig1);
const db1 = app1.firestore();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

// Initialize the second Firebase project with an alias
const app2 = firebase.initializeApp(firebaseConfig2, "second");
const db2 = app2.firestore();

// Initialize the third Firebase project with a unique alias
const app3 = firebase.initializeApp(firebaseConfig3, "third");
const db3 = app3.firestore();

// Initialize the fourth Firebase project with a unique alias
const app4 = firebase.initializeApp(firebaseConfig4, "fourth");
const db4 = app4.firestore();

// Initialize the five Firebase project with a unique alias // for live chat and login
const app5 = firebase.initializeApp(firebaseConfig5, "five");
const db5 = app5.firestore();
const auth = app5.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Sign in with popup (you can also use signInWithRedirect if preferred)
const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
    .then((result) => {
      console.log('User signed in:', result.user);
    })
    .catch((error) => {
      console.error('Error during sign-in:', error);
    });
};

export { db1, db2, db3, db4, db5, auth, serverTimestamp, signInWithGoogle };






// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// // First Firebase project configuration
// const firebaseConfig1 = {
//   apiKey: "AIzaSyBVvO3ufhCr0NpPt26x0yCz1tWAFNPVrqs",
//   authDomain: "form-e0205.firebaseapp.com",
//   projectId: "form-e0205",
//   storageBucket: "form-e0205.appspot.com",
//   messagingSenderId: "24620462460",
//   appId: "1:24620462460:web:937bd0e72a2372389134f9"
// };
// // Second Firebase project configuration
// const firebaseConfig2 = {
//     apiKey: "AIzaSyAq37FreQulKqX68qMDlj9LHhshffqWjNA",
//     authDomain: "loca2form.firebaseapp.com",
//     projectId: "loca2form",
//     storageBucket: "loca2form.appspot.com",
//     messagingSenderId: "151134450069",
//     appId: "1:151134450069:web:3523c4867081a1568a469c"
// };

// // Third Firebase project configuration
// const firebaseConfig3 = {
//   apiKey: "AIzaSyDQvtM1WxyjcyNauDf4lSoCJb81ZxgmvEg",
//   authDomain: "my-form-55a6f.firebaseapp.com",
//   projectId: "my-form-55a6f",
//   storageBucket: "my-form-55a6f.appspot.com",
//   messagingSenderId: "991141376440",
//   appId: "1:991141376440:web:fde16f469f365445b29f4d"
// };

// // Fourth Firebase project configuration
// const firebaseConfig4 = {
//   apiKey: "AIzaSyDsTTcpocn1FCxy5pbnWjhFXgfRRpeVOdg",
//   authDomain: "permitform-c977a.firebaseapp.com",
//   projectId: "permitform-c977a",
//   storageBucket: "permitform-c977a.appspot.com",
//   messagingSenderId: "549837716981",
//   appId: "1:549837716981:web:8a5c7e219f61cbd7e934bc"
// };
// // for live chat and login
// const firebaseConfig5 = {
//   apiKey: "AIzaSyA2w20RBeAL5M2U8TYrX-fVGCyT1J61cyo",
//   authDomain: "messageform-fcef9.firebaseapp.com",
//   projectId: "messageform-fcef9",
//   storageBucket: "messageform-fcef9.appspot.com",
//   messagingSenderId: "477250890731",
//   appId: "1:477250890731:web:1be999b1e3a97f9b39c7ae"
// };

// // Initialize the first Firebase project
// const app1 = firebase.initializeApp(firebaseConfig1);
// const db1 = app1.firestore();
// const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

// // Initialize the second Firebase project with an alias
// const app2 = firebase.initializeApp(firebaseConfig2, "second");
// const db2 = app2.firestore();

// // Initialize the third Firebase project with a unique alias
// const app3 = firebase.initializeApp(firebaseConfig3, "third");
// const db3 = app3.firestore();

// // Initialize the fourth Firebase project with a unique alias
// const app4 = firebase.initializeApp(firebaseConfig4, "fourth");
// const db4 = app4.firestore();

// // Initialize the five Firebase project with a unique alias // for live chat and login
// const app5 = firebase.initializeApp(firebaseConfig5, "five");
// const db5 = app5.firestore();
// const auth = app5.auth();

// export { db1, db2, db3, db4, db5, auth, serverTimestamp };