<script setup>
import { computed, ref } from 'vue'
const number = ref(0)
const atras = () => {
  number.value--
}
const adelante = () => {
  number.value++
}

const reiniciar = () => {
  number.value = 0
}

const numberArray = ref([])

const existe = computed(() => {
  return numberArray.value.includes(number.value)
})

const guardar = () => {
  if (!existe.value) {
    numberArray.value.push(number.value)
  }
}
</script>

<template>
  <div class="miColor" :class="[{ 'miColor-red': number < 0 }, { 'miColor-green': number > 0 }]">
    {{ number }}
  </div>
  <div class="buttons">
    <button @click="atras">Atrás</button>
    <button @click="reiniciar">Reiniciar</button>
    <button @click="adelante">Adelante</button>
    <button :disabled="existe" @click="guardar">Guardar</button>
    <ul>
      <li
        :class="[{ 'miColor-red': item < 0 }, { 'miColor-green': item > 0 }]"
        v-for="item in numberArray"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.miColor {
  &-red {
    color: red;
  }
  &-green {
    color: green;
  }
}
</style>

//
<!--
// <script setup>
// import { ref, computed } from 'vue'
// const number = ref(0)
// const numberArray = ref([])
// const existe = computed(() => {
//   return numberArray.value.includes(number.value)
// })

// const color = computed(() => {
//   if (number.value < 0) return 'red'
//   if (number.value > 0) return 'green'
//   return 'black'
// })
// </script>

// <template>
//   <div>
//     <div :style="{ color: color }">
//       {{ number }}
//     </div>

//     <button @click="number--">atras</button>
//     <button @click="number = 0">reiniciar</button>
//     <button @click="number++">siguente</button>
//     <button :disabled="existe" @click="numberArray.push(number)">guardar</button>
//     <ul>
//       <li v-for="item in numberArray" :key="item">{{ item }}</li>
//     </ul>
//   </div>
// </template> -->
