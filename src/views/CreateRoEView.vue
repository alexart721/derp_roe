<template>
  <div class="about">
    <h1 class="mt-6 mb-4">Create New Rules of Engagement</h1>
    <PvCard class="min-w-full">
      <template #content>
        <p>The terms of this document, a combination of fixed terms, if any, and those terms left to be decided by the cards, defined in their corresponding areas below,
          in addition to the names of the participants listed, hereby establish the Rules of Engagement for this Challenge.</p>
        <PvFieldset legend="Participants" class="mt-6">
          <p>This Challenge, with its terms defined in the following sections, is hereby issued by 
            <PvInputText type="text" size="small" placeholder="Challenger" v-model="challenger" />, henceforth known as
            <span class="font-italic font-semibold">The Challenger</span>, to
            <PvInputText type="text" size="small" placeholder="Challenged" v-model="challenged" />, henceforth known as
            <span class="font-italic font-semibold">The Challenged</span>.
          </p>
        </PvFieldset>
      </template>
    </PvCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const challenger = ref<string>('');
const challenged = ref<string>('');
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
