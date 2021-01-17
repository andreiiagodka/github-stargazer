import Firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBEbxms7VS5GHHQe9l7EltA66TWBhaI6Yk',
  authDomain: 'localhost',
  databaseURL: 'https://github-stargazer-4e8a3-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'github-stargazer-4e8a3'
}

const firebase = Firebase.initializeApp(firebaseConfig)

const REPOSITORIES_TABLE = 'repositories'

export const repositoriesGet = () => {
  return firebase.database().ref(REPOSITORIES_TABLE)
}

export const repositoryGet = id => {
  return firebase.database().ref(REPOSITORIES_TABLE + '/' + id)
}

export const repositoryCreate = (name, repository, languages) => {
  const params = {
    name: name,
    stats: {
      watchers: repository.watchers_count,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    },
    languages: languages
  }

  firebase.database().ref(REPOSITORIES_TABLE).push().set(params)
}

export const repositoryDelete = id => {
  firebase.database().ref(REPOSITORIES_TABLE + '/' + id).remove()
}