<template>
  <div class="menu">
    <Menu theme="dark" v-if="activeName || activeOpen.length" :active-name="activeName" :open-names="activeOpen"
          :accordion="true">
      <Submenu v-for="(item,index) in routerList" :key="index" :name="index + ''">
        <template slot="title">
          <Icon type="ios-paper"></Icon>
          <span v-text="item.name"></span>
        </template>

        <template v-if="item.children.length" v-for="(cItem,cIndex) in item.children">
          <router-link :to="item.path+'/'+cItem.path">
            <MenuItem :key="cIndex" :name="index +'-'+cIndex">
              {{cItem.name}}
            </MenuItem>
          </router-link>
        </template>
      </Submenu>
    </Menu>
  </div>
</template>

<script>
  import {routerMap} from 'service/router'

  export default {
    name: 'header',
    data () {
      return {
        routerList: [],
        activeName: null,
        activeOpen: []
      }
    },
    mounted(){
      let _this = this;
      routerMap.forEach(value => {
        // 判断路由是否显示
        if (!value.hidden) {
          _this.routerList.push(value)
        }
      });

      this.updateMenuActive()
    },
    methods: {
      updateMenuActive(){
        let _this = this;
        if (!this.$route.name) {
          this.activeOpen = ['0'];
          return;
        }

        _this.activeOpen = [];

        this.routerList.forEach((value, index) => {
          if (value.path === this.$route.matched[0].path) {
            value.children.forEach((cValue, cIndex) => {
              if (this.$route.path.indexOf(cValue.path) > -1 && this.$route.name === cValue.name) {
                _this.activeName = `${index}-${cIndex}`;
              }
            })
          }
        });

        _this.activeOpen.push(_this.activeName[0] || '0');
      }
    },
    watch: {
      $route(){
        this.updateMenuActive()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/style/base.less";

  .menu {
    position: fixed;
    height: 100%;
    margin-top: 70px;
    top: 0;
    left: 0;
    background-color: @menu-back;
    z-index: 9;
  }

  .ivu-menu-dark {
    background-color: #333333;
  }
</style>
<style>
  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,
  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title:hover {
    color: #fff;
    background: #262626;
  }

  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened {
    background-color: #292929;
    /*background-color: #333333;*/
  }

  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened .ivu-menu-submenu-title {
    background: #333333;
  }

  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,
  .menu .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover {
    background-color: #1f1f1f !important;
    position: relative;
  }
</style>
