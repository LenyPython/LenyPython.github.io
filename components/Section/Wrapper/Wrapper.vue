<template>
    <section>
        <h2>{{ Title || "Default" }}</h2>
        <div>DIV</div>
    </section>
</template>

<script lang="ts" setup>

const props = defineProps({
    dark: Boolean,
    Title: String,
})
</script>