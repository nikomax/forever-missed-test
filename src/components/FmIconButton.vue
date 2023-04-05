<template>
  <button class="icon-btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.icon-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  height: 24px;
  width: 24px;

  svg {
    fill: currentColor;
  }
}
</style>
