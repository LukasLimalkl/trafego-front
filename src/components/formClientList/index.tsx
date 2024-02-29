import ButtonBox from '../buttonBox';
import { Container } from './styles';

interface IClientBox {
  client: string;
}
// This will be a .map
//get props with name client
// the info are get on DB
export default function FormClientList({ client }: IClientBox) {
  return (
    <Container>
      <form action="" className="form-clients">
        <ul className="ul-clients">
          <li className="list-clients">
            <span>{client}</span>
            <ButtonBox />
          </li>
        </ul>
      </form>
    </Container>
  );
}
