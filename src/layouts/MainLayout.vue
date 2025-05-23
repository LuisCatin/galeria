<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Galeria </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="page-container">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Paisajes',
    caption: 'paisajes',
    icon: 'terrain',
    link: '/paisajes',
  },
  {
    title: 'Aprendiendo',
    caption: 'paisajes',
    icon: 'co_present',
    link: '/aprendiendo',
  },
  {
    title: 'Practicando-Vue',
    caption: 'practicando-vue',
    icon: 'school',
    link: '/practicando-vue',
  },
  {
    title: 'ReyesPage',
    caption: 'Reyes',
    icon: 'fort',
    link: '/reyes',
  },

  {
    title: 'TeachVideo2',
    caption: 'teach',
    icon: '123',
    link: '/teach',
  },

  {
    title: 'Semaforo',
    caption: 'colores',
    icon: 'traffic',
    link: '/semaforo',
  },

  {
    title: '¿Cuántos clicks has dado?',
    caption: 'Contador de clicks',
    icon: 'ads_click',
    link: '/contador',
  },

  {
    title: 'Mis Movimientos Bancarios',
    caption: 'Ingresos y Egresos',
    icon: 'monetization_on',
    link: '/movimiento',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.page-container {
  height: 100dvh;
  width: 100%;
}
</style>
