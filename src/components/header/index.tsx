import Link from 'next/link';
import { TfiGithub } from 'react-icons/tfi';
import ToggleInput from '../toggleInput';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <ToggleInput />

      <h2 className="main-title">
        Saiba se o anuncio do seu cliente esta no ar
      </h2>

      <Link
        href="https://github.com/LukasLimalkl"
        target="_blank"
        className="github-icon"
      >
        <TfiGithub />
      </Link>
    </Container>
  );
}
