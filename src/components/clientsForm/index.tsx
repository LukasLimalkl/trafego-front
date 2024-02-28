import FormClientList from '../formClientList';
import { Container } from './styles';

export default function ClientsForm() {
  return (
    <Container>
      <div className="box-clients">
        <h3 className="title-clients">Clientes:</h3>
        <div className="search-container">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <FormClientList />
      </div>
    </Container>
  );
}
