<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="jantsch.dev" class="logo" src="@/assets/jdev.svg" width="125" height="125" />
    <div class="wrapper">
      <h1 class="page-title">Smart Tools</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/mysql2data">Mysql2Data</RouterLink>
        <RouterLink to="/uuencode">UUEncode</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: solid 1px black;
}

.logo {
  display: block;
  margin: 0 auto;
  background-color: var(--brand-black-80);
  border-radius: 5px 10px;
  padding: 10px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.page-title {
  text-align: center;
}

@media (min-width: 768px) {
  header {
    display: flex;
  }

  .page-title {
    text-align: left;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
  }
}
</style>
