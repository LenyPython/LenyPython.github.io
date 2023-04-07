<template>
    <section :id="sectionId">
        <div :class="styles.div_container">
            <h2 :class="styles.h2">{{ Title || "Default" }}</h2>
            <div>
                children container
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import THEMES from '~/constants/Themes';
import { createTheme } from './themeCreator'

const props = defineProps({
    sectionId: String,
    dark: Boolean,
    Title: String,
})
const styles = computed(() => createTheme(THEMES.Classic))
</script>