import { initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBkq0JIzOJCRgRfH7ArIpYMCk3s7gV7Dww",
  authDomain: "fireblog-app-7f892.firebaseapp.com",
  databaseURL: "https://fireblog-app-7f892-default-rtdb.firebaseio.com",
  projectId: "fireblog-app-7f892",
  storageBucket: "fireblog-app-7f892.appspot.com",
  messagingSenderId: "643765986192",
  appId: "1:643765986192:web:e0364aff8910c7e74bc915"
};
// const firebaseConfigAuth = {
//   apiKey: "AIzaSyAAjsV1AxLxuXb8SyZabOfECqZLl_AyKMw",
//   authDomain: "fire-blog-auth.firebaseapp.com",
//   projectId: "fire-blog-auth",
//   storageBucket: "fire-blog-auth.appspot.com",
//   messagingSenderId: "740297823527",
//   appId: "1:740297823527:web:9fcfe204fbf05fae4cc502"
// };

const firebase = initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default firebase;
