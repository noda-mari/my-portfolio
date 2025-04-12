<template>
    <div class="fixed top-0 left-0 w-full z-50">
        <header class="relative">
        <img :src="topImg" alt="トップ画像" class="w-full h-17 object-cover mb-5" />
        <div class="absolute bottom-3 right-4 text-white">
            <div class="w-1/4 flex items-end">
                <h1 class="font-['Edu_AU_VIC_WA_NT_Arrows'] text-4xl mb-2 font">Portfolio/</h1>
                <h1 class="font-['Edu_AU_VIC_WA_NT_Arrows'] text-2xl">noda</h1>
            </div>
        </div>
        <div class="absolute bottom-4.5 left-7 ">
            <img src="/back1.png" alt="戻るボタン" class="cursor-pointer hover:opacity-80 transition" @click="goBack">
        </div>
    </header>
    </div>
    
</template>

<script setup lang="ts">

import { useRouter } from 'vue-router'

defineProps<{
    topImg: string
}>()

const router = useRouter()

const goBack = () => {
    router.back()
}

</script>