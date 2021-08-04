# Bank Api

Para iniciar o projeto e necessário baixar a dependencias do projeto, no terminal utilize o **yarn** ou **npm**.

Apos utilize o **yarn dev** ou **npm dev** para iniciar o projeto

 A api vai abrir no seguinte local: **`http://localhost:3000`**

# Requisitos:

  **Criar lista de agencias: rota `http://localhost:3000/agencies`**
    - Validações
        - Nome e cod. loja não poder ter sido usado antes
    - Nome
    - id
    - cód.. loja
    - Endereço
    - Data de criação
- **Editar agencia - rota `http://localhost:3000/agencies/id`**
- **Pesquisar**
    - Por ID  rota `http://localhost:3000/agencies/id`
    - Todas  rota `http://localhost:3000/agencies`
- **Deletar agencia**
    - Validação
        - Retornar um erro caso o id não exista
     rota `http://localhost:3000/agencies/id`
- **Criar conta - rota `http://localhost:3000/agencies`** 
    - Validações:
        - Não pode ter mais de uma conta com o mesmo cpf
        - Não pode ter mais de uma conta com o mesmo email
    - Nome
    - id
    - CPF
    - Data nascimento
    - sexo
    - nome da mãe
    - telefone
    - Endereço
    - saldo
    - tipo de conta

- **Transações**
    - deposito
        - validação
            - Verificar se a conta informado existe
    - saque
        - Verificações
            - Verificar se tem valor disponível
    - Transferência entre contas
        - Validações:
            - Verificar se o remente tem saldo suficiente para transação.
            - Verificar se a conta remente e o destinatária existe.
        - ID do remetente e destinatário.
        - id da transação
    - **Saque**