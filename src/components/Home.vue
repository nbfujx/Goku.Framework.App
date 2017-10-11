<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '首页'}" v-tabbar-menu-index="0">
        <div class="page-content padding-top">
            <button class="button button-balanced button-block" v-link="{ path: '/Scan' }">扫码</button>
            <a class="button button-positive button-block button-clear" v-link="{ path: '/New' }">H5组件库</a>
        </div>
    </div>
</template>
