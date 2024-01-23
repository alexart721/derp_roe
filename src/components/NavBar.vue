<template>
    <div>
        <PvMenubar :model="menubarNavItems">
            <template #item="{ item, hasSubmenu }">
                <RouterLink v-if="item.route" :to="item.route" class="p-menuitem-link">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
                </RouterLink>
                <div v-else class="p-menuitem-link">
                    <span :class="item.icon" />
                    <span class="ml-2">{{ item.label }}</span>
                    <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
                </div>
            </template>
            <template #end>
                <RouterLink to="/about">
                    <PvButton label="Create New RoE" />
                </RouterLink>
            </template>
        </PvMenubar>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const menubarNavItems = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        route: '/',
    },
    {
        label: 'Established Rules of Engagement',
        icon: 'pi pi-book',
        items: [
            {
                label: 'Continue RoE',
                icon: 'pi pi-play',
                route: '/about',
            },
            {
                label: 'Archived RoEs',
                icon: 'pi pi-pencil',
                route: '/about',
            }
        ]
    }
]);

</script>

<style scoped>

</style>