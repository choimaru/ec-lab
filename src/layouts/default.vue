<script setup lang="ts">
const naviList = [
  { url: '/', name: 'ホーム' },
  { url: '#', name: 'dummy会社概要' },
  { url: '#', name: 'dummyサービス' },
  { url: '#', name: 'dummyお問い合わせ' },
];
</script>

<template>
  <div class="container">
    <div class="sidebar">
      <header class="header">
        <img src="~/assets/icons/round_flask_white.svg" width="24px" height="24px" alt="logo" />
        EC-Lab
      </header>
      <nav class="nav">
        <ul class="ul">
          <li v-for="navi in naviList">
            <NuxtLink :to="navi.url" class="navi_list"> {{ navi.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <footer class="footer">© {{ new Date().getFullYear() }} EC-Lab</footer>
    </div>
    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 160px;
  height: auto;
  padding: 8px 0;
  color: #fff;
  background-color: #333;
}

.header {
  padding-left: 16px;
  font-weight: bold;
}

.nav {
  flex: 1;
  margin-top: 16px;
}

.navi_list {
  display: inline-block;
  width: 100%;
  padding: 12px 16px;

  &:hover {
    text-decoration: underline;
    background-color: #414141;
  }
}

.main {
  padding: 16px;
}

.footer {
  padding-left: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: smaller;
  font-style: italic;
  color: #ccc;
}
</style>
