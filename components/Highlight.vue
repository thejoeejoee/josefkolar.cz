<template>
  <span ref="target" class="highlight">
    <slot />
    <!-- Only the decoration is client-side; the text itself must be server-rendered
         so it exists for crawlers and readers without JavaScript. -->
    <ClientOnly>
      <svg v-if="isVisible" class="highlight__box">
        <rect
          x="2"
          y="2"
          width="calc(100% - 4px)"
          height="calc(100% - 4px)"
          fill="none"
          :stroke="color"
          stroke-width="2"
          :style="{
            strokeDasharray: '1000',
            strokeDashoffset: animOffset,
            transition: 'stroke-dashoffset 0.6s ease-out'
          }"
        />
      </svg>
    </ClientOnly>
  </span>
</template>

<script setup lang="ts">
import { sample } from 'lodash-es'
import { useElementVisibility } from '@vueuse/core'

const target = ref(null)
const isVisible = useElementVisibility(target)
const animOffset = ref(1000)

const color = sample([
  '#4a148c', '#8D0981', '#00897B', '#FF8F00', '#19c476', '#eb4300'
])

watch(isVisible, (visible) => {
  if (visible) {
    setTimeout(() => {
      animOffset.value = 0
    }, 100)
  }
}, { once: true })
</script>

<style lang="scss" scoped>
.highlight {
  position: relative;
  display: inline-block;
}

.highlight__box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .highlight__box rect {
    transition: none;
  }
}
</style>
