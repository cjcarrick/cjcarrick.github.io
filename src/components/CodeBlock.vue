<template>
  <div class="code"><slot /></div>
</template>

<style scoped lang="scss">
.code {
  padding: $pad;
  border-radius: $br;
  background: rgba($color: $fg, $alpha: 10%);
  font-family: monospace;
  white-space: pre;
  align-self: stretch;
}
</style>
