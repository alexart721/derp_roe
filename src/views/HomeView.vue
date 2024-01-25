<template>
  <div class="home-container">
    <h1 class="mt-6 mb-4">Let the Cards Decide</h1>
    <div class="w-10">
      <p class="m-0">
        The duel. A time honored tradition of settling differences when peaceful means have failed (or you just want to shoot something).
        Establishing the rules of engagement for a duel can also be a matter of contestation. If an impass is reached while deciding the
        terms of the duel, they are left to chance.
      </p>
      <PvFieldset legend="Initiating a Duel" class="mt-6">
        <ul>
          <li>A <span class="font-italic font-semibold">Challenger</span> issues a <span class="font-italic font-semibold">Challenge</span>
            to the <span class="font-italic font-semibold">Challenged</span> by filling out a new RoE form and entering the Challenged's email address</li>
          <li class="mt-2"><span class="font-italic font-semibold">Fixed Terms</span> may be stipulated on the RoE form by the Challenger (e.g. a location)</li>
          <li class="mt-2">Terms that need to be left to fate (<span class="font-italic font-semibold">Fate Terms</span>) will be listed by the Challenger, with options specified
            (e.g. weapons: guns only, or Fox-2 missiles and guns)</li>
          <li class="mt-2">Once the Challenge is issued, the Challenged reviews the terms and either accepts or rejects</li>
          <li class="mt-2">If rejected, the Challenged must specify which options were not acceptable, and request to add options as they see fit</li>
          <li class="mt-2">If accepted, the determination proceeds as outlined below</li>
        </ul>
      </PvFieldset>
      <PvFieldset legend="Deciding the Fate Terms" class="mt-6">
        <ul>
          <li>24 number cards are shuffled randomly, with 12 placed in 2 rows of 6 in front of each participant</li>
          <li class="mt-2">Each participant may only touch the 12 cards in front of them</li>
          <li class="mt-2">The Challenged proceeds first, choosing an option for the first Fate Term</li>
          <li class="mt-2">The Challenger proceeds next and selects an option for the same Fate Term</li>
            <ul>
              <li class="mt-2">If the same option is selected, the term is established</li>
              <li class="mt-2">If a different option is selected, the Challenged flips a card of their choice over first to reveal the value</li>
              <li class="mt-2">The Challenger then flips a card of their choice over to reveal the value</li>
              <li class="mt-2">The higher value establishes which choice becomes the established term of the engagement</li>
            </ul>
          <li class="mt-2">Repeat the above for each Fate Term, starting with the Challenged selecting an option for the Fate Term</li>
          <li class="mt-2">Once all Fate Terms are decided, the duel may proceed</li>
        </ul>
      </PvFieldset>
      <p class="mt-6">
        A determination session is best done live, with each participant present, but the glory of the internet and this awesome webpage allows
        for it to happen at the leisure of each participant. Established RoEs are also archived and may be viewed again at any time using the menu at the
        top of the page.
      </p>
      <div class="flex flex-column align-items-center mt-6 mb-6">
        <RouterLink to="/about">
          <PvButton label="Create New RoE" />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>