<template>
  <div class="scrollable-container" ref="target">
    <div class="background">
      <m-affix :target="() => target" ref="affix">
        <m-button type="primary">Fixed at the top of container</m-button>
      </m-affix>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const target = ref();
</script>
