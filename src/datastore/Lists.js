import db from './Connection'

const { lists } = db

const create = async list => {
  await lists.add(list)

  return list
}

const getAll = async board => {
  const all = await lists.where({ board }).toArray()

  return all
}

export default {
  create,
  getAll
}
