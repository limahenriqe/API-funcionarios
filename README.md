# API de Funcionários

API responsável pelo gerenciamento dos funcionários do sistema. O projeto permite cadastrar, listar e consultar informações dos funcionários, servindo como parte da arquitetura baseada em microsserviços.

## Tecnologias utilizadas

* Node.js
* Express.js
* Sequelize
* MySQL
* Axios
* CORS
* Jest
* Supertest
* GitHub Actions

## Funcionalidades

* Cadastro de funcionários
* Listagem de funcionários
* Atualização (ou edição) de funcionários
* Consulta de informações dos funcionários
* Integração com outros serviços por meio de APIs
* Persistência dos dados no MySQL
* Testes automatizados
* Pipeline de Integração Contínua (CI)

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js
* MySQL
* npm

## Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Acesse a pasta do projeto:

```bash
cd api-funcionarios
```

Instale as dependências:

```bash
npm install
```

## Configuração do banco de dados

Crie um banco de dados MySQL:

```sql
CREATE DATABASE empresa;
```

Configure as credenciais do banco no arquivo `.env`.

Exemplo:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=empresa
DB_USER=root
DB_PASSWORD=sua_senha
```

> Não envie o arquivo `.env` para o GitHub, pois ele pode conter informações privadas.

## Executando o projeto

Inicie a API:

```bash
npm start
```

A API será executada na porta configurada no projeto.

## Testes

Para executar os testes automatizados:

```bash
npm test
```


