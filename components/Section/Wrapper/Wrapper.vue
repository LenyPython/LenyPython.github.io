<template>
    <section :id="sectionId">
        <div style="margin:50px">
            <h2 class="text-5xl font-bold underline">{{ Title || "Default" }}</h2>
            other
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