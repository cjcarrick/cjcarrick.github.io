<script setup lang="ts">
import { onMounted, ref } from 'vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Nav from './components/Nav.vue'
import Pagination from './components/Pagination.vue'
import ProjectsView from './views/ProjectsView.vue'

const page = ref(0)

/** mapping of the projects on display at this page, broken up into sections.
 * Numbers should start at 0, increment by 1, and all be unique */
const sections: number[] = [2, 9, 1]

const scrollToSection = (i: number) => {
  const numProjects = sections.reduce((acc, curr) => acc + curr, 0)
  let scrollPos = (i / numProjects) * document.body.clientHeight
  scrollPos = Math.round(scrollPos)
  window.scrollTo(0, scrollPos)
}

const updateActiveProject = () => {
  const numProjects = sections.reduce((acc, curr) => acc + curr, 0)
  let newVal = (window.scrollY / document.body.clientHeight) * (numProjects - 1)
  newVal = Math.round(newVal)
  if (newVal !== page.value) {
    page.value = newVal
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveProject)
})
</script>

<template>
  <!-- <div id="nav"> -->
  <!--   <router-link to="/">Home</router-link> | -->
  <!--   <router-link to="/about">About</router-link> | -->
  <!--   <router-link to="/todos">Todos</router-link> | -->
  <!--   <router-link to="/todos/1">First Todo</router-link> -->
  <!-- </div> -->

  <Nav />

  <About />

  <!-- <router-view /> -->
  <ProjectsView />

  <Contact />

  <div class="progress">
    <Pagination
      v-model="page"
      @update:model-value="page => scrollToSection(page)"
      :pages="sections"
      orientation="vertical"
    />
  </div>
</template>

<style lang="scss">
@import '@/assets/index.scss';
</style>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: $green;
  }
}
</style>

<style scoped lang="scss">
.progress {
  position: fixed;

  top: 0;
  right: 0;
  height: 100vh;
  padding: 0 1rem 0 6rem;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: $transition;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
}
</style>
