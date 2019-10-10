import db from '../Connection'

const { lists } = db

const create = async list => {
  await lists.add(list)

  return list
}

const getAll = async board => {
  const all = await lists.where({ board }).toArray()

  return all
}

const update = async (id, name) => {
  await lists.update(id, { name })
}

const remove = async listID => {
  await lists.delete(listID)
}

export default {
  create,
  getAll,
  update,
  remove
}
