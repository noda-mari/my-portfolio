<template>
    <div @click="onClick" class="bg-naby py-0.5 flex items-center cursor-pointer">
        <h3 class="career-h3 p-1">{{ title }}</h3>
        <span class="p">👆click</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string
    onClick: () => void
}>()
</script>
