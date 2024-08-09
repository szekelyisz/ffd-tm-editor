<template>
  <div>
    <div class="row q-pa-md">
      <q-input label="to" v-model="to" class="col q-pr-md" />
      <q-btn label="mint" @click="mint" icon="send" color="primary" />
    </div>
    <q-splitter v-model="split">
      <template #before>
        <div class="q-pa-md">
          <PokedexEditor v-model="value" />
        </div>
      </template>
      <template #after>
        <pre class="q-pa-md">{{ JSON.stringify(value, undefined, 2) }}</pre>
      </template>
    </q-splitter>
  </div>
</template>

<script setup lang="ts">
import PokedexEditor from 'src/components/editors/PokedexEditor.vue';
import MintResultDialog from './MintResultDialog.vue';
import { api } from 'src/boot/axios';
import { ref, Ref } from 'vue';
import { Pokedex } from '@fairfooddata/types';
import { clone, defaultPokedex } from './editors/defaults';
import { useQuasar } from 'quasar';
import { useAccountStore } from 'src/stores/account';

const value: Ref<Pokedex> = ref(clone(defaultPokedex));

const accountStore = useAccountStore();

const $q = useQuasar();
const split = ref(50);
const to = ref<string | undefined>(accountStore.account?.address);

function mint() {
  return api
    .post('/mint', {
      to: to.value,
      content: value.value,
    })
    .then((result) =>
      $q.dialog({
        title: 'Mint Result',
        // message: result.data.message,
        component: MintResultDialog,
        componentProps: { tokenId: result.data.tokenId },
      })
    );
}
</script>
