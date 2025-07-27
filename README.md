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

# Backend – Ruby on Rails + PostgreSQL via Docker

A API do projeto foi desenvolvida com **Ruby on Rails**, conectada a um banco **PostgreSQL** que roda em container Docker. O Rails roda **localmente** (fora do container), enquanto o PostgreSQL roda **dentro de um container Docker**.

## Tecnologias e versões utilizadas

| Tecnologia       | Versão recomendada |
|------------------|--------------------|
| Ruby             | 3.3.1              |
| Rails            | 7.1.5.1            |
| Docker           | 28.3.2             |
| Docker Compose   | v2.38.2            |
| PostgreSQL       | >= 15 (via Docker) |

> **Links úteis:**
> - [Ruby](https://www.ruby-lang.org/pt/downloads/)
> - [Rails](https://guides.rubyonrails.org/)
> - [Docker](https://docs.docker.com/get-docker/)
> - [Docker Compose](https://docs.docker.com/compose/)
> - [PostgreSQL](https://www.postgresql.org/docs/)

---

## Pré-requisitos

Antes de rodar o backend, tenha instalado:

- Ruby 3.3.1 (recomendo usar `rbenv` ou `rvm`)
- Bundler (`gem install bundler`)
- Docker e Docker Compose
- Node.js (para compilar assets caso necessário)

---


## Como instalar os pré-requisitos

### Ruby 3.3.1

Recomendo usar o [rbenv](https://github.com/rbenv/rbenv) para instalar e gerenciar a versão correta do Ruby:

```bash
# Instalar rbenv (exemplo no Ubuntu)
sudo apt update
sudo apt install -y git build-essential libssl-dev libreadline-dev zlib1g-dev

git clone https://github.com/rbenv/rbenv.git ~/.rbenv
cd ~/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

# Instalar plugin ruby-build
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build

# Instalar Ruby 3.3.1
rbenv install 3.3.1
rbenv global 3.3.1

# Verificar
ruby -v
````

---

### Bundler

Com o Ruby instalado, instale o Bundler (gerenciador de gems):

```bash
gem install bundler
```

---

### Docker + Docker Compose

Siga o guia oficial de instalação:

* [Docker para Linux](https://docs.docker.com/engine/install/)
* [Docker para Windows/macOS](https://docs.docker.com/get-docker/)

Verifique se está tudo certo:

```bash
docker --version
docker compose version
```

Se necessário, adicione seu usuário ao grupo `docker`:

```bash
sudo usermod -aG docker $USER
newgrp docker
```


--- 

## Como rodar o backend

### 1. Subir o banco de dados PostgreSQL (container Docker)

Na raiz do projeto, rode:

```bash
docker compose up -d db
```
### 2. Passo a passo para rodar o backend (localmente)

Acessar a pasta do backend:

```bash
cd backend
```

Instalar as dependências Ruby, Criar, migrar e preparar o banco de dados,
Iniciar o servidor Rails:

```bash
bundle install
bin/rails db:prepare
bin/rails server
```
---
### 3. aplicação rodando na porta:

```bash
http://localhost:3000/
```

## Rodando o Frontend (Vite + React)

Para executar o frontend localmente, siga os passos abaixo:

### Pré-requisitos

* Node.js instalado (recomendo a versão 16 ou superior)
* npm ou yarn instalado (npm já vem junto com o Node.js)

---

## Node.js + npm

O frontend do projeto requer o Node.js (com npm). Veja abaixo como instalar em diferentes sistemas operacionais:

---

### 🐧 Linux / 🍎 macOS (via NVM - recomendado)

A maneira mais segura e flexível é usar o [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm):

```bash
# Instalar o NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc  # ou source ~/.zshrc, se estiver usando ZSH

# Instalar a versão LTS mais recente do Node.js
nvm install --lts
nvm use --lts

# Verificar se está funcionando
node -v
npm -v
````

> O `npm` já vem incluso com o Node.js.

---

### 🪟 Windows

1. Acesse o site oficial: [https://nodejs.org/](https://nodejs.org/)
2. Baixe a **versão LTS recomendada**.
3. Execute o instalador e siga as instruções da instalação padrão.
4. Após instalar, abra o **Prompt de Comando** ou **PowerShell** e verifique:

```bash
node -v
npm -v
```

> O `npm` é instalado junto com o Node.js.

---

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

