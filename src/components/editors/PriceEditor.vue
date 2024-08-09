<template>
  <q-card class="q-mt-md">
    <q-expansion-item :label="$props.label" default-opened>
      <div class="q-pa-md row">
        <div class="col q-pr-sm">
          <BasicInput
            v-model.number="amount"
            label="amount"
            :default-value="undefined"
            type="number"
          />
        </div>
        <div class="col q-px-sm">
          <BasicInput
            v-model="currency"
            label="currency"
            :default-value="undefined"
          />
        </div>
        <div class="col q-pl-sm">
          <q-select v-model="type" label="type" :options="typeOptions" />
        </div>
      </div>
    </q-expansion-item>
  </q-card>
</template>

<script setup lang="ts">
import { Price } from '@fairfooddata/types';
import { ref, watch } from 'vue';
import BasicInput from './BasicInput.vue';

const props = defineProps<{
  modelValue: Price | undefined;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
}>();

const amount = ref(props.modelValue?.amount);
const currency = ref(props.modelValue?.currency);
const type = ref(props.modelValue?.type);

const emit = defineEmits(['update:modelValue']);

watch(amount, (newValue) => {
  emit(
    'update:modelValue',
    newValue !== undefined &&
      newValue !== 0 &&
      currency.value !== undefined &&
      currency.value !== '' &&
      type.value !== undefined
      ? { amount: newValue, currency: currency.value, type: type.value }
      : props.defaultValue
  );
});

watch(currency, (newValue) => {
  emit(
    'update:modelValue',
    newValue !== undefined &&
      newValue !== '' &&
      amount.value !== undefined &&
      amount.value !== 0 &&
      type.value !== undefined
      ? { amount: amount.value, currency: newValue, type: type.value }
      : props.defaultValue
  );
});

watch(type, (newValue) => {
  emit(
    'update:modelValue',
    newValue !== undefined &&
      newValue !== undefined &&
      amount.value !== undefined &&
      amount.value !== 0 &&
      currency.value !== ''
      ? { amount: amount.value, currency: currency.value, type: newValue }
      : props.defaultValue
  );
});

const typeOptions = ['budget', 'is', '%', 'payin30days', 'payin60days'];
</script>
