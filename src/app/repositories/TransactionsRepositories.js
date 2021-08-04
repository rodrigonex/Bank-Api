const { v4 } = require('uuid');

let transation = [];

class TransactionsRepository {
  deposit(value, id) {
    return new Promise((resolve) => {
      const newTransation = {
        idDeposit: v4(),
        idAccount: id,
        balance: value,
        dateDeposit: Date(),
      };

      transation.push(newTransation);

      resolve(newTransation);
    });
  }

  tranfer({ id, idDestinatario, value }) {
    return new Promise((resolve) => {
      const newTransation = {
        idTranfer: v4(),
        idRemetente: id,
        idDestinatario,
        balance: value,
        dateTranfer: Date(),
      };

      transation.push(newTransation);

      resolve(newTransation);
    });
  }

  withdraw(id, withdraw) {
    return new Promise((resolve) => {
      const newTransation = {
        idWithdraw: v4(),
        id,
        balance: withdraw,
      };

      transation.push(newTransation);

      resolve(newTransation);
    });
  }
}

module.exports = new TransactionsRepository();
