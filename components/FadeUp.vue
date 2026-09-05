<template>
  <component :is="as" ref="el" class="fade-up-section" :class="{ 'is-visible': hasBeenVisible }">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

withDefaults(defineProps<{ as?: string }>(), { as: 'div' })

// "Once visible, stays visible" — latches on the first intersection so scrolling
// back up does not replay the animation.
const el = ref<HTMLElement | null>(null)
const isVisible = useElementVisibility(el)
const hasBeenVisible = ref(false)

watch(isVisible, (val) => {
  if (val) hasBeenVisible.value = true
})
</script>
