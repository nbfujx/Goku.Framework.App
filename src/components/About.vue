<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '我的'}" v-tabbar-menu-index="1">
    <div class="page-content padding-top">
      <a class="button button-positive button-block button-clear" v-link="{ path: '/New' }">H5组件库</a>
    </div>
  </div>
</template>
