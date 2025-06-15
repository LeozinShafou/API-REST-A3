# API RESTful - A3 SDM

Projeto da disciplina de Sistemas Distribuídos e Mobile (A3).

## Autor
- Leonardo Cauã Gomes Rodrigues - RA: 323220946

## Tecnologias
- Node.js
- Express
- Sequelize ORM
- SQLite

## Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o projeto:

```bash
node index.js
```

3. Teste os endpoints com Postman ou Insomnia.

## Endpoints

### Clientes
- `GET /clientes`
- `GET /clientes/:id`
- `POST /clientes`
- `PUT /clientes/:id`
- `PATCH /clientes/:id`
- `DELETE /clientes/:id`

### Pedidos
- `GET /pedidos`
- `GET /pedidos/:id`
- `POST /pedidos`
- `PUT /pedidos/:id`
- `PATCH /pedidos/:id`
- `DELETE /pedidos/:id`