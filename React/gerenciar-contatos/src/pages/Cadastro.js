import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Cadastro({ adicionarContato }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    adicionarContato(data);
    navigate("/");
  };

  return (
    <div>
      <h2>Cadastrar Contato</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            {...register("nome", { required: "Nome é obrigatório" })}
          />
          {errors.nome && <small className="text-danger">{errors.nome.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            type="email"
            {...register("email", { required: "E-mail é obrigatório" })}
          />
          {errors.email && <small className="text-danger">{errors.email.message}</small>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            {...register("telefone", { required: "Telefone é obrigatório" })}
          />
          {errors.telefone && <small className="text-danger">{errors.telefone.message}</small>}
        </Form.Group>

        <Button type="submit" variant="success">Adicionar</Button>
      </Form>
    </div>
  );
}

export default Cadastro;
