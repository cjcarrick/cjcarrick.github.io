<script setup lang="ts"></script>

<template>
  <div class="tag"><slot /></div>
</template>

<style scoped lang="scss">
.tag {
  background: rgba($color: $fg, $alpha: 33%);
  font-size: 0.8rem;
  text-transform: uppercase;
  padding: 0.2rem 0.5rem;
  border-radius: $br;
  font-weight: bold;
  color: rgba($color: $fgAlt, $alpha: 80%);
}
</style>
