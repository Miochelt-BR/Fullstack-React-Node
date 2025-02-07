import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendaPage from './VendaPage';

function Home() {
  return (
    <Container className="mt-5 text-center">
      <h1>Bem-vindo à Loja</h1>
      <Link to="/vendas">
        <Button variant="primary" className="mt-3">Ir para Página de Vendas</Button>
      </Link>
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendas" element={<VendaPage />} />
      </Routes>
    </Router>
  );
}

export default App;
