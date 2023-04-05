<template>
  <div class="email-item">
    <div class="email-item__tile">
      <div class="email-item__tile-main">
        <div class="email-item__title">{{ name || email }}</div>
        <div v-if="name" class="email-item__subtitle">{{ email }}</div>
      </div>
      <div class="email-item__role">
        <fm-dropdown>
          <template #button>{{ role }}</template>
          <role-item
            :active="role === Roles.Guest"
            name="Guest"
            description="Default access level, can leave tributes, share media and stories"
            @click="emit('role-change', Roles.Guest)"
          />
          <role-item
            :active="role === Roles.Admin"
            name="Administrator"
            description="Can control all aspects of the website, including moderating content posted by others and changing website settings"
            @click="emit('role-change', Roles.Admin)"
          />
        </fm-dropdown>
      </div>
    </div>
    <fm-icon-button class="email-item__remove-btn" @click="emit('remove')">
      <icon-remove />
    </fm-icon-button>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import FmIconButton from "./FmIconButton.vue";
import IconRemove from "../assets/icons/remove.svg";
import FmDropdown from "./FmDropdown.vue";
import RoleItem from "./RoleItem.vue";
import { Roles } from "../types/User";

const props = defineProps<{ name: string; email: string; role: Roles }>();
const { name, email, role } = toRefs(props);
const emit = defineEmits<{
  (e: "remove"): void;
  (e: "role-change", value: Roles): void;
}>();
</script>

<style scoped lang="scss">
.email-item {
  display: flex;
  align-items: center;
  &__tile {
    flex-grow: 1;
    display: flex;
    align-items: center;
    min-height: 48px;
    background-color: $content-bg-9;
    border-radius: 6px;
    padding: 6px 16px 6px 12px;
  }
  &__tile-main {
    flex-grow: 1;
  }
  &__subtitle {
    font-size: 12px;
    line-height: 1.3;
    color: $font-color-75;
  }
  &__role {
    margin-left: 16px;
  }
  &__remove-btn {
    color: $content-bg-46;
    margin-left: 8px;
  }

  & + & {
    margin-top: 12px;
  }
}
</style>
