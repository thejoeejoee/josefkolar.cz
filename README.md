# josefkolar.cz

> My personal website. Nuxt 4, statically generated, deployed to GitHub Pages.

## Build Setup

```bash
# install dependencies (package manager: bun)
$ bun install

# serve with hot reload at localhost:3000
$ bun run dev

# generate the static site into .output/public
$ bun run generate

# regenerate responsive image variants from assets/jk.jpg
$ bun run images
```

Pushes to `master` are built and deployed by `.github/workflows/deploy.yml`.

See [AGENTS.md](AGENTS.md) for conventions and pitfalls.
