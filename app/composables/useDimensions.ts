export default function useDimensions() {
    const dimensions = useState('dimensions', () => ({
        width: 0,
        height: 0
    }))

    const breakpoints = computed(() => ({
        sm: dimensions.value.width >= 640,
        md: dimensions.value.width >= 768,
        lg: dimensions.value.width >= 1024,
        xl: dimensions.value.width >= 1280,
        '2xl': dimensions.value.width >= 1536,
    }))

    onMounted(() => {
        if (import.meta.client) {
            dimensions.value.width = window.innerWidth
            dimensions.value.height = window.innerHeight
        }
    })

    return {
        dimensions,
        breakpoints,
    }
}