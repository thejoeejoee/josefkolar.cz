<template>
    <article>
        <h1>
            <!-- @formatter:off -->
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
            {{ (new Date(compileTimestamp)).toLocaleDateString(undefined, { year: 'numeric', month: 'long' }) }}
        </p>

        <div class="abstract">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequuntur cum cupiditate
            dolor dolorum eum expedita facilis nemo nulla odit pariatur, rem suscipit voluptatum? Aliquid asperiores
            eveniet
            hic placeat sapiente.
        </div>

        <figure>
            <img src="/jk.jpg" alt="Joe">
            <figcaption>Ne zcela přirozené prostředí pro geeka.</figcaption>
        </figure>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facilis fuga officia quibusdam rerum tempore
            totam
            voluptatum? Accusantium aliquam atque distinctio, doloribus iure laboriosam nostrum praesentium quisquam
            rerum
            sint voluptatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, autem debitis dolor
            dolores
            eaque, illum incidunt ipsum minus perspiciatis possimus quae, quod sint sunt temporibus veniam! Assumenda
            debitis
            laudantium ullam.
        </p>

        <h2>Co umím?</h2>

        <ul>
            <li>
                <strong>Python</strong> – můj denní chleba už víc jak osm let – především ve spojení s&nbsp;frameworkem
                Django,
                ale rozhodně se neztratím ve Flasku, numpy, PyQt či Kerasu.
            </li>
            <li>
                <strong>webový frontend</strong> – Vue.js ideálně s Typescriptem
                <em>(s nostalgií vzpomínám na první verzi </em><kbd>ng-</kbd><em>Angularu)</em>.
                Se styly si rozumím také, ale na webový design koukám raději z povzdálí.
            </li>
            <li>
                <strong>Linux</strong> – uživatelsky jsem za víc jak pět let vystřídal už pár *buntu distribucí,
                administátorsky ovládám a sám provozuji Debian i CentOS.
            </li>
            <li>
                <em>co dál?</em> – <span class="latex">L<span>a</span>T<span>e</span>X</span>, skriptování v Bashi, ???
            </li>
        </ul>


        <h2>Co je za mnou?</h2>

        <h3>Projekty</h3>
        <ul>
            <li>
                <h5>Litovel MINICUP 2013-20??</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at fugit illo laborum non
                    odit! Nihil, obcaecati reiciendis. Amet atque dolores et in laboriosam necessitatibus nesciunt
                    numquam optio quisquam voluptates.
                </p>
            </li>
        </ul>

        <h3>Studia</h3>
        <ul>
            <li>
                <h5>Magisterské studium na FIT VUT v Brně</h5>
                <p>
                    &hellip;
                </p>
            </li>
            <li>
                <h5>Magisterské studium na <em>University of Latvia</em> v Rize</h5>
                <p>
                    V rámci svého výjezdu do zahraniční jsem strávil dva semestry na <em>Faculty of Computing</em>
                    na lotyšské univerzitě – &hellip;
                </p>
            </li>
            <li>
                <h5>Bakalářské studium na FIT VUT v Brně</h5>
                <p>
                    Na oboru Aplikovaná informatika &hellip;
                </p>
            </li>
            <li>
                <h5>Střední odborná škola elektrotechnická</h5>

                <p>
                    &hellip;
                </p>
            </li>
        </ul>


        <h2>Co dělám ve volném čase?</h2>
        <p>
            Pořádám <a href="https://rytirskytabor.cz/">rytířské tábory</a> pro děti –
            malé kapacitou, velké zážitkem. Každý rok jinde, takže výběr tábořiště, dostatek informací zájemcům,
            organizace přesunů, komunikace s rodiči, spoluautorství táborového příběhu, to je moje, to mě naplňuje.
            Během samotného týdne v&nbsp;lesích pak táborový program a vizuální vzpomínky pro účastníky
            a další propagaci. Je mi ctí pokračovat ve více jak dvacetileté tradici rytířských táborů, na které
            jsem sám jezdil a utvářely mě.
        </p>

        <p>
            Čas od času si dám nějaký seriál či film, především mě táhnou
            <a href="https://www.csfd.cz/uzivatel/726493-thejoeejoee/hodnoceni/">drama, scifi a podobné</a>,
            bez hudby si nedokážu představit den,
            na <a href="https://open.spotify.com/user/11147151576?si=f-6UCuBoSaCyYsT51-mteg">Spotify</a> vyhledávám
            většinou rock všechn možných typů, ale daleko to nemám k žádnému hudebnímu žánru.
        </p>

        <h2>Kde mě najdete?</h2>

        <ul>
            <li>
                určitě na e-mailu <strong><a :href="`mailto:${email}?subject=Dotaz z webu`" v-text="email"></a></strong>
            </li>
            <li>mám profil na Githubu <a href="https://github.com/thejoeejoee">@thejoeejoee</a>
                (či stručné <a href="https://resume.github.io/?thejoeejoee">resumé</a>)
            </li>

            <li>příležitostně <a href="https://blog.josefkolar.cz">bloguju</a></li>
            <li>občas twítuju <a href="https://twitter.com/thejoeejoee">@thejoeejoee</a></li>
            <li>jsem i na <a href="https://www.linkedin.com/in/josef-kol%C3%A1%C5%99-69b988133/">LinkedIn</a>u</li>
        </ul>

        <div class="footnotes">
            <p>
                Sestaveno s&nbsp;<a href="https://nuxtjs.org/">Nuxt.js</a> z&nbsp;GitHub repozitáře
                <a href="https://github.com/thejoeejoee/josefkolar.cz">thejoeejoee/josefkolar.cz</a>
                a nasazeno {{ (new Date(compileTimestamp)).toLocaleString().replace(/ /g, '&nbsp;') }} pomocí
                služby
                <a href="https://vercel.com">Vercel</a>.
            </p>
        </div>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        asyncData({env}) {
            return {
                compileTimestamp: env.compileTimestamp || new Date(),
                email: 'mail@josefkolar.cz',
                eraseDelay: 70,
                roles: [
                    ', vývojář',
                    ' a rád fotím',
                    ', student',
                    ' a pořádám tábory',
                    ', erasmák',
                    ', dobrovolník',
                    ', ESNer',
                    ' a jsem z Moravy',
                ]
            }
        },
        computed: {
            formattedRoles() {
                // @ts-ignore
                return this.roles.map((v: string) => `${v}.`);
            }
        },
        data() {
            return {}
        },
        methods: {
            onTyped(what: string) {
                // @ts-ignore
                this.eraseDelay = what.indexOf(' ') >= 0 ? 40 : 70;
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
    figure {
        max-width: 80%;
        margin: auto;
    }

    .vue-typer .custom.char.typed {
        color: #4A148C;
    }
</style>
