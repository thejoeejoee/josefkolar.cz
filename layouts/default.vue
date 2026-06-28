<template>
  <main>
    <header>
      <h1>
        {{ isEn ? "I'm Joe" : 'Jsem Joe' }}<ClientOnly>
          <span ref="typerContainer"></span><span class="typer-cursor">|</span>
        </ClientOnly>
      </h1>

      <p class="author">
        Josef Kolář |
        {{ formatDate(compileTimestamp) }}
      </p>

      <nav class="lang-switch">
        <NuxtLink to="/" :class="{ active: !isEn }">CS</NuxtLink>
        <span class="lang-sep">|</span>
        <NuxtLink to="/en" :class="{ active: isEn }">EN</NuxtLink>
      </nav>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <div class="footnotes">
        <p v-if="isEn">
          Built from <a href="https://github.com/thejoeejoee/josefkolar.cz">thejoeejoee/jk.cz</a>
          and deployed {{ formatDateTime(compileTimestamp) }} via
          <a href="https://pages.github.com">GitHub Pages</a>.
        </p>
        <p v-else>
          Sestaveno z&nbsp;repozitáře <a href="https://github.com/thejoeejoee/josefkolar.cz">thejoeejoee/jk.cz</a>
          a nasazeno {{ formatDateTime(compileTimestamp) }} pomocí
          <a href="https://pages.github.com">GitHub Pages</a>.
        </p>
      </div>
    </footer>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const isEn = computed(() => route.path.startsWith('/en'))

const compileTimestamp = ref(config.public.compileTimestamp)
const typerContainer = ref<HTMLElement | null>(null)

const rolesCs = [
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
]

const rolesEn = [
  ', developer',
  ' and I take photos',
  ', open-source contributor',
  ', building infrastructure',
  ', volunteer',
  ', ESNer',
  ', orienteering runner',
  ' and ENTP-A',
  ', from Moravia'
]

const roles = computed(() => isEn.value ? rolesEn : rolesCs)

const formatDate = (timestamp: string) => {
  const locale = isEn.value ? 'en-US' : 'cs-CZ'
  return new Date(timestamp).toLocaleDateString(locale, { year: 'numeric', month: 'long' })
}

const formatDateTime = (timestamp: string) => {
  const locale = isEn.value ? 'en-US' : 'cs-CZ'
  return new Date(timestamp).toLocaleString(locale).replace(/ /g, '\u00A0')
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

header h1 {
  white-space: nowrap;
  overflow: hidden;
}

header .lang-switch {
  text-align: center;
  font-size: 1.25em;
  margin: 0.5rem 0;

  a {
    text-decoration: none;
    color: #666 !important;
    transition: color 0.2s ease;

    &.active, &:hover {
      color: #a00 !important;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .lang-sep {
    margin: 0 0.5em;
    color: #ccc;
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

// #7 — Footer refinement
footer {
  margin-top: 3rem;

  .footnotes {
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    padding-top: 1rem;

    p {
      color: #666;
      font-size: 0.85em;
    }
  }
}
</style>
