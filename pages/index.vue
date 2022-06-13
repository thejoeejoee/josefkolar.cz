<template>
    <article>
        <div class="abstract strong">
            Ahoj! Jsem Joe a jsem z&nbsp;Generace Z. <br>
            Počítače, internety, aplikace, online prostor, to je můj svět.
        </div>

        <figure>
            <img :srcset="require('~/assets/jk.jpg').srcSet" alt="má maličkost"/>
            <!-- <figcaption>Ne zcela přirozené prostředí pro geeka.</figcaption> -->
        </figure>

        <h2>Co umím?</h2>

        <ul>
            <li>
                <strong>Python</strong> – můj denní chleba už víc jak osm let – především ve spojení
                s&nbsp;<Highlight>frameworkem Django</Highlight>,
                ale rozhodně se neztratím ve Flasku, numpy, PyQt či Kerasu.
            </li>
            <li>
                <strong>webový frontend</strong> – Vue.js ideálně s&nbsp;Typescriptem
                <em>(s nostalgií vzpomínám na první verzi </em><kbd>ng-</kbd><em>Angularu)</em> – ale s Reactem fakt
                problém nemám. Oblíbenec Tailwind mi pomáhá se styly, ale k&nbsp;webovému designu to nemám úplně blízko.
            </li>
            <li>
                <strong>Linux</strong> – uživatelsky jsem za víc jak pět let vystřídal už pár distribucí,
                administátorsky ovládám a sám provozuji Ubuntu, Debian i CentOS.
            </li>
            <li>
                <strong>databáze</strong> – relačně mám nejvíc zkušeností s&nbsp;<Highlight>PostgreSQL</Highlight>,
                ale s&nbsp;MariaDB/MySQL nemám žádný problém; nerelačně pak Mongo i Redis.
            </li>
            <li>
                <strong>PHP</strong> – než jsem se definitině zamiloval do Djanga, stavěl jsem projekty na Nette,
                které mají můj servis stále.
            </li>
            <li>
                <strong>C/Cpp</strong> – nejsou to úplně mé primární jazyky, ale vyznám se a pár projektů už mám také
                za sebou; znalost C se pro psaní Python programů hodí.
            </li>
            <li>
                <em>ještě něco?</em> – <span class="latex">L<span>a</span>T<span>e</span>X</span>, Git, Docker,
                zkušenosti s&nbsp;VHDL, ASMx86, Qt či
                <abbr title="teoreticky cokoliv, poznávání nových technologií je super">TODO</abbr>.
            </li>
        </ul>

        <h2>Co je za mnou?</h2>

        <h3>OLC Systems</h3>
        <p>
            Původně brigáda v&nbsp;této <a href="https://www.olc.cz/">olomoucké společnosti</a> se rozrostla do dlouhodobé
            spolupráce, během které jsem čerpal zkušenosti v&nbsp;oblastech informačních systémů včetně těch sportovních,
            matričních či výrobních. Podílel jsem se na <i>Full-Stack</i> vývoji projektů mj. pro Český florbal,
            Mobilní pohotovost či Českou jezdeckou federaci založených na firemním řešení postaveným nad frameworkem
            Django. V&nbsp;dalších letech jsem se věnoval <Highlight>integraci moderních JS nástrojů</Highlight>
            do firemních řešení, tedy především přechod na Webpack a uživatelská rozhraní ve Vue.js.
        </p>

        <h3>Prezentační weby</h3>
        <p>
            Mám v&nbsp;portfoliu řadu prezentačních webů pro mé klienty, od počátečního návrhu přes grafický design,
            realizaci až k&nbsp;finálnímu zveřejnění – to vše v&nbsp;širokém spektru oborů zahrnujících autoškoly,
            cestovní agentury či zakázkovou výrobu dortů. Každému klientovi samozřejmě
            na <Highlight>míru se vším všudy,</Highlight> s&nbsp;administrací pro úpravu obsahu i následným servisem.
        </p>

        <h3>Co dělám?</h3>
        <ul>
            <li>
              <h4>ESN VUT Brno, ESN Riga<small class="right">2020-<abbr title="kdo ví, kam až se to natáhne">&mldr;</abbr></small></h4>

              <p>
                <i>Ich bin ein ESNer</i>, tedy jsem ESNer, člen Erasmus Student Network, největší evropské studentské organizace.
                Začalo to nevinně na mých zahraničních studiích v Lotyšsku výpomocí u sekce <Highlight>ESN Riga</Highlight>
                při organizování a fotodokumentování pořádaných událostí.
                Mladí Lotyši byli velmi inspirativní a i díky dalším ESNerům a ESNerkám
                (především těm pražským, i když si tak neříkají) jsem začal pozorovat, že tohle by mě mohlo bavit a naplňovat.
              </p>
              <p>
                Na další dva roky jsem se hluboce ponořil do působení v mé domovské sekci ESN VUT Brno, 
                ve které jsem zastával či zastávám rozličné množství pozic – od člověka starajícího se o sekční Google Drive,
                přes režiséra přímých přenosů v době covidové a pořizovatele foto/video výstupů z našich akcí, až k působení
                v radě spolku na pozici <Highlight>Events Manager</Highlight>, kdy jsem plánoval všechny akce pro zahraniční
                studenty a řidil týmy tyto akce pořádající.
              </p>
              <p>
                Logicky mi náležela i spousta IT záležitostí, kterých jsem se chopil velmi rád – standardizovali jsme nástroje
                pod <a href="https://github.com/esnvutbrno">GitHub organizaci</a>,
                zautomatizovali několik vnitřních procesů a rozjeli projekt druhé verze
                <a href="https://github.com/esnvutbrno/buena-fiesta">sociální sítě Buena Fiesta</a>
                pro zahraniční studenty pro jejich párování s buddies jakožto lokálními studenty.
              </p>
            </li>
            <li>
              <h4>NA Brno dobrý <small class="right">duben 2022</small></h4>
              
              <p>
                V rámci organizace ESN jsem pro pro celonárodní zasedání <a href="https://na.brnodobry.cz/">NA Brno dobrý 2022</a>
                postavil webstránky s plným informačním servisem pro zúčastněné – časový rozpis programu, časté pokládané otázky
                i mapa se všemi důležitými místy. To vše zabalené v responzivním kabátu opepřeným pár hříčkami pro návštěvníky –
                technicky projekt jistí Nuxt.js ve spolupráci s Tailwindem, všechna data pak drží Contentful.
              </p>
            </li>
            <li>
              <h4>Covid bez bariér <small class="right">duben 2021</small></h4>

              <p>
                V rámci školního projektu týkajícího se využívání veřejně dostupných API jsme s&nbsp;kolegou
                vytvořili projekt <a href="https://covidbezbarier.cz">covidbezbarier.cz</a> – webovou aplikaci
                umožňující vyhledávat na <Highlight>mapě bezbariérová místa pro Covid-19 testování a očkování</Highlight>.
                SPA jsme postavili nad Nuxt.js, kterému pro stylování sekundoval Tailwind CSS, data poskytoval ÚZIS ČR
                a jako mapové poklady posloužily OSM. Aplikací se <a
                  href="https://www.vutbr.cz/vut/aktuality-f19528/nova-aplikace-studentu-fit-pomaha-najit-bezbarierova-mista-pro-ockovani-a-testovani-d212739">pochlubilo i VUT</a>,
                a díky kontaktům v komunitě hendikepovaných se povedlo o aplikaci informovat i tam.
              </p>
            </li>
            <li>
                <h4>Litovel MINICUP <small class="right">2013-2019</small></h4>
                <p>
                    Na začátku příprav tohoto turnaje v&nbsp;miniházené pro děti byl požadavek na stránky se základními
                    informacemi a výsledky zápasů na turnaji.
                    K&nbsp;této kostře aplikace v&nbsp;Nette se každý rok nabalovaly další
                    funkcionality, vyhodnocovač výsledků, tagování fotek, sociální sítě i rozšířené statistiky.
                </p>
                <p>
                    V&nbsp;roce 2017 jsme k&nbsp;informačnímu a foto servisu přidali i první verzi
                    <Highlight>přímých&nbsp;přenosů</Highlight>, nejprve na úrovni použité mobilní aplikace se
                    třemi kamerami, komentářem a turnajovým Facebookem jakožto
                    výstupním rozhraním.
                    Další ročník jsme chtěli zachovat bezdrátovost a zároveň přidat informační grafiku,
                    vyvinuli jsme tedy <a href="https://github.com/litovel-minicup/camera-stream-transmitter">iOS
                    aplikaci</a>
                    pro bezdrátový přenos obrazu a s&nbsp;pomocí <kbd>ffmpeg</kbd>u a OBS stříhali živáky.
                </p>
                <p>
                    Správa výsledků na turnaji prošla kompletní digitalizací díky
                    <a href="https://github.com/litovel-minicup/live-service">samostatné službě</a> (Django+Vue.js)
                    pro jejich zapisování a distribuci – jak na přímo na web, tak do živých přenosů v&nbsp;podobě
                    <Highlight>informační grafiky s&nbsp;aktuální časomírou</Highlight>,
                    stavem utkání i signalizací střelců či soupisek.
                    O&nbsp;tu se postaral můj dlouholetý kolega a kamarád S. H. Nguyen s&nbsp;pomocí scén naskriptovaných v&nbsp;jazyce
                    QML.
                </p>
                <p>
                    Pro sedmý ročník turnaje došlo k&nbsp;další modernizaci, přidali jsme Instagramový profil a pozici
                    živé reportérky, přešli na
                    Blackmagic řešení ve FullHD a přidali Youtube mezi distribuční kanály.
                    Ročník 2019 byl tedy zdokumentován více jak
                    <a href="https://www.youtube.com/channel/UCyBgHxMdJBYp6aqNFEsjT7g/videos">desíti hodinami</a> živého
                    obsahu s&nbsp;komentářem, infografikou, rozhovory s&nbsp;účastníky i
                    <a href="https://www.fit.vut.cz/study/thesis/21523/.cs">mapováním vizuálů přímo na herní povrch</a>.
                </p>

              <p>
                <em>Pro litovelský Tatran to není zdaleka jediný projekt, který realizuji – také například spravuji
                  infrastrukturu pro běh webových prezentací či jsem se staral o realizaci přímých přenosů.</em>
              </p>
            </li>
            <li>
                <h4>IFJ2017-toolkit</h4>
                <p>
                    Během projektu vývoje kompilátoru na FIT VUT jsme se rozhodli v&nbsp;týmu
                    stvořit i volně <a href="https://github.com/thejoeejoee/VUT-FIT-IFJ-2017-toolkit">
                    dostupnou sadu nástrojů</a> pro podporu vývoje těchto kompilátorů.
                    Vzniklo tak <Highlight>IDE s&nbsp;debuggerem</Highlight> pro zadaný jazyk, množina více
                    než 800 integračních testů pro vyvíjené kompilátory i plugin
                    pro zvýrazňování syntaxe výstupního jazyka. Výsledkem tak byl
                    mj. orientační přehled o&nbsp;efektivitě generované kódu ostatních týmů,
                    díky kterému se nám podařilo zvítězit ve vedlejší optimalizační soutěži.
                </p>
            </li>
        </ul>

        <h3>Studia</h3>
        <ul>
            <li>
                <h4>Magisterské studium na FIT VUT v&nbsp;Brně  <small class="right">2019-<abbr title="plánovaně">2022</abbr></small></h4>
                <p>
                    Po úspěšně dokončeném bakalářském studiu jsem se rozhodl pokračovat do magisterského studia
                    ve specializaci
                    <Highlight><em>Počítačové sítě</em></Highlight>
                    a hned první akademický ročník vyjel na Erasmus na
                    <em>University of Latvia</em>; předpokládané dokončení je v&nbsp;roce 2022.
                </p>
            </li>
            <li>
                <h4>Magisterské studium na <em>University of Latvia</em> v&nbsp;Rize <small class="right">2019-2020</small></h4>
                <!-- TODO: add link to blog with Erasmus tag -->
                <p>
                    V&nbsp;rámci prvního ročníku magisterského studia jsem se vydal na dvousemestrální zahraniční výjezd
                    do Lotyšska na <em>Faculty of Computing</em> na
                    <Highlight><em>University of Latvia.</em></Highlight>
                    Nabitých deset měsíců pobytu v&nbsp;Rize jsem naplnil studiem, prozkoumáváním celé dvoumilionové země,
                    výpomocí pro
                    <abbr title="Erasmus Student Network, dobrovolnická organizace věnující se přijíždějícím studentům">
                        ESN Riga
                    </abbr> a seznamováním se s&nbsp;dalšími zahraničními studenty.
                </p>
            </li>
            <li>
                <h4>Bakalářské studium na FIT VUT v&nbsp;Brně  <small class="right">2016-2019</small></h4>
                <p>
                    Na oboru <em>Aplikovaná informatika</em> jsem si prošel pěknou řádkou předmětů a hodnotných
                    projektů včetně vlastní implementace DNS resolveru, kompletní aplikace programovatelné kalkulačky
                    s&nbsp;multiplatformním instalátorem a uživatelskou dokumentací, kompilátoru a interpretu vlastního
                    derivátu jazyka FreeBASIC, sond pro měření parametrů sítě či simulací modelů cvrččí farmy.
                </p>
                <p>
                    V&nbsp;rámci mé <a href="https://www.vutbr.cz/studenti/zav-prace/detail/121991?zp_id=121991">
                    bakalářské práce</a> jsem se věnoval vývoji
                    <Highlight>otevřené&nbsp;platformy</Highlight>
                    pro koordinaci IoT uzlů v&nbsp;nástroji vizuálního programování Node-RED, jejíž součástí byl
                    i firmware pro mikropočítače ESP32.
                </p>
            </li>
            <li>
                <h4>Střední průmyslová škola elektrotechnická v&nbsp;Olomouci <small class="right">2012-2016</small></h4>
                <p>
                    <i>Už od mala jsem kutil, kreslil si vynálezy do sešitu a řešil infrastrukturu v&nbsp;SimCity 2000.</i>
                    Výběr eleprůmyslovky potom byl jasnou volbou, postupem času jsem začal inklinovat spíše k&nbsp;IT,
                    ale <Highlight>znalost vyhlášky č. 50</Highlight> se hodí.
                    Také jsem poprvé potkal Linux a byla to láska na první instalaci.
                </p>
                <p>
                    Jako dlouhodobou maturitní práci jsem si vybral
                    <a href="https://github.com/spseol/pybots-server">vývoj prostředí pro střet botů</a>,
                    které programovali další studenti – výsledkem byl kromě textové části práce Pythoní server
                    vizualizující herní mapy, konfiguraci her a statistiky z&nbsp;nich.
                </p>
            </li>
        </ul>

        <h2>Co dělám ve volném čase?</h2>
        <p>
            Pořádám <a href="https://rytirskytabor.cz/">rytířské tábory</a> pro mládež –
            malé kapacitou, velké zážitkem. Každý rok jinde, takže výběr tábořiště, dostatek informací zájemcům,
            organizace přesunů, komunikace s&nbsp;rodiči, spoluautorství táborového příběhu a her,
            <Highlight>to mě baví a naplňuje</Highlight> už pět let.
            Během samotného týdne v&nbsp;lesích pak táborový program a vizuální vzpomínky pro účastníky
            a další propagaci. Je mi ctí pokračovat ve více jak dvacetileté tradici rytířských táborů, na které
            jsem sám jezdil a utvářely mě.
        </p>

        <p>
            Fotím a fotodokumentuji, nejčastěji z&nbsp;radosti ze samotné údálosti či dobrovolnického
            <Highlight>nadšení</Highlight>. Kromě vlastních výletů a uspořádaných akcí taky například studentsky
            pro ESN – k&nbsp;nahlédnutí ne příliš zodpovědně udržovaný <a href="https://blog.josefkolar.cz/photos/">seznam výtvorů</a>.
        </p>

        <p>
            Čas od času si dám nějaký seriál či film, především mě táhnou
            <a href="https://www.csfd.cz/uzivatel/726493-thejoeejoee/hodnoceni/">drama, scifi a podobné</a>,
            bez hudby si nedokážu představit den,
            na <a href="https://open.spotify.com/user/11147151576?si=f-6UCuBoSaCyYsT51-mteg">Spotify</a> vyhledávám
            většinou rock všech možných typů, ale daleko to nemám k&nbsp;žádnému hudebnímu žánru.
            Přirozeně mě to táhne k zájmu o kryptoměny, které aktivně zkoumám.
            Když mám náladu, jdu si zaběhat, když ji mám fakt dobrou a velmi namotivovovanou, dám si i nějaké ty
            <abbr title="orientační běh, takové to zdánlivě zmatené pobíhání po lese mezi barevnými stojánky">lampiony</abbr>.
        </p>

        <h2>Kde mě najdete?</h2>

        <ul class="big">
            <li>určitě na mém e-mailu <strong><Mailto :mail='email' subject="Dotaz z~webu"/></strong></li>
            <li>či na <a href="https://t.me/thejoeejoee">Telegramu</a></li>
            <li>na profilu na  <a href="https://github.com/thejoeejoee">Githubu</a>
                (či stručné <a href="https://resume.github.io/?thejoeejoee">GH resumé</a>)
            </li>
            <li>příležitostně <a href="https://blog.josefkolar.cz">bloguju</a></li>
            <li>občas <a href="https://twitter.com/thejoeejoee">twítuju</a></li>
            <li>jsem i na <a href="https://www.linkedin.com/in/josef-kol%C3%A1%C5%99-69b988133/">LinkedInu</a></li>
            <li>
              souhrně pak v <a href="https://thejoeejoee.github.io/resume/resume-cs.pdf">CV</a>
              <!-- (<a href="https://thejoeejoee.github.io/resume/resume.pdf">english</a>) -->
            </li>
        </ul>
    </article>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Highlight from "~/components/Highlight.vue";

    export default Vue.extend({
        components: {Highlight},
        data() {
            return {
                email: 'mail@josefkolar.cz',
                compileTimestamp: new Date(),
            }
        },
        async asyncData({env}) {
            return {
                compileTimestamp: env.compileTimestamp || new Date(),
            }
        }
    })
</script>

<style lang="scss">
    .vue-typer .custom.char.typed {
        color: #4A148C;
    }
</style>

<style lang="scss" scoped>
    article {
        max-width: 80ch;
    }
</style>
