import express from 'express';
import cors from 'cors';
import clienteRoutes from './src/routes/cliente.routes.js';
import pedidoRoutes from './src/routes/pedido.routes.js';
import { sequelize } from './src/database/database.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/clientes', clienteRoutes);
app.use('/pedidos', pedidoRoutes);

app.listen(PORT, async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (err) {
    console.error('Erro ao conectar com o banco de dados:', err);
  }
});