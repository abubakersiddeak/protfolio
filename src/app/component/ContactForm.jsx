"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields!");
      return;
    }
    console.log("Form Submitted:", formData);
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000); // ৩ সেকেন্ড পর রিসেট হবে
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          {submitted ? "Message Sent! 🎉" : "Send Message"}
        </button>
      </form>
    </div>
  );
}
