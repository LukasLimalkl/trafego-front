import { useState } from 'react';
import FormClientList from '../formClientList';
import { Container } from './styles';

// Here, I'll GET the users from DATABASE and .map then

export default function ClientsForm() {
  const [clients, setClients] = useState('Exemplo');

  return (
    <Container>
      <div className="box-clients">
        <h3 className="title-clients">Clientes:</h3>
        <div className="search-container">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <FormClientList client={clients} />
      </div>
    </Container>
  );
}
