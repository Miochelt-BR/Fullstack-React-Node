import React from "react";
import { Table, Button } from "react-bootstrap";

function Home({ contatos, excluirContato }) {
  return (
    <div>
      <h2>Lista de Contatos</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contatos.map((contato) => (
            <tr key={contato.id}>
              <td>{contato.nome}</td>
              <td>{contato.email}</td>
              <td>{contato.telefone}</td>
              <td>
                <Button variant="danger" onClick={() => excluirContato(contato.id)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
