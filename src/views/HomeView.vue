<script setup>
import { ref } from 'vue'
import { useDocument } from 'vuefire'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/firebase'

const device = localStorage.getItem('device')

const roomInput = ref(null)
const addRoomPending = ref(false)

const snackbarText = ref('')
const snackbarShow = ref(false)
const snackbarTimeout = ref(5000)

const {
  data: room,
  pending: roomPending,
  error: roomError,
} = useDocument(doc(db, 'theplanningpoker', device))

function shareRoomLink(id) {
  navigator.clipboard.writeText(window.location.origin + '/' + id)
  snackbarText.value = '¡Link copiado!'
  snackbarShow.value = true
}
async function addRoom() {
  addRoomPending.value = true
  await setDoc(doc(db, 'theplanningpoker', device), {
    name: roomInput.value,
    status: 'hide',
  })
  addRoomPending.value = false
}
</script>

<template>
  <main>

    <div class="d-flex align-center justify-center">
      <div style="width: 600px;">

        <div v-if="roomPending">
          <v-skeleton-loader type="heading, ossein, subtitle"></v-skeleton-loader>
        </div>
        <div v-else>
          <div v-if="!roomError">
            <div v-if="room">
              <v-card>
                <v-toolbar color="transparent">
                  <template v-slot:append>
                    <v-btn size="small" icon="mdi-share-variant" @click="shareRoomLink(room.id)"></v-btn>
                    <v-btn icon="mdi-open-in-app" size="small" :to="'/' + room.id"></v-btn>
                  </template>
                </v-toolbar>
                <v-card-item class="pt-0">
                  <v-card-title>{{ room.name }}</v-card-title>
                  <!-- <v-card-subtitle style="text-wrap: wrap">{{ room.id }}</v-card-subtitle> -->
                </v-card-item>
              </v-card>
            </div>
            <div v-else>
              <form @submit.prevent="addRoom">
                <v-text-field v-model="roomInput" variant="solo" label="Nombre del proyecto" clearable>
                  <template v-slot:append>
                    <v-btn type="submit" color="primary" icon="mdi-plus" :disabled="!roomInput" :loading="addRoomPending"></v-btn>
                  </template>
                </v-text-field>
              </form>
            </div>
          </div>
          <div v-else>
            <v-empty-state
              headline="¡Error del servidor!"
              title="Error de carga de datos"
              text="Se produjo un error en el servidor mientras se cargaban los datos, por favor actualice la página"
              icon="mdi-alert-octagon"
              class="my-16"
            ></v-empty-state>
          </div>
        </div>

      </div>
    </div>
  </main>

  <v-snackbar
    v-model="snackbarShow"
    :timeout="snackbarTimeout"
  >
    {{ snackbarText }}
    <template v-slot:actions>
      <v-btn
        icon="mdi-close"
        @click="snackbarShow = false"
      ></v-btn>
    </template>
  </v-snackbar>
</template>
