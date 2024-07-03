<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCollection, useDocument } from 'vuefire'
import { collection, doc, setDoc, updateDoc, writeBatch } from 'firebase/firestore'
import { db } from '@/firebase'
import { useRoute } from 'vue-router'

const device = localStorage.getItem('device')
const route = useRoute()
const roomId = route.params.id as string

const participantInput = ref(null)
const addParticipantPending = ref(false)

const snackbarText = ref('')
const snackbarShow = ref(false)
const snackbarTimeout = ref(5000)

const {
  data: room,
  pending: roomPending,
  error: roomError,
} = useDocument(doc(db, 'theplanningpoker', roomId))
const {
  data: participants,
  pending: participantsPending,
  error: participantsError,
} = useCollection(collection(db, 'theplanningpoker', roomId, 'participants'))

let sortedParticipants = computed(() => {
  if (!room.value || !participants.value) return null

  return room.value.status === 'hide'
    ? participants.value.slice().sort((a, b) => a.name.localeCompare(b.name))
    : participants.value.slice().sort((a, b) => getEstimateOrderValue(a.estimate) - getEstimateOrderValue(b.estimate))
})

function getEstimateOrderValue(estimate: string) {
  if (!estimate) return 0
  if (estimate === '?') return 1
  if (estimate === '0') return 2
  if (estimate === '1') return 3
  if (estimate === '2') return 4
  if (estimate === '3') return 5
  if (estimate === '5') return 6
  if (estimate === '8') return 7
  return 8;
}

function getEstimateIcon(estimate: string) {
  if (!estimate) return 'mdi-minus'
  if (estimate === '?') return 'mdi-help-box'
  if (estimate === '0') return 'mdi-numeric-0-box'
  if (estimate === '1') return 'mdi-numeric-1-box'
  if (estimate === '2') return 'mdi-numeric-2-box'
  if (estimate === '3') return 'mdi-numeric-3-box'
  if (estimate === '5') return 'mdi-numeric-5-box'
  if (estimate === '8') return 'mdi-numeric-8-box'
  return 'mdi-plus-box';
}

async function addParticipant() {
  addParticipantPending.value = true
  const docRef = doc(db, 'theplanningpoker', roomId, 'participants', device)
  await setDoc(docRef, {
    name: participantInput.value,
    estimate: null,
  })
  addParticipantPending.value = false
}
async function updateStatus(status) {
  if (!status) return;

  const batch = writeBatch(db)
  const roomDocRef = doc(db, 'theplanningpoker', roomId)
  batch.update(roomDocRef, {
    status: status === 'hide' ? 'show' : 'hide'
  })

  if (status === 'show' && participants.value && participants.value.length) {
    participants.value.forEach(p => {
      if (p.estimate) {
        const participantDocRef = doc(db, 'theplanningpoker', roomId, 'participants', p.id)
        batch.update(participantDocRef, {
          estimate: null
        })
      }
    })
  }

  await batch.commit()
}
async function updateEstimate(estimate) {
  if (!estimate) return;

  const docRef = doc(db, 'theplanningpoker', roomId, 'participants', device)
  await updateDoc(docRef, {
    estimate
  })
}
function shareRoomLink(id: string) {
  navigator.clipboard.writeText(window.location.origin + '/' + id)
  snackbarText.value = '¡Link copiado!'
  snackbarShow.value = true
}
function getEstimateColor(status: string, estimate: string) {
  if (status !== 'hide') return 'primary'
  return 'accent'
}
</script>

<template>
  <main>
    <div class="d-flex align-center justify-center">
      <div style="width: 600px;">
        <div v-if="roomPending || participantsPending">
          <v-skeleton-loader type="heading, ossein, subtitle"></v-skeleton-loader>
        </div>
        <div v-else>
          <div v-if="!roomError && !participantsError">
            <div v-if="room">
              <v-card>
                <v-toolbar color="transparent">
                  <template v-slot:append>
                    <v-btn size="small" icon="mdi-share-variant" @click="shareRoomLink(room.id)"></v-btn>
                    <v-btn size="small" :icon="room.status === 'hide' ? 'mdi-eye' : 'mdi-eye-off'" @click="updateStatus(room.status)"></v-btn>
                  </template>
                </v-toolbar>
                <v-card-item class="pt-0">
                  <v-card-title>{{ room.name }}</v-card-title>
                  <!-- <v-card-subtitle style="text-wrap: wrap">{{ room.id }}</v-card-subtitle> -->
                </v-card-item>
              </v-card>
              <form v-if="participants && !participants.some(p => p.id === device)" @submit.prevent="addParticipant" class="mt-4">
                <v-text-field v-model="participantInput" variant="solo" label="Ingresar como" clearable>
                  <template v-slot:append>
                    <v-btn type="submit" color="primary" icon="mdi-plus" :disabled="!participantInput" :loading="addParticipantPending"></v-btn>
                  </template>
                </v-text-field>
              </form>
              <div v-else-if="participants && participants.some(p => p.id === device)" class="pa-4">
                <div class="d-flex align-center justify-space-evenly flex-wrap">
                  <v-btn color="primary" size="small" icon="mdi-help-box" class="btn-fs-1 ma-2" @click="updateEstimate('?')"></v-btn>
                  <v-btn color="primary" size="small" icon="mdi-numeric-0-box" class="btn-fs-1 ma-2" @click="updateEstimate('0')"></v-btn>
                  <v-btn color="primary" size="small" icon="mdi-numeric-1-box" class="btn-fs-1 ma-2" @click="updateEstimate('1')"></v-btn>
                  <v-btn color="primary" size="small" icon="mdi-numeric-2-box" class="btn-fs-1 ma-2" @click="updateEstimate('2')"></v-btn>
                  <v-btn color="primary" size="small" icon="mdi-numeric-3-box" class="btn-fs-1 ma-2" @click="updateEstimate('3')"></v-btn>
                  <v-btn color="primary" size="small" icon="mdi-numeric-5-box" class="btn-fs-1 ma-2" @click="updateEstimate('5')"></v-btn>
                  <v-btn color="primary" size="small" icon="mdi-numeric-8-box" class="btn-fs-1 ma-2" @click="updateEstimate('8')"></v-btn>
                  <v-btn color="primary" size="small" icon="mdi-plus-box" class="btn-fs-1 ma-2" @click="updateEstimate('8+')"></v-btn>
                </div>
              </div>
              <div v-if="sortedParticipants && sortedParticipants.length">
                <v-card v-for="(participant, index) in sortedParticipants" :key="participant.id" :class="{ 'mt-4': index > 0 }">
                  <v-card-text>
                    <div class="d-flex align-center justify-space-between">
                      <span>
                        <v-icon v-if="participant.id === device" color="primary" size="extrasmall" icon="mdi-check-decagram"></v-icon>
                        {{ participant.name }}
                      </span>
                      <v-btn icon size="small" class="btn-fs-1" :color="getEstimateColor(room.status, participant.estimate)">
                        <span v-if="room.status === 'hide'">
                          <span v-if="!participant.estimate">
                            <v-icon icon="mdi-message-processing"></v-icon>
                          </span>
                          <span v-else>
                            <v-icon icon="mdi-message-check"></v-icon>
                          </span>
                        </span>
                        <span v-else>
                          <span v-if="!participant.estimate">
                            <v-icon icon="mdi-minus"></v-icon>
                          </span>
                          <span v-else>
                            <v-icon :icon="getEstimateIcon(participant.estimate)"></v-icon>
                          </span>
                        </span>
                      </v-btn>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </div>
            <div v-else>
              <v-empty-state
                headline="¡Error!"
                title="Proyecto cerrado"
                text="El proyecto al que intentas ingresar ha sido eliminado"
                icon="mdi-alert-octagon"
                class="my-16"
              ></v-empty-state>
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
