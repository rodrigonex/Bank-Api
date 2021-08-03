const AgencyRepository = require('../repositories/AgencyRepositories');

class AgencyController {
  async index(request, response) {
    const agencias = await AgencyRepository.findAll();

    response.json(agencias);
  }

  async show(request, response) {
    const { id } = request.params;
    const agencia = await AgencyRepository.getById(id);

    if (!agencia) {
      return response.status(400).json({ error: 'Agencia not found' });
    }
    response.json(agencia);
  }

  async store(request, response) {
    const { name, cod_agencia, endereco } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const codAgenciaExists = await AgencyRepository.getByCodAgencia(cod_agencia);

    if (codAgenciaExists) {
      return response.status(400).json({ error: 'This cod.Agencia is already user' });
    }

    const agencia = await AgencyRepository.create({ name, cod_agencia, endereco });

    response.send(agencia);
  }

  async update(request, response) {
    const { name, cod_agencia, endereco } = request.body;

    const { id } = request.params;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const idExists = await AgencyRepository.getById(id);

    if (!idExists) {
      return response.status(400).json({ error: 'Id not found' });
    }

    const codAgenciaExists = await AgencyRepository.getByCodAgencia(cod_agencia);

    if (codAgenciaExists && codAgenciaExists.id !== id) {
      return response.status(400).json({ error: 'This cod.Agencia already used' });
    }

    const agencia = await AgencyRepository.update(id, { name, cod_agencia, endereco });

    response.json(agencia);
  }

  async delete(request, response) {
    const { id } = request.params;

    const agencia = await AgencyRepository.getById(id);

    if (!agencia) {
      return response.status(400).json({ error: 'ID not found' });
    }

    await AgencyRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new AgencyController();
