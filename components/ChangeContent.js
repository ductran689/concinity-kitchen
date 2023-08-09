import axios from 'axios';
import React, { useState } from 'react';

export default function ChangeContent() {
  const [content, setContent] = useState('');

  const handleCancel = () => {
    setContent('');
  };
  /* const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/submitContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (response.ok) {
      // Handle success
      console.log('Content submitted successfully!');
    } else {
      // Handle error
      console.error('Failed to submit content.');
    }
  }; */

  const handleSubmit = async () => {
    try {
      await axios.post('/api/update', { content });
      console.log('Note updated successfully!');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="manage_content">
      <h1 className="text-center mb-4 text-gray-700 font-poppinsbold">
        Manage Content
      </h1>
      <div className="flex justify-around item-center mb-10 ">
        <textarea
          name="content-area "
          id=""
          cols="70"
          rows="5"
          maxLength={300}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className=" content-area border-solid border-[2px] border-black rounded-md"
        ></textarea>
        <div className="btn-content flex flex-col justify-center items-center">
          <button
            className="bg-red-600 p-3 w-32 text-center rounded text-white mb-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-red-600 p-3 w-32 text-center rounded text-white"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
