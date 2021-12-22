<script>
  let isSpoiled = false

  const spoil = () => {
    isSpoiled = true
  }
</script>

<div class="spoiler">
  {#if !isSpoiled}
    <button on:click={spoil}>Reveal</button>
  {:else}
    <slot />
  {/if}
</div>


<style lang="scss">
  .spoiler {
    border: 1px solid red;
    padding: 1rem;

    &::before {
      content: '⚠️ SPOILER ALERT! '
    }
  }
</style>