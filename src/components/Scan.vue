<template>
  <div class="page has-navbar has-tabbar" v-nav="{title: '扫码',showBackButton: true,  onBackButtonClick: cancelBarcode}" >
    <div class="page-content padding-top">
      <div id= "bcid" class="Barcode_panel"></div>
    </div>
  </div>
</template>

<script>
    var scan =null;
    export default {
      ready: function () {
        console.log("Barcode scan");
        scan = new plus.barcode.Barcode('bcid');
        scan.onmarked = function (type, result) {
            plus.nativeUI.toast( result);
        };
        scan.onerror = function (type, result) {
            plus.nativeUI.toast( result);
        };
        scan.start();
      },
      methods: {
        cancelBarcode(){
          scan.close();
          $router.back({path: '/index/home'})
        }
      }
    }
</script>

<style scoped>
  .Barcode_panel {
    height:480px;
    width:360px;
  }
</style>
