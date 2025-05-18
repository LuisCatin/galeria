<script setup>
import { ref, computed } from 'vue'

const currentProduct = ref(0)

const productos = [
  {
    nombre: 'ervigio',
    precio: 110,
    finDeSemana: true,
    descuento: 1,
  },
  {
    nombre: 'ATANAGILDO',
    precio: 125,
    finDeSemana: false,
    descuento: 0,
  },
  {
    nombre: 'LEOVIGILDO',
    precio: 73,
    finDeSemana: true,
    descuento: 20,
  },
  {
    nombre: 'ATAULFO',
    precio: 69,
    finDeSemana: true,
    descuento: 10,
  },
  {
    nombre: 'SISEBUTO',
    precio: 105,
    finDeSemana: false,
    descuento: 2,
  },
  {
    nombre: 'TEODORICO',
    precio: 112,
    finDeSemana: true,
    descuento: 0,
  },
  {
    nombre: 'RECESVINTO',
    precio: 71,
    finDeSemana: false,
    descuento: 30,
  },
]

const numberProduct = computed(() => {
  return currentProduct.value + 1
})

const weekend = computed(() => {
  if (productos[currentProduct.value].finDeSemana) {
    return '(Solo fines de semana)'
  } else {
    return '(De lunes a domingo)'
  }
})

const siguiente = () => {
  if (currentProduct.value < productos.length - 1) {
    currentProduct.value++
  } else {
    currentProduct.value = 0
  }
}

const atras = () => {
  if (currentProduct.value > 0) {
    currentProduct.value--
  } else {
    currentProduct.value = productos.length - 1
  }
}

const descuento = computed(() => {
  return (
    productos[currentProduct.value].precio *
    ((100 - productos[currentProduct.value].descuento) / 100)
  ).toFixed(2)
})

const nombre = computed(() => {
  return (
    productos[currentProduct.value].nombre.charAt(0).toUpperCase() +
    productos[currentProduct.value].nombre.slice(1).toLowerCase()
  )
})
</script>

<template>
  <div class="page">
    <div class="box">
      <!-- title -->
      <div class="title">
        Cena {{ numberProduct }} con el rey godo
        <span class="green title-name">{{ nombre }}</span>
      </div>

      <!-- info -->
      <div class="info">
        <!-- price -->
        <div class="price">
          Precio: <span class="green">{{ productos[currentProduct].precio }} €</span>
        </div>

        <!-- weekend -->
        <div class="weekend" :class="{ 'weeekend-red': productos[currentProduct].finDeSemana }">
          {{ weekend }}
        </div>
      </div>

      <!-- descuento -->
      <div class="descuento" v-if="productos[currentProduct].descuento > 0">
        Ahora un {{ productos[currentProduct].descuento }}% dto:
        <span class="green">{{ descuento }} € </span>
        <img class="descuento-img" src="/oferta.jpg" alt="" />
      </div>

      <div class="img">
        <img
          :src="`https://www.html6.es/img/rey_${productos[currentProduct].nombre.toLocaleLowerCase()}.png`"
        />
      </div>
      <div class="actions">
        <button class="button" @click="atras">Atras</button>
        ({{ numberProduct }}/{{ productos.length }})
        <button class="button" @click="siguiente">Siguiente</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100%;
  width: 100%;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 20px;
}

.title {
  font-size: 24px;
  text-align: center;

  .green {
    font-weight: bold;
  }
}

.title-name {
  text-transform: capitalize;
}

.green {
  color: green;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price {
  font-size: 20px;
  text-align: center;

  .green {
    font-weight: bold;
  }
}

.weekend {
  font-size: 12px;
  text-align: center;
  color: #fff;
  background-color: green;
  border-radius: 5px;
  padding: 2px 10px;

  &.weeekend-red {
    background-color: red;
  }
}

.descuento {
  display: flex;
  align-items: center;
  gap: 5px;
  padding-top: 15px;
  font-size: 15px;

  .green {
    font-weight: bold;
  }
}

.descuento-img {
  width: 50px;
  height: auto;
}

.img {
  height: 300px;
  width: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
