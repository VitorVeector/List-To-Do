import { Container, Content } from "./style";
import Button from '@mui/material/Button';

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}

export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <h1 className="logo">Telzir</h1>
        <Button 
          variant="contained" 
          style={{backgroundColor: "#5146af"}}
          onClick={onOpenNewTransactionModal}>Adicionar chamada</Button>
      </Content>
    </Container>
  );
};
