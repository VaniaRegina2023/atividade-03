import React, { useState } from 'react';
import './App.css'; // Importa a folha de estilos

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form data:', { name, email, phone });
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
  };

  return (
    <div className="App">
      <div className="background">
        <div className="form-container">
          <h2><strong>Entre em contato</strong></h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                id="name"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                id="phone"
                placeholder="Telefone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
              />
            </div>
            <button type="submit" className="submit-button"><strong>Fatec: Enviar mensagem</strong></button>
          </form>
          <strong>{'</form>'}</strong> {/* Campo </form> em negrito */}
        </div>
      </div>
    </div>
  );
};

export default App;
