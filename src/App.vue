<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

h1 {
  font-style: normal;
  font-weight: 300;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  margin: 0;
  min-width: 100%;
}

table {
  /* border-collapse: unset; */
  border-collapse: separate;
  border-spacing: 0 1em;
}
</style>
