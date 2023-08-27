<template>
  <main>
    <h1>Welcome to the dashboard</h1>
    <h2>Here you can manage all your sites!</h2>
    <ul>
      <li><a href="/editor">My Site 1</a></li>
      <li><a href="/editor">My Site 2</a></li>
      <li><a href="/editor">My Site 3</a></li>
      <li><a href="/editor">My Site 4</a></li>
      <li><a href="/editor">My Site 5</a></li>
    </ul>
    <form action="/editor">
      <input type="submit" value="Create New Page" />
    </form> 
  </main>
</template>

<style scoped>
main {
  margin: 50px 0 40px 80px;

}


h1 {
  font-size: x-larger;

}

h2 {
  font-size: x-large;
  
  margin-bottom: 30px;
}

form {
  margin: 20px 0 0 0;
}

</style>
