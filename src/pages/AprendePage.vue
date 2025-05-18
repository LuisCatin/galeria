<template>
  <div class="container">
    <div v-if="loading">Cargando datos desde el servidor...</div>
    <template v-else>
      <button class="button-style" @click="openModal()">Agregar persona</button>
      <div class="header">
        <h1>Lista de Personas</h1>
        <div class="personas">
          <div v-for="(persona, index) in personas" :key="index">
            <p>{{ persona.nombre }}</p>
            <p>{{ persona.edad }}</p>
            <p>{{ persona.email }}</p>
            <p>{{ persona.direccion }}</p>
            <p>{{ persona.telefono }}</p>
            <p>{{ persona.fechaNacimiento }}</p>
            <p>{{ persona.genero }}</p>
          </div>
        </div>
      </div>

      <Modal @close="showModal = false" v-if="showModal">
        <form @submit.prevent="agregarPersona">
          <div class="inputs">
            <input class="input" type="text" v-model="nombre" placeholder="Nombre" />
            <input
              class="input"
              min="18"
              max="65"
              type="number"
              v-model="edad"
              placeholder="Edad"
            />
            <input class="input" type="email" v-model="email" placeholder="Email" />
            <input class="input" type="text" v-model="direccion" placeholder="Dirección" />
            <input class="input" type="text" v-model="telefono" placeholder="Teléfono" />
            <input
              class="input"
              type="date"
              v-model="fechaNacimiento"
              placeholder="Fecha de Nacimiento"
            />
            <label>
              <input
                class="form-gender"
                value="masculino"
                name="gender"
                type="radio"
                v-model="genero"
              />
              Masculino
            </label>
            <label>
              <input
                class="form-gender"
                value="femenino"
                name="gender"
                type="radio"
                v-model="genero"
              />
              Femenino
            </label>

            <button class="form-submit" type="submit">Agregar</button>
          </div>
        </form>
      </Modal>
    </template>
  </div>
</template>

<script setup>
import Modal from 'components/ModalComponent.vue'
import { ref } from 'vue'

const personas = ref([])

const showModal = ref(false)
const loading = ref(false)
const nombre = ref('')
const edad = ref(null)
const email = ref('')
const direccion = ref('')
const telefono = ref('')
const fechaNacimiento = ref('')
const genero = ref('')

const openModal = () => {
  showModal.value = true
}

const agregarPersona = () => {
  const nuevaPersona = {
    nombre: nombre.value,
    edad: edad.value,
    email: email.value,
    direccion: direccion.value,
    telefono: telefono.value,
    fechaNacimiento: fechaNacimiento.value,
    genero: genero.value,
  }

  personas.value.push(nuevaPersona)

  // Reset form fields
  nombre.value = ''
  edad.value = null
  email.value = ''
  direccion.value = ''
  telefono.value = ''
  fechaNacimiento.value = ''
  genero.value = ''

  showModal.value = false
}
</script>

<style scoped lang="scss">
.header {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  margin: 20px auto 0 20px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  height: 100%;
}

.button-style {
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  background-color: rgb(248, 248, 248);
  color: black;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:hover {
    background-color: rgb(36, 35, 40);
    transform: scale(1.05);
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    color: rgb(233, 226, 226);
  }
}

.container {
  color: black;
  box-sizing: border-box;
}

.inputs {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px 10px;
  gap: 10px;
  color: black;
  padding: 10px;
  width: 100%;

  .form-submit {
    background-color: rgb(36, 35, 40);
    color: white;
    cursor: pointer;
    &:hover {
      background-color: rgb(22, 15, 85);
      transform: scale(1.05);
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
    }
  }
  .input {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(119, 119, 121);
    border-radius: 10px;
    color: black;
  }
}
</style>
