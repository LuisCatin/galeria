<script setup>
import { ref, computed } from 'vue'
const rojoClicks = ref(0)
const azulClicks = ref(0)
const verdeClicks = ref(0)
const setColor = (c) => {
  if (c === 'rojo') {
    rojoClicks.value++
  } else if (c === 'azul') {
    azulClicks.value++
  } else if (c === 'verde') {
    verdeClicks.value++
  }
}

const mostclicked = computed(() => {
  const max = Math.max(rojoClicks.value, azulClicks.value, verdeClicks.value)
  if (rojoClicks.value === azulClicks.value && azulClicks.value === verdeClicks.value) {
    return 'none'
  }
  if (max === rojoClicks.value) {
    return 'rojo'
  } else if (max === azulClicks.value) {
    return 'azul'
  } else if (max === verdeClicks.value) {
    return 'verde'
  }
  return 'none'
})
</script>

<template>
  <div class="main-container">
    <div class="container">
      <div class="title">Colores</div>
      <div class="separator"></div>
      <div class="buttons">
        <button class="button button-rojo" @click="setColor('rojo')">ROJO</button>
        <div class="box box-rojo">{{ rojoClicks }}</div>
        <button class="button button-azul" @click="setColor('azul')">AZUL</button>
        <div class="box box-azul">{{ azulClicks }}</div>
        <button class="button button-verde" @click="setColor('verde')">VERDE</button>
        <div class="box box-verde">{{ verdeClicks }}</div>
      </div>
    </div>
    <div class="container">
      <div class="title" v-if="mostclicked == 'none'">No hay un favorito</div>
      <div class="title" v-else>
        El color con más clicks es:
        <span
          class="favorite"
          :class="[
            { 'favorite-rojo': mostclicked == 'rojo' },
            { 'favorite-azul': mostclicked == 'azul' },
            { 'favorite-verde': mostclicked == 'verde' },
          ]"
        >
          {{ mostclicked }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.main-container {
  display: flex;
  gap: 20px;
  padding: 20px;
  align-items: flex-start;
  font-family: 'Inter', sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  border: 1px solid #d5d5d5;
  border-radius: 20px;
  background-color: #f0f0f0;
  padding: 20px;
}

.title {
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1;
  color: #4b4b4b;
}

.separator {
  border-top: 1px solid #d5d5d5;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 800;
  color: #4b4b4b;
  background-color: #fff;
  border-radius: 10px;
  &-rojo {
    background-color: #ffc6c6;
    color: #ef4343;
    border: 1px solid #972929;
  }
  &-azul {
    background-color: #d2d2ff;
    color: #2b2b9c;
    border: 1px solid #2b2b9c;
  }
  &-verde {
    background-color: #ccffcc;
    color: #0d8c0d;
    border: 1px solid #0d8c0d;
  }
}

.buttons {
  display: grid;
  grid-template-columns: 1fr 40px;
  font-size: 24px;
  font-weight: 600;
  gap: 20px 10px;
  border-radius: 10px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 600;
  border-radius: 10px;
  padding: 0 40px;
  &-rojo {
    background-color: #ef4343;
    color: #ffffff;
    border: 1px solid #972929;
  }
  &-azul {
    background-color: #4646ee;
    color: #ffffff;
    border: 1px solid #2b2b9c;
  }
  &-verde {
    background-color: #0fc70f;
    color: #ffffff;
    border: 1px solid #0d8c0d;
  }
}

.favorite {
  text-transform: uppercase;
  &-rojo {
    color: #ef4343;
  }
  &-azul {
    color: #4646ee;
  }
  &-verde {
    color: #0d8c0d;
  }
}
</style>
