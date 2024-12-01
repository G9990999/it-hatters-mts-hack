<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Меню',
        items: [{ label: 'Начало работы', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
        label: 'Инструменты',
        items: [
            { label: 'Иерархия', icon: 'pi pi-fw pi-id-card', to: '/show/tree' },
            { label: 'Редактирование', icon: 'pi pi-fw pi-check-square', to: '/editor/' },
            { label: 'Избранные Чаты', icon: 'pi pi-fw pi-mobile', to: '/case/chates', class: 'rotated-icon' },
            { label: 'Групповые назначения', icon: 'pi pi-fw pi-table', to: '/case/group-actions' },
        ]
    },

    {
        label: 'Динамическое дерево',
        items: [
            {
                label: 'Проект Мобильный доктор',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Отдел разработки',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Безымянный', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Иванов Иван', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Самосвалов', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'Отдел продаж',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [{ label: 'Безымянный', icon: 'pi pi-fw pi-bookmark' }]
                    }
                ]
            },
            {
                label: 'Проект Линк чат',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Отдел разработки',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'Безымянный', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'Сидоров Антон', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'Отдел продаж',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [{ label: 'Безымянный', icon: 'pi pi-fw pi-bookmark' }]
                    }
                ]
            }
        ]
    },
    {
        label: 'Помощь',
        items: [
            {
                label: 'Документация',
                icon: 'pi pi-fw pi-book',
                to: '/documentation'
            },
            {
                label: 'Единый Реестр',
                icon: 'pi pi-fw pi-book',
                to: '/help'
            },			
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
