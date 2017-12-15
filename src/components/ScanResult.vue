<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '扫码结果',showBackButton: true,  onBackButtonClick: cancelBarcode}" >
        <div class="page-content padding-top">
           {{ $route.query.result;}}
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            cancelBarcode(){
                $router.back({path: '/index/home'})
            }
        }
    }
</script>
<style>

</style>
