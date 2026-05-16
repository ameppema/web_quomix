<script setup lang="ts">
const { data: allPages } = useNuxtData('pages')
const { lang } = useLang()

const pages = computed(() =>
    (allPages.value ?? []).filter((page: { path: string }) => page.path.startsWith(`/${lang.value}/`)),
)
</script>

<template>
    <footer class="py-12 mt-24">
        <div class="mx-auto flex w-full max-w-2xl items-center justify-between gap-4 px-6 text-sm text-quomix-gray">
            <NuxtLink
                v-for="page in pages"
                :key="page.id"
                :to="`/${page.path.split('/').pop()}`"
                class="hover:text-quomix-red transition-colors"
            >{{ page.title }}</NuxtLink>
        </div>
    </footer>
</template>
