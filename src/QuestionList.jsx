import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import { Draggable } from 'react-draggable';

const QuestionList = ({ questions, onDelete }) => {
  return (
    <div>
      {questions.map((question) => (
        <Draggable key={question.id}>
          <div>
            <QuestionCard question={question} onDelete={onDelete} />
          </div>
        </Draggable>
      ))}
    </div>
  );
};

export default QuestionList;
