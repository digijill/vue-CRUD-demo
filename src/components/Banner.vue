<template>
<div id="bannerMsg" v-show='bannerMessage' v-bind:style="{ 'background-color': bannerBackgroundColor }">
    <span id="errorMessageClear" v-on:click='clearBannerMessage'>Clear</span>
    <p>{{ bannerMessage }}</p>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
  name: 'Banner',
  props: {
    bannerMessage: String,
    bannerType: String
  },
  emits: ['clear-banner'],
  setup (props, context) {
    const bannerBackgroundColor = computed(() => {
      if (props.bannerType === 'Error') {
        return 'red'
      } else if (props.bannerType === 'Success') {
        return 'green'
      } else {
        return 'blue'
      }
    })

    const clearBannerMessage = () => {
      context.emit('clear-banner')
    }

    return { bannerBackgroundColor, clearBannerMessage }
  }
}
</script>

<style scoped>

div {
  display:inline-block;
  width: 100vw;
  margin-bottom: 2rem;
}

span, p {
  padding: 1rem;
  color: white;
  width: auto;
}

div {
  float: left;
}

#errorMessageClear {
  float: right;
}

#errorMessageClear:hover {
  color: black;
  cursor: pointer;
}

</style>
