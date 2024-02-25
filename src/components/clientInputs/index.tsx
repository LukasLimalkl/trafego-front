import { Container } from './styles';

export default function ClientInputs() {
  return (
    <Container>
      <form action="" className="client">
        <input type="text" className="name-cliente" />
        <input type="text" className="description-cliente" />
        <button>Salvar</button>
      </form>
    </Container>
  );
}
