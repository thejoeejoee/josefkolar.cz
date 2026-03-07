# AGENTS.md — josefkolar.cz

Personal portfolio & blog site for Josef Kolář. Nuxt 4 static site with Czech content, Erasmus blog posts (Markdown via Nuxt Content), and photo gallery. Deployed to GitHub Pages.

## Build & Run Commands

```bash
# Package manager: bun (v1.3.10) — do NOT use npm/yarn/pnpm
bun install                          # Install dependencies
bun run dev                          # Dev server (nuxt dev)
bun run build                        # Build for production
bun run generate                     # Static site generation (.output/public/)
bun run start                        # Start production server

# Linting
bunx eslint --ext .ts,.vue .         # Lint all TypeScript & Vue files
bunx eslint --fix --ext .ts,.vue .   # Auto-fix lint issues

# Type checking
bunx vue-tsc --noEmit                # Run type checker (strict: true)

# No test framework configured — no test commands available.

# Assets
bun run assets:resize                # Resize photos to 1080px width (requires ImageMagick)
```

## CI/CD

- GitHub Actions deploys on push to `master` branch.
- Pipeline: `bun install --frozen-lockfile` → `bun run generate` → deploy `.output/public/` to GitHub Pages.
- Always run `bun run generate` locally to verify before pushing.

## Project Structure

```
app.vue                  # Root — NuxtLayout > NuxtPage, no script block
pages/                   # File-based routes (index.vue, tvorim.vue)
layouts/                 # default.vue (script setup), error.vue (legacy Options API)
components/              # Auto-imported (Highlight, Mailto)
components/global/       # Global components for Nuxt Content (BlogImg — legacy Options API)
content/blog/erasmus/    # Markdown blog posts (Czech, ~36 posts)
assets/                  # SCSS, photos (jpg), blog images
types/types.d.ts         # Module declarations (legacy, mostly unused)
public/                  # Static assets (served as-is)
static/                  # Legacy static dir
```

## Code Style & Conventions

### Vue Components

- **Use `<script setup lang="ts">`** for all new/modified components.
- Legacy components (`BlogImg.vue`, `error.vue`) use Options API — convert to `<script setup>` if editing substantially.
- Props: `defineProps<{ propName: Type }>()` — TypeScript generic syntax, not runtime declaration.
- Emits: `defineEmits<{ (e: 'eventName', payload: Type): void }>()`.
- Template refs: `const el = ref<HTMLElement | null>(null)`.
- Timer types: `ReturnType<typeof setTimeout>` — never use `number` or `NodeJS.Timeout`.
- Nuxt auto-imports: `ref`, `computed`, `watch`, `onMounted`, `useHead()`, `useRuntimeConfig()`, `useRoute()` — do NOT import from `vue` or `nuxt/app`.
- Prefer `<ClientOnly>` wrapper for browser-only rendering (e.g., animations, intersection observers).

### TypeScript

- `strict: true` — no `any`, no `@ts-ignore`, no `@ts-expect-error`.
- Inline type definitions for page-local types (e.g., `type PhotoItem = { src: string } | string`).
- Shared types go in `types/types.d.ts` only if used across multiple files.
- Imports from lodash-es use named imports: `import { sample } from 'lodash-es'`.

### Styling

- **SCSS** (`lang="scss"`) for all component styles.
- **Scoped styles** (`<style scoped lang="scss">`) on page and component files.
- Layout files may use **unscoped** styles for global layout rules.
- Global styles in `assets/main.scss` — utility classes (`.small`, `.abstract`, `.big`, `.center`, `.hidden`).
- BEM-like naming for component blocks: `.Photos__photo`, `.Photos__container`.
- Responsive breakpoints used: `960px`, `720px`, `1440px`, `1920px`.
- External CSS: `latex.css` for typography base — do not fight its styles, extend them.

### Naming Conventions

- Components: PascalCase filenames (`Highlight.vue`, `BlogImg.vue`).
- Pages: kebab-case filenames matching URL slugs (`tvorim.vue`).
- Variables/functions: camelCase (`formatDate`, `compileTimestamp`).
- Constants: camelCase (not SCREAMING_CASE) — `const email = '...'`.
- CSS classes: BEM-like (`Block__element`), no strict BEM enforcement.

### Content & i18n

- All user-facing content is in **Czech** — maintain Czech language in templates, meta tags, and content files.
- SEO meta is set in `nuxt.config.ts` (app.head) and per-page via `useHead()`.
- Blog posts are Markdown files in `content/blog/erasmus/` — use Nuxt Content conventions.

### Imports

- Nuxt auto-imports: composables (`ref`, `computed`, `useHead`, etc.) — do NOT add explicit imports.
- Third-party: named imports (`import { sample } from 'lodash-es'`, `import { useElementVisibility } from '@vueuse/core'`).
- Asset imports: `import photo from '@/assets/photos/file.jpg'` with `@/` alias.
- No default exports in script setup components (Nuxt handles this).

### Error Handling

- No global error handler configured beyond `error.vue` layout.
- Use Nuxt's `createError()` / `showError()` for navigation errors.
- No try/catch patterns established — keep error handling minimal and direct.

## Git & Versioning

- **Never commit directly to `master`** — use feature branches.
- Commit message format: `WHAT(SCOPE): WHY` in imperative mood.
  - WHAT: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`
  - SCOPE: optional area of code (e.g., `feat(blog): add new Erasmus post`)
  - Example: `fix(layout): correct mobile nav overflow`
- Single-line commit messages only — no body or footer.
- Do NOT commit generated Markdown descriptions.

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `nuxt` ^4.3.1 | Framework (static site via nitro `static` preset) |
| `@vueuse/core` ^14.2.0 | Reactive utilities (useElementVisibility, etc.) |
| `lodash-es` ^4.17.23 | Utility functions (tree-shakeable) |
| `latex.css` ^1.1.0 | Typography / document-style CSS base |
| `sass` ^1.97.3 | SCSS preprocessing |
| `vue-tsc` ^3.2.5 | TypeScript type checking for Vue SFCs |

## Common Pitfalls

- **No test suite exists** — do not reference or try to run tests.
- `BlogImg.vue` uses legacy `require()` and `path` module (webpack-era) — avoid this pattern in new code.
- `types/types.d.ts` has stale Vue 2 module declaration — update if touching this file.
- The `static/` directory is legacy — use `public/` for new static assets.
- `README.md` references `yarn` but the project uses `bun` — ignore README's package manager instructions.
- Nitro preset is `static` — there is no server runtime. No API routes, no server middleware.
