import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBEbxms7VS5GHHQe9l7EltA66TWBhaI6Yk',
  authDomain: 'localhost',
  databaseURL: 'https://github-stargazer-4e8a3-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'github-stargazer-4e8a3'
}

export const firebase = Firebase.initializeApp(firebaseConfig)
