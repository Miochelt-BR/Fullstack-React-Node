import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function VendaPage() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [botaoHabilitado, setBotaoHabilitado] = useState(false);

  useEffect(() => {
    setBotaoHabilitado(produto.trim() !== '' && quantidade.trim() !== '');
  }, [produto, quantidade]);

  const handleVenda = () => {
    alert(`Venda realizada: ${quantidade}x ${produto}`);
  };

  return (
    <Container className="mt-5">
      <h2>Realizar Venda</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o nome do produto"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="number"
            placeholder="Digite a quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="success"
          onClick={handleVenda}
          disabled={!botaoHabilitado}
        >
          Realizar Venda
        </Button>

        <Link to="/" className="d-block mt-3">
          <Button variant="secondary">Voltar para Home</Button>
        </Link>
      </Form>
    </Container>
  );
}

export default VendaPage;
