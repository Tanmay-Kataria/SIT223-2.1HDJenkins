import { useState } from 'react';

const QuestionCard = ({ question, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-4 mb-4 bg-white shadow-md rounded-lg">
      <h3 className="text-xl font-bold">{question.title}</h3>
      <p className="text-gray-600">{question.tag}</p>
      <p className="text-sm text-gray-500">{question.date}</p>
      {isExpanded && (
        <div>
          <p className="mt-2 text-gray-700">{question.description}</p>
        </div>
      )}
      <button
        className="mt-2 text-blue-500 hover:underline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
      <button
        className="ml-4 text-red-500 hover:underline"
        onClick={() => onDelete(question.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default QuestionCard;
