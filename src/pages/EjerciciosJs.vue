<script setup>
import { ref } from 'vue'

// suma de 1 - N
const ejercicio1Input = ref(0)
const ejercicio1Resultado = ref(0)
const ejercicio1Calcular = () => {
  let sumatoria = 0

  let text = new String(ejercicio1Input.value)
  for (let i = 0; i < text.length; i++) {
    console.log(text.charAt(i) == 'a')
  }

  for (let i = 1; i <= ejercicio1Input.value; i++) {
    sumatoria = sumatoria + i
  }

  ejercicio1Resultado.value = sumatoria
}

// factorial de !N
const ejercicio2Input = ref(0)
const ejercicio2Resultado = ref(null)
const ejercicio2Calcular = () => {
  let multiplicar = 1

  for (let i = 1; i <= ejercicio2Input.value; i++) {
    multiplicar = multiplicar * i
  }

  ejercicio2Resultado.value = multiplicar
}

// Determinar si es par o impar
let ejercicio3Input = ref(0)
const ejercicio3Resultado = ref(null)
const ejercicio3Calcular = () => {
  if (ejercicio3Input.value % 2 == 0) {
    ejercicio3Resultado.value = 'par'
  } else {
    ejercicio3Resultado.value = 'impar'
  }
}

// Serie de fibonnaci
const ejercicio4Input = ref(0)
const ejercicio4Resultado = ref(null)
const ejercicio4Calcular = () => {
  if (ejercicio4Input.value < 2) {
    ejercicio4Resultado.value = ejercicio4Input.value
    return
  }

  let a = 0,
    b = 1,
    c = 1
  for (let i = 2; i <= ejercicio4Input.value; i++) {
    c = a + b
    a = b
    b = c
  }

  ejercicio4Resultado.value = c
}

// Invertir un texto
const ejercicio5Input = ref(0)
const ejercicio5Resultado = ref(0)
const ejercicio5Calcular = () => {
  let text = new String(ejercicio5Input.value)
  for (let i = 0; i < text.length; i++) {
    console.log(text.charAt(i) == 'a')
  }
}
</script>

<template>
  <div class="page">
    <!-- suma de 1 - N -->
    <div class="ejercicio">
      <h1>Suma de 1 - N</h1>

      <form class="content" @submit.prevent="ejercicio1Calcular">
        <input type="text" placeholder="Escribe un valor" v-model="ejercicio1Input" required />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio1Resultado }}
      </form>
    </div>

    <!-- factorial de !N -->
    <div class="ejercicio">
      <h1>!N</h1>

      <div class="content">
        <input type="text" placeholder="Escribe un valor" v-model="ejercicio2Input" />

        <button @click="ejercicio2Calcular">Calcular</button>

        Resultado: {{ ejercicio2Resultado }}
      </div>
    </div>

    <!-- Saber si N es par o Impar -->
    <div class="ejercicio">
      <h1>Saber si N es par o Impar</h1>

      <div class="content">
        <input type="text" placeholder="5" v-model="ejercicio3Input" />

        <button @click="ejercicio3Calcular">Calcular</button>

        Resultado: {{ ejercicio3Resultado }}
      </div>
    </div>

    <!-- Valor de la serie de fibonacci en la posicion N -->
    <div class="ejercicio">
      <h1>Valor de la serie de fibonacci en la posicion N</h1>

      <form class="content" @submit.prevent="ejercicio4Calcular">
        <!--
        0, 1, 1, 2, 3, 5, 8, 13, 21, 34
        N=5 => 5
        N=8 => 21
        -->
        <input type="text" placeholder="9" v-model="ejercicio4Input" />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio4Resultado }}
      </form>
    </div>

    <h1>Nuevos</h1>

    <!-- invertir un texto -->
    <div class="ejercicio">
      <h1>invertir un texto</h1>

      <form class="content" @submit.prevent="ejercicio5Calcular">
        <!--
        luis => siul
        -->
        <input type="text" placeholder="Escribe un valor o texto" v-model="ejercicio5Input" />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio5Resultado }}
      </form>
    </div>

    <!-- año bisiesto -->
    <div class="ejercicio">
      <h1>año bisiesto</h1>

      <form class="content" @submit.prevent="">
        <!--
        2000 => bisiesto
        2001 => no bisiesto
        -->
        <input type="text" placeholder="9" />

        <button type="submit">Calcular</button>

        Resultado: {{}}
      </form>
    </div>

    <!-- sumar numeros pares de 1 - N -->
    <div class="ejercicio">
      <h1>SUmatoria de numeros pares de 1 - N</h1>

      <form class="content" @submit.prevent="">
        <!--
        10 => 30
        -->
        <input type="text" placeholder="9" />

        <button type="submit">Calcular</button>

        Resultado: {{}}
      </form>
    </div>

    <!-- convertir una texto a mayuscula -->
    <div class="ejercicio">
      <h1>convertir una texto a mayuscula</h1>

      <form class="content" @submit.prevent="">
        <!--
       luis => LUIS
        -->
        <input type="text" placeholder="9" />

        <button type="submit">Calcular</button>

        Resultado: {{}}
      </form>
    </div>

    <!-- determinar si N es primo -->
    <div class="ejercicio">
      <h1>determinar si N es primo</h1>

      <form class="content" @submit.prevent="">
        <!--
        7 => Si
        4 => No
        -->
        <input type="text" placeholder="9" />

        <button type="submit">Calcular</button>

        Resultado: {{}}
      </form>
    </div>

    <!-- determinar el caracter q mas se repite en el texto -->
    <div class="ejercicio">
      <h1>determinar el caracter q mas se repite en el textoo</h1>

      <form class="content" @submit.prevent="">
        <!--
        banana => a
        luis => Ninguno
        -->
        <input type="text" placeholder="9" />

        <button type="submit">Calcular</button>

        Resultado: {{}}
      </form>
    </div>

    <!-- sumar los numeros de un texto -->
    <div class="ejercicio">
      <h1>sumar los numeros de un texto</h1>

      <form class="content" @submit.prevent="">
        <!--
        banana12 => 3
        luis => 0
        ksjdg3n92 = 14
        -->
        <input type="text" placeholder="9" />

        <button type="submit">Calcular</button>

        Resultado: {{}}
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 50px;
}

.ejercicio {
  border: 1px solid black;
  padding: 20px;

  h1 {
    font-size: 2rem;
    line-height: 1;
    margin: 10px 0;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  border: 1px solid red;
}
</style>
