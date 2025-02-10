import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu05GEPN-KNWhLveJxxmKbtL_3Abp4XUE",
  authDomain: "sit313-545da.firebaseapp.com",
  projectId: "sit313-545da",
  storageBucket: "sit313-545da.firebasestorage.app",
  messagingSenderId: "262065487520",
  appId: "1:262065487520:web:776765be7051c3f8e393c5",
  measurementId: "G-MS0QDGFZ5Z"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

export const questionsCollection = collection(db, 'questions');

export const addQuestion = async (question) => {
  await addDoc(questionsCollection, question);
};

export const getQuestions = async () => {
  const querySnapshot = await getDocs(questionsCollection);
  const questions = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return questions;
};

export const deleteQuestion = async (id) => {
  await deleteDoc(doc(questionsCollection, id));
};

