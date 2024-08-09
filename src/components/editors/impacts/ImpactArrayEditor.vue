<template>
  <q-card class="q-mt-md">
    <q-expansion-item :label="label" default-opened>
      <div class="q-pa-md">
        <div v-if="array !== undefined">
          <template v-for="(item, index) in array" :key="[index, item]">
            <q-card class="row q-pa-md q-mb-md">
              <div class="col">
                <ImpactEditor v-model="array[index]" />
              </div>
              <div>
                <q-btn
                  round
                  @click="removeElement(index)"
                  icon="remove"
                  color="primary"
                  class="q-ml-md"
                />
              </div>
            </q-card>
          </template>
        </div>
        <q-btn-dropdown icon="add" color="primary">
          <q-list>
            <q-item
              clickable
              v-close-popup
              @click="addElement(clone(defaultWaterImpact))"
            >
              <q-item-section>
                <q-item-label>WaterImpact</q-item-label>
              </q-item-section>
            </q-item>
            <q-item
              clickable
              v-close-popup
              @click="addElement(clone(defaultCarbonImpact))"
            >
              <q-item-section>
                <q-item-label>CarbonImpact</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </div>
    </q-expansion-item>
  </q-card>
</template>

<script setup lang="ts">
import { Impact } from '@fairfooddata/types';
import { computed, ref, watch } from 'vue';
import { clone, defaultWaterImpact, defaultCarbonImpact } from '../defaults';
import ImpactEditor from './ImpactEditor.vue';

const props = defineProps<{
  modelValue: Impact[] | undefined;
  label: string;
}>();

const array = ref(props.modelValue);

function addElement(element: Impact) {
  if (array.value === undefined) array.value = [];
  array.value.push(element);
}

function removeElement(index: number) {
  if (array.value === undefined) return;

  array.value.splice(index, 1);
  if (array.value.length === 0) array.value = undefined;
}

const emit = defineEmits(['update:modelValue']);

watch(array, (newValue) => {
  emit('update:modelValue', newValue);
});

const label = computed(() => `${props.label} (${array.value?.length ?? 0})`);
</script>
