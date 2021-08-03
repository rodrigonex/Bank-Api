const { v4 } = require('uuid');

let accounts = [
  {
    id: v4(),
    name: 'rodrigo elias mota',
    cpf: '12325674512',
    birthDate: '24/12/1991',
    sex: 'masculino',
    mothersName: 'graciana de fatima',
    phone: '1235684',
    address: 'Rua santa luzia',
    accountType: 'corrente',
    balance: '1000',
    registrationDate: Date(),
  },
  {
    id: v4(),
    name: 'Pedro marcos',
    cpf: '12325674857',
    birthDate: '24/12/1989',
    sex: 'masculino',
    mothersName: 'Maria de fatima',
    phone: '1235684578',
    balance: '1000',
    address: 'Rua Central',
    accountType: 'corrente',
    registrationDate: Date(),
  },
];

class AccountRepository {
  findAll() {
    return new Promise((resolve) => resolve(accounts));
  }

  getById(id) {
    return new Promise((resolve) => resolve(accounts.find(
      (account) => account.id === id,
    )));
  }

  create({
    name, cpf, birthDate, sex, mothersName, phone, address, accountType, balance,
  }) {
    return new Promise((resolve) => {
      const newAccount = {
        id: v4(),
        name,
        cpf,
        birthDate,
        sex,
        mothersName,
        phone,
        address,
        balance,
        accountType,
        registrationDate: Date(),
      };
      accounts.push(newAccount);

      resolve(newAccount);
    });
  }

  update(id, {
    name, cpf, birthDate, sex, mothersName, phone, address, accountType, balance,
  }) {
    return new Promise((resolve) => {
      const updateAccount = {
        id,
        name,
        cpf,
        birthDate,
        sex,
        mothersName,
        phone,
        address,
        balance,
        accountType,
        registrationDate: Date(),
      };

      accounts = accounts.map((account) => (account.id === id ? updateAccount : account));

      resolve(updateAccount);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      accounts = accounts.filter((account) => account.id !== id);

      resolve();
    });
  }
}

module.exports = new AccountRepository();
