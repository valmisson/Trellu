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

const getAll = async board => {
  const all = await cards.where({ board }).toArray()

  return all
}

const update = async (id, name) => {
  await cards.update(id, { name })
}

const remove = async cardID => {
  await cards.delete(cardID)
}

const cleanChild = async list => {
  const allCards = await cards.where({ list }).toArray()

  allCards.forEach(async ({ id }) => {
    await remove(id)
  })
}

const move = async (id, list) => {
  await cards.update(id, { list })
}

export default {
  create,
  count,
  getAll,
  update,
  remove,
  cleanChild,
  move
}
