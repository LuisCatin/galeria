<template>
  <div>
    <ImagenCompleta
      v-for="(paisaje, index) in paisajes"
      :key="`p-${index}`"
      :imagen="paisaje.imagen"
      :nombre="paisaje.nombre"
      :descripcion="paisaje.descripcion"
      @clickcustom="clickCustom"
    />
  </div>
</template>

<script setup>
import ImagenCompleta from 'components/ImagenCompleta.vue'

const clickCustom = (showFullscreen) => {
  console.log('clickCustom', showFullscreen)
}

let paisajes = [
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 1,
    nombre: 'Montañas Rocosas',
    descripcion:
      'Las Montañas Rocosas son una cadena montañosa que se extiende por varios estados de EE. UU. y Canadá.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 2,
    nombre: 'Selva Amazónica',
    descripcion:
      'La Selva Amazónica es la selva tropical más grande del mundo, ubicada en América del Sur.',
    imagen: 'https://picsum.photos/400/300',
  },
  {
    id: 3,
    nombre: 'Desierto del Sahara',
    descripcion:
      'El Desierto del Sahara es el desierto cálido más grande del mundo, ubicado en África.',
    imagen: 'https://picsum.photos/400/300',
  },
]
</script>

<style lang="scss" scoped>
div {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 30px;
  background-color: #eaf1f8;
}
</style>
