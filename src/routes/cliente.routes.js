import express from 'express';
import { Cliente } from '../models/Cliente.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const clientes = await Cliente.findAll();
  res.json(clientes);
});

router.get('/:id', async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  cliente ? res.json(cliente) : res.status(404).send('Cliente não encontrado');
});

router.post('/', async (req, res) => {
  const novo = await Cliente.create(req.body);
  res.status(201).json(novo);
});

router.put('/:id', async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) return res.status(404).send('Cliente não encontrado');
  await cliente.update(req.body);
  res.json(cliente);
});

router.patch('/:id', async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) return res.status(404).send('Cliente não encontrado');
  await cliente.update(req.body);
  res.json(cliente);
});

router.delete('/:id', async (req, res) => {
  const cliente = await Cliente.findByPk(req.params.id);
  if (!cliente) return res.status(404).send('Cliente não encontrado');
  await cliente.destroy();
  res.sendStatus(204);
});

export default router;