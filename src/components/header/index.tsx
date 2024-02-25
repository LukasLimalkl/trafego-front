import Link from 'next/link';
import { TfiGithub } from 'react-icons/tfi';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Link
        href="https://github.com/LukasLimalkl/trafego-front"
        target="_blank"
      >
        <TfiGithub className="github-icon" />
      </Link>
    </Container>
  );
}
