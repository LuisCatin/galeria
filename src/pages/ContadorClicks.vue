<script setup>
import { ref, computed } from 'vue'
const redClicks = ref(0)
const yellowClicks = ref(0)
const greenClicks = ref(0)
const setColor = (c) => {
  if (c === 'red') {
    redClicks.value++
  } else if (c === 'yellow') {
    yellowClicks.value++
  } else if (c === 'green') {
    greenClicks.value++
  }
}
const mostclicked = computed(() => {
  const max = Math.max(redClicks.value, yellowClicks.value, greenClicks.value)
  if (redClicks.value === yellowClicks.value && yellowClicks.value === greenClicks.value) {
    return 'none'
  }
  if (max === redClicks.value) {
    return 'red'
  } else if (max === yellowClicks.value) {
    return 'yellow'
  } else if (max === greenClicks.value) {
    return 'green'
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
        <button class="button button-red" @click="setColor('red')">red</button>
        <div class="box box-red">{{ redClicks }}</div>
        <button @click="setColor('yellow')">yellow</button>
        <div class="box box-yellow">{{ yellowClicks }}</div>
        <button @click="setColor('green')">green</button>
        <div class="box box-green">{{ greenClicks }}</div>
      </div>
    </div>
    <div class="container">
      <div class="title" v-if="mostclicked == 'none'">No hay un favorito</div>
      <div class="title" v-else>
        El color con más clicks es:
        <span class="favorite" :class="[{ 'favorite-red': mostclicked == 'red' }]">
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

.buttons {
  display: grid;
  grid-template-columns: 1fr 40px;
  gap: 20px;
  border-radius: 10px;
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
  &-red {
    background-color: #ffc6c6;
    color: #ef4343;
    border: 1px solid #972929;
  }
  &-yellow {
    background-color: #d2d2ff;
    color: #2b2b9c;
    border: 1px solid #2b2b9c;
  }
  &-green {
    background-color: #ccffcc;
    color: #0d8c0d;
    border: 1px solid #0d8c0d;
  }
}

.red {
  border-radius: 1px;
}

.favorite {
  text-transform: uppercase;
  &-red {
    color: #ef4343;
  }
}
</style>
