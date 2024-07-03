<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const device = localStorage.getItem('device') || crypto.randomUUID()
localStorage.setItem('device', device)

const route = useRoute()
const theme = ref('dark')

function toggleTheme () {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-app :theme="theme">
    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>

    <v-footer color="transparent" class="text-center overflow-hidden" style="height: 300px; max-height: 300px;">
      <div style="line-height: 165%; transform: rotate(-15deg); font-size: 30px; margin: 0 auto;">
        <h1 class="font-title">The</h1>
        <h1 class="font-title">Planning</h1>
        <h1 class="font-title">Poker</h1>
      </div>
    </v-footer>

    <div class="pa-4" style="position: fixed; bottom: 0; right: 0">
      <v-btn
        v-if="route.path !== '/'"
        color="primary"
        size="small"
        icon="mdi-home"
        class="btn-fs-1"
        to="/"
      ></v-btn>
      <br />
      <v-btn
        color="primary"
        size="small"
        icon="mdi-theme-light-dark"
        class="btn-fs-1 mt-3"
        @click="toggleTheme"
      ></v-btn>
    </div>
  </v-app>
</template>
