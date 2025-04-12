<template>
    <header class="relative">
        <img :src="topImg" alt="トップ画像" class="w-full h-48 object-cover mb-10" />
        <div class="absolute bottom-2 left-4 text-white">
            <div class="w-1/4 flex items-end">
                <h1 class="font-['Edu_AU_VIC_WA_NT_Arrows'] text-4xl mb-2 font">Portfolio/</h1>
                <h1 class="font-['Edu_AU_VIC_WA_NT_Arrows'] text-2xl">noda</h1>
            </div>
            <p class="font-['Playwrite_GB_S'] text-xs">🗓️ Last Updated: 2025/04/05</p>
        </div>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    topImg: string
}>()
</script>