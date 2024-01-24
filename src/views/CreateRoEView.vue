<template>
  <div class="about">
    <h1 class="mt-6 mb-4">Create New Rules of Engagement</h1>
    <PvCard class="min-w-full">
      <template #content>
        <p>The terms of this document, a combination of fixed terms, if any, and those terms left to be decided by the cards, defined in their corresponding areas below,
          in addition to the names of the participants listed, hereby establish the Rules of Engagement for this Challenge.</p>
        <PvFieldset legend="Participants" class="mt-6">
          <p>This Challenge, with its terms defined in the following sections, is hereby issued by 
            <PvInputText type="text" size="small" placeholder="Challenger" v-model="challenger" />, henceforth known as the
            <span class="font-italic font-semibold">Challenger</span>, to
            <PvInputText type="text" size="small" placeholder="Challenged" v-model="challenged" />, henceforth known as the
            <span class="font-italic font-semibold">Challenged</span>.
          </p>
        </PvFieldset>
        <PvFieldset legend="Fixed Terms" class="mt-6">
          <PvToolbar class="mb-4">
            <template #start>
              <PvButton label="Add Fixed Term" icon="pi pi-plus" severity="success" class="mr-2" outlined />
              <PvButton label="Delete" icon="pi pi-trash" severity="danger" outlined />
            </template>
          </PvToolbar>
          <PvDataTable :value="fixedTerms" v-model:selection="selectedFixedTerms" editMode="row" data-key="order">
            <PvColumn selectionMode="multiple" style="width: 3rem" :exportable="false"></PvColumn>
            <PvColumn field="termDescription" header="Term" style="min-width:10rem"></PvColumn>
            <PvColumn field="challengerValue" header="Challenger" style="min-width:12rem"></PvColumn>
            <PvColumn field="challengedValue" header="Challenged" style="min-width:12rem"></PvColumn>
            <PvColumn :rowEditor="true" style="width: 8%; min-width: 4rem" bodyStyle="text-align:center"></PvColumn>
          </PvDataTable>
        </PvFieldset>
        <PvFieldset legend="Fate Terms" class="mt-6">
          <PvToolbar class="mb-4">
            <template #start>
              <PvButton label="Add Fixed Term" icon="pi pi-plus" severity="success" class="mr-2" outlined />
              <PvButton label="Delete" icon="pi pi-trash" severity="danger" outlined />
            </template>
          </PvToolbar>
          <PvDataTable :value="preDeterminationFateTerms" v-model:selection="selectedPreDeterminationFateTerms" editMode="row" data-key="order">
            <PvColumn selectionMode="multiple" style="width: 3rem" :exportable="false"></PvColumn>
            <PvColumn field="termDescription" header="Term" style="min-width:10rem"></PvColumn>
            <PvColumn field="options" header="Options" style="min-width:12rem">
              <template #body="slotProps">
                <PvChip v-for="(option, index) in slotProps.data.options" :key="index" :label="option" :class="[index > 0 ? 'ml-2' : '']" />
              </template>
            </PvColumn>
            <PvColumn :rowEditor="true" style="width: 8%; min-width: 4rem" bodyStyle="text-align:center"></PvColumn>
          </PvDataTable>
        </PvFieldset>
        <PvToolbar class="mt-4">
          <template #end>
            <PvButton label="Save" icon="pi pi-plus" severity="success" class="mr-2" outlined />
            <PvButton label="Start Over" icon="pi pi-trash" severity="danger" outlined />
          </template>
        </PvToolbar>
      </template>
    </PvCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const challenger = ref<string>('');
const challenged = ref<string>('');
const fixedTerms = ref([
  {
    order: 1,
    termDescription: 'Aircraft Selection',
    challenger: challenger.value,
    challengerValue: 'F-5E Tiger II',
    challenged: challenged.value,
    challengedValue: 'F-14 A/B Tomcat',
  }
]);
const selectedFixedTerms = ref([]);
const preDeterminationFateTerms = ref([
  {
    order: 1,
    termDescription: 'Aircraft Armament',
    options: ['Guns only', 'Fox 2 and guns'],
  }
]);
const selectedPreDeterminationFateTerms = ref([]);
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
