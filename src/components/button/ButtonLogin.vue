<script setup lang="ts">
import type { BaseProps } from './ButtonBase.vue';

type Emit = {
  'on-login': [];
};

const props = defineProps<BaseProps>();
const emit = defineEmits<Emit>();
</script>

<template>
  <ButtonBase color="green" :disabled="props.disabled" @on-click="emit('on-login')">
    <IconLogin />
    ログイン
  </ButtonBase>
</template>
