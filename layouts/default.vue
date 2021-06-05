<template>
  <main>
    <header>
      <h1><!-- @formatter:off -->
        Jsem Joe<client-only><vue-typer
          :text="formattedRoles"
          :repeat="Infinity"
          initial-action="typing"
          :pre-type-delay="70"
          :type-delay="70"
          :pre-erase-delay="2000"
          :erase-delay="eraseDelay"
          erase-style="backspace"
          caret-animation="smooth"
          @typed="onTyped"
        /></client-only>
        <!-- @formatter:on -->
      </h1>

      <p class="author">
        Josef Kolář |
        {{ (new Date(compileTimestamp)).toLocaleDateString(undefined, {year: 'numeric', month: 'long'}) }}
      </p>

      <table>
        <thead>
        <tr>
          <th>
            <nuxt-link to="/">O mně</nuxt-link>
          </th>
          <th>
            <nuxt-link to="/photos">Fotím</nuxt-link>
          </th>
          <th>
            <nuxt-link
              to="/blog"
              :class="{'nuxt-link-exact-active': $route.name.startsWith('year')}"
            >Bloguju</nuxt-link>
          </th>
        </tr>
        </thead>
      </table>
    </header>
    <div>
      <nuxt keep-alive/>
    </div>
    <footer>
      <div class="footnotes">
        <p>
          Sestaveno z&nbsp;repozitáře <a href="https://github.com/thejoeejoee/josefkolar.cz">thejoeejoee/jk.cz</a>
          a nasazeno {{ (new Date(compileTimestamp)).toLocaleString().replace(/ /g, '&nbsp;') }} pomocí
          služby <a href="https://vercel.com">Vercel</a>.
        </p>
      </div>
    </footer>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data() {
        return {
            compileTimestamp: new Date(),
            eraseDelay: 70,
            roles: [
                ', vývojář',
                ' a fotím',
                ', student',
                ' a pořádám tábory',
                // ', erasmák',
                ' a píšu',
                ', dobrovolník',
                ', ESNer',
                ', nadšenec',
                ' a jsem ENTP-A',
                // ' a rád běhám',
                ' a su z Hané',
            ]
        }
    },
    async fetch({env}) {
        this.compileTimestamp = env.compileTimestamp || new Date();
    },
    computed: {
        formattedRoles() {
            // @ts-ignore
            return this.roles.map((v: string) => `${v}.`);
        }
    },
    methods: {
        onTyped(what: string) {
            // @ts-ignore
            this.eraseDelay = what.indexOf(' ') >= 0 ? 40 : 70;
        }
    },
    head() {
        // TODO: should be absolute URL
        const ogImageUrl = require('assets/jk.jpg');
        return {
            meta: [
                {hid: 'og:image', property: 'og:image', content: ogImageUrl},
                {hid: 'twitter:image', name: 'twitter:image', content: ogImageUrl},
            ]
        }
    },
    created() {
        setTimeout(() => {
            // @ts-ignore
            this.roles = [...this.roles, ' a jsem vegan']
        }, 1000 * 60 * 5); // 5 minutes
    }
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
}

header table {
  margin: 0 auto;
  font-size: 1.25em;

  a {
    text-decoration: none;
    color: black !important;

    &.nuxt-link-exact-active, &:hover {
      color: #a00 !important;
    }

    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
