import Modal from "react-modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { FormEvent, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

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
  const [origin, setOrigin] = useState(0);
  const [destiny, setDestiny] = useState(0);
  const [time, setTime] = useState(0);
  const [plan, setPlan] = useState("");

  const { createTransaction } = useTransaction();

  const handleChangePlan = (event: SelectChangeEvent) => {
    setPlan(event.target.value as string);
  };

  const handleChangeOrigin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOrigin(Number(event.target.value));
  };

  const handleChangeDestiny = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestiny(Number(event.target.value));
  };

  async function handleCreateNewTransaction(event: FormEvent) {
    await createTransaction({
      origin,
      destiny,
      time,
      plan
    });

    onRequestClose();
  }

  const currencies = [
    {
      value: 11,
      label: 11,
    },
    {
      value: 16,
      label: 16,
    },
    {
      value: 17,
      label: 17,
    },
    {
      value: 18,
      label: 18,
    },
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h1>Adicionar transação</h1>
        <div className="input-ddd">
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PhoneInTalkIcon sx={{ color: "action.active", mr: 1, my: 3}} />
            <TextField
              id="standard-select-currency-native"
              select
              label="DDD"
              value={origin}
              onChange={handleChangeOrigin}
              SelectProps={{
                native: true,
              }}
              variant="standard"
              helperText="DDD de origem"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PhoneCallbackIcon
              sx={{ color: "action.active", mr: 1, my: 3}}
            />
            <TextField
              id="standard-select-currency-native"
              select
              label="DDD"
              value={destiny}
              onChange={handleChangeDestiny}
              SelectProps={{
                native: true,
              }}
              variant="standard"
              helperText="DDD de destino"
            >
              {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccessTimeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              type="number"
              id="input-with-sx"
              label="Tempo (min)"
              variant="standard"
              value={time}
              onChange={(e) => setTime(Number(e.target.value))}
            >
            {currencies.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
                </TextField>
            
          </Box>
        </div>
        <div className="input-plan">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Plano</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={plan}
              label="Age"
              onChange={handleChangePlan}
            >
              <MenuItem value={30}>FaleMais 30</MenuItem>
              <MenuItem value={60}>FaleMais 60</MenuItem>
              <MenuItem value={120}>FaleMais 120</MenuItem>
              <MenuItem value={0}>Sem o plano FaleMais</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          variant="contained"
          onClick={handleCreateNewTransaction}
        >
          Cadastrar
        </Button>
      </Container>
    </Modal>
  );
}
