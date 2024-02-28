import ButtonBox from '../buttonBox';
import { Container } from './styles';

export default function FormClientList() {
  return (
    <Container>
      <form action="" className="form-clients">
        <ul className="ul-clients">
          <li className="list-clients">
            <span>Cliente</span>
            <ButtonBox />
          </li>
        </ul>
      </form>
    </Container>
  );
}
