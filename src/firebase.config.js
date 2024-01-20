import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAtGi73aosl11AO5wukVFQXjhwxLbkIIn8',
  authDomain: 'house-marketplace-app-ce737.firebaseapp.com',
  projectId: 'house-marketplace-app-ce737',
  storageBucket: 'house-marketplace-app-ce737.appspot.com',
  messagingSenderId: '33010592849',
  appId: '1:33010592849:web:4f1ff0c449558f11715c70',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
