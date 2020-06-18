<script>
  import PostList from './PostList.svelte';
  let posts = [{
    title : 'First post woo!',
    body : 'So this is the first post I ever made'
  },
  {
    title : 'Second post, this is taking off!',
    body : 'So this is the second post I ever made'
  },
  {
    title : 'I am running out of ideas...',
    body : 'Third post, sorry it has been so long guys!'
  },
  ];
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