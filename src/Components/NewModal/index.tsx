import Modal from "react-modal";
import { FormEvent, useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  Button,
} from "@mui/material";

import { Container } from "./styles";

import { useTransaction } from "../../hooks/useTransaction";

interface NewTransactionModalOpenProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalOpenProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTransaction } = useTransaction();

  async function handleCreateNewTransaction(event: FormEvent) {
    await createTransaction({
      title,
      description,
    });

    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <FormControl>
          <InputLabel htmlFor="my-input">Título</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={title} onChange={e => setTitle(e.target.value)}/>
          </FormControl>
          <FormControl>
          <InputLabel htmlFor="my-input">Descrição</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={description} onChange={e => setDescription(e.target.value)}/>
          <Button onClick={handleCreateNewTransaction}>Cadastrar</Button>
        </FormControl>
      </Container>
    </Modal>
  );
}
