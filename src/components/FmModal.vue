<template>
  <teleport :to="to">
    <div v-if="open" class="modal">
      <div class="modal__inner" v-click-outside="closeModal">
        <fm-icon-button class="modal__close-btn" @click="closeModal">
          <icon-close />
        </fm-icon-button>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import IconClose from "../assets/icons/close.svg";
import FmIconButton from "./FmIconButton.vue";

const props = defineProps<{ to: string; open: boolean }>();
const { to, open } = toRefs(props);
const emit = defineEmits<{ (e: "update:open", value: boolean): void }>();

const closeModal = () => {
  emit("update:open", false);
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.32);
  display: flex;
  align-items: center;
  justify-content: center;

  &__inner {
    background-color: $content-bg;
    border-radius: 6px;
    width: 598px;
    max-height: calc(100% - 64px);
    position: relative;
    display: flex;
    flex-direction: column;
  }

  &__close-btn {
    position: absolute;
    top: 28px;
    right: 24px;
    color: $font-color;
    z-index: 1;
  }
}
</style>
