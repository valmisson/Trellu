<script>
  import { fade } from 'svelte/transition'
  import { router } from '@spaceavocado/svelte-router'

  import { formCreate } from '@store'
  import { UID, generateLink } from '@utils'
  import { BoardsDB } from '@datastore'

  const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'pink']
  let selected = 0

  let name
  let color = colors[0]

  const select = value => e => {
    selected = e.target.id

    color = value
  }

  async function createBoard () {
    if (!name) return

    const id = UID()

    await BoardsDB.create({ id, name, color })

    formCreate.close()

    // go to new board
    $router.push(generateLink(name, id))
    location.reload()
  }
</script>

<style>
  .modal--overlay {
    background-color: rgba(93, 93, 93, 0.35);
    height: 100vh;
    position: fixed;
    width: 100vw;
    z-index: 998;
  }

  .form__modal {
    background-color: var(--white);
    border-radius: 3px;
    display: grid;
    left: 50%;
    padding: 22px;
    position: absolute;
    top: 60px;
    transform: translate(-50%, 0);
    width: 90%;
    z-index: 999;
  }

  .form__input {
    display: flex;
    flex-direction: column;
  }

  .form__input > input {
    margin-top: 10px;
  }

  .form__colors {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: repeat(3, 45px);
    justify-content: center;
    margin-top: 10px;
  }

  .btn--color {
    border-radius: 3px;
    height: 45px;
    margin-top: 20px;
  }

  .selected::before {
    content: "\e906"; /* .icon-selected */
    color: var(--white);
    font-family: 'icons';
  }

  .btn--create {
    margin-top: 35px;
  }

  @media (min-width: 768px) {
    .form__modal {
      grid-column-gap: 5%;
      grid-template-columns: 69% 25%;
      top: 100px;
    }

    .form__input {
      border-right: 1px solid var(--grey);
      padding-right: 6%;
    }

    .form__colors {
      margin-top: 20px;
    }

    .btn--color {
      margin-top: 5px;
      margin-bottom: 15px;
    }

    .btn--create {
      width: 40%;
      margin-top: -35px;
    }
  }

  @media (min-width: 920px) {
    .form__modal {
      width: 70%;
    }
  }

  @media (min-width: 1200px) {
    .form__modal {
      width: 45%;
      grid-column-gap: 5%;
      grid-template-columns: 68% 25%;
    }

    .form__colors {
      grid-template-columns: repeat(3, 40px);
    }

    .btn--color {
      height: 40px;
    }
  }
</style>

<div class="modal--overlay" on:click={formCreate.close} transition:fade></div>

<section class="form__modal" transition:fade>
  <div class="form__input">
    <label>Nome do Quadro</label>

    <!-- svelte-ignore a11y-autofocus -->
    <input type="text" placeholder="Digite o nome do quadro" bind:value={name} autofocus>
  </div>

  <div class="form__colors">
    {#each colors as color, index}
      <button class={`btn--color ${color} ${selected == index ? 'selected' : ''}`}
        on:click={select(color)} id={index}></button>
    {/each}
  </div>

  <button class="btn--create btn btn--primary" on:click={createBoard} disabled={!name}>CRIAR QUADRO</button>
</section>
