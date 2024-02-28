import ButtonBox from '../buttonBox';
import { Container } from './styles';

export default function ClientsForm() {
  return (
    <Container>
      <div className="box-clients">
        <h3 className="title-clients">Clientes:</h3>
        <div className="search-container">
          <input type="text" placeholder="Pesquisar" />
        </div>
        <form action="" className="all-clients">
          <ul className="ul-clients">
            <li className="list-clients">
              <span>Cliente</span>
              <ButtonBox />
            </li>
          </ul>
        </form>
      </div>
    </Container>
  );
}
