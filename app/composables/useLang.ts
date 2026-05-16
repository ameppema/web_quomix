export type Lang = 'es' | 'en'

export default function useLang() {
    const lang = useState<Lang>('lang', () => 'es')

    function toggle() {
        lang.value = lang.value === 'es' ? 'en' : 'es'
    }

    return {
        lang,
        toggle,
    }
}
