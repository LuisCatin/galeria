<script setup>
import { ref } from 'vue'
const tempC = ref('')
const tempF = ref('')
const changeC = () => {
  tempF.value = (tempC.value * 9) / 5 + 32
}
const changeF = () => {
  tempC.value = ((tempF.value - 32) * 5) / 9
}
</script>

<template>
  <div class="convertidor">
    <div class="convertidor__container">
      <h1 class="convertidor__header">Conversor de temperatura</h1>

      <div class="convertidor__inputs">
        <div class="convertidor__unidad">°C</div>
        <input @input="changeC" class="convertidor__input" type="number" v-model="tempC" />
        <div class="convertidor__igual">=</div>
        <input @input="changeF" class="convertidor__input" type="number" v-model="tempF" />
        <div class="convertidor__unidad">°F</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.convertidor {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  width: 100%;
}
.convertidor__container {
  display: flex;
  flex-direction: column;
  border: 1px solid #dedede;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 0 4px 30px #00000033;
  padding: 20px;
  gap: 20px;
  overflow: hidden;
}

.convertidor__header {
  margin: 0;
  display: flex;
  line-height: 100%;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #6c6c6c;
  justify-self: start;
}

.convertidor__inputs {
  display: flex;
  align-items: center;
  outline: none;
  gap: 5px;
}

.convertidor__input {
  border-radius: 9999px;
  border: 1px solid #000000;
  text-align: center;
}

.convertidor__igual {
  margin: 0 10px;
  font-size: 32px;
}

.convertidor__unidad {
  font-size: 20px;
}
</style>
