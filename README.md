# 🧾 Projeto ERP

Um sistema ERP (Enterprise Resource Planning) web completo, desenvolvido para facilitar a gestão de empresas de forma integrada. O sistema permite:

- Cadastro de clientes
- Cadastro e gerenciamento de ordens de serviço
- Controle de fornecedores
- Visualização de dados importantes da empresa
- Cálculo automatizado de peças e serviços

## 🚀 Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e frameworks:

- **Ruby on Rails** – Backend, API REST e lógica de negócio
- **TypeScript** – Tipagem segura no frontend
- **React.js** – Interface do usuário moderna e reativa
- **PostgreSQL** – Banco de dados relacional robusto

---



# Backend Ruby on Rails + PostgreSQL com Docker

O backend é uma API Rails configurada para usar PostgreSQL, rodando dentro de containers Docker via Docker Compose.

## Pré-requisitos

- Docker instalado ([https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/))
- Docker Compose instalado (já vem incluso no Docker Desktop)
- (Opcional) Terminal com permissão para usar Docker sem sudo (configurar grupo `docker`)

---

## Primeira configuração (após clonar o repositório)

1. Suba os containers em background:

```bash
docker compose up -d
````

2. Instale as dependências Ruby (gems) dentro do container web:

```bash
docker compose exec web bundle install
```

3. Crie o banco de dados:

```bash
docker compose exec web rails db:create
```

4. (Opcional) Rode as migrações, se houver:

```bash
docker compose exec web rails db:migrate
```

---

## Rodando a aplicação

Para rodar a aplicação e ver os logs no terminal:

```bash
docker compose up
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

---

## Workflow após atualizar o código (`git pull`)

Sempre que atualizar o código, execute:

```bash
docker compose up -d
docker compose exec web bundle install
docker compose exec web rails db:migrate
```

---

## Parar a aplicação

```bash
docker compose down
```

---

## Limpar containers órfãos e volumes (ATENÇÃO: apaga dados do banco)

```bash
docker compose down --remove-orphans -v
```

---

## Dúvidas ou problemas?

Abra uma issue ou fale com o time de infraestrutura.

---

## Observações

* As gems Ruby ficam instaladas dentro do container, por isso é necessário rodar `bundle install` após puxar atualizações que modifiquem o `Gemfile`.
* O banco de dados PostgreSQL está rodando em container isolado, configurado para persistir dados em volume Docker.
* Caso receba erro de permissão para usar o Docker, certifique-se que seu usuário está no grupo `docker` ou rode os comandos com `sudo`.
* Para abrir o console Rails dentro do container:

```bash
docker compose exec web rails console
```

---

## Rodando o Frontend (Vite + React)

Para executar o frontend localmente, siga os passos abaixo:

### Pré-requisitos

* Node.js instalado (recomendo a versão 16 ou superior)
* npm ou yarn instalado (npm já vem junto com o Node.js)

### Passos para rodar o frontend

1. Navegue até a pasta do frontend (exemplo: `frontend/`):

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
# ou, se usar yarn
# yarn
```

3. Inicie o servidor de desenvolvimento do Vite:

```bash
npm run dev
# ou, se usar yarn
# yarn dev
```

4. Abra o navegador e acesse o endereço exibido no terminal, normalmente:

```
http://localhost:5173
```

Agora o frontend estará rodando em modo de desenvolvimento, com hot reload para facilitar o desenvolvimento.

---

Quer que eu faça um trecho para a parte de build também?

---

# Boa codagem! 🚀

```

---

