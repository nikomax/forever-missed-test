<template>
  <div class="success-text" v-if="successMessage">{{successMessage}}</div>
  <fm-button @click="open = true">Open</fm-button>
  <fm-modal to="#app" v-model:open="open">
    <the-invitation @send="handleSend"/>
  </fm-modal>
</template>

<script setup>
import { ref } from "vue";
import FmButton from "./components/FmButton.vue";
import FmModal from "./components/FmModal.vue";
import TheInvitation from "./components/TheInvitation.vue";

const open = ref(false);
const successMessage = ref('');

const handleSend = () => {
  open.value = false
  successMessage.value = 'Invitations sent'
}
</script>

<style scoped lang="scss">
.success-text {
  color: green;
  margin-bottom: 16px;
}
</style>
