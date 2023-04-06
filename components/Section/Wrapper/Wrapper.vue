<template>
    <section :id="sectionId">
        <div>
            <h2>{{ Title || "Default" }}</h2>
        </div>
    </section>
</template>

<script lang="ts" setup>
const props = defineProps({
    sectionId: String,
    dark: Boolean,
    Title: String,
})
</script>