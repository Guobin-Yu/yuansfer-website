<template>
  <div class="page-head">
    <div class="logo-col">
      <el-image :src="require('./img/yuansfer_logo.svg')" class="logo-img">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>
    <div class="menu-col">
      <el-menu :default-active="activeIndex" class="el-menu-home" mode="horizontal" @select="handleSelect">
        <el-submenu index="2">
          <template slot="title">Accept Payment</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="1">Online</el-menu-item>
        <el-menu-item index="3">In-Store</el-menu-item>
        <el-menu-item index="payment">Make Payments</el-menu-item>
        <el-menu-item index="5">Docs</el-menu-item>
        <el-menu-item index="company">Company</el-menu-item>
      </el-menu>
    </div>
    <div class="other-col">
      <div class="login-box">
        <el-image class="lock-icon" :src="require('./img/icon/lock-icon.png')"></el-image>
        <span>Log In</span>
      </div>
      <el-button class="apply-btn grad-btn">Apply</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    data() {
      return {
        activeIndex: this.$route.name
      }
    },
    methods: {
      handleSelect(key) {
        if(this.$route.name!==key){
          this.$router.push({ path: '/' + key })
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .page-head {
    border-bottom: 1px solid #E3E5E8;
    padding: 0 163px;
    display: flex;
    justify-content: space-between;
    height: 77px;

    .logo-col {
      height: 100%;
      display: flex;
      align-items: center;

      .logo-img {
        width: 137px;
      }
    }

    .menu-col {
      .el-menu-home {
        font-family: SF Pro Display;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;

        &.el-menu--horizontal {
          border-bottom: none;

          .el-menu-item {
            padding: 0 14px;
            height: 77px;
            line-height: 77px;
            color: #16181B;
          }

          /deep/ > .el-submenu {
            .el-submenu__title {
              padding: 0 14px;
              height: 77px;
              line-height: 77px;
              color: #16181B;
            }
          }
        }
      }
    }

    .other-col {
      height: 100%;
      line-height: 77px;

      .login-box {
        margin-right: 25px;
        display: inline-block;

        .lock-icon {
          margin-right: 9px;
          display: inline-block;
          height: 14px;
        }
      }

      .apply-btn {
        width: 100px;
        height: 40px;
        font-size: 14px;
        color: #FFF;
      }
    }
  }
</style>
