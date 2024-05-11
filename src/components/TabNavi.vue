<script setup lang="ts">
type Props = {
  list: { id: string; name: string }[];
};

const props = defineProps<Props>();
const pickedId = defineModel('pickedId');
</script>

<template>
  <div class="box_tab">
    <div v-for="tab in props.list" :key="tab.id">
      <input type="radio" :id="tab.id" name="tabs" :value="tab.id" v-model="pickedId" />
      <label :for="tab.id" class="tab">
        {{ tab.name }}
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box_tab {
  display: flex;
  gap: 8px;
}

.tab {
  display: inline-block;
  padding: 0 16px;
  margin-bottom: -1px;
  line-height: 40px;
  background-color: #f5f7fa;
  border: 1px solid #dee2e6;
}

input[type='radio']:checked + label,
.tab:hover {
  background-color: #fff;
}

input[type='radio']:checked + label {
  border-bottom: 1px solid #fff;
}
</style>
