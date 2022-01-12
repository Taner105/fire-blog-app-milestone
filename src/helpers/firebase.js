import { initializeApp} from "firebase/app"
const firebaseConfig = {
  apiKey: "AIzaSyBkq0JIzOJCRgRfH7ArIpYMCk3s7gV7Dww",
  authDomain: "fireblog-app-7f892.firebaseapp.com",
  databaseURL: "https://fireblog-app-7f892-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-7f892",
  storageBucket: "fireblog-app-7f892.appspot.com",
  messagingSenderId: "643765986192",
  appId: "1:643765986192:web:e0364aff8910c7e74bc915"
};

const firebase = initializeApp(firebaseConfig)
export default firebase;