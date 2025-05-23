<script setup>
import { ref, computed } from 'vue'

const descripcion = ref('')
const monto = ref(0)
const fecha = ref('')

const movimientos = ref([])

const agregarMovimiento = () => {
  if (descripcion.value && monto.value && fecha.value) {
    movimientos.value.push({
      descripcion: descripcion.value,
      monto: parseFloat(monto.value),
      fecha: fecha.value,
    })
    descripcion.value = ''
    monto.value = 0
    fecha.value = ''
  }
}
const totalIngresos = computed(() => {
  let ingresos = 0
  movimientos.value.forEach(({ monto }) => {
    ingresos += monto
  })
  return ingresos
})

const totalEgresos = computed(() => {
  let egresos = 0
  movimientos.value.forEach(({ monto }) => {
    if (monto < 0) {
      egresos += monto
    }
  })
  return egresos
})

const totalSuma = computed(() => {
  let suma = 0
  movimientos.value.forEach(({ monto }) => {
    if (monto > 0) {
      suma += monto
    }
  })
  return suma
})
</script>

<template>
  <div class="libro-movimientos">
    <h1 class="libro-movimientos__titulo">Libro de Movimientos</h1>

    <div class="libro-movimientos__formulario-main">
      <form class="libro-movimientos__formulario" @submit.prevent="agregarMovimiento">
        <h2 class="libro-movimientos__formulario-titulo">Agregar Movimiento</h2>

        <div class="libro-movimientos__campo">
          <label class="libro-movimientos__label" for="descripcion">Descripción </label>
          <input
            required
            class="libro-movimientos__input"
            id="descripcion"
            type="text"
            v-model="descripcion"
          />
        </div>

        <div class="libro-movimientos__campo">
          <label class="libro-movimientos__label" for="monto">Monto</label>
          <input
            required
            class="libro-movimientos__input"
            id="monto"
            type="number"
            v-model="monto"
          />
        </div>

        <div class="libro-movimientos__campo">
          <label class="libro-movimientos__label" for="fecha">Fecha</label>
          <div class="lista-movimiento-btn">
            <input
              required
              class="libro-movimientos__input"
              id="fecha"
              type="date"
              v-model="fecha"
            />
            <button type="submit" class="libro-movimientos__btn-agregar">Agregar</button>
          </div>
        </div>
        <div class="libro-movimiento__separador"></div>

        <div class="libro-movimientos__resumen">
          <div class="libro-movimientos__resumen-item">
            Total de Ingresos:
            <div class="libro-movimientos__resumen-value green">
              ${{ Math.abs(totalSuma).toFixed(2) }}
            </div>
          </div>
          <div class="libro-movimientos__resumen-item">
            Total de Egresos:
            <div class="libro-movimientos__resumen-value red">
              ${{ Math.abs(totalEgresos).toFixed(2) }}
            </div>
          </div>
          <div class="libro-movimientos__resumen-item">
            Saldo Actual:
            <div class="libro-movimientos__resumen-value">${{ totalIngresos }}</div>
          </div>
        </div>
      </form>

      <div class="libro-movimientos__formulario">
        <h2 class="libro-movimientos__formulario-titulo">Movimientos</h2>

        <table class="libro-movimientos__tabla">
          <thead>
            <tr>
              <th class="libro-movimientos__th libro-movimientos__th--descripcion">Descripción</th>
              <th class="libro-movimientos__th libro-movimientos__th--monto">Monto</th>
              <th class="libro-movimientos__th libro-movimientos__th--fecha">Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(movimiento, index) in movimientos" :key="index">
              <td class="libro-movimientos__td libro-movimientos__td--descripcion">
                {{ movimiento.descripcion }}
              </td>
              <td
                class="libro-movimientos__td libro-movimientos__td--monto"
                :class="[{ green: movimiento.monto > 0 }, { red: movimiento.monto < 0 }]"
              >
                ${{ Math.abs(movimiento.monto).toFixed(2) }}
              </td>
              <td class="libro-movimientos__td libro-movimientos__td--fecha">
                {{ movimiento.fecha }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td class="libro-movimientos__td libro-movimientos__td--saldo-label">
                Saldo Actual:
              </td>
              <td class="libro-movimientos__td libro-movimientos__td--saldo">
                ${{ totalIngresos }}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.libro-movimientos {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  font-family: 'Inter', sans-serif;
  gap: 40px;
}

.libro-movimientos__titulo {
  font-size: 16px;
  line-height: 1;
  margin: 0;
}

.libro-movimientos__formulario-main {
  display: flex;
  gap: 20px;
  width: 100%;
}

.libro-movimientos__formulario {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid #ebebeb;
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
}

.libro-movimientos__formulario-titulo {
  font-size: 20px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
}

.libro-movimientos__campo {
  display: grid;
  grid-template-columns: 100px 1fr;
}

.lista-movimiento-btn {
  display: flex;
  align-items: center;
  gap: 10px;
}

.libro-movimientos__label {
  font-size: 14px;
  line-height: 1;
  margin: 0;
}

.libro-movimientos__input {
  flex-grow: 1;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 2px 5px;
}

.libro-movimientos__btn-agregar {
  background-color: #569ae6;
  border-radius: 5px;
  color: #ffffff;
  border: none;
  height: 100%;
  padding: 0 15px;
}

.libro-movimiento__separador {
  border-top: 1px solid #ebebeb;
}

.libro-movimientos__resumen {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.green {
  color: #46a200;
}

.red {
  color: #d20404;
}

.libro-movimientos__resumen-item {
  font-size: 14px;
}
.libro-movimientos__resumen-value {
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  margin: 0;
}
.libro-movimientos__tabla {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;

  border-radius: 5px;
  overflow: hidden;
  font-size: 14px;
}

.libro-movimientos__th,
.libro-movimientos__td {
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid #ebebeb;
}

.libro-movimientos__th {
  font-weight: 600;
}

.libro-movimientos__td--descripcion,
.libro-movimientos__th--descripcion {
}

.libro-movimientos__td--monto,
.libro-movimientos__th--monto {
  text-align: right;
}

.libro-movimientos__td--fecha,
.libro-movimientos__th--fecha {
  text-align: center;
}

.libro-movimientos__td--saldo-label {
  border-bottom: none;
}

.libro-movimientos__td--saldo {
  font-weight: 700;
  border-bottom: none;
  text-align: right;
}
</style>
