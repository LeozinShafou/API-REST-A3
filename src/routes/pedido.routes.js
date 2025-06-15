import express from 'express';
import { Pedido } from '../models/Pedido.js';
import { Cliente } from '../models/Cliente.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const pedidos = await Pedido.findAll({ include: Cliente });
  res.json(pedidos);
});

router.get('/:id', async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id, { include: Cliente });
  pedido ? res.json(pedido) : res.status(404).send('Pedido não encontrado');
});

router.post('/', async (req, res) => {
  const novo = await Pedido.create(req.body);
  res.status(201).json(novo);
});

router.put('/:id', async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) return res.status(404).send('Pedido não encontrado');
  await pedido.update(req.body);
  res.json(pedido);
});

router.patch('/:id', async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) return res.status(404).send('Pedido não encontrado');
  await pedido.update(req.body);
  res.json(pedido);
});

router.delete('/:id', async (req, res) => {
  const pedido = await Pedido.findByPk(req.params.id);
  if (!pedido) return res.status(404).send('Pedido não encontrado');
  await pedido.destroy();
  res.sendStatus(204);
});

export default router;