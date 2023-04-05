<template>
  <div class="invite">
    <header class="invite__header">
      <h4 class="invite__title">Invite others</h4>
      <form class="invite__mail-form" @submit="addEmail">
        <fm-input
          v-model="email"
          class="invite__mail-input"
          type="email"
          name="email"
          placeholder="Enter people E-mails"
          required
        />
        <fm-button :disabled="!email" type="submit">Add</fm-button>
      </form>
      <div class="invite__socials">
        <div class="invite__socials-label">or add from</div>
        <button
          v-for="(item, index) in logos"
          :key="index"
          class="invite__socials-item"
        >
          <img :src="item.src" :alt="item.title" />
        </button>
      </div>
    </header>
    <div class="invite__main">
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.name"
        :email="user.email"
        :role="user.role"
        @remove="removeUser(user.id)"
        @role-change="handleRoleChange($event, user.id)"
      />
    </div>
    <footer class="invite__footer">
      <fm-input
        v-model="message"
        class="invite__message-input"
        type="text"
        name="message"
        placeholder="Personal message (optional)"
      />
      <div class="invite__counter">{{ users.length }} recipients</div>
      <fm-button primary @click="emit('send')">Send</fm-button>
    </footer>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { ref } from "vue";
import FmInput from "./FmInput.vue";
import FmButton from "./FmButton.vue";
import YahooSrc from "../assets/yahoo.png";
import GmailSrc from "../assets/gmail.png";
import AolSrc from "../assets/aol.png";
import IcloudSrc from "../assets/icloud.png";
import UserItem from "./UserItem.vue";
import usersData from "../assets/data/users.json";
import User, { Roles } from "../types/User";

const logos = [
  { src: YahooSrc, title: "Yahoo" },
  { src: GmailSrc, title: "Gmail" },
  { src: AolSrc, title: "Aol" },
  { src: IcloudSrc, title: "iCloud" },
];

const emit = defineEmits<{ (e: "send"): void }>();

const users: Ref<User[]> = ref(usersData);
const removeUser = (id) => {
  users.value = users.value.filter((user) => user.id !== id);
};

const message = ref("");
const email = ref("");
const addEmail = (event) => {
  event.preventDefault();
  users.value.unshift({
    id: "id" + new Date().getTime(),
    email: email.value,
    name: "",
    role: Roles.Guest,
  });
  email.value = "";
};

const handleRoleChange = (role: Roles, id: string) => {
  const index = users.value.findIndex((user) => user.id === id);
  users.value[index].role = role;
};
</script>

<style scoped lang="scss">
.invite {
  display: flex;
  flex-direction: column;
  overflow: hidden;

  &__header {
    padding: 24px;
    position: relative;
  }

  &__title {
    font-size: 24px;
    line-height: 1.3;
    padding-right: 36px;
    margin-bottom: 24px;
  }

  &__mail-form {
    display: flex;
  }

  &__mail-input {
    flex-grow: 1;
    display: block;
    margin-right: 10px;
  }

  &__socials {
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  &__socials-label {
    margin-right: 6px;
  }

  &__socials-item {
    background-color: transparent;
    height: 40px;
    width: 40px;
    border: none;
    cursor: pointer;
    margin: 0 6px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__main {
    padding: 15px 24px;
    overflow: auto;
    overflow: overlay;
    flex-grow: 1;
    border-top: 1px solid $content-bg-32;
    border-bottom: 1px solid $content-bg-32;
  }

  &__footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    padding: 24px;
  }

  &__message-input {
    width: 100%;
    margin-bottom: 24px;
  }

  &__counter {
    font-size: 14px;
    line-height: 1.43;
    text-align: right;
    color: $font-color-75;
    margin-right: 24px;
  }
}
</style>
