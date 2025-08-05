<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData(
    route.params.slug as string, 
    // /en should be ${locale} with i18n
    async () => queryCollection('content').path(`/en/${route.params.slug}`).first()
)

if (!page.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page not found',
    })
}
</script>

<template>
    <div v-if="page" class="bg-white grow py-24">
        <UContainer class="prose mx-auto text-xl">
            <ContentRenderer :value="page" />
        </UContainer>
    </div>
</template>
