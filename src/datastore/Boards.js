import db from './connection'

const { boards } = db

const create = async board => {
  await boards.add(board)
}

export default {
  create
}
