<script setup lang="ts">
useHead({
  title: 'Quomix',
})

const { dimensions } = useDimensions()

await useAsyncData('pages', () => queryCollection('content').all())

onMounted(() => {
  if (import.meta.client) {
    dimensions.value.width = window.innerWidth
    dimensions.value.height = window.innerHeight

    window.addEventListener('resize', () => {
        dimensions.value.width = window.innerWidth
        dimensions.value.height = window.innerHeight
    })
  }
})
</script>

<template>
  <UApp>
    <div class="bg-quomix-red min-h-[100svh] flex flex-col">
      <QuomixHeader />
      <main class="grow flex">
        <NuxtPage />
      </main>
      <QuomixFooter />
    </div>
  </UApp>
</template>