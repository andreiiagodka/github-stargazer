import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBEbxms7VS5GHHQe9l7EltA66TWBhaI6Yk',
  authDomain: 'localhost',
  databaseURL: 'https://github-stargazer-4e8a3-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'github-stargazer-4e8a3'
}

const firebase = Firebase.initializeApp(firebaseConfig)

const REPOSITORIES_TABLE = 'repositories'

export const createRepository = data => {
  const attributes = {
    full_name: data.full_name.toLowerCase(),
    stargazers_count: data.stargazers_count,
    watchers_count: data.watchers_count,
    forks_count: data.forks_count  
  }

  firebase.database().ref(REPOSITORIES_TABLE).push().set(attributes)
}

export const findRepository = id => {
  return firebase.database().ref(REPOSITORIES_TABLE + '/' + id)
}

export const deleteRepository = id => {
  firebase.database().ref(REPOSITORIES_TABLE + '/' + id).remove()
}

export const repositoriesGet = () => {
  return firebase.database().ref(REPOSITORIES_TABLE)
}
