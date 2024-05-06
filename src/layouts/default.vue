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
      <div class="logo">
        <img src="~/assets/icons/round_flask_white.svg" width="24px" height="24px" alt="logo" />
        EC-Lab
      </div>
      <nav class="nav">
        <ul class="ul">
          <li v-for="navi in naviList">
            <NuxtLink :to="navi.url" class="navi_list"> {{ navi.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <footer class="footer">© {{ new Date().getFullYear() }} EC-Lab</footer>
    </div>
    <div class="content">
      <header class="header">ログアウト</header>
      <main class="main">
        <slot />
      </main>
    </div>
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
  background-color: #36424c;
}

.logo {
  padding-left: 16px;
}

.nav {
  flex: 1;
  margin-top: 16px;
}

.navi_list {
  display: inline-block;
  width: 100%;
  padding: 12px 16px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    background-color: #4b5c6a;
  }
}

.content {
  flex: 1;
}

.header {
  display: flex;
  align-items: center;
  justify-content: right;
  height: 40px;
  padding: 16px;
  background-color: #ededed;
}

.main {
  min-height: calc(100vh - 40px);
  padding: 16px;
  background-color: #f7f7f7;
}

.footer {
  padding-left: 16px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: smaller;
  font-style: italic;
  color: #ccc;
}
</style>
