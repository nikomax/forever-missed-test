<template>
  <div
    class="dropdown"
    @click="open = !open"
    v-click-outside="() => (open = false)"
  >
    <button class="dropdown__btn" :class="{ dropdown__btn_active: open }">
      <slot name="button" />
      <icon-arrow class="dropdown__btn-arrow" />
    </button>
    <div v-if="open" class="dropdown__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconArrow from "../assets/icons/arrow.svg";

const open = ref(false);
</script>

<style scoped lang="scss">
.dropdown {
  $this: &;
  position: relative;
  &__btn {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
    color: $font-color;
    &_active {
      color: $link-color;
      #{$this}__btn-arrow {
        transform: rotate(180deg);
      }
    }
  }
  &__btn-arrow {
    height: 20px;
    width: 20px;
    fill: currentColor;
    transition: transform 0.3s;
  }
  &__content {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 1px;
    background-color: $content-bg;
    box-shadow: 4px 4px 24px rgba(0, 0, 0, 0.16);
    border-radius: 6px;
    padding: 4px 0;
    width: 318px;
    z-index: 1;
  }
}
</style>
