### Install

Configurar `.env` e inicializar aplicação
```sh
cp .env.example .env
docker-compose up -d --build
```

A API irá iniciar na porta 5000, a rota principal é a de `products` com os métodos REST padrão:
- GET `/products`: Retorna todos os produtos
- POST `/products`: Insere um produto novo
- DELETE `/products/:productId`: Deleta o produto
- PUT `/products/:productId`: Atualiza o produto
