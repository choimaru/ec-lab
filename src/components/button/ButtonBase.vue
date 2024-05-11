<script setup lang="ts">
export type BaseProps = {
  id?: string;
  color?: 'green' | 'blue' | 'orange';
  disabled?: boolean;
};

type Emit = {
  'on-click': [];
};

const props = defineProps<BaseProps>();
const emit = defineEmits<Emit>();
</script>

<template>
  <button
    type="button"
    :id="props.id"
    class="base"
    :class="[props.color, { disabled: props.disabled }]"
    :disabled="props.disabled"
    @click="emit('on-click')"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base {
  height: 36px;
  padding: 0 16px;
  font-size: 12px;
  color: #fff;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
}

.green {
  background-color: #85ce36;
  border: 1px solid #72b22b;
}

.blue {
  background-color: #2950bb;
  border: 1px solid #2c56c9;
}

.orange {
  background-color: #feae31;
  border: 1px solid #d1a300;
}

.disabled {
  color: #dcdcdc;
  background-color: #808080;

  &:hover {
    opacity: unset;
  }
}
</style>
