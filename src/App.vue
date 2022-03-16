<template>
<button @click="requestHandle">request</button>
  <router-view></router-view>
</template>

<script>
import request from '@/utils/request'
export default {
  setup () {
    const requestHandle = () => {
      request('/member/profile', 'get', { a: 10 })
    }
    return {
      requestHandle
    }
  }
}
</script>
