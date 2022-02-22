import React, { useState } from "react";
import useForm from "../hooks/useForm";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";

const SimulatorPage = () => {
  const [time, setTime] = useState("1");
  const { form, onChange, clear } = useForm({
    name: "",
    montlyPayment: "",
  });

  console.log("form", form);
  const onClickSimulate = () => {
    if (form.name === "" || form.montlyPayment === 0) {
      return alert("é necessário preenchimento dos campos");
    }
  };

  const onChangeTime = async (e) => {
    setTime(e.target.value);
  };

  return (
    <div>
      <h1>Simulador</h1>
      <form onSubmit={onClickSimulate}>
        <InputLabel id="label">Nome</InputLabel>
        <TextField
          name="name"
          type="name"
          defaultValue={form.name}
          onChange={onChange}
          placeholder="Digite seu nome"
        />
        <InputLabel id="label">Mensalidade</InputLabel>
        <TextField
          montlyPayment="number"
          type="number"
          defaultValue={form.montlyPayment}
          onChange={onChange}
          placeholder="Digite o valor da mensalidade"
        />
        <InputLabel id="label">Tempo de Contribuição</InputLabel>
        <Select
          labelId="label"
          id="select"
          value={time}
          onChange={onChangeTime}
        >
          <MenuItem value="1">1 Ano</MenuItem>
          <MenuItem value="2">2 Anos</MenuItem>
          <MenuItem value="3">3 Anos</MenuItem>
          <MenuItem value="4">4 Anos</MenuItem>
          <MenuItem value="5">5 Anos</MenuItem>
          <MenuItem value="6">6 Anos</MenuItem>
        </Select>
        <Button onClick={onClickSimulate}>Simular</Button>
      </form>
    </div>
  );
};
export default SimulatorPage;
