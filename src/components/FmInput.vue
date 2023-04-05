<template>
  <input
    :value="modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    class="input"
    v-bind="props"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();
</script>

<style scoped lang="scss">
.input {
  font-size: 16px;
  line-height: 1.5;
  background-color: $white;
  border: 1px solid rgba(51, 51, 51, 0.16);
  border-radius: 6px;
  padding: 12px 16px;
  &::placeholder {
    color: #acaaad;
  }
}
</style>
