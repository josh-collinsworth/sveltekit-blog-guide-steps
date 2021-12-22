<script context="module">
  export async function load({ page }) {
    try {
      const file = await import(`./_posts/${page.params.slug}.md`)
      
      const Content = await file.default
      const meta = await file.metadata
      
      return {
        props: {
          Content, meta
        }
      }
    } catch(error) {
      return {
        status: 404,
        error: 'Sorry, No post found with that slug. ' + error.message
      }
    }
  }
</script>


<script>
  export let Content, meta

  import { onMount } from 'svelte'

  onMount(() => {
    // const headings = document.querySelectorAll('h2, h3, h4, h5, h6')

    // headings.forEach(heading => {
    //   heading.addEventListener('click', () => {
    //     console.log(window.location.href + '#' + heading.id)
    //     navigator.clipboard.writeText(window.location.href + '#' + heading.id)
    //   })
    // })
  })
</script>

<svelte:head>
  <title>My blog - {meta.title}</title>
</svelte:head>


<article>
  <h1>{meta.title}</h1>
  <p>Published: {meta.date}</p>

  <Content />
</article>


<style lang="scss">

</style>