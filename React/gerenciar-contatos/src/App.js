import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import { Container, Navbar, Nav } from "react-bootstrap";

function App() {
  const [contatos, setContatos] = useState([
    { id: 1, nome: "João Silva", email: "joao@email.com", telefone: "99999-9999" },
    { id: 2, nome: "Maria Oliveira", email: "maria@email.com", telefone: "98888-8888" },
  ]);

  const adicionarContato = (novoContato) => {
    setContatos([...contatos, { id: Date.now(), ...novoContato }]);
  };

  const excluirContato = (id) => {
    setContatos(contatos.filter((contato) => contato.id !== id));
  };

  return (
    <Container>
      <Navbar bg="dark" variant="dark" className="mb-3">
        <Navbar.Brand href="/">Gerenciador de Contatos</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/cadastro">Cadastrar</Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home contatos={contatos} excluirContato={excluirContato} />} />
        <Route path="/cadastro" element={<Cadastro adicionarContato={adicionarContato} />} />
      </Routes>
    </Container>
  );
}

export default App;
