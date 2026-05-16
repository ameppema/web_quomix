<script setup lang="ts">
const { lang, toggle } = useLang()
</script>

<template>
    <header class="py-8 md:py-12">
        <div class="mx-auto w-full max-w-2xl px-6 flex justify-between items-center">
            <NuxtLink to="/" aria-label="Quomix">
                <QuomixLogo class="h-7 md:h-8 text-quomix-black" />
            </NuxtLink>

            <button
                type="button"
                class="text-sm tracking-wide hover:text-quomix-red transition-colors"
                :aria-label="lang === 'es' ? 'Switch to English' : 'Cambiar a español'"
                @click="toggle"
            >
                {{ lang === 'es' ? 'EN' : 'ES' }}
            </button>
        </div>
    </header>
</template>
