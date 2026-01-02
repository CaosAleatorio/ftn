import React, { useState } from 'react';

function Reports() {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage('');
  };

  return (
    <section className="bg-gray-100 text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Denúncias ou Relatos Anônimos</h2>
        {submitted ? (
          <p className="text-green-600">Obrigado por enviar seu relato. Ele será analisado.</p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white p-6 shadow rounded">
            <label htmlFor="report" className="block text-gray-700 mb-2">Seu relato:</label>
            <textarea
              id="report"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              rows="5"
              required
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

export default Reports;