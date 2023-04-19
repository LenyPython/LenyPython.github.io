<template>
    <template v-for="component in content.sections">
        <SectionWrapper v-bind="component" />
    </template>
</template>

<script lang="ts" setup>
import { content } from "~/content"

</script>