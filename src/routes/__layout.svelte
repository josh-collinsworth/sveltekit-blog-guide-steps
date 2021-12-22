<script context="module">
  export const load = ({ page }) => {
    const currentRoute = page.path

    return {
      props: {
        currentRoute
      }
    }
  }
</script>

<script>
  import Header from '$lib/components/Header.svelte'
  import '$lib/scss/style.scss'

  import { fade } from 'svelte/transition'

  export let currentRoute
</script>

<Header />

{#key currentRoute}
  <main in:fade={{ duration: 150, delay: 150  }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}

<footer>Hello, I'm the footer.</footer>