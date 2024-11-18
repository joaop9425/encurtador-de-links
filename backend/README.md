# Encurtador de URLs

Esse projeto usa o NestJS.
Para tudo funcionar, instale o nest a partir do npm conforme a documentação:
(https://docs.nestjs.com/cli/overview)[Documentação do NestJS]

## Para encurtar
```bash
curl --request GET \
  --url 'http://localhost:3000/s?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_MOYF1vVBbc'
```

## Para voltar a URL original
```bash
curl --request GET \
  --url http://localhost:3000/OUMQJ
# Sempre será um código de 5 letras, todas em maiusculo.
# Esse código é gerado de forma pseudo-aleatória no passo anterior
```

## Para consultar todos os links
```bash
curl --request GET \
  --url http://localhost:3000/
```

### Para maior comodidade, use o Insomnia ou Postman 🤩
