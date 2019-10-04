import db from './Connection'

const { lists } = db

const create = async list => {
  await lists.add(list)
}

export default {
  create
}
