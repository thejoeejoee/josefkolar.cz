<template>
  <article>
    <div ref="section0" class="hero fade-up-section" :class="{ 'is-visible': visible0 }">
      <div class="hero__text abstract strong">
        Ahoj! Jsem Joe a&nbsp;jsem z&nbsp;Generace Z. <br>
        Počítače, internety, aplikace, online prostor, to je můj svět.
      </div>
      <figure ref="section1" class="hero__photo" :class="{ 'is-visible': visible1 }">
        <img src="~/assets/jk.jpg" alt="má maličkost">
      </figure>
    </div>

    <div ref="section2" class="fade-up-section section--major" :class="{ 'is-visible': visible2 }">
      <h2>Co umím?</h2>

      <ul class="skills-grid">
        <li>
          <strong>Golang</strong> – služby nad CDN, Kubernetes operátory, contributions
          do open-source (ArgoCD, Kueue, Watermill).
        </li>
        <li>
          <strong>Kubernetes</strong> – návrh a provoz clusterů, Helm, Kustomize, Jsonnet/Tanka,
          <Highlight>ArgoCD GitOps</Highlight>, custom Kubernetes operátory,
          VPA/HPA tuning, DRA pro HW transcoding akcelerátory.
        </li>
        <li>
          <strong>Python</strong> – denní chleba víc jak deset let. Django, Flask, FastAPI, numpy,
          co zrovna přijde. Kladivo, ducktape i WD40 zároveň.
        </li>
        <li>
          <strong>infrastructure</strong> – OpenStack, NATS, Kafka, OpenTelemetry, Prometheus,
          Grafana, CI/CD (GitLab CI, GitHub Actions), Docker, Werf, Ansible.
        </li>
        <li>
          <strong>media &amp; streaming</strong> – VOD/LIVE transcoding (SW i HW), adaptivní streaming (HLS/DASH),
          <Highlight>DRM, media kontejnery a kodeky</Highlight>, ffmpeg, RTMP, SRT.
        </li>
        <li>
          <strong>Linux</strong> – uživatelsky i administrátorsky. Ubuntu, Debian, CentOS.
        </li>
        <li>
          <strong>webový frontend</strong> – Vue.js s&nbsp;Typescriptem, React. Tailwind pro styly.
        </li>
        <li>
          <strong>databáze</strong> – nejradši <Highlight>PostgreSQL</Highlight>,
          ale i MariaDB/MySQL; nerelačně Mongo a Redis.
        </li>
        <li>
          <strong>C/C++, Rust</strong> – ne primární jazyky, ale vyznám se. Rust mě fascinuje
          bezpečností a výkonem, používám ho i při řešení <abbr title="Advent of Code">AoC</abbr>.
        </li>
        <li>
          <em>a dál?</em> – <span class="latex">L<span>a</span>T<span>e</span>X</span>,
          VHDL, ASMx86, Qt
          <abbr title="teoreticky cokoliv, poznávání nových technologií je super">TODO</abbr>.
        </li>
      </ul>
    </div>

    <div class="dinkus"></div>

    <div ref="section3" class="fade-up-section section--major" :class="{ 'is-visible': visible3 }">
      <h2>Co je za mnou?</h2>

      <div class="timeline-entry">
        <h3>
          Seznam.cz
          <small class="right">Senior Developer, od května 2023</small>
        </h3>

      <p>
        V CDN týmu české internetové jedničky řeším služby pro zpracování médií –
        úložiště, encoding VOD i živých videí, infrastrukturu pro distribuci obsahu a IPTV.
        Streamovaná úložiště, softwarový i
        <Highlight>hardwarový encoding</Highlight>, hot-swapping vstupních zdrojů,
        to vše ve vlastních k8s clusterech nad OpenStackem.
      </p>
      <p>
        Předtím (od září 2022) jsem na pozici Python Developera nastartoval v témže týmu.
      </p>
      </div>

      <div class="timeline-entry">
        <h3>
          Open Source
        </h3>
      <p>
        Aktivně přispívám do upstream projektů:
      </p>
      <ul class="oss-list">
        <li>
          <a href="https://github.com/argoproj/argo-cd"><strong>ArgoCD</strong></a>
          <small class="oss-stars">22k+ ★</small>
          <span class="oss-desc">deklarativní continuous delivery pro Kubernetes</span>
        </li>
        <li>
          <a href="https://github.com/kubernetes-sigs/kueue"><strong>Kubernetes Kueue</strong></a>
          <small class="oss-stars">2.4k+ ★</small>
          <span class="oss-desc">Kubernetes-nativní job queueing</span>
        </li>
        <li>
          <a href="https://github.com/ThreeDotsLabs/watermill"><strong>Watermill</strong></a>
          <small class="oss-stars">9.6k+ ★</small>
          <span class="oss-desc">event-driven aplikace v Go</span>
        </li>
        <li>
          <a href="https://github.com/spegel-org/spegel"><strong>Spegel</strong></a>
          <small class="oss-stars">3.5k+ ★</small>
          <span class="oss-desc">stateless cluster-local OCI registry mirror</span>
        </li>
        <li>
          a další – <Highlight>NATS, OpenTelemetry</Highlight>, Knative Serving
        </li>
      </ul>
      </div>
    </div>

    <div ref="section4" class="fade-up-section" :class="{ 'is-visible': visible4 }">
      <div class="timeline-entry">
        <h3>
          OLC Systems
          <small class="right">Fullstack Developer, 2014 – 2019</small>
        </h3>
      <p>
        Dlouhodobá spolupráce s <a href="https://www.olc.cz/">olomouckou firmou</a>
        na informačních systémech – sportovní, matriční, výrobní.
        Full-Stack vývoj nad Djangem pro klienty jako Český florbal,
        Mobilní pohotovost či Česká jezdecká federace. Později
        <Highlight>integrace moderních JS nástrojů</Highlight>
        – Webpack a Vue.js.
      </p>
      </div>

      <h3>Co dělám?</h3>
      <ul>
        <li>
          <h4>Prezentační weby</h4>
          <p>
            Řada prezentačních webů pro klienty – od návrhu přes grafický design po realizaci
            a <Highlight>správu obsahu</Highlight>.
            Autoškoly, cestovní agentury, zakázková výroba. Vždy na míru, s administrací i servisem.
          </p>
        </li>
        <li class="project--featured">
          <h4>Český orienťák – livestream grafika <small class="right">2023-&mldr;</small></h4>
          <p>
            Pro České sdružení orientačních sportů vyvíjím
            <a href="https://github.com/thejoeejoee/co-stream-gfx">webovou aplikaci pro livestream grafiku</a>
            – real-time výsledky, mapy tras a data pro televizní přenosy.
            Běží na ostrých přenosech ČO.
            <Highlight>Nuxt.js s Tailwindem</Highlight>, Kubernetes.
          </p>
        </li>
        <li>
          <h4>Erasmus Festival 2022<small class="right">září 2022</small></h4>
          <p>
            Festival pro pětistovku zahraničních účastníků – dvě stage, tři kapely, DJs,
            Flag Parade centrem Brna. Promo, festivalové stránky, stage a light design,
            který jsem si na místě pohlídal od světelného pultu.
          </p>
        </li>
        <li>
          <h4>NA Brno dobrý <small class="right">duben 2022</small></h4>
          <p>
            Pro celonárodní zasedání ESN jsem postavil <a href="https://na.brnodobry.cz/">webové stránky</a>
            s programem, FAQ a mapou důležitých míst.
            <Highlight>Responzivní design</Highlight>, Nuxt.js, Tailwind, data z Contentful.
          </p>
        </li>

        <li>
          <h4>
            ESN VUT Brno, ESN Riga<small class="right">2020-&mldr;</small>
          </h4>

          <p>
            Člen Erasmus Student Network – začalo to výpomocí u <Highlight>ESN Riga</Highlight>
            během studia v Lotyšsku. Pak dva roky v ESN VUT Brno:
            režie přímých přenosů v době covidové, foto/video, a nakonec pozice
            <Highlight>Events Managera</Highlight>
            – plánování akcí pro zahraniční studenty a řízení organizačních týmů.
          </p>
          <p>
            IT záležitosti: standardizace pod <a href="https://github.com/esnvutbrno">GitHub organizaci</a>,
            automatizace procesů, vývoj
            <a href="https://github.com/esnvutbrno/buena-fiesta">Buena Fiesta</a>
            – sociální sítě pro párování zahraničních studentů s buddies.
          </p>
        </li>
        <li class="project--featured">
          <h4>Covid bez bariér <small class="right">duben 2021</small></h4>

          <p>
            Webová aplikace <a href="https://covidbezbarier.cz">covidbezbarier.cz</a> pro vyhledávání
            <Highlight>bezbariérových míst pro Covid-19 testování a očkování</Highlight>
            na mapě. Nuxt.js, Tailwind, data od ÚZIS ČR, mapové podklady z OSM.
            <a href="https://www.vutbr.cz/vut/aktuality-f19528/nova-aplikace-studentu-fit-pomaha-najit-bezbarierova-mista-pro-ockovani-a-testovani-d212739">Pochlubilo se i VUT.</a>
          </p>
        </li>
        <li class="project--featured">
          <h4>Litovel MINICUP <small class="right">2013-2019</small></h4>
          <p>
            Informační systém pro turnaj v miniházené – od stránek s výsledky přes
            vyhodnocovač, tagování fotek až k rozšířeným statistikám.
          </p>
          <p>
            Od roku 2017 jsme přidali <Highlight>přímé přenosy</Highlight>
            – nejprve mobilní stream, pak vlastní
            <a href="https://github.com/litovel-minicup/camera-stream-transmitter">iOS aplikace</a>
            pro bezdrátový přenos obrazu, OBS a ffmpeg.
            V posledních ročnících Blackmagic ve FullHD, Youtube, Instagram, živá reportérka a
            <a href="https://www.youtube.com/channel/UCyBgHxMdJBYp6aqNFEsjT7g/videos">desítky hodin</a>
            živého obsahu s infografikou a komentářem.
          </p>
          <p>
            <a href="https://github.com/litovel-minicup/live-service">Služba pro správu výsledků</a> (Django+Vue.js)
            distribuovala data na web i do živých přenosů –
            <Highlight>aktuální časomíra</Highlight>, stav utkání, soupisky.
            Vizuální stránku grafiky realizoval S. H. Nguyen v QML.
          </p>
        </li>
        <li>
          <h4>IFJ2017-toolkit</h4>
          <p>
            <a href="https://github.com/thejoeejoee/VUT-FIT-IFJ-2017-toolkit">Sada nástrojů</a>
            pro vývoj kompilátorů na FIT VUT –
            <Highlight>IDE s&nbsp;debuggerem</Highlight>, 800+ integračních testů
            a plugin pro zvýrazňování syntaxe. Díky nim jsme zvítězili v optimalizační soutěži.
          </p>
        </li>
      </ul>
    </div>

    <div class="dinkus"></div>

    <div ref="section5" class="fade-up-section" :class="{ 'is-visible': visible5 }">
      <h3>Studia</h3>
      <ul>
        <li>
          <h4>Magisterské studium na <em>University of Latvia</em> <small class="right">2019-2020</small></h4>
          <p>
            Dvousemestrální Erasmus na <em>Faculty of Computing</em> v Rize.
            Deset měsíců studia, prozkoumávání Lotyšska, výpomoc pro
            <Highlight><abbr title="Erasmus Student Network">ESN</abbr> Riga</Highlight>
            a setkávání se studenty z celého světa.
          </p>
        </li>
        <li>
          <h4>Bakalářské studium na FIT VUT v&nbsp;Brně <small class="right">2016-2019</small></h4>
          <p>
            Obor <em>Aplikovaná informatika</em> – DNS resolver, kompilátor,
            síťové sondy, simulace modelů.
            <a href="https://www.vutbr.cz/studenti/zav-prace/detail/121991?zp_id=121991">Bakalářská práce</a>:
            <Highlight>otevřená platforma</Highlight>
            pro koordinaci IoT uzlů v Node-RED s firmwarem pro ESP32.
          </p>
        </li>
        <li>
          <h4>SPŠ elektrotechnická, Olomouc <small class="right">2012-2016</small></h4>
          <p>
            Elektrotechnika → IT. <Highlight>Vyhláška č. 50</Highlight> se hodí.
            Linux na první instalaci.
            Maturitní práce: <a href="https://github.com/spseol/pybots-server">prostředí pro střet botů</a>
            programovaných dalšími studenty.
          </p>
        </li>
      </ul>
    </div>

    <div class="dinkus"></div>

    <div ref="section6" class="fade-up-section section--major" :class="{ 'is-visible': visible6 }">
      <h2>Co dělám ve volném čase?</h2>
      <p>
        Pořádám <a href="https://rytirskytabor.cz/">rytířské tábory</a> pro mládež –
        malé kapacitou, velké zážitkem. Výběr tábořiště, organizace, komunikace s rodiči,
        spoluautorství příběhu a her –
        <Highlight>to mě baví a naplňuje</Highlight>
        už pět let. Pokračuji ve více jak dvacetileté tradici táborů, na které
        jsem sám jezdil.
      </p>

      <p>
        Fotím a fotodokumentuji – z radosti i z dobrovolnického
        <Highlight>nadšení</Highlight>.
        K nahlédnutí ne příliš zodpovědně udržovaný
        <a href="https://blog.josefkolar.cz/photos/">seznam výtvorů</a>.
      </p>

      <p>
        Seriály a filmy (hlavně
        <a href="https://www.csfd.cz/uzivatel/726493-thejoeejoee/hodnoceni/">drama a scifi</a>),
        <a href="https://open.spotify.com/user/11147151576?si=f-6UCuBoSaCyYsT51-mteg">rock všech typů</a> na Spotify,
        kryptoměny, běhání a občas i
        <abbr title="orientační běh">lampiony</abbr>.
      </p>
    </div>

    <div class="dinkus"></div>

    <div ref="section7" class="fade-up-section contact-section" :class="{ 'is-visible': visible7 }">
      <h2>Kde mě najdete?</h2>

      <ul class="big">
        <li>
          na e-mailu <strong>
            <Mailto :mail="email" subject="Dotaz z~webu" />
          </strong>
        </li>
        <li>na <a href="https://t.me/thejoeejoee">Telegramu</a></li>
        <li>
          na <a href="https://github.com/thejoeejoee">Githubu</a>
        </li>
        <li>na <a href="https://www.linkedin.com/in/josef-kolar/">LinkedInu</a></li>
        <li>
          souhrně v <a href="https://thejoeejoee.github.io/resume/kolar-josef-cv-cs.pdf">CV</a>
          (<a href="https://thejoeejoee.github.io/resume/kolar-josef-cv-en.pdf">english CV</a>)
        </li>
      </ul>
    </div>
  </article>
</template>

<script setup lang="ts">
import { useElementVisibility } from '@vueuse/core'

const email = 'mail@josefkolar.cz'

// "Once visible, stays visible" — latches true on first intersection
function useVisibleOnce(target: Ref<HTMLElement | null>) {
  const isVisible = useElementVisibility(target)
  const hasBeenVisible = ref(false)

  watch(isVisible, (val) => {
    if (val) hasBeenVisible.value = true
  })

  return hasBeenVisible
}

// #1 — Scroll-triggered fade-up sections
const section0 = ref<HTMLElement | null>(null)
const section1 = ref<HTMLElement | null>(null)
const section2 = ref<HTMLElement | null>(null)
const section3 = ref<HTMLElement | null>(null)
const section4 = ref<HTMLElement | null>(null)
const section5 = ref<HTMLElement | null>(null)
const section6 = ref<HTMLElement | null>(null)
const section7 = ref<HTMLElement | null>(null)

const visible0 = useVisibleOnce(section0)
const visible1 = useVisibleOnce(section1)
const visible2 = useVisibleOnce(section2)
const visible3 = useVisibleOnce(section3)
const visible4 = useVisibleOnce(section4)
const visible5 = useVisibleOnce(section5)
const visible6 = useVisibleOnce(section6)
const visible7 = useVisibleOnce(section7)

useHead({
  title: 'jsem',
})
</script>

<style lang="scss" scoped>
article {
  max-width: 80ch;
}

// Hero — intro text + photo side by side on wide screens
.hero {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-bottom: 2rem;

  &__text {
    flex: 1;
    font-size: 1.35em;
    line-height: 1.6;
    border-left: 3px solid var(--c-accent);
    padding-left: 1.25rem;
  }

  &__photo {
    flex: 0 0 auto;
    max-width: 220px;
    margin: 0;
    // Stagger: photo fades in 250ms after the hero container
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.5s ease-out 0.25s, transform 0.5s ease-out 0.25s;

    img {
      border-radius: 4px;
      width: 100%;
      height: auto;
    }
  }

  &.is-visible &__photo {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 720px) {
    flex-direction: column;
    gap: 1.5rem;

    &__text {
      font-size: 1.15em;
    }

    &__photo {
      max-width: 180px;
    }
  }
}

// Major sections — more breathing room for h2 sections
.section--major {
  margin-top: 1rem;
}

// Skills — two-column grid on wider screens
.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem 2rem;
  padding-left: 1.25rem;

  li {
    break-inside: avoid;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }
}

// Timeline entries — subtle left border accent
.timeline-entry {
  border-left: 2px solid var(--c-accent);
  padding-left: 1.25rem;
  margin-bottom: 1.5rem;

  h3 {
    margin-bottom: 0.25rem;
  }

  p, ul {
    margin-top: 0.25rem;
  }
}

// Open source contributions — distinct layout with star badges
.oss-list {
  list-style: none;
  padding-left: 0;

  li {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.35rem 0.6rem;
    padding: 0.4rem 0;
    border-bottom: 1px solid var(--c-border);

    &:last-child {
      border-bottom: none;
    }
  }
}

.oss-stars {
  display: inline-block;
  font-size: 0.75em;
  color: var(--c-accent);
  background: var(--c-accent-subtle);
  padding: 0.1em 0.5em;
  border-radius: 3px;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
}

.oss-desc {
  color: var(--c-text-muted);
  font-size: 0.9em;
}

// Contact section — subtle background highlight
.contact-section {
  background-color: var(--c-accent-subtle);
  padding: 1.5rem 2rem;
  border-radius: 3px;
  margin-top: 0.5rem;

  @media (max-width: 720px) {
    padding: 1rem 1.25rem;
  }
}

// Featured projects — subtle card treatment
.project--featured {
  border-left: 2px solid var(--c-accent);
  padding-left: 1rem;
  margin-left: -1rem;
  background: linear-gradient(90deg, var(--c-accent-subtle) 0%, transparent 70%);
  border-radius: 0 3px 3px 0;

  @media (max-width: 720px) {
    margin-left: 0;
    padding-left: 0.75rem;
  }
}
</style>
