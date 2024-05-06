<script setup lang="ts">
export type BaseProps = {
  width?: number;
  height?: number;
  color?: string;
  disabled?: boolean;
};

const props = withDefaults(defineProps<BaseProps>(), {
  width: 16,
  height: 16,
  color: '#fff',
});

const color = ref(props.disabled ? '#dcdcdc' : props.color);
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 512 512"
    role="presentation"
  >
    <g :fill="color">
      <slot />
    </g>
  </svg>
</template>
