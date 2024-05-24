<script setup lang="ts">
const userList = [
  { id: 'U001', name: '一般ユーザ', authority: 0 },
  { id: 'U004', name: '人事ユーザ', authority: 3 },
  { id: 'U999', name: '管理者', authority: 99 },
];
</script>

<template>
  <div>
    <H1Title>ユーザ一覧</H1Title>
    <div class="link_create">
      <NuxtLink to="/user/create">
        <span class="link_item">
          <IconNewCreate color="#2929ff" />
          ユーザの追加
        </span>
      </NuxtLink>
    </div>
    <table class="list">
      <tr>
        <th>ユーザコード</th>
        <th>氏名</th>
        <th>ふりがな</th>
        <th>メールアドレス</th>
        <th>所属組織</th>
        <th>権限</th>
        <th>ログイン日時</th>
        <th>雇用形態</th>
        <th>在職区分</th>
        <th>ロック日時</th>
      </tr>
      <tr v-for="user in userList" :key="user.id">
        <td>
          <NuxtLink :to="`/user/${user.id}`">{{ user.id }}</NuxtLink>
        </td>
        <td>{{ user.name }}</td>
        <td>たなかたろう</td>
        <td>taro@example.com</td>
        <td>ABC Corporation</td>
        <td>管理者</td>
        <td>2024-04-28 10:00 AM</td>
        <td>正社員</td>
        <td>在職中</td>
        <td>2024-04-28 02:30 PM</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.link_create {
  display: flex;
}

.link_item {
  display: flex;
  gap: 2px;
  margin-bottom: 8px;
}

.list {
  tr {
    &:hover {
      background-color: #fadede;
    }
  }

  th {
    font-weight: bold;
    background-color: #eee;
  }

  td,
  th {
    padding: 8px;
    border: 1px solid #aaa;
  }
}
</style>
