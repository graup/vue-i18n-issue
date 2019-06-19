<template>
  <div>
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in $i18n.availableLocales" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </select>

    {{ $t('messages.welcome') }}
    {{ $t('buttons.cancel') }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoginForm',
  props: {
  },
  mounted() {
    // tslint:disable-next-line: no-console
    console.log(this.$i18n);
  },
  i18n: {
    messages: {
      en: {
        messages: {
          welcome: 'Hello from login form!',
        },
      },
      ko: {
        messages: {
          welcome: '로그인폼에서 안녕하세요!',
        },
      },
    },
  },
});
</script>

