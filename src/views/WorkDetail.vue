<template>
  <div v-if="app" class="w-full p-10 flex flex-col gap-6">
    <h1 class="text-3xl font-bold mb-2 text-center">{{ app.title }}</h1>
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-3">
        <p class="mb-4">{{ app.duration }}</p>
      </div>
      <div class="col-span-3 flex flex-col gap-6">
        <p>製作期間：{{ app.duration }}</p>
        <div>
          <h2 class="text-lg font-bold">【概要】</h2>
          <p>{{ app.description }}</p>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-1.5">【使用技術】</h2>
          <div class="flex gap-2">
            <Tag v-for="(tag, index) in app.tags" :key="index" :label="tag.label" :colorClass="tag.color" />
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">【開発体制】</h2>
          <div class="grid grid-cols-[10ch_1fr] gap-x-4 gap-y-2 text-sm">
            <div class="font-bold whitespace-nowrap">開発期間</div>
            <p>：{{ app.date }}</p>

            <div class="font-bold whitespace-nowrap">チームメンバー</div>
            <p>：{{ app.menber }}</p>

            <div class="font-bold whitespace-nowrap">タスク管理</div>
            <p>：{{ app.task }}</p>

            <div class="font-bold whitespace-nowrap">バージョン管理</div>
            <p>：{{ app.version }}</p>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">【担当業務】</h2>
          <div class="grid grid-cols-[10ch_1fr] gap-x-4 gap-y-2 text-sm">
            <div class="font-bold whitespace-nowrap">担当工程</div>
            <div>{{ app.inCharge }}</div>

            <div class="font-bold whitespace-nowrap">機能一覧</div>
            <ul class="list-none">
              <li v-for="(feature, index) in app.featureList" :key="index">・{{ feature }}</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 class="text-lg font-bold mb-2">【開発環境及び使用ツール】</h2>
          <div class="grid grid-cols-[10ch_1fr] gap-x-4 gap-y-2 text-sm">
            <div class="font-bold whitespace-nowrap">使用技術一覧</div>
            <ul class="list-none">
              <li v-for="(tech, index) in app.techList" :key="index">・{{ tech }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <img :src="app.image" alt="" class="w-full max-w-md mb-4" />

  </div>
  <div v-else>
    <p>アプリが見つかりません。</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { apps } from '@/data/apps'
import Tag from '@/components/Tag.vue'


const route = useRoute()
const app = apps.find(a => a.slug === route.params.slug)



console.log(app)
</script>