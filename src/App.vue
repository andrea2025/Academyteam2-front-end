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
  margin: 0;
  padding: 0;
}

#nav {
  padding: 30px;
}

h1 {
  font-style: normal;
  font-weight: 300;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  margin: 0;
  min-width: 100%;
}

table {
  border-collapse: unset;
  border-spacing: 0;
}
</style>
