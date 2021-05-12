RentalX - Car Rental REST API

For API Documentation, follow these steps:

1. Clone this repository
2. run `yarn` to install all dependencies
   3)install docker and docker-compose: view more on https://docs.docker.com/engine/install
3. run `docker-compose up`
4. run `yarn dev` to run application locally
5. acess localhost:3333/api-docs

This Application respects Uncle Bob's SOLID principles. Find out more about SOLID principles on http://cleancoder.com

# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro.

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
**RN**
O carro deve ser cadastrado com disponibilidade por padrão.
**RN**
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**
Deve ser possível listar todos os carros disponíveis.
Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
Deve ser possível listar todos os carros disponíveis pelo nome da marca.
Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**
Deve ser possível cadastrar uma especificação para um carro.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro.

**RNF**
Utilizar o multer para upload dos arquivos.

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel.

**RN**
O aluguel deve ter duração mínima de 24 horas.
Não deve ser possível cadastrar um novo aluguel caso já exista um aliguel aberto para o mesmo usuário.
Não deve ser possível cadastrar um novo aluguel caso já exista um aliguel aberto para o mesmo carro.
O usuário deve estar logado na aplicação.
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.

# Devolução de Carro

**RF**
Deve ser possível realizar a devolução de um carro.

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deve ser calculado o total do aluguel.
Caso o horário de devolução for superior ao previsto para entrega, deverá ser cobrada multa proporcional aos período de atraso.
Caso houver multa, o valor deverá ser somado ao total do aluguel.

# Listagem de alugueis para usuário

**RF**
Deve ser possível realizar a busca de todos os alugueis para o usuário.

**RN**
O usuário deve estar logado na aplicação.
