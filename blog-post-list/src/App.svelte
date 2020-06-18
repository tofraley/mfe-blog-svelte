<script>
  import { onMount } from 'svelte';
  import PostList from './PostList.svelte';

  let posts = [];

  onMount(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts = await res.json();
  });
</script>

<main>
  <h1 class="centered">Welcome to my blog!</h1>
  <PostList posts={posts} /> 
</main>

<style>
  .centered{
    text-align: center;
  }
</style>