<script setup lang="ts">
const route = useRoute()
const { lang } = useLang()

const { data: page } = await useAsyncData(
    `legal-${route.params.slug}`,
    () => queryCollection('content').path(`/${lang.value}/${route.params.slug}`).first(),
    { watch: [lang] },
)

if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
    })
}
</script>

<template>
    <div v-if="page" class="grow w-full mx-auto max-w-2xl px-6 py-12 md:py-20">
        <article
            class="leading-relaxed
                prose prose-neutral max-w-none
                prose-headings:tracking-tight prose-headings:text-quomix-black
                prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:font-medium prose-h1:mb-10
                prose-h2:text-lg md:prose-h2:text-xl prose-h2:font-semibold prose-h2:mt-12 prose-h2:mb-4
                prose-h3:text-base prose-h3:font-semibold
                prose-p:text-base md:prose-p:text-lg prose-p:font-light prose-p:text-quomix-gray
                prose-li:text-base md:prose-li:text-lg prose-li:font-light prose-li:text-quomix-gray
                prose-strong:font-semibold prose-strong:text-quomix-black
                prose-a:font-medium prose-a:text-quomix-black prose-a:underline prose-a:underline-offset-4
                hover:prose-a:text-quomix-red
                prose-table:text-sm prose-th:text-quomix-black prose-td:font-light prose-td:text-quomix-gray"
        >
            <ContentRenderer :value="page" />
        </article>
    </div>
</template>
