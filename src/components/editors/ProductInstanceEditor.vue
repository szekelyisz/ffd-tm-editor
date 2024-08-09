<template>
  <q-card class="q-my-md">
    <q-expansion-item :label="$props.label" default-opened>
      <div class="q-pa-md">
        <q-select
          label="category"
          :options="instanceCategories"
          v-model="instanceCategory"
        />
        <FoodInstanceEditor v-if="value.category === 'food'" v-model="value" />
        <CartridgeInstanceEditor
          v-model="value"
          v-else-if="value.category === 'cartridge'"
        />
      </div> </q-expansion-item
  ></q-card>
</template>

<script setup lang="ts">
import { ProductInstance } from '@fairfooddata/types';
import { ref, watch } from 'vue';
import FoodInstanceEditor from './FoodInstanceEditor.vue';
import CartridgeInstanceEditor from './CartridgeInstanceEditor.vue';
import {
  clone,
  defaultCartridgeInstance,
  defaultFoodInstance,
  defaultProductInstance,
} from './defaults';

const props = defineProps<{
  modelValue: ProductInstance | undefined;
  label: string;
}>();

const instanceCategories = ['food', 'cartridge'];

const value = ref(props.modelValue ?? clone(defaultProductInstance));

const instanceCategory = ref(value.value.category);

const productInstanceFactory: { [type: string]: ProductInstance } = {
  food: defaultFoodInstance,
  cartridge: defaultCartridgeInstance,
};

watch(
  instanceCategory,
  (newValue) => (value.value = clone(productInstanceFactory[newValue]))
);
</script>
