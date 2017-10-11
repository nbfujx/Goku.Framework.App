<template>
  <div v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                menus: [
                    {
                        iconOn: 'ion-ios-home',
                        iconOff: 'ion-ios-home-outline',
                        text: '首页',
                        path: '/index/home'
                    },
                    {
                        iconOn: 'ion-ios-person',
                        iconOff: 'ion-ios-person-outline',
                        text: '我的',
                        path: '/index/about'
                    }
                ]
            }
        },

        ready() {
            setTimeout(() => {
                this.$el.classList.add('fixed')
            }, 600)
        },

        methods: {
            menuClicked(menuIndex) {
                console.log(menuIndex)
            }
        },

        beforeDestroy() {
            $tabbar.$emit('hideTabbar')
        }
    }
</script>
