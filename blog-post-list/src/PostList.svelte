<script>
  import Post from './Post.svelte';
  export let posts;
</script>

{#each posts as post}
<Post title={post.title} body={post.body} />
{/each}