const db = require('../database/connection')

module.exports = {
  async create(req, resp) {

    const {
      email,
      password
    } = req.body

    try { 
      const userEmail = await db('users').select('email').where('email', email)
      if (!userEmail.length >= 1) {
        console.log('Email não existe')
        return resp.status(401).json({ error: 'Informe um email existente' });
      }
      await db('users').update('password', password).where('email', email)

      return resp.status(200)
    } catch (err) {
      console.log(err)
      return resp.status(401).json({ error: 'Erro ao fazer a requizição' });
    }

  },
}
