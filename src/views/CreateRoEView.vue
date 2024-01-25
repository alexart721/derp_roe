<template>
  <div class="about">
    <h1 class="mt-6 mb-4">Create New Rules of Engagement</h1>
    <div class="w-10">
      <p>The terms of this document, a combination of fixed terms, if any, and those terms left to be decided by the cards, defined in their corresponding areas below,
        in addition to the names of the participants listed, hereby establish the Rules of Engagement for this Challenge.</p>
      <PvFieldset legend="Participants" class="mt-6">
        <p>This Challenge, with its terms defined in the following sections, is hereby issued by 
          <PvInputText id="challengerName" type="text" size="small" placeholder="Challenger" v-model="challenger" />, henceforth known as the
          <span class="font-italic font-semibold">Challenger</span>, at email address
          <PvInputText id="challengerEmail" type="text" size="small" placeholder="Challenger Email" v-model="challengerEmail" />, to
          <PvInputText id="challengedName" type="text" size="small" placeholder="Challenged" v-model="challenged" />, henceforth known as the
          <span class="font-italic font-semibold">Challenged</span>, at email address
          <PvInputText id="challengedEmail" type="text" size="small" placeholder="Challenged Email" v-model="challengedEmail" />.
        </p>
      </PvFieldset>
      <PvFieldset legend="Fixed Terms" class="mt-6">
        <PvToolbar class="mb-4">
          <template #start>
            <PvButton label="Add Fixed Term" icon="pi pi-plus" class="mr-2" outlined @click="toggleFixedTermDialog" />
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
            <PvButton label="Add Fate Term" icon="pi pi-plus" class="mr-2" outlined />
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
      <PvToolbar class="mt-6 mb-6">
        <template #start>
          <PvButton label="Issue Challenge" icon="pi pi-chevron-circle-right" class="mr-2" />
        </template>
        <template #end>
          <PvButton label="Start Over" icon="pi pi-ban" severity="danger" />
        </template>
      </PvToolbar>
    </div>

    <PvDialog v-model:visible="addFixedTermDialog" :style="{width: '450px'}" header="Add Fixed Term" :modal="true" class="p-fluid">
      <div class="field">
        <label for="newFixedTerm">New Fixed Term</label>
        <PvInputText id="newFixedTerm" v-model.trim="newFixedTerm.termDescription" required="true" autofocus :class="{'p-invalid': submitted && !newFixedTerm.termDescription}" />
        <small class="p-error" v-if="submitted && !newFixedTerm.termDescription">Fixed Term must be defined.</small>
      </div>
      <div class="field">
        <label for="newFixedTermChallengerValue">Challenger Value</label>
        <PvInputText id="newFixedTermChallengerValue" v-model.trim="newFixedTerm.challengerValue" required="true" :class="{'p-invalid': submitted && !newFixedTerm.challengerValue}" />
        <small class="p-error" v-if="submitted && !newFixedTerm.challengerValue">Challenger value must be defined.</small>
      </div>
      <div class="field">
        <label for="newFixedTermChallengedValue">Challenged Value</label>
        <PvInputText id="newFixedTermChallengedValue" v-model.trim="newFixedTerm.challengedValue" required="true" :class="{'p-invalid': submitted && !newFixedTerm.challengedValue}" />
        <small class="p-error" v-if="submitted && !newFixedTerm.challengedValue">Challenged value must be defined.</small>
      </div>
      <template #footer>
        <PvButton label="Add" icon="pi pi-check" text @click="addFixedTerm" />
        <PvButton label="Cancel" icon="pi pi-times" text @click="toggleFixedTermDialog"/>
      </template>
    </PvDialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const challenger = ref<string>('');
const challengerEmail = ref<string>('');
const challenged = ref<string>('');
const challengedEmail = ref<string>('');
const submitted = ref<boolean>(false);

interface FixedTerm {
  order: number | null,
  termDescription: string | null,
  challenger: string | null,
  challengerValue: string | null,
  challenged: string | null,
  challengedValue: string | null,
}

const newFixedTerm = ref<FixedTerm>({
  order: null,
  termDescription: null,
  challenger: challenger.value,
  challengerValue: null,
  challenged: challenged.value,
  challengedValue: null,
});
const fixedTerms = ref<FixedTerm[]>([
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
const addFixedTermDialog = ref<boolean>(false);
const toggleFixedTermDialog = () => {
  // Clear values?
  addFixedTermDialog.value = !addFixedTermDialog.value;
}
const addFixedTerm = () => {
  submitted.value = true;
  console.log('here');
  console.log(newFixedTerm.value);
  
  // add validator
  if (newFixedTerm.value.termDescription && newFixedTerm.value.challengerValue && newFixedTerm.value.challengedValue) {
    console.log('also here');
    
    newFixedTerm.value.order = fixedTerms.value.length + 1;
    fixedTerms.value.push(newFixedTerm.value);
    addFixedTermDialog.value = false;
  }
}

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
