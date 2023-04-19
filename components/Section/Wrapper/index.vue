<template>
    <section :id="sectionId">
        <div :class="styles.div_container">
            <h2 :class="styles.h2">{{ Title || "Default" }}</h2>
            <component :is="child" v-bind="props.component.props"></component>
        </div>
    </section>
</template>

<script lang="ts" setup>
import THEMES from '~/constants/Themes';
import { useGetThemeStyles } from './themeCreator'
import { sectionInterface } from '~/content'

const props = defineProps({
    sectionId: String,
    component: {
        type: Object,
        default: ({ component }: sectionInterface) => ({ component })
    },
    Title: String,
    img: String,
    dark: Boolean,
})
const styles = useGetThemeStyles(THEMES.Classic)
const child = import(props.component.template)
</script>