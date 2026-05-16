<script setup lang="ts">
const { lang } = useLang()

const openIndex = ref<number | null>(null)

function select(index: number) {
    openIndex.value = openIndex.value === index ? null : index
}

watch(lang, () => {
    openIndex.value = null
    current.value = 0
})

type Block = {
    hero: { title: string; subtitle: string }
    manifesto: { title: string; paragraphs: string[] }
    who: { title: string; intro: string; items: { label: string; body: string }[] }
    closing: { title: string; body: string; cta: string }
}

const content: Record<Lang, Block> = {
    es: {
        hero: {
            title: 'No somos una fábrica de software. Somos una conversación.',
            subtitle: 'Quomix es una boutique de tecnología. Trabajamos con muy pocos clientes. Sólo con quienes quieren retar lo convencional.',
        },
        manifesto: {
            title: 'Por qué esta web no te enseña casi nada',
            paragraphs: [
                'Bienvenido a nuestra web, probablemente no encontrarás una muestra de lo que andabas buscando. Ni siquiera intentamos explicarnos demasiado. Si encuentras lo que buscas, probablemente también nos encuentres a nosotros.',
                'No queremos que nos representen tres pantallazos de proyectos más o menos afortunados, por más éxitos que nos hayan deparado. Un buen software no se entiende mirándolo: se entiende viviéndolo, y entendiendo el problema que resolvió.',
                'Creemos, firmemente, en la tecnología como un discurso de largo recorrido, no como una pieza aislada. Creemos en la consistencia, en la excelencia y en hacer pocas cosas, muy bien hechas, para muy poca gente.',
                'Nada de lo que podamos mostrarte aquí sustituye una buena conversación de un par de horas con las personas que escribirían tu código. Antes que nada debe funcionar eso tan sutil que llamamos química.',
            ],
        },
        who: {
            title: '¿Quién eres?',
            intro: 'Permítenos que nos presentemos: somos Quomix, una boutique de software que crea y construye soluciones útiles para las personas. ¿Y tú?',
            items: [
                {
                    label: 'Eres un posible cliente',
                    body: 'Bienvenido a la parte difícil. No tenemos portfolio que enseñarte ni una lista de servicios que marcar. Tenemos criterio, un equipo pequeño y la costumbre de decir que no. Si lo que necesitas es un proveedor que ejecute sin preguntar, no somos nosotros. Si lo que buscas es alguien que cuestione el brief antes de escribir la primera línea, hablemos mañana mismo.',
                },
                {
                    label: 'Eres uno de nuestros clientes',
                    body: 'Es un placer tenerte por aquí, aunque sea virtualmente. Esta web no puede contarte nada que no sepas ya de primera mano. Sólo queremos darte las gracias por la confianza, y recordarte que ya sabes dónde nos tienes: en el mismo sitio de siempre, contestando rápido.',
                },
                {
                    label: 'Eres un ex cliente',
                    body: 'Que una relación termine no significa que dejara de importarnos. El código que escribimos juntos probablemente sigue funcionando en producción, y eso es la prueba más palpable de nuestra obsesión: construir cosas que sobrevivan al proyecto, y a veces a nosotros. La puerta sigue abierta.',
                },
                {
                    label: 'Trabajas en la competencia',
                    body: 'Hola, nos encanta tener colegas cerca. No vas a encontrar aquí nuestros secretos porque no creemos demasiado en ellos: el oficio se defiende con criterio, no con misterio. Si has llegado buscando inspiración, mejor sal a dar una vuelta; esta web no es un buen generador de ideas, la calle sí.',
                },
                {
                    label: 'Buscas trabajo',
                    body: 'Gracias por el interés. Ahora mismo no estamos buscando llenar ninguna vacante en particular, pero éste es un oficio cambiante. No nos interesa demasiado tu currículum: si es magnífico probablemente ya lo conocemos, y si no, mejor que no lo enseñes. Nos importa lo que vas a hacer, no lo que hiciste. Demuéstranoslo de la manera que te parezca mejor.',
                },
                {
                    label: 'Quieres colaborar con nosotros',
                    body: 'Una de las razones por las que nos gusta esto es porque nos permite trabajar con gente de talento diverso y notable. Somos pocos a propósito, así que casi todo lo interesante lo hacemos rodeados de buenos colaboradores. Si crees que eres uno de ellos, nos gustaría conocerte.',
                },
                {
                    label: 'Estás aprendiendo a programar',
                    body: 'Esperamos que te guste lo que estás aprendiendo. Si no es así, déjalo a tiempo: éste es un oficio cruel para quien no lo ama. Si lo amas, tenemos buenas noticias: hace falta mucha gente con criterio y ganas de inventar. Gente como tú, quizá. No tenemos un curso ni un blog que recomendarte; tenemos un consejo: construye cosas y enséñalas.',
                },
                {
                    label: 'Sólo estás curioseando',
                    body: 'Lo sentimos, ésta no es una web demasiado entretenida. No colgamos nuestro trabajo en forma de capturas porque no queremos que nos representen piezas aisladas, en un momento en el que lo que de verdad tiene valor son las ideas de largo recorrido. Curiosear está bien. Es lo que pasa cuando uno busca: a veces encuentra.',
                },
                {
                    label: 'Has llegado aquí sin saber muy bien cómo',
                    body: 'La infinita e inabarcable web. No tienes nada que ver con nosotros y aun así estás aquí. Esta web es, cómo decirlo, muy poco web a propósito. Decidimos hace tiempo que la mejor manera de estar en la red era no estar de más. Quizá no salgas de aquí muy informado, pero al menos no saldrás mal informado, que es mucho peor.',
                },
            ],
        },
        closing: {
            title: '¿Hablamos?',
            body: 'Esto no se explica bien por escrito. Una mesa, un café delante (o sin él), y un par de horas hablando con sinceridad de cómo entendemos las cosas. No tiene todavía sustituto, y es posible que no lo tenga nunca.',
            cta: 'Escríbenos',
        },
    },
    en: {
        hero: {
            title: 'We are not a software factory. We are a conversation.',
            subtitle: 'Quomix is a technology boutique. We work with very few clients. Only with those who want to challenge convention.',
        },
        manifesto: {
            title: 'Why this website shows you almost nothing',
            paragraphs: [
                'Welcome to our website, you probably won’t find a sample of what you were looking for. We don’t even try to explain ourselves too much. If you find what you’re looking for, you’ll probably also find us.',
                'We don’t want to be represented by three screenshots of more or less fortunate projects, no matter how much success they brought us. Good software isn’t understood by looking at it: it’s understood by living it, and by understanding the problem it solved.',
                'We firmly believe in technology as a long-term discourse, not as an isolated piece. We believe in consistency, in excellence, and in doing few things, extremely well, for very few people.',
                'Nothing we could show you here replaces a good two-hour conversation with the people who would write your code. Above all, that subtle thing we call chemistry has to work.',
            ],
        },
        who: {
            title: 'Who are you?',
            intro: 'Allow us to introduce ourselves: we’re Quomix, a software boutique that creates and builds useful solutions for people. And you?',
            items: [
                {
                    label: 'You’re a possible client',
                    body: 'Welcome to the hard part. We have no portfolio to show you and no checklist of services to tick. We have judgement, a small team, and the habit of saying no. If you need a vendor that executes without asking, that’s not us. If you’re looking for someone who questions the brief before writing the first line, let’s talk tomorrow.',
                },
                {
                    label: 'You’re one of our clients',
                    body: 'It’s a pleasure to have you here, even virtually. This website can’t tell you anything you don’t already know first hand. We just want to thank you for the trust, and remind you that you know where to find us: same place as always, answering fast.',
                },
                {
                    label: 'You’re an ex-client',
                    body: 'A relationship ending doesn’t mean it stopped mattering. The code we wrote together is probably still running in production, and that is the clearest proof of our obsession: building things that outlive the project, and sometimes us. The door stays open.',
                },
                {
                    label: 'You work for the competition',
                    body: 'Hello, we love having colleagues nearby. You won’t find our secrets here because we don’t believe much in them: the craft is defended with judgement, not mystery. If you came looking for inspiration, better go for a walk; this website is a poor idea generator, the street is a good one.',
                },
                {
                    label: 'You’re looking for work',
                    body: 'Thanks for the interest. We’re not looking to fill any position in particular right now, but this is an ever-changing trade. We’re not very interested in your resume: if it’s magnificent we probably already know it, and if it’s not, better you don’t show it. We care about what you’re going to do, not what you did. Prove it to us however you see fit.',
                },
                {
                    label: 'You want to collaborate with us',
                    body: 'One of the reasons we love this is that it lets us work with people of diverse and notable talent. We are few on purpose, so almost everything interesting we do is done surrounded by good collaborators. If you think you’re one of them, we’d like to meet you.',
                },
                {
                    label: 'You’re learning to code',
                    body: 'We hope you like what you’re learning. If not, quit while you can: this is a cruel trade for those who don’t love it. If you do love it, good news: we need people with judgement and the urge to invent. People like you, maybe. We have no course or blog to recommend; we have advice: build things and show them.',
                },
                {
                    label: 'You’re just browsing',
                    body: 'Sorry, this isn’t a very entertaining website. We don’t post our work as screenshots because we don’t want to be represented by isolated pieces, at a time when what truly has value are long-running ideas. Browsing is fine. It’s what happens when you search: sometimes you find.',
                },
                {
                    label: 'You ended up here without quite knowing how',
                    body: 'The infinite, boundless web. You have nothing to do with us and yet here you are. This website is, how to put it, very deliberately not very web. We decided long ago that the best way to be online was not to be online too much. You may not leave well informed, but at least you won’t leave misinformed, which is much worse.',
                },
            ],
        },
        closing: {
            title: 'Shall we talk?',
            body: 'This doesn’t explain well in writing. A table, a coffee in front of us (or not), and a couple of hours talking honestly about how we see things. There’s still no substitute for that, and there may never be.',
            cta: 'Write to us',
        },
    },
}

const t = computed(() => content[lang.value])

const intro = computed(() => [...t.value.manifesto.paragraphs, t.value.who.intro])

const current = ref(0)
// Hay un paso extra después del último párrafo: las opciones de "¿Y tú?"
const isOptionsStep = computed(() => current.value >= intro.value.length)

function revealNext() {
    if (current.value < intro.value.length) current.value++
}

function revealPrev() {
    if (current.value > 0) current.value--
}

const moreLabel = computed(() => (lang.value === 'es' ? 'Seguir' : 'Continue'))
const backLabel = computed(() => (lang.value === 'es' ? 'Atrás' : 'Back'))
const selectedWho = computed(() =>
    openIndex.value === null ? null : t.value.who.items[openIndex.value] ?? null,
)

function paragraphClass(i: number) {
    if (i === 0) return 'text-2xl md:text-3xl font-medium tracking-tight text-quomix-black'
    if (i === intro.value.length - 1) return 'text-lg md:text-xl font-semibold tracking-tight text-quomix-black'
    return 'text-base md:text-lg font-light text-quomix-gray'
}
</script>

<template>
    <div class="mx-auto w-full max-w-2xl px-6 py-12 md:py-20 leading-relaxed">
        <Transition name="reveal" mode="out-in">
            <p
                v-if="!isOptionsStep"
                :key="`${lang}-${current}`"
                :class="paragraphClass(current)"
            >
                {{ intro[current] }}
            </p>
        </Transition>

        <div class="flex items-center justify-between" :class="isOptionsStep ? 'mt-0' : 'mt-10'">
            <button
                v-if="current > 0"
                type="button"
                class="group inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-quomix-gray transition-colors hover:text-quomix-red"
                @click="revealPrev"
            >
                <svg
                    class="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M15 18l-6-6 6-6" />
                </svg>
                {{ backLabel }}
            </button>
            <span v-else />

            <button
                v-if="!isOptionsStep"
                type="button"
                class="group inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-quomix-gray transition-colors hover:text-quomix-red"
                @click="revealNext"
            >
                {{ moreLabel }}
                <svg
                    class="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path d="M9 6l6 6-6 6" />
                </svg>
            </button>
        </div>

        <Transition name="reveal">
            <div v-if="isOptionsStep">
                <div class="mt-8">
                    <div>
                        <div class="flex flex-wrap gap-x-5 gap-y-3">
                            <button
                                v-for="(item, index) in t.who.items"
                                :key="index"
                                type="button"
                                class="text-sm md:text-base tracking-tight transition-colors"
                                :class="openIndex === index
                                    ? 'font-semibold text-quomix-red'
                                    : 'font-medium text-quomix-black hover:text-quomix-red'"
                                :aria-pressed="openIndex === index"
                                @click="select(index)"
                            >
                                <span
                                    v-if="openIndex === index"
                                    class="mr-1.5 text-quomix-gray"
                                >▸</span>{{ item.label }}
                            </button>
                        </div>
                    </div>

                    <Transition name="reveal">
                        <div
                            v-if="selectedWho"
                            :key="openIndex ?? -1"
                            class="mt-10 space-y-4"
                        >
                            <p class="ml-auto max-w-md text-right text-base md:text-lg font-light text-quomix-gray">
                                {{ selectedWho.body }}
                            </p>
                        </div>
                    </Transition>
                </div>

                <p class="mt-20 text-base md:text-lg font-light text-quomix-gray">
                    {{ t.closing.body }}
                    <a
                        href="mailto:hola@quomix.io"
                        class="font-semibold text-quomix-black underline underline-offset-4 transition-colors hover:text-quomix-red"
                    >{{ t.closing.cta }}</a>.
                </p>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.reveal-enter-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal-enter-from {
    opacity: 0;
    transform: translateY(10px);
}
</style>
