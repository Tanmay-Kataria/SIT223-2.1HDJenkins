import React, { useState, useEffect } from 'react';
import {  collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore'; 
import { db } from './firebase';
import AddQuestionForm from './AddQuestionForm';
import FilterBar from './FilterBar';
import ReorderableList from './ReorderableList';
import './output.css';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, 'questions'));
      const questionList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setQuestions(questionList);
    };

    fetchQuestions();
  }, []);

  const handleAddQuestion = async (newQuestion) => {
    const docRef = await addDoc(collection(db, 'questions'), newQuestion);
    setQuestions([...questions, { id: docRef.id, ...newQuestion }]);
  };

  const handleDeleteQuestion = async (id) => {
    await deleteDoc(doc(db, 'questions', id));
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const filteredQuestions = questions.filter((q) =>
    (!filterTitle || q.title.toLowerCase().includes(filterTitle.toLowerCase())) &&
    (!filterTag || q.tag.toLowerCase().includes(filterTag.toLowerCase())) &&
    (!filterDate || q.date === filterDate)
  );

  return (
    <div className="container mx-auto p-4">
      <AddQuestionForm onAdd={handleAddQuestion} />
      <FilterBar
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterTag={filterTag}
        setFilterTag={setFilterTag}
        filterDate={filterDate}
        setFilterDate={setFilterDate}
      />
      <ReorderableList questions={filteredQuestions} onDelete={handleDeleteQuestion} />
    </div>
  );
};

export default App;
