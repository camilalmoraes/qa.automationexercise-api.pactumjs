# qa.automationexercise-api.pactumjs

Projeto de testes automatizados de API para a aplicação [ServeRest](https://serverest.dev/), desenvolvido com **PactumJS** e **Mocha**.

---

## 🛠️ Tecnologias

| Ferramenta | Finalidade |
|---|---|
| [PactumJS](https://pactumjs.github.io/) | Framework de testes de API |
| [Mocha](https://mochajs.org/) | Test runner |
| [Joi](https://joi.dev/) | Validação de schema (testes de contrato) |
| [Faker.js](https://fakerjs.dev/) | Geração de dados dinâmicos |
| [Allure Reports](https://allurereport.org/) | Relatório de execução |

---

## 📁 Estrutura do Projeto

```
project/
├── factories/
│   └── dataFactory.js        # Geração de dados dinâmicos com Faker
├── helpers/
│   └── joiHelper.js          # Função genérica de validação de schema
├── payloads/
│   ├── loginPayload.js        # Montagem do body de login
│   ├── produtosPayload.js     # Montagem do body de produto
│   └── usuarioPayload.js     # Montagem do body de usuário
├── schemas/
│   ├── loginSchema.js         # Schema Joi para login
│   ├── produtosSchema.js      # Schema Joi para produtos
│   └── usuariosSchema.js     # Schema Joi para usuários
├── services/
│   ├── login.service.js       # Requisições do endpoint /login
│   ├── produtos.service.js    # Requisições do endpoint /produtos
│   └── usuarios.service.js   # Requisições do endpoint /usuarios
└── spec/
    ├── login.test.js          # Casos de teste: Login
    ├── produto.test.js        # Casos de teste: Produtos
    └── usuarios.test.js      # Casos de teste: Usuários
config/
└── setup.js                  # Configuração global (baseUrl e timeout)
```

---

## ✅ Casos de Teste

### Login
| # | Caso de Teste | Tipo |
|---|---|---|
| 1 | POST /login - Realizar login com sucesso | Funcional |
| 2 | POST /login - Validar contrato do login com sucesso | Contrato |

### Usuários
| # | Caso de Teste | Tipo |
|---|---|---|
| 1 | POST /usuarios - Criar usuário com sucesso | Funcional |
| 2 | POST /usuarios - Validar contrato da criação de usuário | Contrato |
| 3 | DELETE /usuarios/:id - Excluir usuário por ID com sucesso | Funcional |

### Produtos
| # | Caso de Teste | Tipo |
|---|---|---|
| 1 | POST /produtos - Cadastrar produto com sucesso | Funcional |
| 2 | POST /produtos - Validar contrato do cadastro de produto | Contrato |

---

## ⚙️ Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- [Java](https://www.java.com/) JDK 8+ (necessário para gerar o relatório Allure)
- [Allure CLI](https://allurereport.org/docs/install/) instalado globalmente

### Instalando o Allure CLI

```bash
npm install -g allure-commandline
```

---

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/camilalmoraes/qa.automationexercise-api.pactumjs.git

# Acesse o diretório
cd qa.automationexercise-api.pactumjs

# Instale as dependências
npm install
```

---

## ▶️ Execução dos Testes

### Rodar todos os testes
```bash
npm test
```

### Rodar os testes com geração de dados para o Allure
```bash
npm run test:report
```

### Gerar o relatório Allure
```bash
npm run allure:generate
```

### Visualizar o relatório no navegador
```bash
npm run allure:serve
```

---

## 🔁 Pipeline CI/CD

O projeto possui pipeline configurada no **GitHub Actions** que executa automaticamente os testes a cada `push` ou `pull request` na branch `main`.

O arquivo de configuração está em `.github/workflows/api-tests.yml`.