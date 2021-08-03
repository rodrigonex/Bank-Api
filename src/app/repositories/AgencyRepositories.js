const { v4 } = require('uuid');

let agency = [
  {
    id: v4(),
    name: 'Central',
    cod_agencia: '001',
    endereco: 'teixeira mendes 181',
    dataCriacao: Date(),
  },
  {
    id: v4(),
    name: 'leste',
    cod_agencia: '002',
    endereco: 'rua santa luzia 367',
    dataCriacao: Date(),
  },
];

class AgencyRepository {
  findAll() {
    return new Promise((resolve) => resolve(agency));
  }

  getById(id) {
    return new Promise((resolve) => resolve(
      agency.find((agencia) => agencia.id === id),
    ));
  }

  getByCodAgencia(cod_agencia) {
    return new Promise((resolve) => resolve(
      agency.find((agencia) => agencia.cod_agencia === cod_agencia),
    ));
  }

  create({
    name, cod_agencia, endereco,
  }) {
    return new Promise((resolve) => {
      const newAgencia = {
        id: v4(),
        name,
        cod_agencia,
        endereco,
        dataCriacao: Date(),
      };

      agency.push(newAgencia);

      resolve(newAgencia);
    });
  }

  update(id, { name, cod_agencia, endereco }) {
    return new Promise((resolve) => {
      const updateAgencia = {
        id,
        name,
        cod_agencia,
        endereco,
        dataCriacao: Date(),
      };

      agency = agency.map((agencia) => (agencia.id === id ? updateAgencia : agencia));

      resolve(updateAgencia);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      agency = agency.filter((agencia) => agencia.id !== id);

      resolve();
    });
  }
}

module.exports = new AgencyRepository();
