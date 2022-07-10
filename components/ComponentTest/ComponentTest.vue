<template>
  <p>
    Componente teste
  </p>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ComponentTest'
})
export default class NuxtLogo extends Vue {
  mounted (): void {
    console.log('oi')
  }
}

</script>
