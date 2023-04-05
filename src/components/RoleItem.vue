<template>
  <button class="role">
    <icon-checkmark v-show="active" class="role__checkmark" />
    <span class="role__name">{{ name }}</span>
    <span class="role__desc">{{ description }}</span>
  </button>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import IconCheckmark from "../assets/icons/checkmark.svg";
import { Roles } from "../types/User";

const props = defineProps<{
  active: boolean;
  name: Roles;
  description: string;
}>();
const { active, name, description } = toRefs(props);
</script>

<style scoped lang="scss">
.role {
  padding: 12px 16px 12px 48px;
  transition: background-color 0.3s;
  position: relative;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  text-align: left;
  cursor: pointer;

  &:hover {
    background-color: $content-bg-9;
  }

  &__checkmark {
    position: absolute;
    top: 12px;
    left: 12px;
    height: 24px;
    width: 24px;
    fill: $link-color;
  }

  &__name {
    font-weight: 600;
    margin-bottom: 3px;
    font-size: 16px;
    line-height: 1.5;
  }

  &__desc {
    font-size: 12px;
    line-height: 1.3;
    color: $font-color-75;
  }
}
</style>
