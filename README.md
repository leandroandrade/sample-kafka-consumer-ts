# sample-kafka-consumer-ts

Boostrap para consumer kafka usando Typescript.


## Começando

Para inciar o projeto no ambiente local, renomear o arquivo ```.env.development``` para ```.env```

### Iniciando kafka broker:

Para iniciar o broker Kafka no ambiente local, executar os comandos:

1. Iniciar ambiente:
```
docker-compose up -d
```

O broker será iniciado no endereço ```localhost:9094```

2. Finalizar ambiente:
```
docker-compose down
```

### Scripts disponíveis:

1. Executar os testes:
```
npm test
```

2. Executar aplicação no ambiente local:
```
npm run dev
```

3. Build da aplicação:
```
npm run build
```

4. Executar aplicação:
```
npm start
```

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE.md](https://github.com/leandroandrade/sample-kafka-consumer-ts/tree/main/LICENSE) para obter detalhes
