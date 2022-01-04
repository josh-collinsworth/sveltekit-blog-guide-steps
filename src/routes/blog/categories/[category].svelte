<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()
    
    const matchingPosts = posts
      .filter(post => post.meta.categories.includes(currentCategory))

    return {
      props: {
        category: currentCategory,
        posts: matchingPosts
      }
    }
  }
</script>

<script>
  export let category
  export let posts = []
</script>

<h1>Posts in {category}:</h1>

{#if posts.length}
  {#each posts as post}
  <h2>
    <a href={post.path}>
      {post.meta.title}
    </a>
  </h2>
  Published {post.meta.date}
  {/each}
{:else}
  <h2>Sorry, no posts found matching that category.</h2>
{/if}