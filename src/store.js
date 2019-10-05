import { writable } from 'svelte/store'

function formCreateBoard () {
  const { update, subscribe } = writable(false)

  return {
    subscribe,
    show: () => update(n => true),
    close: () => update(n => false)
  }
}

export const formCreate = formCreateBoard()
export const lists = writable([])
export const cards = writable([])
