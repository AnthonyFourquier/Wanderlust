<template>
  <div id="app">
    <div class="header">
      <i class="fas fa-bars"></i>

      <img class="logo" src="../public/LOGO2.svg" />

      <div id="nav">
        <router-link to="/"></router-link>
        <router-link to="/FilActus"></router-link>
        <form>
        <input
          class="search"
          type="search"
          results="3"
          name="s"
          placeholder="Rechercher"
        />
        <button>Valider</button>
        </form>
        <router-link to="/FilActus">Fils Actus</router-link>
        <router-link to="/profil">
          <i class="fas fa-user-circle"></i> Profil</router-link
        >
        <router-link to="/Login">Login</router-link>
        <router-link to="/Logout">Logout</router-link>
      </div>
    </div>

    <div class="center"><router-view /></div>

    <div class="footer">
      <p>© 2021 Wanderlust, Inc.</p>
      <p>A propos</p>
      <p>Conditions d'utilisation</p>
      <p>Mention Légales</p>
    </div>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Bebas Neue", cursive;
}

.fas,
.fa-bars {
  padding-left: 1rem;
}

.search {
  border-radius: 10px;
  border-color: #00cac9;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 60px;
  width: 100%;
  box-shadow: 0px 0px 10px 5px #d4d3d1;
}

.logo {
  margin-left: 5rem;
  justify-content: center;
  width: 180px;
  float: left;
}

#nav {
  padding: 0px 20px;
}

#nav a {
  color: #2c3e50;
  margin-right: 20px;
  margin-left: 5px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer {
  height: 5rem;
  background-color: #00cac9;
  color: white;
  display: flex;
  justify-content: space-around;
}
</style>
