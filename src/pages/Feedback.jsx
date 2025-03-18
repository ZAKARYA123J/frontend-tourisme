import React, { useState } from 'react';

const Feedback = () => {
  const [name, setname] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log('Feedback submitted:', { name, content, rating });

   
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h2>Thank you for your Feedback! Have a nice holiday!</h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Submit Your Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
