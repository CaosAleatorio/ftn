import React, { useState } from 'react';

function Volunteers() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-gray-100 text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Voluntários e Doadores</h2>
        {submitted ? (
          <p className="text-green-600">Obrigado por se inscrever! Entraremos em contato em breve.</p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
            <label htmlFor="name" className="block text-gray-700 mb-2">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label htmlFor="message" className="block text-gray-700 mb-2">Mensagem (opcional):</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows="4"
            ></textarea>

            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Enviar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Volunteers;