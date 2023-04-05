<template>
  <button class="btn" :class="{ btn_primary: primary }" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps<{ primary?: boolean; disabled?: boolean }>();
const { primary } = toRefs(props);
</script>

<style scoped lang="scss">
.btn {
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  display: flex;
  border-radius: 6px;
  border: 1px solid $content-bg-46;
  color: $font-color;
  background-color: transparent;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;

  &_primary {
    background: linear-gradient(90deg, #64362d 0%, #82544b 100%);
    border-color: $button-stroke;
    color: $white;
    padding: 11px 60px;
  }

  &[disabled] {
    opacity: 0.56;
    cursor: not-allowed;
  }
}
</style>
