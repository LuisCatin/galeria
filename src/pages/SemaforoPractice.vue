<script setup>
import { ref, computed } from 'vue'
const color = ref('')
const isred = computed(() => {
  return color.value === 'red'
})
const isyellow = computed(() => {
  return color.value === 'yellow'
})
const isgreen = computed(() => {
  return color.value === 'green'
})
const setColor = (c) => {
  color.value = c === 'reset' ? '' : c
}
</script>

<template>
  <div class="buttons">
    <button @click="setColor('red')">red</button>
    <button @click="setColor('yellow')">yellow</button>
    <button @click="setColor('green')">green</button>
    <button @click="setColor('reset')">reset</button>
  </div>
  <div>
    <div class="circle1" :class="{ active: isred }"></div>
    <div class="circle2" :class="{ active: isyellow }"></div>
    <div class="circle3" :class="{ active: isgreen }"></div>
  </div>
</template>

<style scoped lang="scss">
.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

.circle1,
.circle2,
.circle3 {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  margin: 20px auto;
  opacity: 0.5;
  transition: 0.3s;
}

.circle1 {
  border: 2px solid red;
  color: red;
}
.circle2 {
  border: 2px solid yellow;
  color: yellow;
}

.circle3 {
  border: 2px solid green;
  color: green;
}

.active {
  background-color: currentColor;
  opacity: 1;
}
</style>
