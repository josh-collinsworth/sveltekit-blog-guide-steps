export async function get() {
  const allPostFiles = import.meta.glob('../blog/_posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles)

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postSlug = path.split('/').pop().split('.').shift()
      const postPath = `/blog/${postSlug}`

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return {
    body: JSON.stringify(sortedPosts)
  }
}