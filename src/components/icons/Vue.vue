<template>
  <svg
    width="24"
    height="24"
    viewBox="-60 -60 381.76 346.69"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="-60" y="-77.5" rx="10%" width="381" height="381" />

    <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
      <g transform="translate(178.06 235.01)">
        <path
          d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
          class="darker"
        />
      </g>
      <g transform="translate(178.06 235.01)">
        <path
          d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
          class="lighter"
        />
      </g>
    </g>
  </svg>
</template>

<style scoped lang="scss">
svg {
  * {
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
      fill: #0a232f;
    }

    path.darker {
      fill: #41b883;
    }
    path.lighter {
      fill: #34495e;
    }
  }
  @include is-mobile {
    rect {
      fill: #0a232f;
    }

    path.darker {
      fill: #41b883;
    }
    path.lighter {
      fill: #34495e;
    }
  }
}
</style>
