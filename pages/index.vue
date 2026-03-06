<template>
  <article>
    <div class="abstract strong">
      Ahoj! Jsem Joe a&nbsp;jsem z&nbsp;Generace Z. <br>
      Počítače, internety, aplikace, online prostor, to je můj svět.
    </div>

    <figure>
      <img src="~/assets/jk.jpg" alt="má maličkost">
      <!-- <figcaption>Ne zcela přirozené prostředí pro geeka.</figcaption> -->
    </figure>

    <h2>Co umím?</h2>

    <ul>
      <li>
        <strong>Golang</strong> – od služeb nad CDN přes vlastní Kubernetes operátory až po contributions
        do open-source projektů jako ArgoCD, Kueue či Watermill.
      </li>
      <li>
        <strong>Kubernetes</strong> – návrh a provoz clusterů, Helm, Kustomize, Jsonnet/Tanka,
        <Highlight>ArgoCD GitOps</Highlight>, custom operátory (kopf, controller-runtime),
        VPA/HPA tuning, DRA pro HW transcoding akcelerátory.
      </li>
      <li>
        <strong>Python</strong> – můj denní chleba už víc jak deset let – Django, Flask, FastAPI, numpy,
        co zrovna přijde. Hadí jazyk je pro mě kladivo, ducktape i WD40 zároveň.
      </li>
      <li>
        <strong>infrastructure</strong> – OpenStack, NATS, Kafka, OpenTelemetry, Prometheus,
        Grafana, CI/CD pipelines (GitLab CI, GitHub Actions), Docker, Werf, Ansible.
      </li>
      <li>
        <strong>media &amp; streaming</strong> – VOD/LIVE transcoding (SW i HW), adaptivní streaming (HLS/DASH),
        <Highlight>DRM, media kontejnery a kodeky</Highlight>, ffmpeg, RTMP, SRT.
      </li>
      <li>
        <strong>Linux</strong> – uživatelsky jsem za víc jak pět let vystřídal už pár distribucí,
        administrátorsky ovládám a sám provozuji Ubuntu, Debian i CentOS.
      </li>
      <li>
        <strong>webový frontend</strong> – Vue.js ideálně s&nbsp;Typescriptem
        <em>(s nostalgií vzpomínám na první verzi </em><kbd>ng-</kbd><em>Angularu)</em> – ale s Reactem fakt
        problém nemám. Oblíbenec Tailwind mi pomáhá se styly, ale k&nbsp;webovému designu to nemám úplně blízko.
      </li>
      <li>
        <strong>databáze</strong> – nejvíc radosti mám s&nbsp;<Highlight>PostgreSQL</Highlight>,
        ale s&nbsp;MariaDB/MySQL nemám žádný problém; nerelačně pak Mongo i Redis.
      </li>
      <li>
        <strong>C/C++</strong> – nejsou to úplně mé primární jazyky, ale vyznám se a pár projektů už mám také
        za sebou; znalost C se pro psaní Pythonu hodí.
      </li>
      <li>
        <strong>Rust</strong> – fascinuje mě svou bezpečností a výkonem, používám ho pro osobní projekty
        i při řešení <abbr title="Advent of Code">AoC</abbr>.
      </li>
      <li>
        <em>ještě něco?</em> – <span class="latex">L<span>a</span>T<span>e</span>X</span>,
        zkušenosti s&nbsp;VHDL, ASMx86, Qt
        <abbr title="teoreticky cokoliv, poznávání nových technologií je super">TODO</abbr>.
      </li>
    </ul>

    <h2>Co je za mnou?</h2>

    <h3>
      Seznam.cz
      <small class="right">Senior Developer, od května 2023</small>
    </h3>

    <p>
      V interním CDN týmu české internetové jedničky řeším služby pro zpracování médií –
      úložiště pro hromady dat, encoding VOD i živých videí, infrastrukturu pro distribuci obsahu a IPTV.
      Streamovaná úložiště, softwarový i
      <Highlight>hardwarový encoding</Highlight>, hot-swapping vstupních zdrojů,
      to vše ve vlastních k8s clusterech nad OpenStackem pro zajištění HA.
    </p>
    <p>
      Předtím (od září 2022) jsem na pozici Python Developera nastartoval v témže týmu.
    </p>

    <h3>
      Open Source
    </h3>
    <p>
      Aktivně přispívám do upstream projektů:
    </p>
    <ul>
      <li>
        <a href="https://github.com/argoproj/argo-cd"><strong>ArgoCD</strong></a> – deklarativní
        continuous delivery pro Kubernetes (22k+ stars)
      </li>
      <li>
        <a href="https://github.com/kubernetes-sigs/kueue"><strong>Kubernetes Kueue</strong></a> –
        Kubernetes-nativní job queueing (2.4k+ stars)
      </li>
      <li>
        <a href="https://github.com/ThreeDotsLabs/watermill"><strong>Watermill</strong></a> –
        event-driven aplikace v Go (9.6k+ stars)
      </li>
      <li>
        <a href="https://github.com/spegel-org/spegel"><strong>Spegel</strong></a> –
        stateless cluster-local OCI registry mirror (3.5k+ stars)
      </li>
      <li>
        a další – <Highlight>NATS, OpenTelemetry</Highlight>, Knative Serving
      </li>
    </ul>

    <h3>
      OLC Systems
      <small class="right">Fullstack Developer, 2014 – 2019</small>
    </h3>
    <p>
      Původně brigáda v&nbsp;této <a href="https://www.olc.cz/">olomoucké společnosti</a> se rozrostla do dlouhodobé
      spolupráce, během které jsem čerpal zkušenosti v&nbsp;oblastech informačních systémů včetně těch sportovních,
      matričních či výrobních. Podílel jsem se na <i>Full-Stack</i> vývoji projektů mj. pro Český florbal,
      Mobilní pohotovost či Českou jezdeckou federaci založených na firemním řešení postaveným nad frameworkem
      Django. V&nbsp;dalších letech jsem se věnoval
      <Highlight>integraci moderních JS nástrojů</Highlight>
      do firemních řešení, tedy především přechod na Webpack a uživatelská rozhraní ve Vue.js.
    </p>

    <h3>Prezentační weby</h3>
    <p>
      Mám v&nbsp;portfoliu řadu prezentačních webů pro mé klienty, od počátečního návrhu přes grafický design,
      realizaci až k&nbsp;finálnímu zveřejnění – to vše v&nbsp;širokém spektru oborů zahrnujících autoškoly,
      cestovní agentury či zakázkovou výrobu dortů. Každému klientovi samozřejmě
      na
      <Highlight>míru se vším všudy,</Highlight>
      s&nbsp;administrací pro úpravu obsahu i následným servisem.
    </p>

    <h3>Co dělám?</h3>
    <ul>
      <li>
        <h4>Český orienťák – livestream grafika <small class="right">2023-&mldr;</small></h4>
        <p>
          Pro České sdružení orientačních sportů vyvíjím a provozuji
          <a href="https://github.com/thejoeejoee/co-stream-gfx">webovou aplikaci pro livestream grafiku</a>
          – real-time zobrazení průběžných výsledků, map tras a dalších údajů pro televizní přenosy závodů.
          Aplikace běží na ostrých přenosech ČO.
          <Highlight>Nuxt.js s Tailwindem</Highlight>, nasazení v Kubernetes clusteru.
        </p>
      </li>
      <li>
        <h4>Erasmus Festival 2022<small class="right">září 2022</small></h4>

        <p>
          S partou nadšenců jsme se rozhodli zorganizovat festival pro pětistovku zahraničních účastníků –
          dvě stage, tři kapely, DJs, Flag Parade centrem Brna a hromada doprovodného programu.
          Staral jsem se o promo, festivalové stránky, pro koncerty pak navrhnul stage a light design,
          který jsem si na místě i pohlídal od světelného pultu.
        </p>
      </li>
      <li>
        <h4>NA Brno dobrý <small class="right">duben 2022</small></h4>

        <p>
          V rámci organizace ESN jsem pro pro celonárodní zasedání <a href="https://na.brnodobry.cz/">NA Brno dobrý
            2022</a>
          postavil webstránky s plným informačním servisem pro zúčastněné – časový rozpis programu, časté pokládané
          otázky
          i mapa se všemi důležitými místy. To vše zabalené v
          <Highlight>responzivním kabátu</Highlight>
          opepřeným pár
          hříčkami pro návštěvníky – technicky projekt jistí Nuxt.js ve spolupráci s Tailwindem, všechna data pak drží
          Contentful.
        </p>
      </li>

      <li>
        <h4>
          ESN VUT Brno, ESN Riga<small class="right">2020-<abbr
            title="kdo ví, kam až se to natáhne"
          >&mldr;</abbr></small>
        </h4>

        <p>
          <i>Ich bin ein ESNer</i>, tedy jsem ESNer, člen Erasmus Student Network, největší evropské studentské
          organizace.
          Začalo to nevinně na mých zahraničních studiích v Lotyšsku výpomocí u sekce
          <Highlight>ESN Riga</Highlight>
          při organizování a fotodokumentování pořádaných událostí.
          Mladí Lotyši byli velmi inspirativní a i díky dalším ESNerům a ESNerkám
          (především těm pražským, i když si tak neříkají) jsem začal pozorovat, že tohle by mě mohlo bavit a naplňovat.
        </p>
        <p>
          Na další dva roky jsem se hluboce ponořil do působení v mé domovské sekci ESN VUT Brno,
          ve které jsem zastával či zastávám rozličné množství pozic – od člověka starajícího se o sekční Google Drive,
          přes režiséra přímých přenosů v době covidové a pořizovatele foto/video výstupů z našich akcí, až k působení
          v radě spolku na pozici
          <Highlight>Events Manager</Highlight>
          , kdy jsem plánoval všechny akce pro zahraniční
          studenty a řidil týmy tyto akce pořádající.
        </p>
        <p>
          Logicky mi náležela i spousta IT záležitostí, kterých jsem se chopil velmi rád – standardizovali jsme nástroje
          pod <a href="https://github.com/esnvutbrno">GitHub organizaci</a>,
          zautomatizovali vnitřní procesy a rozjeli projekt nové generace
          <a href="https://github.com/esnvutbrno/buena-fiesta">sociální sítě Fiesta+</a>
          pro sekce ESN jakožto jediného jejich IT asistenta pro správu členů, párování zahraničních studentů s buddies a dalších pro sekci nutných aktivit.
        </p>
      </li>
      <li>
        <h4>Covid bez bariér <small class="right">duben 2021</small></h4>

        <p>
          V rámci školního projektu týkajícího se využívání veřejně dostupných API jsme s&nbsp;kolegou
          vytvořili projekt <a href="https://covidbezbarier.cz">covidbezbarier.cz</a> – webovou aplikaci
          umožňující vyhledávat na
          <Highlight>mapě bezbariérová místa pro Covid-19 testování a očkování</Highlight>
          .
          SPA jsme postavili nad Nuxt.js, kterému pro stylování sekundoval Tailwind CSS, data poskytoval ÚZIS ČR
          a jako mapové poklady posloužily OSM. Aplikací se <a
            href="https://www.vutbr.cz/vut/aktuality-f19528/nova-aplikace-studentu-fit-pomaha-najit-bezbarierova-mista-pro-ockovani-a-testovani-d212739"
          >pochlubilo
            i VUT</a>,
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
          <Highlight>přímých&nbsp;přenosů</Highlight>
          , nejprve na úrovni použité mobilní aplikace se
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
          <Highlight>informační grafiky s&nbsp;aktuální časomírou</Highlight>
          ,
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
          Vzniklo tak
          <Highlight>IDE s&nbsp;debuggerem</Highlight>
          pro zadaný jazyk, množina více
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
        <h4>Bakalářské studium na FIT VUT v&nbsp;Brně <small class="right">2016-2019</small></h4>
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
          ale
          <Highlight>znalost vyhlášky č. 50</Highlight>
          se hodí.
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
      <Highlight>to mě baví a naplňuje</Highlight>
      už pět let.
      Během samotného týdne v&nbsp;lesích pak táborový program a vizuální vzpomínky pro účastníky
      a další propagaci. Je mi ctí pokračovat ve více jak dvacetileté tradici rytířských táborů, na které
      jsem sám jezdil a utvářely mě.
    </p>

    <p>
      Fotím a fotodokumentuji, nejčastěji z&nbsp;radosti ze samotné údálosti či dobrovolnického
      <Highlight>nadšení</Highlight>
      . Kromě vlastních výletů a uspořádaných akcí taky například studentsky
      pro ESN – k&nbsp;nahlédnutí ne příliš zodpovědně udržovaný
      <a href="https://blog.josefkolar.cz/photos/">seznam výtvorů</a>.
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
      <li>
        určitě na mém e-mailu <strong>
          <Mailto :mail="email" subject="Dotaz z~webu" />
        </strong>
      </li>
      <li>či na <a href="https://t.me/thejoeejoee">Telegramu</a></li>
      <li>
        na profilu na <a href="https://github.com/thejoeejoee">Githubu</a>
      </li>
      <li>jsem i na <a href="https://www.linkedin.com/in/josef-kolar/">LinkedInu</a></li>
      <li>
        souhrně pak v <a href="https://thejoeejoee.github.io/resume/kolar-josef-cv-cs.pdf">CV</a>
        (<a href="https://thejoeejoee.github.io/resume/kolar-josef-cv-en.pdf">english CV</a>)
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
const email = 'mail@josefkolar.cz'

useHead({
  title: 'jsem',
})
</script>

<style lang="scss" scoped>
article {
  max-width: 80ch;
}
</style>
