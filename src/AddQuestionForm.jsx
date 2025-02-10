import { useState } from 'react';

const AddQuestionForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tag, setTag] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && description && tag && date) {
            onAdd({ title, description, tag, date });
            setTitle('');
            setDescription('');
            setTag('');
            setDate('');
        }
    };


    return (
        <form onSubmit={handleSubmit} className="mb-4 p-4 bg-white rounded-lg shadow-lg">
            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the question title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Description</label>
                <textarea
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter the question description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Tag</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter a tag"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">Date</label>
                <input
                    type="date"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Add Question
            </button>
        </form>
    );
};

export default AddQuestionForm;
