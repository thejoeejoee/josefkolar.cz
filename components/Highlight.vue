<template>
  <ClientOnly>
    <span ref="target" :style="{ position: 'relative', display: 'inline-block' }">
      <slot />
      <svg
        v-if="isVisible"
        :style="{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }"
      >
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
    </span>
  </ClientOnly>
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
