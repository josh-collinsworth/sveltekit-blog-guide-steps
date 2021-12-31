<script>
  export let title;
  export let date;
  export let categories;
</script>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />

{#if categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each categories as category}
        <li>
          <a href="/blog/categories/{category}">
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}