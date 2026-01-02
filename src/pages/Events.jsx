import React from 'react';

function Events() {
  return (
    <section className="bg-gray-100 text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Datas Importantes</h2>
        <ul className="timeline">
          <li className="mb-4">
            <span className="font-bold text-lg">15/11/2025</span>
            <p>Início de submissão de resumos</p>
          </li>
          <li className="mb-4">
            <span className="font-bold text-lg">31/01/2026</span>
            <p>Prazo final para a submissão de resumos</p>
          </li>
          <li className="mb-4">
            <span className="font-bold text-lg">28/02/2026</span>
            <p>Notificação aos autores</p>
          </li>
          <li className="mb-4">
            <span className="font-bold text-lg">30/03/2026 - 30/05/2026</span>
            <p>Pagamento da inscrição e envio das cartas de aceitação</p>
          </li>
          <li className="mb-4">
            <span className="font-bold text-lg">16 e 17/09/2026</span>
            <p>Realização do Congresso</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Events;