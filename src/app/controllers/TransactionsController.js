const TransactionsRepository = require('../repositories/TransactionsRepositories');
const AccountRepository = require('../repositories/AccountRepositories');

class TransactionsController {
  async deposit(request, response) {
    const { id } = request.params;
    const value = request.body.balance;

    const AccountExist = await AccountRepository.getById(id);

    if (!AccountExist) {
      return response.status(400).json({ error: 'not found' });
    }

    const newBalance = Number(AccountExist.balance + value);

    await AccountRepository.update(id, { ...AccountExist, balance: newBalance.toString() });

    const deposit = await TransactionsRepository.deposit(value, id);

    response.json(deposit);
  }

  async withdraw(request, response) {
    const { id } = request.params;
    const { withdraw } = request.body;

    const accountExists = await AccountRepository.getById(id);

    if (!accountExists) {
      return response.status(400).json({ error: 'Not found' });
    }

    if (!withdraw) {
      return response.status(400).json({ error: 'Value the withdraw is required ' });
    }

    if (Number(accountExists.balance < withdraw)) {
      return response.status(400).json({ error: 'Insufficient balance for withdrawal' });
    }

    const remainingBalance = Number(accountExists.balance - withdraw);

    await AccountRepository.update(id, { ...accountExists, balance: remainingBalance.toString() });

    const transationWithdraw = await TransactionsRepository.withdraw(id, withdraw);

    response.json(transationWithdraw);
  }

  async transfer(request, response) {
    const { id } = request.params;
    const { value, idDestinatario } = request.body;

    function setError(cod, mensage) {
      return response.status(cod).json({ error: mensage });
    }

    if (!value) {
      return setError(400, 'Value is required');
    }

    const AccountExist = await AccountRepository.getById(id);

    const DetinatarioExist = await AccountRepository.getById(idDestinatario);

    if (!AccountExist) {
      return setError(400, 'not found');
    }

    if (!DetinatarioExist) {
      return setError(400, 'Destinario not valid');
    }

    if ((Number(AccountExist.balance - value)) < 0) {
      return setError('400', 'saldo insuficiente para transação.');
    }
    const saldoRementente = Number(AccountExist.balance - value);

    const saldoDestinatario = Number(DetinatarioExist.balance) + Number(value);

    await AccountRepository.update(id, { ...AccountExist, balance: saldoRementente.toString() });

    await AccountRepository.update(idDestinatario,
      { ...DetinatarioExist, balance: saldoDestinatario.toString() });

    const transation = await TransactionsRepository.tranfer({ id, idDestinatario, value });

    response.json(transation);
  }
}

module.exports = new TransactionsController();
