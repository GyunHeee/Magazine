import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export async function Login() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function Logout() {
  signOut(auth)
    .then(() => {
      return null;
    })
    .catch((error) => {
      console.error(error);
    });
}

provider.setCustomParameters({
  prompt: 'select_account',
});

export async function refreshLogin(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}

export async function addNewPost(post, imageUrl) {
  const id = uuid();
  return set(ref(db, 'posts/' + id), {
    ...post,
    id,
    image: imageUrl,
  });
}

export async function readDatabase() {
  return get(ref(db, 'posts'))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
