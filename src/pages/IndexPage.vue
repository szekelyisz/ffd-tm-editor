<template>
  <q-page responsive>
    <NftEditor v-if="accountStore.account" />
    <div class="column content-center items-center q-pa-xl" v-else>
      <q-btn
        label="Connect Wallet"
        rounded
        flat
        @click="walletConnect.execute()"
        icon="wallet"
      />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useAccountStore } from 'src/stores/account';
import { useAsyncState } from '@vueuse/core';
import { createWallet } from 'thirdweb/wallets';
import NftEditor from 'src/components/NftEditor.vue';

const accountStore = useAccountStore();
accountStore.wallet = createWallet('io.metamask');

const walletConnect = useAsyncState(
  () =>
    accountStore.wallet !== undefined
      ? accountStore.wallet
          .connect({
            client: accountStore.client,
          })
          .then((account) => (accountStore.account = account))
      : Promise.resolve(undefined),
  undefined,
  { immediate: false }
);
</script>
