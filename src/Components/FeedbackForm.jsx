import React, { useState } from "react";
import "./FeedbackForm.css"; // Import CSS for styling

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmationMessage = `
      Name: ${formData.name},
      Email: ${formData.email},
      Feedback: ${formData.feedback}
      Rating: ${formData.rating}
    `;
    const isConfirmed = window.confirm(
      `Please confirm your information: \n\t ${confirmationMessage}`
    );
    if (isConfirmed) {
      console.log("Success Message", formData);
      setFormData({
        name: "",
        email: "",
        feedback: "",
        rating: "",
      });
      alert("Your information has been successfully sent!");
    }
  };
  return (
    <>
      <nav>Tell Us What You Think</nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          onChange={handleChange}
          value={formData.name}
          placeholder="Your Name"
          name="name"
          type="text"
        />
        <input
          onChange={handleChange}
          value={formData.email}
          placeholder="Your Email"
          name="email"
          type="email"
        />
        <textarea
          onChange={handleChange}
          value={formData.feedback}
          placeholder="Your Feedback"
          name="feedback"
          id=""
        ></textarea>
        <p>Rate Us:</p>
        <div className="stack">
          <label htmlFor="rating-1">1</label>
          <input
            onChange={handleChange}
            value={"1"}
            type="radio"
            id="rating-1"
            name="rating"
          />
        </div>
        <div className="stack">
          <label htmlFor="rating-2">2</label>
        <input
          onChange={handleChange}
          value={"2"}
          type="radio"
          id="rating-2"
          name="rating"
        />
        </div>
        <div className="stack">
          <label htmlFor="rating-3">3</label>
        <input
          onChange={handleChange}
          value={"3"}
          type="radio"
          id="rating-4"
          name="rating"
        />
        </div>
        <div className="stack">
          <label htmlFor="rating-4">4</label>
        <input
          onChange={handleChange}
          value={"4"}
          type="radio"
          id="rating-4"
          name="rating"
        />
        </div>
        <div className="stack">
          <label htmlFor="rating-5">5</label>
        <input
          onChange={handleChange}
          value={"5"}
          type="radio"
          id="rating-5"
          name="rating"
        />
        </div>
        
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
