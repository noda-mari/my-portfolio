<template>
    <header class="relative">
        <img :src="topImg[0]" alt="トップ画像" class="w-full object-cover mb-10" />
        <div class="absolute bottom-2 left-4 text-[#c64e2f]">
            <div class="w-1/4 flex items-end">
                <h1 class="font-['Fascinate_Inline'] text-6xl mb-2 font">Portfolio/</h1>
                <h1 class="font-['Fascinate_Inline'] text-2xl">noda</h1>
            </div>
            <p class="font-['Playwrite_GB_S'] text-xs">🗓️ Last Updated: 2025/04/05</p>
        </div>
    </header>
</template>

<script setup lang="ts">
defineProps<{
    topImg: string[]
}>()
</script>