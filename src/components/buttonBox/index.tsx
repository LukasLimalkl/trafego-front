import { AiOutlineEdit } from 'react-icons/ai';
import { IoIosSearch } from 'react-icons/io';
import { IoTrash } from 'react-icons/io5';
import { Container } from './styles';

export default function ButtonBox() {
  return (
    <Container>
      <button className="edit-button">
        <AiOutlineEdit className="edit-icon" />
      </button>
      <button className="delete-button">
        <IoTrash className="delete-icon" />
      </button>
      <button className="verify-button">
        <IoIosSearch className="verify-icon" />
      </button>
    </Container>
  );
}
