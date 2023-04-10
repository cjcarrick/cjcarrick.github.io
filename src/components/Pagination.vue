<script setup lang="ts">
const props = defineProps<{
  /** either the number of pages, or the number of pages in each section */
  pages: number | number[]
  modelValue: number
  orientation?: 'vertical' | 'horizontal'
}>()

defineEmits(['update:modelValue'])

/** ensures that props.pages is an array */
const toArr = () => {
  if (typeof props.pages == 'number') {
    return [props.pages]
  } else {
    return props.pages
  }
}
</script>

<template>
  <div class="pagination" :class="{ vertical: orientation == 'vertical' }">
    <div
      class="dots"
      v-for="(section, sectionIndex) in toArr()"
      :class="{ vertical: orientation == 'vertical' }"
    >
      <div
        class="dot-container"
        @click="$emit('update:modelValue', i)"
        v-for="i in new Array(section).fill(0).map(
          (_, j) =>
            j +
            toArr()
              .filter((_, k) => k < sectionIndex)
              .reduce((acc, curr) => acc + curr, 0)
        )"
      >
        <div class="dot" :class="{ active: modelValue == i }"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pagination,
.dots {
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  flex-direction: row;
  &.vertical {
    flex-direction: column;
  }
}

.dots:not(.vertical) .dot-container {
  padding: $pad * 2 $pad;
  &:first-child {
    padding-left: $pad * 2;
  }
  &:last-child {
    padding-right: $pad * 2;
  }
}
.dots.vertical .dot-container {
  padding: $pad $pad * 2;
  &:first-child {
    padding-top: $pad * 2;
  }
  &:last-child {
    padding-bottom: $pad * 2;
  }
}

.dots {
  transition: $transition;
  border-radius: 100px;

  &:hover {
    background: rgba($color: $fg, $alpha: 10%);
  }

  .dot-container {
    cursor: pointer;
  }

  .dot {
    transition: $transition;
    padding: $pad * 0.66;
    border-radius: 100px;
    width: fit-content;
    background: rgba($color: $fg, $alpha: 60%);
    &.active {
      background: rgba($color: $fgAlt, $alpha: 100%) !important;
    }
  }
}
</style>
