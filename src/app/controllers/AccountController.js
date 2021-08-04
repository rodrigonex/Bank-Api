const AccountRepository = require('../repositories/AccountRepositories');

class AccountController {
  async index(request, response) {
    const accounts = await AccountRepository.findAll();

    response.json(accounts);
  }

  async show(request, response) {
    const { id } = request.params;

    const account = await AccountRepository.getById(id);

    if (!account) {
      return response.status(400).json({ error: 'Not found' });
    }

    response.json(account);
  }

  async store(request, response) {
    const {
      name, cpf, birthDate, sex, mothersName, phone, address, accountType, balance,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    if (!cpf) {
      return response.status(400).json({ error: 'CPF is required' });
    }

    if (!accountType) {
      return response.status(400).json({ error: 'accountType is required' });
    }

    const newAccount = await AccountRepository.create({
      name, cpf, birthDate, sex, mothersName, phone, address, accountType, balance,
    });

    response.json(newAccount);
  }

  async update(request, response) {
    const { id } = request.params;
    const {
      name, cpf, birthDate, sex, mothersName, phone, address, accountType, balance,
    } = request.body;

    const accountExist = await AccountRepository.getById(id);

    if (!accountExist) {
      return response.status(400).json({ error: 'not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    if (!cpf) {
      return response.status(400).json({ error: 'CPF is required' });
    }

    if (!accountType) {
      return response.status(400).json({ error: 'accountType is required' });
    }

    const account = await AccountRepository.update(id, {
      name, cpf, birthDate, sex, mothersName, phone, address, accountType, balance,
    });

    response.json(account);
  }

  async delete(request, response) {
    const { id } = request.params;

    const account = await AccountRepository.getById(id);

    if (!account) {
      return response.status(400).json({ error: 'ID not found' });
    }
    await AccountRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new AccountController();
