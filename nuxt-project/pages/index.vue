<template>
  <div>
    <!--    leads to [Vue warn]: [@vue/server-renderer] Invalid VNode type: Symbol(Fragment) (symbol)-->
    <HelloWorld/>

    <!--    leads to TypeError: Cannot read properties of null (reading 'isCE')-->
    <HelloSlot>
      <div>this is slot</div>
    </HelloSlot>
  </div>
</template>

<script lang="ts">
// ignore types
//@ts-ignore
import * as UI from 'ui-lib-for-nuxt-slot-issue';

const {HelloWorld, HelloSlot} = UI.default ?? UI;

export default {
  components: {
    HelloWorld,
    HelloSlot
  }
}
</script>
