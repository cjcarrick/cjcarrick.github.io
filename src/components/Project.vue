<script setup lang="ts">
import FullscreenImage from '@/components/FullscreenImage.vue'
import { onMounted, ref, watch } from 'vue'
import Pagination from './Pagination.vue'

const props = defineProps<{
  name: string
  links?: { [key: string]: string }
  images?: string[]
}>()

const imageIndex = ref(0)

/** used to fade from one image to the next */
const lastImages = ref<{ [id: number]: string }>({})
let lastImageIndex = 0

const nextImage = () => {
  if (!props.images) return
  const nextIndex = imageIndex.value + 1
  if (nextIndex > props.images.length - 1) {
    imageIndex.value = 0
  } else {
    imageIndex.value = nextIndex
  }
}

const visible = ref(false)
const fullscreenVisible = ref(false)

const projectContainer = ref<null | HTMLInputElement>()
onMounted(() => {
  if (!projectContainer.value) {
    visible.value = true
    console.warn('Could not find container')
    return
  }

  const observer = new IntersectionObserver(
    entries => {
      visible.value = entries[0].isIntersecting
      // observer.unobserve(projectContainer.value!)
    },
    { threshold: 0.4 }
  )

  observer.observe(projectContainer.value)
})

watch(imageIndex, (newVal, oldVal) => {
  if (!props.images) return
  const i = lastImageIndex
  lastImages.value[i] = props.images[oldVal]
  lastImageIndex++

  setTimeout(() => {
    delete lastImages.value[i]
  }, 1000)
})
</script>

<template>
  <section ref="projectContainer" class="project" :class="{ visible }">
    <h1>{{ name }}</h1>

    <div class="tags">
      <slot name="tags" />
    </div>

    <div class="img-container" v-if="images">
      <div class="img" @click="fullscreenVisible = true">
        <img :src="images[imageIndex]" />

        <FullscreenImage
          v-if="fullscreenVisible"
          :images="images"
          v-model:index="imageIndex"
          v-model:visible="fullscreenVisible"
        />

        <!-- <img -->
        <!--   class="last-image" -->
        <!--   v-for="(image, i) in lastImages" -->
        <!--   :src="image" -->
        <!--   :data-id="i" -->
        <!-- /> -->
      </div>

      <!-- <div -->
      <!--   class="dots" -->
      <!--   v-if="project.images.length > 1" -->
      <!--   @mouseenter="autoAdvance = false" -->
      <!-- > -->
      <!--   <div -->
      <!--     class="dot-container" -->
      <!--     @click="imageIndex = i" -->
      <!--     v-for="(_, i) in project.images" -->
      <!--   > -->
      <!--     <div class="dot" :class="{ active: imageIndex == i }"></div> -->
      <!--   </div> -->
      <!-- </div> -->
    </div>

    <Pagination
      v-if="images && images.length > 1"
      v-model="imageIndex"
      :pages="images.length"
    />

    <slot />

    <div class="links">
      <a :href="url" v-for="(url, name) in links">{{ name }}</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.last-image {
  animation: fade-out 500ms linear 0 1 forwards forwards;
}
@keyframes fade-out {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0;
  }
}

.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  max-width: $textWidth;
  margin: 0 auto;

  /* > * { */
  /*   opacity: 0; */
  /* } */
  /* &.visible > * { */
  /*   @include appear(0); */
  /* } */
}

.img-container:hover .dots {
  opacity: 1;
}

.dots {
  transition: $transition;
  padding: $pad;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  margin: $pad auto 0 auto;

  opacity: 0;

  &:hover {
    background: rgba($color: $fg, $alpha: 10%);
  }

  .dot-container {
    padding: $pad;
    cursor: pointer;
  }

  .dot {
    transition: $transition;
    padding: $pad * 0.66;
    border-radius: 100px;
    width: fit-content;

    background: rgba($color: $fg, $alpha: 60%);
    &.active {
      background: rgba($color: $fg, $alpha: 100%) !important;
    }
  }
}

.img {
  height: 30vh;
  aspect-ratio: 4/3;

  position: relative;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: $br;
  }
}
.links {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(2pt * 2 + $pad);

  > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: $pad;
    padding: $pad $pad * 3;
    transition: 200ms;
    border: 2pt solid $col;
    border-radius: $br * 2;

    &:hover {
      text-decoration: none;
      box-shadow: 0 0.2em 1em 0.3em rgba($color: $col, $alpha: 20%);
      background: $col;
      color: white;
    }
  }
}

.tags {
  font-size: 1.66rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.333em;

  svg {
    height: 1em;
  }
}
</style>
