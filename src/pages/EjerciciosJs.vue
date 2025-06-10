<script setup>
import { ref } from 'vue'

// suma de 1 - N
const ejercicio1Input = ref(0)
const ejercicio1Resultado = ref(0)
const ejercicio1Calcular = () => {
  let sumatoria = 0

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
const ejercicio5Input = ref('')
const ejercicio5Resultado = ref('')
const ejercicio5Calcular = () => {
  ejercicio5Resultado.value = ejercicio5Input.value.split('').reverse().join('')

  const t = ejercicio5Input.value
  let tinvertido = ''
  for (let i = t.length - 1; i >= 0; i--) {
    tinvertido = tinvertido + t[i]
  }
  ejercicio5Resultado.value = tinvertido
}

// Año bisiesto
const ejercicio6Input = ref('')
const ejercicio6Resultado = ref('')
const ejercicio6Calcular = () => {
  if (ejercicio6Input.value % 4 == 0) {
    ejercicio6Resultado.value = 'Si'
  } else {
    ejercicio6Resultado.value = 'No'
  }

  // ejercicio6Resultado.value = ejercicio6Input.value % 4 == 0 ? 'si' : 'no'
}

// Suma de Pares
const ejercicio7Input = ref('')
const ejercicio7Resultado = ref('')
const ejercicio7Calcular = () => {
  // let sumatoria = 0

  // for (let i = 1; i <= ejercicio7Input.value; i++) {
  //   if (i % 2 == 0) {
  //     sumatoria = sumatoria + i
  //   }
  // }

  // ejercicio7Resultado.value = sumatoria

  let sumatoria = 0

  for (let i = 0; i <= ejercicio7Input.value; i += 2) {
    sumatoria += i
  }

  ejercicio7Resultado.value = sumatoria
}

// Suma de Pares
const ejercicio8Input = ref('')
const ejercicio8Resultado = ref('')
const ejercicio8Calcular = () => {
  const texto = ejercicio8Input.value
  ejercicio8Resultado.value = texto.toUpperCase()
  // // import { ref, computed } from 'vue'

  // const ejercicio8Input = ref('')

  // const ejercicio8Resultado = computed(() => ejercicio8Input.value.toUpperCase())
}

// Es numero primo? Si / No
const ejercicio9Input = ref('')
const ejercicio9Resultado = ref('')
const ejercicio9Calcular = () => {
  const num = Number(ejercicio9Input.value)
  let esPrimo = num > 1 // Solo números mayores que 1 pueden ser primos

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      esPrimo = false
      break
    }
  }

  ejercicio9Resultado.value = esPrimo ? 'Si es primo' : 'No es primo'
}

// Determinar el caractér más repetido
const ejercicio10Input = ref('')
const ejercicio10Resultado = ref('')
const ejercicio10Calcular = () => {
  // let caracteres = Array(10000000)
  // caracteres.fill(0)

  // for (let char of ejercicio10Input.value) {
  //   caracteres[char.charCodeAt()]++
  // }

  // let positon = 0
  // let cantidadIguales = false
  // for (let i = 0; i < caracteres.length; i++) {
  //   if (caracteres[i] > 0)
  //     if (caracteres[positon] == caracteres[i]) {
  //       cantidadIguales = true
  //     } else if (caracteres[positon] < caracteres[i]) {
  //       positon = i
  //       cantidadIguales = false
  //     }
  // }

  // ejercicio10Resultado.value = cantidadIguales ? 'Ninguno' : String.fromCharCode(positon)

  let repeticiones = 0
  let charMasRepeticiones = ''
  let empate = false

  for (let char of ejercicio10Input.value) {
    const division = ejercicio10Input.value.split(char)

    if (repeticiones == division.length - 1 && char != charMasRepeticiones) {
      empate = true
    } else if (repeticiones < division.length - 1) {
      repeticiones = division.length - 1
      charMasRepeticiones = char
      empate = false
    }
  }

  ejercicio10Resultado.value = empate ? 'Ninguno' : charMasRepeticiones
}

// Sumar los numeros de un texto
const ejercicio11Input = ref('')
const ejercicio11Resultado = ref('')
const ejercicio11Calcular = () => {
  let suma = 0
  const texto = ejercicio11Input.value
  for (let i = 0; i < texto.length; i++) {
    const numero = texto[i]
    if (numero >= '0' && numero <= '9') {
      suma += Number(numero)
    }
  }

  ejercicio11Resultado.value = suma
}

// crear abreviaturas de palabras con tamaños mayores a 10
// internacionalizacion = i18n
const ejercicio12Input = ref('')
const ejercicio12Resultado = ref('')
const ejercicio12Calcular = () => {
  const texto = ejercicio12Input.value
  if (texto.length > 10) {
    ejercicio12Resultado.value = texto[0] + (texto.length - 2) + texto[texto.length - 1]
  } else ejercicio12Resultado.value = texto
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

      <form class="content" @submit.prevent="ejercicio6Calcular">
        <!--
        2000 => bisiesto
        2001 => no bisiesto
        -->
        <input type="text" placeholder="Escribe un año" v-model="ejercicio6Input" />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio6Resultado }}
      </form>
    </div>

    <!-- sumar numeros pares de 1 - N -->
    <div class="ejercicio">
      <h1>SUmatoria de numeros pares de 1 - N</h1>

      <form class="content" @submit.prevent="ejercicio7Calcular">
        <!--
        10 => 30
        -->
        <input type="text" placeholder="9" v-model="ejercicio7Input" />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio7Resultado }}
      </form>
    </div>

    <!-- convertir una texto a mayuscula -->
    <div class="ejercicio">
      <h1>convertir una texto a mayuscula</h1>

      <form class="content" @submit.prevent="ejercicio8Calcular">
        <!--
       luis => LUIS
        -->
        <input type="text" placeholder="Escriba un texto" v-model="ejercicio8Input" />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio8Resultado }}
      </form>
    </div>

    <!-- determinar si N es primo -->
    <div class="ejercicio">
      <h1>determinar si N es primo</h1>

      <form class="content" @submit.prevent="ejercicio9Calcular">
        <!--
        7 => Si
        4 => No
        -->
        <input type="text" placeholder="Escriba un numero" v-model="ejercicio9Input" />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio9Resultado }}
      </form>
    </div>

    <!-- determinar el caracter q mas se repite en el texto -->
    <div class="ejercicio">
      <h1>determinar el caracter q mas se repite en el textoo</h1>

      <form class="content" @submit.prevent="ejercicio10Calcular">
        <!--
        banana => a
        luis => Ninguno
        -->
        <input type="text" placeholder="9" v-model="ejercicio10Input" />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio10Resultado }}
      </form>
    </div>

    <!-- sumar los numeros de un texto -->
    <div class="ejercicio">
      <h1>sumar los numeros de un texto</h1>

      <form class="content" @submit.prevent="ejercicio11Calcular">
        <!--
        banana12 => 3
        luis => 0
        ksjdg3n92 = 14
        -->
        <input type="text" placeholder="9" v-model="ejercicio11Input" />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio11Resultado }}
      </form>
    </div>

    <!-- crear abreviaturas de palabras con tamaños mayores a 10 -->
    <div class="ejercicio">
      <h1>crear abreviaturas de palabras con tamaños mayores a 10</h1>

      <form class="content" @submit.prevent="ejercicio12Calcular">
        <!--
        karel => karel
        luis => luis
        internacionalizacion = i18n
        -->
        <input type="text" placeholder="" v-model="ejercicio12Input" />

        <button type="submit">Calcular</button>

        Resultado: {{ ejercicio12Resultado }}
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
