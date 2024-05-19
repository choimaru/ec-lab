<script setup lang="ts">
const userList = [
  { id: 'U001', name: 'U001：一般ユーザ', authority: 0 },
  { id: 'U004', name: 'U004：人事ユーザ', authority: 3 },
  { id: 'U999', name: 'U999：管理者', authority: 99 },
];

const userId = ref('U001');

const onLogin = () => {
  const loginUser = userList.find((user) => user.id === userId.value);
  const loginInfo = useLoginInfo();

  if (loginUser) {
    loginInfo.value.userId = loginUser.id;
    loginInfo.value.userName = loginUser.name;
    loginInfo.value.authority = loginUser.authority;
  }

  navigateTo('/');
};
</script>

<template>
  <form>
    <RadioList :list="userList" id-prefix="user_" v-model:pickedId="userId" />
    <br />
    <ButtonLogin @on-login="onLogin" />
  </form>
</template>

<style scoped></style>
