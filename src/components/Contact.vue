<script setup lang="ts">
import GithubIcon from '@/components/icons/Github.vue'
import MailIcon from '@/components/icons/Mail.vue'
import { mapNumber } from '@/lib'
import { onMounted, ref } from 'vue'

const hidden = ref(false)
const t = ref(0)

const appearStart = document.body.clientHeight - window.innerHeight * 0.5
const appearStop = document.body.clientHeight - window.innerHeight * 0.2
onMounted(() => {
  window.addEventListener('scroll', () => {
    let newVal = mapNumber(window.scrollY, appearStart, appearStop, 0, 1)
    t.value = newVal
    newVal = Math.max(0, newVal)
    newVal = Math.min(1, newVal)
    hidden.value = newVal > 0.5
  })
})

/** base64 is decrypted with javascript on load to prevent scraping */
let email = ref('Y2Fycmljay5qLmNocmlzdG9waGVyQGdtYWlsLmNvbQ==')
onMounted(() => (email.value = atob(email.value)))
</script>

<template>
  <section class="contact">
    <div class="buttons">
      <a
        class="button"
        :href="'mailto://' + email"
        :class="{ 'in-view': hidden }"
      >
        <MailIcon /> <span class="bar"></span> <span> {{ email }} </span>
      </a>
      <a
        href="https://github.com/cjcarrick"
        class="button"
        :class="{ 'in-view': hidden }"
      >
        <GithubIcon />
        <span class="bar"></span>
        <span>cjcarrick</span>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  &:hover .button {
    background: rgba($color: $fg, $alpha: 10%);
  }
}
.buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: $pad;
  width: fit-content;

  &:hover .button {
    color: rgba($color: $fg, $alpha: 75%);
  }
}

.button {
  background: rgba($color: $fg, $alpha: 0);
  text-decoration: none;
  color: $fg;
  border-radius: 1000px;

  transition: all $transition, max-width 2000ms;
  overflow: hidden;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  font-size: 1rem;

  svg {
    font-size: 1.25rem;
    min-width: 1em;
  }

  .bar {
    background: $fg;
    min-width: 1px;
    opacity: 0.25;
    align-self: stretch;
  }

  &:hover {
    color: $fgAlt !important;
  }
}

section:hover .button {
  padding: 0.5rem 1rem;
}
</style>
