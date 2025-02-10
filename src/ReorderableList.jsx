import React, { useState } from 'react';
import Draggable from 'react-draggable';
import QuestionCard from './QuestionCard'; 

const ReorderableList = ({ questions, onDelete }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [currentQuestions, setCurrentQuestions] = useState(questions);

  const onStart = (index) => {
    setDraggedIndex(index);
  };

  const onStop = (e, data, index) => {
    const offsetY = data.y;
    const newOrder = [...currentQuestions];
    const newIndex = calculateNewIndex(offsetY, index, newOrder.length);

    if (newIndex !== index) {
      const [movedItem] = newOrder.splice(index, 1);
      newOrder.splice(newIndex, 0, movedItem);
      setCurrentQuestions(newOrder);
    }

    setDraggedIndex(null);
  };

  const calculateNewIndex = (offsetY, index, totalItems) => {
    const threshold = 100;
    if (offsetY > threshold && index < totalItems - 1) {
      return index + 1;
    } else if (offsetY < -threshold && index > 0) {
      return index - 1;
    }
    return index;
  };

  return (
    <div className="space-y-4">
    {questions.map((question) => (
      <div key={question.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900">{question.title}</h3>
        <p className="text-gray-700">{question.description}</p>
        <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
          {question.tag}
        </span>
        <p className="text-gray-500 text-sm mt-2">{question.date}</p>
        <button
          onClick={() => onDelete(question.id)}
          className="mt-4 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
  
  );
};

export default ReorderableList;
