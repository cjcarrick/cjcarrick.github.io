<script setup lang="ts">
import FullscreenImage from '@/components/FullscreenImage.vue'
import { onMounted, ref, watch } from 'vue'

const props = defineProps<{
  name: string
  links?: { [key: string]: string }
  images?: string[]
}>()

const imageIndex = ref(0)

/** used to fade from one image to the next */
const lastImages = ref<{ [id: number]: string }>({})
let lastImageIndex = 0

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

watch(imageIndex, oldVal => {
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
      </div>
    </div>

    <div class="img-buttons">
      <div class="img" v-for="src, i in images" @click="imageIndex = i" :class="{ active: imageIndex == i }">
        <img :src="src" />
      </div>
    </div>

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

.img-container {
  .img {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: Min(40rem, 50vh);
    overflow: hidden;

    img {
      cursor: zoom-in;
      object-fit: contain;
      height: 100%;
      width: 100%;
      border-radius: $br;
    }
  }
}

.img-buttons {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6pt;
  .img {
    cursor: pointer;
    height: 3rem;
    width: 6rem;
    opacity: 0.5;
    position: relative;
    border-radius: 2pt;
    overflow: hidden;
    &.active {
      opacity: 1;
      outline: 2pt solid $col;
      outline-offset: 2pt;
    }
    img {
      border-radius: 2pt;
      width: 100%;
      min-height: 100%;
      object-fit:cover;
    }
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
