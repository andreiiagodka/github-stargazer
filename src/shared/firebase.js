import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBEbxms7VS5GHHQe9l7EltA66TWBhaI6Yk',
  authDomain: 'localhost',
  databaseURL: 'https://github-stargazer-4e8a3-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'github-stargazer-4e8a3'
}

const firebase = Firebase.initializeApp(firebaseConfig)

const REPOSITORIES_TABLE = 'repositories'

export const allRepositories = () => {
  return firebase.database().ref(REPOSITORIES_TABLE)
}

export const createRepository = (repository, languages) => {
  const attributes = {
    full_name: repository.full_name.toLowerCase(),
    stargazers_count: repository.stargazers_count,
    watchers_count: repository.watchers_count,
    forks_count: repository.forks_count,
    languages: languages
  }

  firebase.database().ref(REPOSITORIES_TABLE).push().set(attributes)
}

export const findRepository = id => {
  return firebase.database().ref(REPOSITORIES_TABLE + '/' + id)
}

export const deleteRepository = id => {
  firebase.database().ref(REPOSITORIES_TABLE + '/' + id).remove()
}
