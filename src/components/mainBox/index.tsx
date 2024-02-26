import ClientInputs from '../clientInputs';
import ClientsForm from '../clientsForm';
import { Container } from './styles';

export default function MainBox() {
  return (
    <Container>
      <h2 className="title">Controle os anúncios do seu cliente aqui!</h2>
      <div className="box">
        <h3 className="box-title">Adicione o nome e usuario do seu cliente:</h3>
        <ClientInputs />
        <ClientsForm />
      </div>
    </Container>
  );
}
