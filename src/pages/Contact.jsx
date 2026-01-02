import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="bg-white text-gray-800 p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Contacte-nos</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded p-2"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Enviar</button>
        </form>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Informações de Contato</h2>
          <p>Endereço: Rua Exemplo, 123</p>
          <p>Telefone: (11) 1234-5678</p>
          <p>Email: contato@organizacao.com</p>
        </div>
        <p className="text-sm text-gray-600">Exemplo de conteúdo fictício: "Entre em contato conosco para saber mais sobre nossas iniciativas."</p>
      </div>
    </section>
  );
}

export default Contact;