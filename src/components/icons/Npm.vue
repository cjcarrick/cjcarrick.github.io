<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <rect fill="#CC3534" height="24" rx="2" width="24" />
    <path
      fill="#fff"
      d="M4 10v4h2v-3h1v3h1v-4H4m5 0v5h2v-1h2v-4H9m3 1v2h-1v-2h1m2-1v4h2v-3h1v3h1v-3h1v3h1v-4h-6M3 9h18v6h-9v1H8v-1H3V9Z"
    />
  </svg>
</template>

<style scoped lang="scss">
svg {
  > * {
    transition: $transition;
  }

  rect {
    fill: $bg;
  }

  path {
    fill: $fg;
  }

  &:hover {
    rect {
      fill: #cc3534;
    }

    path {
      fill: #fff;
    }
  }
  @include is-mobile {
    rect {
      fill: #cc3534;
    }

    path {
      fill: #fff;
    }
  }
}
</style>
