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

2. **Obter Informações do Cliente**
   - **Método:** `GET`
   - **Endpoint:** `/clientes/lista_cliente`
   - **Descrição:** Recupera informações de um cliente específico com base no `codigo` e `loja` fornecidos.
   - **Requisitos Funcionais:**
     - Retorna um objeto JSON contendo os detalhes do cliente.
     - Deve retornar uma mensagem de erro se o cliente não for encontrado.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - Acesso seguro para prevenir a recuperação não autorizada de informações.

3. **Atualizar Cliente**
   - **Método:** `PUT`
   - **Endpoint:** `/clientes/atualizar`
   - **Descrição:** Atualiza as informações de um cliente específico.
   - **Requisitos Funcionais:**
     - Aceita um corpo JSON com os detalhes do cliente a serem atualizados.
     - Deve validar a existência do cliente antes da atualização.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - O tratamento de erros deve fornecer mensagens de erro significativas.

4. **Deletar Cliente**
   - **Método:** `DELETE`
   - **Endpoint:** `/clientes/deletar`
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
       "codigo": "002",
       "loja": "01",
       "nome": "Cliente Dois",
       "pessoa": "F",
       "endereco": "Rua A, 123",
       "cep": "00000-000",
       "bairro": "Bairro",
       "cidade": "Cidade",
       "estado": "Estado"
   }
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

2. **Obter Informações do Cliente**
   - **Método:** `GET`
   - **Endpoint:** `/clientes/lista_cliente`
   - **Descrição:** Recupera informações de um cliente específico com base no `codigo` e `loja` fornecidos.
   - **Requisitos Funcionais:**
     - Retorna um objeto JSON contendo os detalhes do cliente.
     - Deve retornar uma mensagem de erro se o cliente não for encontrado.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - Acesso seguro para prevenir a recuperação não autorizada de informações.

3. **Atualizar Cliente**
   - **Método:** `PUT`
   - **Endpoint:** `/clientes/atualizar`
   - **Descrição:** Atualiza as informações de um cliente específico.
   - **Requisitos Funcionais:**
     - Aceita um corpo JSON com os detalhes do cliente a serem atualizados.
     - Deve validar a existência do cliente antes da atualização.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - O tratamento de erros deve fornecer mensagens de erro significativas.

4. **Deletar Cliente**
   - **Método:** `DELETE`
   - **Endpoint:** `/clientes/deletar`
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
     - Os campos adicionais a serem incluídos são:
       - `data_nasc` (data de nascimento do cliente)/`abertura` (data de abertura da empresa)
       - `pais` (país de origem)
       - `email` (e-mail do cliente)
       - `dt_cadastro` (data de cadastro do cliente)
       - `DDD` (código de área do telefone)
       - `contato` (número de telefone do cliente)
     - Deve validar os dados de entrada antes da inclusão.
     - **Codificação:** O corpo da requisição deve ser tratado com codificação `WIN1252`, ao invés de `UTF-8`.
   - **Requisitos Não Funcionais:**
     - O tempo de resposta deve ser inferior a 200ms.
     - O tratamento de erros deve fornecer mensagens de erro significativas.

   **Requisição:**
   ```http
   POST /clientes/incluir
   Content-Type: application/json; charset=WIN1252

   {
       "codigo": "002",
       "loja": "01",
       "nome": "Cliente Dois",
       "pessoa": "F",
       "endereco": "Rua A, 123",
       "cep": "00000-000",
       "bairro": "Bairro",
       "cidade": "Cidade",
       "estado": "Estado",
       "data_nasc": "1990-01-01",
       "abertura": "2020-01-01",
       "pais": "Brasil",
       "email": "cliente@exemplo.com",
       "dt_cadastro": "2024-10-23",
       "DDD": "11",
       "contato": "91234-5678"
   }



## Tratamento de Erros

Todos os métodos devem capturar exceções e retornar mensagens de erro apropriadas em formato JSON. As respostas de erro padrão incluem:
- **Código de Status:** 500
- **Corpo:**
  ```json
  {
    "error": "Descrição do erro aqui"
  }





## Tratamento de Erros

Todos os métodos devem capturar exceções e retornar mensagens de erro apropriadas em formato JSON. As respostas de erro padrão incluem:
- **Código de Status:** 500
- **Corpo:**
  ```json
  {
    "error": "Descrição do erro aqui"
  }

```html
@startuml
actor "Usuário" as Usuario
actor "Administrador" as Admin

usecase "Listar Clientes" as UC1
usecase "Obter Informações do Cliente" as UC2
usecase "Incluir Cliente" as UC3
usecase "Atualizar Cliente" as UC4
usecase "Deletar Cliente" as UC5

Usuario --> UC1
Usuario --> UC2
Usuario --> UC3
Admin --> UC4
Admin --> UC5

@enduml
```
![](caso_e_uso.svg)
```
@startuml
class "TAB_CLIENTES" {
    + listar_clientes() : logical
    + lista_cliente() : logical
    + inclui_cliente() : logical
    + atualiza_cliente() : logical
    + deletar_cliente() : logical
}

class "Cliente" {
    - codigo : string
    - loja : string
    - nome : string
    - pessoa : string
    - endereco : string
    - cep : string
    - bairro : string
    - cidade : string
    - estado : string
    - data_nasc : string
    - abertura : string
    - pais : string
    - email : string
    - dt_cadastro : string
    - DDD : string
    - contato : string
}

TAB_CLIENTES --> Cliente : manipula >
@enduml

```
![](diagrama_de_classes.svg)





