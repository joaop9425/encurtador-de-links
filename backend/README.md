# Encurtador de URLs

## Para encurtar
```bash
curl --request GET \
  --url 'http://localhost:3000/s?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_MOYF1vVBbc' \
  --header 'User-Agent: insomnia/10.1.1'
```

## Para voltar a URL original
```bash
curl --request GET \
  --url http://localhost:3000/OUMQJ \
  --header 'User-Agent: insomnia/10.1.1'
# Sempre será um código de 5 letras, todas em maiusculo.
# Esse código é gerado de forma pseudo-aleatória no passo anterior
```

## Para consultar todos os links
```bash
curl --request GET \
  --url http://localhost:3000/ \
  --header 'User-Agent: insomnia/10.1.1'
```

### Para maior comodidade, use o Insomnia ou Postman 🤩
