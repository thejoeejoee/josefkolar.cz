<template>
  <article>
    <div ref="section0" class="fade-up-section abstract strong" :class="{ 'is-visible': visible0 }">
      Hi! I'm Joe and&nbsp;I'm from Gen&nbsp;Z. <br>
      Computers, the internet, apps, the online world &mdash; that's my thing.
    </div>

    <figure ref="section1" class="fade-up-section" :class="{ 'is-visible': visible1 }">
      <img src="~/assets/jk.jpg" alt="yours truly">
    </figure>

    <div ref="section2" class="fade-up-section" :class="{ 'is-visible': visible2 }">
      <h2>What can I do?</h2>

      <ul>
        <li>
          <strong>Golang</strong> &ndash; CDN services, Kubernetes operators, contributions
          to open source (ArgoCD, Kueue, Watermill).
        </li>
        <li>
          <strong>media &amp; streaming</strong> &ndash; VOD/LIVE transcoding (SW &amp; HW), adaptive streaming (HLS/DASH),
          <Highlight>DRM, media containers &amp; codecs</Highlight>, ffmpeg, RTMP, SRT.
        </li>
        <li>
          <strong>Kubernetes</strong> &ndash; cluster design &amp; operations, Helm, Kustomize, Jsonnet/Tanka,
          <Highlight>ArgoCD GitOps</Highlight>, custom Kubernetes operators,
          VPA/HPA tuning, DRA for HW transcoding accelerators.
        </li>
        <li>
          <strong>Python</strong> &ndash; my daily bread for 10+ years. Django, Flask, FastAPI, numpy,
          whatever's needed. Hammer, duct tape &amp; WD-40 all in one.
        </li>
        <li>
          <strong>infrastructure</strong> &ndash; OpenStack, NATS, Kafka, OpenTelemetry, Prometheus,
          Grafana, CI/CD (GitLab CI, GitHub Actions), Docker, Werf, Ansible.
        </li>
        <li>
          <strong>Linux</strong> &ndash; user and admin. Ubuntu, Debian, CentOS.
        </li>
        <li>
          <strong>web frontend</strong> &ndash; Vue.js with TypeScript, React. Tailwind for styling.
        </li>
        <li>
          <strong>databases</strong> &ndash; prefer <Highlight>PostgreSQL</Highlight>,
          but also MariaDB/MySQL; non-relational: Mongo and Redis.
        </li>
        <li>
          <strong>AI &amp; coding agents</strong> &ndash; <a href="https://github.com/nicepkg/opencode">OpenCode</a>,
          <Highlight>sandboxing &amp; isolation</Highlight> of agents,
          integrating LLMs into developer workflows.
        </li>
        <li>
          <strong>C/C++, Rust</strong> &ndash; not my primary languages, but I know my way around.
        </li>
        <li>
          <em>what else?</em> &ndash; <span class="latex">L<span>a</span>T<span>e</span>X</span>,
          VHDL, ASMx86, Qt
          <abbr title="theoretically anything, learning new tech is great">TODO</abbr>.
        </li>
      </ul>
    </div>

    <div class="dinkus"></div>

    <div ref="section3" class="fade-up-section" :class="{ 'is-visible': visible3 }">
      <h2>Background</h2>

      <h3>
        Seznam.cz
        <small class="right">Senior Developer, since May 2023</small>
      </h3>

      <p>
        In the CDN team of the Czech internet leader, I work on media processing services &ndash;
        storage, VOD &amp; live encoding, content distribution infrastructure, and IPTV.
        Streamed storage, software &amp;
        <Highlight>hardware encoding</Highlight>, hot-swapping input sources,
        all running on our own k8s clusters on top of OpenStack.
      </p>
      <p>
        I lead development of the open-source project
        <a href="https://github.com/seznam/jailoc">jailoc</a> &ndash;
        sandboxed Docker environments with network isolation for secure
        <Highlight>AI agent</Highlight> execution.
        Go, embedded Compose SDK, iptables firewall, zero-config startup.
      </p>
      <p>
        Previously (since September 2022) I started in the same team as a Python Developer.
      </p>

      <h3>
        Open Source
      </h3>
      <p>
        I actively contribute to upstream projects:
      </p>
      <ul>
        <li>
          <a href="https://github.com/argoproj/argo-cd"><strong>ArgoCD</strong></a> &ndash; declarative
          continuous delivery for Kubernetes (22k+ stars)
        </li>
        <li>
          <a href="https://github.com/kubernetes-sigs/kueue"><strong>Kubernetes Kueue</strong></a> &ndash;
          Kubernetes-native job queueing (2.4k+ stars)
        </li>
        <li>
          <a href="https://github.com/ThreeDotsLabs/watermill"><strong>Watermill</strong></a> &ndash;
          event-driven applications in Go (9.6k+ stars)
        </li>
        <li>
          <a href="https://github.com/spegel-org/spegel"><strong>Spegel</strong></a> &ndash;
          stateless cluster-local OCI registry mirror (3.5k+ stars)
        </li>
        <li>
          and more &ndash; <Highlight>NATS, OpenTelemetry</Highlight>, Knative Serving
        </li>
      </ul>
    </div>

    <div ref="section4" class="fade-up-section" :class="{ 'is-visible': visible4 }">
      <h3>
        OLC Systems
        <small class="right">Fullstack Developer, 2014&ndash;2019</small>
      </h3>
      <p>
        Long-term collaboration with an <a href="https://www.olc.cz/">Olomouc-based company</a>
        on information systems &ndash; sports, registry, manufacturing.
        Full-stack development on Django for clients like Czech Floorball,
        Mobiln&iacute; pohotovost, and the Czech Equestrian Federation. Later
        <Highlight>integrating modern JS tools</Highlight>
        &ndash; Webpack and Vue.js.
      </p>

      <h3>Projects</h3>
      <ul>
        <li>
          <h4>Presentation websites</h4>
          <p>
            Multiple presentation websites for clients &ndash; from concept through graphic design to implementation
            and <Highlight>content management</Highlight>.
            Driving schools, travel agencies, custom manufacturing. Always bespoke, with CMS and support.
          </p>
        </li>
        <li>
          <h4>Czech orienteering &ndash; livestream graphics <small class="right">2023&ndash;&mldr;</small></h4>
          <p>
            For the Czech Orienteering Association I develop a
            <a href="https://github.com/thejoeejoee/co-stream-gfx">web app for livestream graphics</a>
            &ndash; real-time results, course maps, and data for TV broadcasts.
            Runs on live Czech orienteering events.
            <Highlight>Nuxt.js with Tailwind</Highlight>, Kubernetes.
          </p>
        </li>
        <li>
          <h4>Erasmus Festival 2022<small class="right">September 2022</small></h4>
          <p>
            A festival for five hundred international participants &ndash; two stages, three bands, DJs,
            Flag Parade through the centre of Brno. Promo, festival website, stage &amp; light design,
            which I managed on-site from the lighting desk.
          </p>
        </li>
        <li>
          <h4>NA Brno dobr&yacute; <small class="right">April 2022</small></h4>
          <p>
            For the national ESN assembly I built <a href="https://na.brnodobry.cz/">the event website</a>
            with programme, FAQ, and a map of key locations.
            <Highlight>Responsive design</Highlight>, Nuxt.js, Tailwind, data from Contentful.
          </p>
        </li>

        <li>
          <h4>
            ESN VUT Brno, ESN Riga<small class="right">2020&ndash;&mldr;</small>
          </h4>

          <p>
            Member of the Erasmus Student Network &ndash; it started with volunteering at <Highlight>ESN Riga</Highlight>
            during my studies in Latvia. Then two years in ESN VUT Brno:
            directing livestreams during COVID, photo/video, and eventually the role of
            <Highlight>Events Manager</Highlight>
            &ndash; planning events for international students and leading organising teams.
          </p>
          <p>
            IT work: standardisation under a <a href="https://github.com/esnvutbrno">GitHub organisation</a>,
            process automation, development of
            <a href="https://github.com/esnvutbrno/buena-fiesta">Buena Fiesta</a>
            &ndash; a social platform for matching international students with buddies.
          </p>
        </li>
        <li>
          <h4>Covid bez bari&eacute;r <small class="right">April 2021</small></h4>

          <p>
            Web app <a href="https://covidbezbarier.cz">covidbezbarier.cz</a> for finding
            <Highlight>accessible COVID-19 testing &amp; vaccination sites</Highlight>
            on a map. Nuxt.js, Tailwind, data from the Czech health registry, OSM map tiles.
            <a href="https://www.vutbr.cz/vut/aktuality-f19528/nova-aplikace-studentu-fit-pomaha-najit-bezbarierova-mista-pro-ockovani-a-testovani-d212739">Featured by our university.</a>
          </p>
        </li>
        <li>
          <h4>Litovel MINICUP <small class="right">2013&ndash;2019</small></h4>
          <p>
            Information system for a mini-handball tournament &ndash; from results pages through
            scoring, photo tagging, to extended statistics.
          </p>
          <p>
            From 2017 we added <Highlight>live broadcasts</Highlight>
            &ndash; first a mobile stream, then a custom
            <a href="https://github.com/litovel-minicup/camera-stream-transmitter">iOS app</a>
            for wireless video transmission, OBS and ffmpeg.
            In the final years: Blackmagic in FullHD, YouTube, Instagram, a live reporter and
            <a href="https://www.youtube.com/channel/UCyBgHxMdJBYp6aqNFEsjT7g/videos">dozens of hours</a>
            of live content with graphics and commentary.
          </p>
          <p>
            <a href="https://github.com/litovel-minicup/live-service">Results management service</a> (Django+Vue.js)
            distributed data to the web and livestreams &ndash;
            <Highlight>real-time clock</Highlight>, match status, rosters.
            Visual graphics by S.&nbsp;H.&nbsp;Nguyen in QML.
          </p>
        </li>

      </ul>
    </div>

    <div class="dinkus"></div>

    <div ref="section5" class="fade-up-section" :class="{ 'is-visible': visible5 }">
      <h3>Education</h3>
      <ul>
        <li>
          <h4>Master's studies at <em>University of Latvia</em> <small class="right">2019&ndash;2020</small></h4>
          <p>
            Two-semester Erasmus at the <em>Faculty of Computing</em> in Riga.
            Ten months of studying, exploring Latvia, volunteering for
            <Highlight><abbr title="Erasmus Student Network">ESN</abbr> Riga</Highlight>,
            and meeting students from around the world.
          </p>
        </li>
        <li>
          <h4>Bachelor's at FIT BUT in Brno <small class="right">2016&ndash;2019</small></h4>
          <p>
            <em>Applied Informatics</em> &ndash; DNS resolver, compiler,
            network probes, model simulation.
            <a href="https://www.vutbr.cz/studenti/zav-prace/detail/121991?zp_id=121991">Bachelor's thesis</a>:
            <Highlight>open platform</Highlight>
            for IoT node coordination in Node-RED with ESP32 firmware.
          </p>
        </li>
        <li>
          <h4>Technical High School, Olomouc <small class="right">2012&ndash;2016</small></h4>
          <p>
            Electrical engineering &rarr; IT. <Highlight>Electrical certification</Highlight> comes in handy.
            First Linux install.
            Final project: <a href="https://github.com/spseol/pybots-server">an arena for battling bots</a>
            programmed by other students.
          </p>
        </li>
      </ul>
    </div>

    <div class="dinkus"></div>

    <div ref="section6" class="fade-up-section" :class="{ 'is-visible': visible6 }">
      <h2>Free time</h2>
      <p>
        I run &ndash; on roads and through forests with a <Highlight>compass and map</Highlight>.
        Orienteering combines physical challenge with terrain decision-making.
        I race recreationally and train regularly.
      </p>

      <p>
        I take photos and document events &ndash; for fun and out of volunteering
        <Highlight>enthusiasm</Highlight>.
        Have a look at my not-too-diligently maintained
        <a href="https://blog.josefkolar.cz/photos/">portfolio</a>.
      </p>

      <p>
        I co-organise <a href="https://rytirskytabor.cz/">knight-themed camps</a> for youth &ndash;
        continuing a 20+ year tradition of camps I attended myself.
      </p>

      <p>
        TV series and films (mostly drama and sci-fi),
        rock of all kinds on Spotify,
        crypto.
      </p>
    </div>

    <div class="dinkus"></div>

    <div ref="section7" class="fade-up-section" :class="{ 'is-visible': visible7 }">
      <h2>Get in touch</h2>

      <ul class="big">
        <li>
          email <strong>
            <Mailto :mail="email" subject="Hello from the web" />
          </strong>
        </li>
        <li>on <a href="https://t.me/thejoeejoee">Telegram</a></li>
        <li>
          on <a href="https://github.com/thejoeejoee">GitHub</a>
        </li>
        <li>on <a href="https://www.linkedin.com/in/josef-kolar/">LinkedIn</a></li>
        <li>
          summarised in my <a href="https://thejoeejoee.github.io/resume/kolar-josef-cv-en.pdf">CV</a>
          (<a href="https://thejoeejoee.github.io/resume/kolar-josef-cv-cs.pdf">české CV</a>)
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

// Scroll-triggered fade-up sections
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
  title: "I'm",
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style lang="scss" scoped>
article {
  max-width: 80ch;
}
</style>
