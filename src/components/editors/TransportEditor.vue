<template>
  <q-card class="q-my-md">
    <q-expansion-item :label="$props.label" default-opened>
      <div class="q-pa-md">
        <TimestampInput
          v-model="value.deparetureTime"
          label="deparetureTime"
          default-value=""
        />
        <BasicInput
          v-model.number="value.duration"
          label="duration"
          default-value=""
          type="number"
        />
        <q-select
          v-model="value.fuelType"
          label="fuelType"
          :options="fuelTypeOptions"
        />
        <BasicInput
          v-model.number="value.weight"
          label="weight"
          default-value=""
          type="number"
        />
        <!-- TODO make this enum / select-->
        <q-select
          v-model="value.method"
          label="method"
          :options="transportMethodOptions"
        />
      </div>
    </q-expansion-item>
  </q-card>
</template>

<script setup lang="ts">
import { Transport } from '@fairfooddata/types';
import BasicInput from './BasicInput.vue';
import TimestampInput from './TimestampInput.vue';
import { clone, defaultTransport } from './defaults';
import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: Transport | undefined;
  label: string;
}>();

const value = ref(props.modelValue ?? clone(defaultTransport));

const emit = defineEmits(['update:modelValue']);

watch(value, (newValue) => {
  emit('update:modelValue', newValue);
});

const fuelTypeOptions = [
  'hydrogen',
  'electric',
  'diesel',
  'petrol',
  'kerosene',
];

const transportMethodOptions = ['air', 'sea', 'land'];
</script>
