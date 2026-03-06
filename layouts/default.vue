<template>
  <main>
    <header>
      <h1>
        Jsem Joe<ClientOnly>
          <span ref="typerContainer"></span><span class="typer-cursor">|</span>
        </ClientOnly>
      </h1>

      <p class="author">
        Josef Kolář |
        {{ formatDate(compileTimestamp) }}
      </p>

      <table>
        <thead>
          <tr>
            <th>
              <NuxtLink to="/">
                existuju
              </NuxtLink>
            </th>
            <th>
              <NuxtLink to="/tvorim">
                tvořím
              </NuxtLink>
            </th>
          </tr>
        </thead>
      </table>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <div class="footnotes">
        <p>
          Sestaveno z&nbsp;repozitáře <a href="https://github.com/thejoeejoee/josefkolar.cz">thejoeejoee/jk.cz</a>
          a nasazeno {{ formatDateTime(compileTimestamp) }} pomocí
          <a href="https://pages.github.com">GitHub Pages</a>.
        </p>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()

const compileTimestamp = ref(config.public.compileTimestamp)
const typerContainer = ref<HTMLElement | null>(null)

const roles = ref([
  ', vývojář',
  ', mám narozeniny',
  ' a fotím',
  ', přispívám do open source',
  ', stavím infrastrukturu',
  ' a píšu',
  ', dobrovolník',
  ', ESNer',
  ', nadšenec',
  ', běhám mezi lampiony',
  ' a jsem ENTP-A',
  ' a su z Hané'
])

const formatDate = (timestamp: string) => {
  return new Date(timestamp).toLocaleDateString('cs-CZ', { year: 'numeric', month: 'long' })
}

const formatDateTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleString('cs-CZ').replace(/ /g, '\u00A0')
}

let typingTimer: ReturnType<typeof setTimeout> | null = null

onMounted(() => {
  const stop = watch(typerContainer, (el) => {
    if (!el) return
    stop()

    let currentRoleIndex = 0
    let currentText = ''
    let isDeleting = false
    let charIndex = 0

    const type = () => {
      const currentRole = roles.value[currentRoleIndex] + '.'

      if (!isDeleting && charIndex < currentRole.length) {
        currentText += currentRole[charIndex]
        charIndex++
        typingTimer = setTimeout(type, 70)
      } else if (isDeleting && charIndex > 0) {
        currentText = currentText.slice(0, -1)
        charIndex--
        typingTimer = setTimeout(type, 40)
      } else if (!isDeleting) {
        isDeleting = true
        typingTimer = setTimeout(type, 2000)
      } else {
        isDeleting = false
        currentRoleIndex = (currentRoleIndex + 1) % roles.value.length
        charIndex = 0
        typingTimer = setTimeout(type, 70)
      }

      el.textContent = currentText
    }

    typingTimer = setTimeout(() => type(), 70)

    typingTimer = setTimeout(() => {
      roles.value = [...roles.value, ' a jsem vegetarián']
    }, 1000 * 60 * 5)
  }, { immediate: true })
})

onBeforeUnmount(() => {
  if (typingTimer) clearTimeout(typingTimer)
})

useHead({
  meta: [
    { property: 'og:image', content: '/jk.jpg' },
    { name: 'twitter:image', content: '/jk.jpg' }
  ]
})
</script>

<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header, footer {
  width: 80ch;
  max-width: 100%;
}

header table {
  margin: 0 auto;
  font-size: 1.25em;

  a {
    text-decoration: none;
    color: black !important;

    &.router-link-exact-active, &:hover {
      color: #a00 !important;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}

.typer-cursor {
  display: inline;
  animation: blink 1s step-end infinite;
  color: #4a148c;
  font-weight: normal;
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
