<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '新组件',showBackButton: true}" v-tabbar-menu-index="3">
        <div class="page-content padding-top">
            <button class="button button-balanced button-block" @click="onCamera">拍照</button>
            <button class="button button-balanced button-block" @click="onBarcode">扫码</button>
            <button class="button button-balanced button-block" @click="onDial">电话</button>
            <button class="button button-balanced button-block" @click="onWebview">创建新窗体</button>
            <button class="button button-balanced button-block" @click="galleryImg">选择单张图片</button>
            <button class="button button-balanced button-block" @click="galleryImgs">选择多张图片</button>
            <div id= "bcid" class="Barcode_panel"></div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            onCamera() {
                var cmr = plus.camera.getCamera();
                var res = cmr.supportedImageResolutions[0];
                var fmt = cmr.supportedImageFormats[0];
                console.log("Resolution: "+res+", Format: "+fmt);
                cmr.captureImage( function( path ){
                        plus.nativeUI.alert( "Capture image success!", function(){
                            console.log("Capture image success: " + path );
                        }, "提示", "OK" );
                    },
                    function( error ) {
                        console.log("Capture image failed: " + error.message );
                    },
                    {resolution:res,format:fmt}
                );
            },
            onDial(){
                plus.device.dial( "10086", false );
            },
            onBarcode(){
                var scan = new plus.barcode.Barcode('bcid');
                scan.onmarked = function(type, result){
                    console.log("Barcode success: " + result );
                };
                scan.onerror = function(type, result){
                    console.log("Barcode failed: " + result );
                };
                scan.start();
            },
            onWebview(){
                var w = plus.webview.create('http:///');
                w.show(); // 显示窗口
            },
            galleryImg() {
                plus.gallery.pick( function(path){
                    console.log(path);
                }, function ( e ) {
                    console.log( "pick img failed" );
                }, {filter:"image"} );
            },
            galleryImgs(){
                plus.gallery.pick( function(e){
                    for(var i in e.files){
                        console.log(e.files[i]);
                    }
                }, function ( e ) {
                    console.log( "pick img failed " );
                },{filter:"image",multiple:true});
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
