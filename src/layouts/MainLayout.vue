<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Galeria </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

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
    icon: 'school',
    link: '/reyes',
  },

  {
    title: 'TeachVideo2',
    caption: 'teach',
    icon: 'school',
    link: '/teach',
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
