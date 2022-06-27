<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>about</el-button>
  </div>
</template>

<script lang="ts" setup>
import { newlist } from "@/api/route";
import { onMounted, ref } from "vue";
// 页面初始化
onMounted(async () => {
  const resp = await newlist();
  console.log(resp);
});
</script>
