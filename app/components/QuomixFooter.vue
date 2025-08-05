<script setup lang="ts">
const { data: pages } = useNuxtData('pages')
</script>

<template>
    <footer class="bg-quomix-red text-highlighted dark py-12">
        <UContainer class="flex justify-between max-md:flex-col gap-12">
            <NuxtLink to="/">
                <QuomixLogo class="h-12" solid />
            </NuxtLink>
            <div v-if="pages" class="flex max-md:flex-col items-center gap-4 md:gap-2">
                <template v-for="(page, index) in pages" :key="page.id">
                    <NuxtLink :to="page.path.split('/').pop()">
                        {{ page.title }}
                    </NuxtLink>
                    <span v-if="index !== pages.length - 1" class="max-md:hidden">&middot;</span>
                </template>
            </div>
        </UContainer>
    </footer>
</template>