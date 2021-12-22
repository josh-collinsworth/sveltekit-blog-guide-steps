<!-- SideNote.svelte -->
<div class="side-note">
  <slot />
</div>


<style global lang="scss">
  .side-note {
    width: calc(100% + 2rem);
    margin-left: -1rem;
    padding: 1rem;
    font-style: italic;
    font-size: 0.9rem;
    background: #dde;

    &::before {
      content: 'Side note:';
      display: block;
      text-transform: uppercase;
      margin-bottom: 1rem;
      font-style: normal;
      font-weight: bold;
      font-size: 0.7rem;
    }
  }
</style>