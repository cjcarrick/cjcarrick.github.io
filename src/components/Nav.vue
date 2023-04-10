<script setup lang="ts">
import { mapNumber } from '@/lib'
import { onMounted, ref } from 'vue'

const hidden = ref(0)

const disappearStart = window.innerHeight * 0.25
const disappearStop = window.innerHeight * 0.6

onMounted(() => {
  window.addEventListener('scroll', () => {
    let newVal = mapNumber(window.scrollY, disappearStart, disappearStop, 0, 1)
    newVal = Math.max(0, newVal)
    newVal = Math.min(1, newVal)
    hidden.value = newVal
  })
})
</script>

<template>
  <section class="nav-container">
    <nav :style="{ '--hidden': `${hidden}` }" :class="{ hidden: hidden >= 1 }">
      <h1>Chris Carrick</h1>

      <p>Santa Clara University Computer Science student</p>

      <div class="pages">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </section>
</template>

<style scoped lang="scss">
.nav-container {
  position: relative;
}
nav {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > * {
    max-width: $textWidth;
    @include appear;
  }

  transform: translate(-50%, -50%) scale(calc(1 - var(--hidden) * 0.25));
  opacity: calc(1 - var(--hidden));

  &.hidden {
    display: none;
  }
}

.pages {
  display: flex;
  flex-direction: row;
  max-width: $maxWidth;
  margin: 0 auto;

  > * {
    padding: 1rem;
    @include appear(1);
  }
}
.spacer {
  flex: 1;
}
</style>
