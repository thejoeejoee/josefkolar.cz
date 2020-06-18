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
            <img src="~assets/jk.jpg" alt="Joe">
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
                <strong>Python</strong> – můj denní chleba už víc jak osm let – především ve spojení
                s&nbsp;<Highlight>frameworkem Django</Highlight>
                ,
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
                <strong>databáze</strong> – relačně mám nejvíc zkušeností s
                <Highlight>PostgreSQL</Highlight>
                ,
                ale s MariaDB/MySQL nemám žádný problém; nerelačně pak Mongo i Redis.
            </li>
            <li>
                <strong>PHP</strong> – než jsem se definitině zamiloval do Djanga, stavěl jsem projekty na Nette,
                které mají můj servis stále.
            </li>
            <li>
                <strong>C/Cpp</strong> – nejsou to úplně mé primární jazyky, ale vyznám se a pár projektů už mám také
                za sebou; znalost C se v případě nativní implementace Pythonu hodí.
            </li>
            <li>
                <em>co dál?</em> – <span class="latex">L<span>a</span>T<span>e</span>X</span>, VHDL, ASMx86
            </li>
        </ul>


        <h2>Co je za mnou?</h2>

        <h3>Projekty</h3>
        <ul>
            <li>
                <h5>Litovel MINICUP 2013-20XX</h5>
                <p>
                    Na začátku tohoto třídenního turnaje v miniházené pro děti byl požadavek na stránky se základními
                    informacemi a
                    výsledky zápasů na turnaji. K této kostře aplikace v Nette se každý rok nabalovaly další
                    funkcionality, vyhodnocovač výsledků, tagování fotek, sociální sítě i rozšířené statistiky.
                </p>
                <p>
                    V roce 2017 jsme k informačnímu a foto servisu přidali i první verzi přímých přenosů, nejprve
                    na úrovni použité mobilní aplikace se třemi kamerami, komentářem a turnajovým Facebookem jakožto
                    výstupním rozhraním.
                    Další ročník jsme chtěli zachovat bezdrátovost a zároveň přidat informační grafiku,
                    vyvinuli jsme tedy <a href="https://github.com/litovel-minicup/camera-stream-transmitter">iOS
                    aplikaci</a>
                    pro bezdrátový přenos obrazu a s pomocí <kbd>ffmpeg</kbd>u a OBS Studia stříhali živáky.
                </p>
                <p>
                    Správa výsledků na turnaji prošla kompletní digitalizací díky
                    <a href="https://github.com/litovel-minicup/live-service">samostatné službě</a> (Django+Vue.js)
                    pro jejich zapisování a distribuci - jak na přímo na web, tak do živých přenosů v podobě
                    infografiky.
                    O tu se postaral můj dlouholetý kolega a kamarád S. H. Nguyen s pomocí scén naskriptovaných v jazyce
                    QML.
                </p>
                <p>
                    Pro sedmý ročník turnaje došlo k další modernizaci, přidali jsme Instagramový profil a pozici
                    živé reportérky, vzdali se bezdrátového řešení pro přenosy a díky tomu mohli zvýšit kvalitu obrazu
                    na FullHD a přidat Youtube mezi distribuční kanály. Ročník 2019 byl tedy zdokumentován více jak
                    desíti hodinami živého obsahu &hellip;
                </p>
            </li>
            <li>
                <h5>IFJ2017-toolkit</h5>
                <p>
                    Během projektu vývoje kompilátoru na FIT VUT jsme se rozhodli v týmu
                    stvořit i volně <a href="https://github.com/thejoeejoee/VUT-FIT-IFJ-2017-toolkit">
                    dostupnou sadu nástrojů</a> pro podporu vývoje těchto kompilátorů.
                    Vzniklo tak IDE s debuggerem pro zadaný jazyk, množina více
                    než 800 integračních testů pro vyvíjené kompilátory i plugin
                    pro zvýrazňování syntaxe výstupního jazyka.
                </p>
            </li>
        </ul>

        <h3>Studia</h3>
        <ul>
            <li>
                <h5>Magisterské studium na FIT VUT v Brně</h5>
                <p>
                    Po úspěšně dokončeném bakalářském studiu jsem se rozhodl pokračovat do magisterského studia
                    ve specializaci
                    <Highlight><em>Počítačové sítě</em></Highlight>
                    a hned první akademický ročník vyjel na Erasmus na
                    <em>University of Latvia</em>; předpokládané dokončení je aktuálně v&nbsp;roce 2022.
                </p>
            </li>
            <li>
                <h5>Magisterské studium na <em>University of Latvia</em> v Rize</h5>
                <!-- TODO: add link to blog with Erasmus tag -->
                <p>
                    V rámci prvního ročníku magisterského studia jsem se vydal na dvousemestrální zahraniční výjezd
                    do Lotyšska na <em>Faculty of Computing</em> na
                    <Highlight><em>University of Latvia</em></Highlight>
                    .
                    Nabitých deset měsíců pobytu v Rize jsem naplnil studiem, prozkoumáváním celé dvoumilionové země,
                    výpomocí pro
                    <abbr title="Erasmus Student Network, dobrovolnická organizace věnující se přijíždějícím studentům">
                        ESN Riga
                    </abbr> a seznamováním se s dalšími zahraničními studenty.
                </p>
            </li>
            <li>
                <h5>Bakalářské studium na FIT VUT v Brně</h5>
                <p>
                    Na oboru <em>Aplikovaná informatika</em> jsem si prošel pěknou řádkou předmětů a hodnotných
                    projektů včetně vlastní implementace DNS resolveru, kompletní aplikace programovatelné kalkulačky
                    s&nbsp;multiplatformním instalátorem a uživatelskou dokumentací, kompilátoru a interpretu vlastního
                    derivátu jazyka FreeBASIC, sond pro měření parametrů sítě či simulací modelů cvrččí farmy.
                </p>
                <p>
                    V rámci mé <a href="https://www.vutbr.cz/studenti/zav-prace/detail/121991?zp_id=121991">
                    bakalářské práce</a> jsem se věnoval vývoji
                    <Highlight>otevřené&nbsp;platformy</Highlight>
                    pro koordinaci IoT uzlů v&nbsp;nástroji vizuálního programování Node-RED, jejíž součástí byl
                    i firmware pro mikropočítače ESP32.
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
            organizace přesunů, komunikace s rodiči, spoluautorství táborového příběhu, to je moje,
            <Highlight>to mě naplňuje.</Highlight>
            Během samotného týdne v&nbsp;lesích pak táborový program a vizuální vzpomínky pro účastníky
            a další propagaci. Je mi ctí pokračovat ve více jak dvacetileté tradici rytířských táborů, na které
            jsem sám jezdil a utvářely mě.
        </p>

        <p>
            Čas od času si dám nějaký seriál či film, především mě táhnou
            <a href="https://www.csfd.cz/uzivatel/726493-thejoeejoee/hodnoceni/">drama, scifi a podobné</a>,
            bez hudby si nedokážu představit den,
            na <a href="https://open.spotify.com/user/11147151576?si=f-6UCuBoSaCyYsT51-mteg">Spotify</a> vyhledávám
            většinou rock všech možných typů, ale daleko to nemám k žádnému hudebnímu žánru.
            Když mám náladu, jdu si zaběhat, když ji mám fakt dobrou a velmi namotivovovanou, dám si i nějaké ty
            <abbr title="orientační běh, takové to zdánlivě zmatené pobíhání po lese mezi barevnými stojánky">lampiony</abbr>.
        </p>

        <h2>Kde mě najdete?</h2>

        <ul>
            <li>
                určitě na mém e-mailu <strong>
                <Mailto :mail='email' subject="Dotaz z webu"/>
            </strong>
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
                Sestaveno z&nbsp;GitHub repozitáře
                <a href="https://github.com/thejoeejoee/josefkolar.cz">thejoeejoee/jk.cz</a>
                a nasazeno {{ (new Date(compileTimestamp)).toLocaleString().replace(/ /g, '&nbsp;') }} pomocí
                služby
                <a href="https://vercel.com">Vercel</a>.
            </p>
        </div>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Highlight from "~/components/Highlight.vue";

    export default Vue.extend({
        components: {Highlight},
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
    .vue-typer .custom.char.typed {
        color: #4A148C;
    }
</style>
