<script setup lang="ts">
defineProps<{
    desktop?: 'slideover' | 'modal'
    mobile?: 'drawer' | 'modal'
}>()

const model = defineModel<boolean>({ default: false })

const { breakpoints } = useDimensions()
</script>

<template>
    <UModal v-if="breakpoints.sm ? desktop === 'modal' : mobile === 'modal'" v-model:open="model">
        <slot />
        <template v-if="$slots.header" #header>
            <slot name="header" />
        </template>
        <template v-if="$slots.body" #body>
            <slot name="body" />
        </template>
        <template v-if="$slots.content" #content>
            <slot name="content" />
        </template>
        <template v-if="$slots.footer" #footer>
            <slot name="footer" />
        </template>
    </UModal>
    <USlideover v-else-if="breakpoints.sm" v-model:open="model">
        <slot />
        <template v-if="$slots.header" #header>
            <slot name="header" />
        </template>
        <template v-if="$slots.body" #body>
            <slot name="body" />
        </template>
        <template v-if="$slots.content" #content>
            <slot name="content" />
        </template>
        <template v-if="$slots.footer" #footer>
            <slot name="footer" />
        </template>
    </USlideover>
    <UDrawer v-else v-model:open="model">
        <slot />
        <template v-if="$slots.header" #header>
            <slot name="header" />
        </template>
        <template v-if="$slots.body" #body>
            <slot name="body" />
        </template>
        <template v-if="$slots.content" #content>
            <slot name="content" />
        </template>
        <template v-if="$slots.footer" #footer>
            <slot name="footer" />
        </template>
    </UDrawer>
</template>