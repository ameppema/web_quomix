<script setup lang="ts">
const { data: pages } = useNuxtData('pages')
</script>

<template>
    <header class="bg-default py-6 md:py-12 sticky top-0 shadow">
        <UContainer class="flex justify-between items-center px-6">
            <NuxtLink to="/">
                <QuomixLogo class="h-12 md:h-16 text-highlighted" />
            </NuxtLink>

            <QuomixModal>
                <UButton
                    variant="ghost" 
                    color="neutral" 
                    :ui="{ leadingIcon: 'size-8' }"
                    icon="material-symbols:menu-rounded"
                />
                <template #body>
                    <div class="flex flex-col text-center gap-4">
                        <NuxtLink
                            v-for="page in pages" 
                            :key="page.id" 
                            :to="page.path.split('/').pop()"
                            class="p-4 rounded-full bg-elevated text-quomix-red font-bold"
                        >
                            {{ page.title }}
                        </NuxtLink>
                    </div>
                </template>
            </QuomixModal>
        </UContainer>
    </header>
</template>