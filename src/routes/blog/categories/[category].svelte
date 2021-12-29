<script context="module">
  export const load = async ({ page, fetch }) => {
    const currentCategory = page.params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const matchingPosts = posts
      .filter(post => post.meta.categories.includes(currentCategory))

    return {
      props: {
        posts: matchingPosts
      }
    }
  }
</script>