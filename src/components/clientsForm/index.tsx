import { Container } from './styles';

export default function ClientsForm() {
  return (
    <Container>
      <form action="" className="all-clients">
        <ul className="ul-clients">
          <li className="list-clients">
            <div className="button-box">
              <button className="edit-button">Editar</button>
              <button className="delete-button">Deletar</button>
              <button className="verify-button">Verificar Anuncios</button>
            </div>
          </li>
        </ul>
      </form>
    </Container>
  );
}
