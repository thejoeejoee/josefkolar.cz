<template>
  <main>
    <header>
      <h1>
        Jsem Joe<ClientOnly>
          <span ref="typerContainer"></span><span class="typer-cursor">|</span>
        </ClientOnly>
      </h1>

      <p class="author"><span>Josef Kolář</span></p>

      <nav class="site-nav">
        <NuxtLink to="/">existuju</NuxtLink>
        <span class="site-nav__sep">·</span>
        <a href="https://blog.josefkolar.cz/">blog</a>
      </nav>
    </header>
    <div>
      <slot />
    </div>
    <footer>
      <nav class="footer-links">
        <a href="https://github.com/thejoeejoee">GitHub</a>
        <span class="footer-links__sep">·</span>
        <a href="https://www.linkedin.com/in/josef-kolar/">LinkedIn</a>
        <span class="footer-links__sep">·</span>
        <a href="https://t.me/thejoeejoee">Telegram</a>
        <span class="footer-links__sep">·</span>
        <a href="#" class="footer-links__top" @click.prevent="scrollToTop">↑ nahoru</a>
      </nav>
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

const formatDateTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleString('cs-CZ').replace(/ /g, '\u00A0')
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

let typingTimer: ReturnType<typeof setTimeout> | null = null
let rolesUpdateTimer: ReturnType<typeof setTimeout> | null = null

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

    rolesUpdateTimer = setTimeout(() => {
      roles.value = [...roles.value, ' a jsem vegetarián']
    }, 1000 * 60 * 5)
  }, { immediate: true })
})

onBeforeUnmount(() => {
  if (typingTimer) clearTimeout(typingTimer)
  if (rolesUpdateTimer) clearTimeout(rolesUpdateTimer)
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

// Header
header {
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--c-border);
}

.author {
  text-align: center;
  margin: 0.15rem 0 0;
  font-size: 0.9em;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--c-text-muted);
  font-weight: normal;

  span {
    font-weight: 400;
  }
}

// Nav styling
.site-nav {
  text-align: center;
  font-size: 1.25em;
  margin-top: 0.25rem;

  @media (max-width: 480px) {
    font-size: 1.1em;
  }

  a {
    text-decoration: none;
    color: black !important;
    transition: color 0.2s ease;

    &.router-link-exact-active, &:hover {
      color: var(--c-accent) !important;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  &__sep {
    margin: 0 0.5em;
    color: rgba(0, 0, 0, 0.3);
  }
}

.typer-cursor {
  display: inline;
  animation: blink 1s step-end infinite;
  color: var(--c-accent);
  font-weight: normal;
}

@keyframes blink {
  50% { opacity: 0; }
}

// #7 — Footer refinement
footer {
  margin-top: 3rem;

  .footnotes {
    border-top: 1px solid var(--c-border);
    padding-top: 1rem;

    p {
      color: var(--c-text-muted);
      font-size: 0.85em;
    }
  }
}

// Footer social links row
.footer-links {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.95em;

  a {
    text-decoration: none;
    color: var(--c-text-muted) !important;
    transition: color 0.2s ease;

    &:hover {
      color: var(--c-accent) !important;
      text-decoration: underline;
    }
  }

  &__sep {
    margin: 0 0.5em;
    color: rgba(0, 0, 0, 0.2);
  }

  &__top {
    font-size: 0.9em;
  }
}
</style>
