<script setup lang="ts">
import GithubIcon from '@/components/icons/Github.vue'
import NpmIcon from '@/components/icons/Npm.vue'
import { urlName } from '@/lib'
const props = defineProps<{ link: string }>()

const { name } = urlName(props.link)
</script>

<template>
  <a :href="link" class="link" target="_blank">
    <template v-if="name == 'NPM'">
      <NpmIcon />
    </template>
    <template v-else-if="name == 'Github'">
      <GithubIcon />
    </template>
    <span class="other" v-else>
      {{ name }}
    </span>
  </a>
</template>

<style scoped lang="scss">
.link {
  display: flex;
  flex-direction: row;
  padding: $pad;
  font-size: 2rem;
  cursor: pointer;

  color: $col;
  text-decoration: inherit;

  &:hover .other {
    text-decoration: underline;
    font-size: 0.5em;
  }
}
</style>
