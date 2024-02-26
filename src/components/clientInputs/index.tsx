import { Container } from './styles';

export default function ClientInputs() {
  return (
    <Container>
      <form action="" className="client">
        <input
          type="text"
          className="name-client"
          placeholder="Adicione o nome do cliente"
        />
        <input
          type="text"
          className="user-client"
          placeholder="Adicione o usuario das midias do cliente"
        />
        <div className="button-container">
          <button className="save-button">Salvar</button>
        </div>
      </form>
    </Container>
  );
}
