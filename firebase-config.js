const firebaseConfig = {
  apiKey: "AIzaSyC0laD98PwMdqZKX-mKb_79ePftQ80yQws",
  authDomain: "codedxchange.firebaseapp.com",
  databaseURL: "https://codedxchange-default-rtdb.firebaseio.com",
  projectId: "codedxchange",
  storageBucket: "codedxchange.firebasestorage.app",
  messagingSenderId: "55365145019",
  appId: "1:55365145019:web:3260bb1433fe1bd0f1349e",
  measurementId: "G-KLTQDP1MYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
