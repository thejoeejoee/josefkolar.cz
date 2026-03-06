<template>
  <a :href="href" @click.prevent="open">{{ display }}</a>
</template>

<script setup lang="ts">
const props = defineProps<{
  mail: string
  subject?: string
}>()

const [user, domain] = props.mail.split('@')
const display = `${user}@${domain}`

const href = computed(() => {
  const base = `mailto:${user}@${domain}`
  return props.subject ? `${base}?subject=${encodeURIComponent(props.subject)}` : base
})

function open() {
  window.location.href = href.value
}
</script>
