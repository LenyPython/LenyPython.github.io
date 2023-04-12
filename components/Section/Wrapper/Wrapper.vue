<template>
    <section :id="sectionId">
        <div :class="styles.div_container">
            <h2 :class="styles.h2">{{ Title || "Default" }}</h2>
            <component :is="props.component" :heroImg="props.img" :text="props.text" />
        </div>
    </section>
</template>

<script lang="ts" setup>
import THEMES from '~/constants/Themes';
import { useGetThemeStyles } from './themeCreator'

const props = defineProps({
    sectionId: String,
    component: String,
    Title: String,
    text: String,
    img: String,
    dark: Boolean,
})
const styles = useGetThemeStyles(THEMES.Classic)
</script>