<script setup lang="ts">
import { onMounted, Teleport } from 'vue'

const props = defineProps<{
  images: string[]
  visible: boolean
  index: number
}>()

const emit = defineEmits(['update:index', 'update:visible'])

const incr = () =>
  emit('update:index', Math.min(props.images.length - 1, props.index + 1))
const decr = () => emit('update:index', Math.max(0, props.index - 1))

onMounted(() => {
  window.addEventListener('keydown', ev => {
    if (ev.key == 'Escape') {
      emit('update:visible', false)
    }
  })
})
</script>

<template>
  <Teleport to="body">
    <div
      class="container"
      tabindex="0"
      @click="$emit('update:visible', false)"
      @keydown.prevent.left="decr"
      @keydown.prevent.right="incr"
      @keydown.prevent.escape="emit('update:visible', false)"
    >
      <div class="img">
        <img :src="images[index]" />
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.container {
  position: fixed;
  inset: 0;
  background: #000;
  padding: $pad;
}

.img {
  height: 100%;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
