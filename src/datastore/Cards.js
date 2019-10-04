import db from './Connection'

const { cards } = db

const create = async card => {
  await cards.add(card)

  return card
}

const count = async list => {
  const total = await cards.where({ list }).count()

  return total
}

export default {
  create,
  count
}
