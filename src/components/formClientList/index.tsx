import ButtonBox from '../buttonBox';
import { Container } from './styles';

interface IClientBox {
  client: string;
}
// isso vai virar um .map
// vai receber como props o nome do cliente e vai ser utilizado a
// partir de um array
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
