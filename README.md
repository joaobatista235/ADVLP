# Documentação do frontend em Next.Js

## About

Next.js is a framework that makes it easy to create 'universal' React apps - React apps that do both client and server side rendering.

With Next.js, React pages are automatically rendered on both client and server side, without the hassle of setting up dependancies like webpack or babel and with automatic routing and without the constraints of projects like Create React App.

This is a starter project that provides an example of how to use Next.js with Express, SASS/SCSS, Bootstrap, Reactstrap (Boostrap 4 for React), the Ionicons icon set, examples of how to include data from remote REST APIs and incorporate an authentication system that supports both oAuth and Email using Passport (a popular authentication framework for Node.js).

This project exists to make it easier to get started a creating production app in React. You are invited to use it as a reference or to copy it and use it as a base for your own projects. Contributions to improve this project are welcome.

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/joaobatista235/ADVLP.git
    npm install
    npm run dev

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 npm start`).

# Documentação da API Protheus Clientes

## Visão Geral

Esta API fornece endpoints para gerenciar clientes no sistema Protheus. A classe `TAB_CLIENTES` implementa métodos para listar, recuperar, atualizar, deletar e incluir registros de clientes.

## Classe: `TAB_CLIENTES`

### Endpoints

1. **Listar Todos os Clientes**
   - **Método:** `GET`
   - **Endpoint:** `/clientes/listar`
   - **Descrição:** Recupera uma lista de todos os clientes.
   - **Requisitos Funcionais:**
     - Retorna um array JSON de clientes.
     - Deve filtrar registros excluídos (`D_E_L_E_T_ = ' '`).
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - Suporta paginação (tamanho da página padrão: 30).
     - O endpoint pode receber um parâmetro limit, que irá limitar o número de registros retornados na resposta.
     - O endpoint pode receber um parâmetro offset, que irá controlar a paginação, definindo a partir de qual registro os dados serão retornados, permitindo a navegação entre as páginas de resultados.
2. **Obter Informações do Cliente**

   - **Método:** `GET`
   - **Endpoint:** `/clientes/lista_cliente?codigo={?}&loja={?}`
   - **Descrição:** Recupera informações de um cliente específico com base no `codigo` e `loja` fornecidos.
   - **Requisitos Funcionais:**
     - Retorna um objeto JSON contendo os detalhes do cliente.
     - Deve retornar uma mensagem de erro se o cliente não for encontrado.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - Acesso seguro para prevenir a recuperação não autorizada de informações.

3. **Atualizar Cliente**

   - **Método:** `PUT`
   - **Endpoint:** `/clientes/atualizar?codigo={?}&loja={?}`
   - **Descrição:** Atualiza as informações de um cliente específico.
   - **Requisitos Funcionais:**
     - Aceita um corpo JSON com os detalhes do cliente a serem atualizados.
     - Deve validar a existência do cliente antes da atualização.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - O tratamento de erros deve fornecer mensagens de erro significativas.

4. **Deletar Cliente**

   - **Método:** `DELETE`
   - **Endpoint:** `/clientes/deletar?codigo={?}&loja={?}`
   - **Descrição:** Deleta um cliente específico com base no `codigo` e `loja` fornecidos.
   - **Requisitos Funcionais:**
     - Marca o registro do cliente como excluído, sem removê-lo fisicamente do banco de dados.
     - Deve retornar uma mensagem de sucesso após a exclusão bem-sucedida.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - Garantir a integridade dos dados durante as operações de exclusão.

5. **Incluir Cliente**

   - **Método:** `POST`
   - **Endpoint:** `/clientes/incluir`
   - **Descrição:** Adiciona um novo cliente ao sistema.
   - **Requisitos Funcionais:**
     - Aceita um corpo JSON com todos os campos obrigatórios para criar um novo cliente.
     - Deve validar os dados de entrada antes da inclusão.
     - **Codificação:** O corpo da requisição deve ser tratado com codificação `WIN1252`, ao invés de `UTF-8`.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - O tratamento de erros deve fornecer mensagens de erro significativas.

   **Requisição:**

   ```http
   POST /clientes/incluir
   Content-Type: application/json; charset=WIN1254
   {
    "codigo": "B1",
    "loja": "01",
    "nome": "JOAO",
    "pessoa": "F",
    "endereco": "Rua das Flores, 123",
    "cep": "12345-678",
    "bairro": "Centro",
    "cidade": "ITAPETININGA",
    "estado": "SP",
    "cnpj": "37872595893",
    "status": "1",
    "tipo": "F",
    "email": "joaobatista@gmail.com",
    "ddd": "15",
    "telefone": "998394854",
    "pais": "023",
    "contato": "contato"
   }
   ```
  - https://www.bcb.gov.br/acessoinformacao/legado?url=https:%2F%2Fwww.bcb.gov.br%2Frex%2FCenso2000%2Fport%2Fmanual%2Fpais.asp%3Fidpai%3DCENSOCE //Lista de codigos de paises
# Documentação da API Protheus Clientes

## Visão Geral

Esta API fornece endpoints para gerenciar clientes no sistema Protheus. A classe `TAB_CLIENTES` implementa métodos para listar, recuperar, atualizar, deletar e incluir registros de clientes.

## Tratamento de Erros

Todos os métodos devem capturar exceções e retornar mensagens de erro apropriadas em formato JSON. As respostas de erro padrão incluem:

- **Código de Status:** 500
- **Corpo:**
  ```json
  {
    "error": "Descrição do erro aqui"
  }
  ```
  <br>
 <hr>
<div align="center">
    <picture>
      <img alt="Diagrama 1" src="/backend/assets/caso_e_uso.svg" height="128">
    </picture>
</div>


 <br>
 <hr>


<div align="center">
    <picture>
      <img alt="Diagrama 2" src="/backend/assets/diagrama_de_classes.svg" >
    </picture>
</div>
