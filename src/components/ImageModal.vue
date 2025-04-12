<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div class="relative p-6 bg-white rounded-lg shadow-lg">
            <img :src="imageList[currentIndex]" class="max-w-[90vw] max-h-[80vh] rounded" />

            <button @click="close" class="absolute top-2 right-2 text-gray-600 text-2xl font-bold">×</button>

            <button @click="nextImage"
                class="absolute top-1/2 right-2 transform -translate-y-1/2 text-black text-3xl font-bold">
                &gt;
            </button>

            <button @click="prevImage"
                class="absolute top-1/2 left-2 transform -translate-y-1/2 text-black text-3xl font-bold">
                &lt;
            </button>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  imageList: Array,
  currentIndex: Number,
})


const emit = defineEmits(['close', 'update:index'])

const close = () => {
  emit('close')
}

const nextImage = () => {
    const next = (props.currentIndex + 1) % props.imageList.length
    emit('update:index', next)
}

const prevImage = () => {
    const prev = (props.currentIndex - 1 + props.imageList.length) % props.imageList.length
    emit('update:index', prev)
}
</script>