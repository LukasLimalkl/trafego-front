import { Container } from './styles';

export default function ClientsForm() {
  return (
    <Container>
      <div className="box-clients">
        <h3 className="title-clients">Clientes</h3>
        <div className="search-container">
          <input type="text" />
        </div>
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
      </div>
    </Container>
  );
}
