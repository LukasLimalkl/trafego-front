import { useState } from 'react';
import './styles';
import { Container } from './styles';

function Switch() {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <Container>
      <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
    </Container>
  );
}
export default Switch;
