import { useState } from 'react';
import './styles';
import { Container } from './styles';

interface ITheme {
  toggleTheme: () => void;
}
function Switch({ toggleTheme }: ITheme) {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
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
