import { ChangeEvent, useState } from 'react';
import { Container } from './styles';

export default function ClientInputs() {
  const [name, setName] = useState('');
  const [user, setUser] = useState('');

  const nameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const userInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  console.log('nome: ' + name, 'usuario: ' + user);

  return (
    <Container>
      <form action="" className="client">
        <input
          type="text"
          className="name-client"
          placeholder="Adicione o nome do cliente"
          onChange={(e) => {
            nameInputHandler(e);
          }}
        />
        <input
          type="text"
          className="user-client"
          placeholder="Adicione o usuario das midias do cliente"
          onChange={(e) => {
            userInputHandler(e);
          }}
        />
        <div className="button-container">
          <button className="save-button">Salvar</button>
        </div>
      </form>
    </Container>
  );
}
