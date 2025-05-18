<template>
  <button @click="decremento">-</button>
  <span :class="miColor">{{ contador }}</span>
  <button @click="incremento">+</button>
  <div v-if="contador < 0">Escribe una cantidad mayor a 0</div>
  <div v-else-if="contador >= 5">Escribe una cantidad menor que 5</div>
  <div v-show="comprobacion">No está permitido el número 0</div>
  <img :src="imagen1" alt="" />
</template>

<script setup>
import { computed, ref } from 'vue'
import { valores } from '../datos'

const imagen1 = valores[0].web
const miColor = ref('azul')
const contador = ref(0)
const decremento = () => {
  contador.value--
  if (contador.value < 0) {
    miColor.value = 'rojo'
  }
}
const incremento = () => {
  contador.value++
  if (contador.value > 5) {
    miColor.value = 'verde'
  }
}
const comprobacion = computed(() => {
  return contador.value === 0
})
</script>

<style scoped lang="scss">
span {
  padding: 0 5px;
}

.azul {
  color: blue;
}
.rojo {
  color: red;
}
.verde {
  color: green;
}
</style>
