<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import ExpressIcon from '@/components/icons/Express.vue'
import LinuxIcon from '@/components/icons/Linux.vue'

import NodeIcon from '@/components/icons/Node.vue'
import NpmIcon from '@/components/icons/Npm.vue'
import PrismaIcon from '@/components/icons/Prisma.vue'
import PythonIcon from '@/components/icons/Python.vue'
import SassIcon from '@/components/icons/Sass.vue'
import ShIcon from '@/components/icons/Sh.vue'
import SvelteIcon from '@/components/icons/Svelte.vue'
import TypeScriptIcon from '@/components/icons/TypeScript.vue'
import VueIcon from '@/components/icons/Vue.vue'
import Project from '@/components/Project.vue'
</script>

<template>
  <Project
    id="work"
    name="SCU ACM Svelte (WIP) (Closed Source)"
    :images="[
      '/img/acm-home.jpg',
      '/img/acm-board.jpg',
      '/img/acm-calendar.jpg'
    ]"
  >
    <p>
      As part of
      <a
        href="https://drive.google.com/file/d/1dNvMJ0W0StcbHN9bN9ybmPh0j4IREhe0/view?usp=sharing"
      >
        research I conducted in May of 2023</a
      >, it became clear to me the reponsibility the web developers have to make
      performant, accessible websites. Modern websites are often overbuilt and
      slow, even when modern technology allows them to overcome that. I found
      that the <a href="http://acm.engr.scu.edu/">website</a> for my
      university's ACM chapter was much more complicated than it needed to be,
      and was in some ways part of the problem. So, I have been rebuilding the
      site with Svelte, into one that is easier to maintain, builds rougly 60x
      faster, loads even faster than that, and works without client-side
      JavaScript or even CSS while maintaining the same core feature set.
    </p>

    <p>
      This has been a learning experience for me, being my first Svelte, SSR, or
      Firebase project, but I picked it up realtively quickly. In the future, I
      hope to implement authentication that doesn't reveal users' identity and
      fully encrypts all data stored in its Firestore database.
    </p>

    <template v-slot:tags>
      <NodeIcon />
      <SvelteIcon />
      <SassIcon />
      <TypeScriptIcon />
    </template>
  </Project>

  <Project
    name="Wheel Size"
    :images="['/img/wheel-size-summary.jpg', '/img/wheel-size-gallery.jpg']"
    :links="{
      Source: 'https://github.com/cjcarrick/wheel-size',
      Launch: 'https://cjcarrick.github.io/wheel-size'
    }"
  >
    <p>
      This is a small tool I made to help visualize the way wheels and tires
      will fit on a car. There are some similar apps available already, but this
      one also shows what sizes other people are using, which is really helpful.
    </p>

    <template v-slot:tags>
      <SassIcon />
      <TypeScriptIcon />
      <VueIcon />
    </template>
  </Project>
  <Project
    name="Movies (WIP)"
    :links="{
      Source: 'https://github.com/cjcarrick/movies'
    }"
    :images="[
      '/img/movies-list.jpg',
      '/img/movies-add.jpg',
      '/img/movies-filter.jpg',
      '/img/movies-details.jpg'
    ]"
  >
    <p>
      My dad told me that he needed a way to manage his collection of DVDs, and
      I saw that as the perfect opportunity to learn databases. Trailers, cast
      members, tags, indices, and more are retrived from IMDB, TMDB, and others,
      and then stored in a Prisma database. The client is able to make complex
      queries with an intuitive fuzzy-completed search bar that works well on
      mobile as well as desktop.
    </p>

    <p>
      The project is nearly done and just needs some performance and CSS
      improvements on the client, and ideally Service Worker support on mobile
      so that users can browse a cached database when away from the self-hosted
      server. In addition, I plan on implementing a "Discover" page that
      suggests movies by category and shows new releases.
    </p>

    <template v-slot:tags>
      <ExpressIcon />
      <NodeIcon />
      <PrismaIcon />
      <SassIcon />
      <TypeScriptIcon />
    </template>
  </Project>

  <Project
    name="Water Watcher COVID-19"
    :links="{
      Source: 'https://github.com/AnnaHubbard5/Covid-in-Wastewater',
      Devpost: 'https://devpost.com/software/water-watcher-covid-19'
    }"
    :images="[
      '/img/waterwatcher-map.jpg',
      '/img/waterwatcher-graph.jpg',
      '/img/waterwatcher-about.jpg',
      '/img/waterwatcher-signup.jpg',
      '/img/waterwatcher-email.jpg'
    ]"
  >
    <p>
      In less than 24 hours with a team of several others, we created a web app
      that can, using an API from the CDC, visualize Covid levels in the sewers
      at a per-county level on a (Deck.gl) map. On a (Chart.js) graph, you can
      see how this data is able to predict spikes in Covid cases days before
      they happen. The site also includes a signup for email alerts. Due to the
      time constraints, we didn't quite finish everything, but I am still proud
      of the end result.
    </p>

    <template v-slot:tags>
      <PythonIcon />
      <TypeScriptIcon />
      <VueIcon />
    </template>
  </Project>

  <Project
    name="Connect Four"
    :links="{
      Source: 'https://github.com/cjcarrick/connect-four',
      Play: 'https://cjcarrick.github.io/connect-four'
    }"
    :images="[
      'https://github.com/cjcarrick/connect-four/raw/main/preview/HomeView.png',
      'https://github.com/cjcarrick/connect-four/raw/main/preview/LocalView.png'
    ]"
  >
    <p>
      A Connect 4 game written with Vue and TypeScript. A lot of attention was
      spent on making it look nice. On top of that, it has local multiplayer,
      local matches against a bot and, when hosted on a Node server, online
      multiplayer.
    </p>

    <template v-slot:tags>
      <ExpressIcon />
      <SassIcon />
      <TypeScriptIcon />
      <VueIcon />
    </template>
  </Project>

  <Project
    name="ts-cli"
    :links="{
      NPM: 'https://www.npmjs.com/package/@cjcarrick/ts-cli',
      Source: 'https://github.com/cjcarrick/ts-cli'
    }"
    :images="['/img/ts-cli.jpg', '/img/ts-cli-help.jpg']"
  >
    <p>
      Tool to quickly scaffold TypeScript project using an interactive CLI.
      Capable of targetting Node, Bun, or the web (with vanilla JavaScript), and
      building with TSC or ESBuild. I made this as practice for making a CLI
      tool and because I often found myself copying the same boilerplate code
      for many of the TypeScript projects I made. It's avalible as an NPM
      package and can be run with the following command:
    </p>

    <template v-slot:tags>
      <NodeIcon />
      <NpmIcon />
      <ShIcon />
      <TypeScriptIcon />
    </template>

    <CodeBlock>$ npx @cjcarrick/ts-cli</CodeBlock>
  </Project>

  <Project
    name="vite-fullstack"
    :links="{
      Playground: 'https://codesandbox.io/s/github/cjcarrick/vite-fullstack',
      Source: 'https://github.com/cjcarrick/vite-fullstack'
    }"
  >
    <p>
      Boilerplate code for an ESM, TypeScript, Vue project with Vite, SCSS, and
      an integrated type-safe backend Express server all with HMR. The perfect
      starting point for working with external APIs.
    </p>
    <p>
      When I made this, I didn't realize that there were already metaframeworks
      like Nuxt or Sveltekit, but I was still able to learn how to scaffold
      large projects well and I do actually prefer the simplicity of
      vite-fullstack over existing solutions.
    </p>

    <template v-slot:tags>
      <ExpressIcon />
      <NodeIcon />
      <SassIcon />
      <TypeScriptIcon />
      <VueIcon />
    </template>
  </Project>

  <Project
    name="h5-xp"
    :links="{ Source: 'https://github.com/cjcarrick/H5-XP-iOS-Widget' }"
    :images="[
      '/img/h5-xp-ship.jpg',
      '/img/h5-xp-banana.jpg',
      '/img/h5-carnage-report.jpg'
    ]"
  >
    <p>
      This was one of the first projects I ever completed, and made me realize
      how useful (and easy) programming can be. To help us reach our XP goals in
      time, I made a mobile widget for my brother and I to track our
      progresison. I really enjoyed coming up with a design that matched the
      in-game UI, and for reference, the in-game XP report is shown in the third
      image.
    </p>

    <template v-slot:tags>
      <TypeScriptIcon />
    </template>
  </Project>

  <Project
    name="Dotfiles (Constant WIP)"
    :links="{ Browse: 'https://github.com/cjcarrick/dotfiles' }"
    :images="['/img/nvim.jpg', '/img/tmx.jpg']"
  >
    <p>
      My Linux/Mac config files. Most of it centers around having a tiling
      window manager (Yabai on Mac and i3 on Linux) and keeping things minimal.
      You'll find also find config files in there for Tmux, Alacritty, ZSH,
      Neovim, and others. Among them is <code>tmx</code>, a Tmux session manager
      I made that's based on project directories.
    </p>

    <template v-slot:tags>
      <LinuxIcon />
      <ShIcon />
    </template>
  </Project>
</template>

<style scoped lang="scss"></style>
