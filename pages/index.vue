<script lang="ts" setup>
useHead({
  title: 'Dashboard'
})

const events = ref([
    { status: 'Отдел найма', date: '15/10/2020 10:30', icon: 'pi pi-user', color: '#9C27B0', 'font-size': '5em' },
    { status: 'Отдел разработки', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Отдел продукта', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Отдел продаж', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
]);
</script>
<template>
  <div class="grid">
    <div class="col-12 lg:col-6 xl:col-3">
      <div class="card mb-0">
        <div class="flex justify-content-between mb-3">
          <div>
            <span class="block text-500 font-medium mb-3">Статусы</span>
            <div class="text-900 font-medium text-xl">
              1052 сотрудников
            </div>
          </div>
          <div class="flex align-items-center justify-content-center bg-blue-100 border-round" style="width:2.5rem;height:2.5rem">
            <i class="pi pi-shopping-cart text-blue-500 text-xl" />
          </div>
        </div>
        <span class="text-green-500 font-medium">24 сотрудников свободны </span>
        <span class="text-500">на текущий день</span>
      </div>
    </div>
	
	<div class="col-12 lg:col-12 xl:col-6">
    <div class="card">
        <Timeline :value="events" align="alternate" class="customized-timeline">
            <template #marker="slotProps">
                <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
            </template>
            <template #content="slotProps">
                <Card class="mt-4">
                    <template #title>
                        {{ slotProps.item.status }}
                    </template>
                    <template #subtitle>
                        {{ slotProps.item.date }}
                    </template>
                    <template #content>
                        <p>
                           Список сотрудников
                        </p>
                        <Button label="Далее" text></Button>
                    </template>
                </Card>
            </template>
        </Timeline>
    </div>	
	</div>
  </div>
</template>
<style lang="scss" scoped>
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}
</style>