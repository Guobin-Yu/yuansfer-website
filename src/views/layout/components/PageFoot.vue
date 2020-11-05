<template>
  <div class="page-foot">
    <div class="foot-hd">
      <div class="logo-wrap">
        <div>
          <el-image class="logo-img" :src="require('./img/yuansfer_logo.png')"></el-image>
        </div>
        <div class="start-box">
          <el-image :src="require('./img/start.png')"></el-image>
        </div>
      </div>
      <ul class="info-wrap">
        <li class="info-item">
          <div class="item-title">Payment</div>
          <ul class="item-content">
            <li class="item">Online</li>
            <li class="item">In-Store</li>
            <li class="item">Make Payments</li>
          </ul>
        </li>
        <li class="info-item">
          <div class="item-title">Company</div>
          <ul class="item-content">
            <li class="item">About Us</li>
            <li class="item">Contact</li>
            <li class="item">FAQ</li>
          </ul>
        </li>
        <li class="info-item address-item">
          <div class="item-title">Address</div>
          <ul class="item-content">
            <li class="item">
              <el-image class="icon-img" :src="require('./img/icon/address-icon.png')"></el-image>
              <div class="item-text">28 Liberty St 6th Floor, New York, NY 10005, USA</div>
            </li>
            <li class="item">
              <el-image class="icon-img" style="margin-top: 5px;" :src="require('./img/icon/email-icon.png')"></el-image>
              <div class="item-text">support@yuansfer.com</div>
            </li>
            <li class="item">
              <el-image class="icon-img" :src="require('./img/icon/phone-icon.png')"></el-image>
              <div class="item-text">(855) 982- 6888</div>
            </li>
          </ul>
        </li>
        <li class="info-item">
          <div class="item-title">Get the App</div>
          <ul class="item-content">
            <li class="item">
              <el-image :src="require('./img/app-store.png')"></el-image>
            </li>
            <li class="item">
              <el-image :src="require('./img/google-play.png')"></el-image>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="foot-ft">
      <div>Yuansfer Ltd © 2020. All Rights Reserved.</div>
      <div>
        <span style="margin-right: 30px">Privacy Policy</span>
        <span>Data Processing Agreement</span>
      </div>
      <div>
        <el-image class="icon-img" style="margin-right: 12px;" :src="require('./img/icon/face-icon.png')"></el-image>
        <el-image class="icon-img" style="margin-right: 12px;" :src="require('./img/icon/twitter-icon.png')"></el-image>
        <el-image class="icon-img" :src="require('./img/icon/ins-icon.png')"></el-image>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: ''
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .page-foot{
    padding: 0 165px;
    background: #16181B;
    min-height: 100px;
    font-family: SF Pro Display;
    color: #FFF;
    .foot-hd{
      padding: 70px 0;
      display: flex;
      border-bottom: 1px solid #45494E;
      .logo-wrap{
        margin-right: 148px;
        .logo-img{
          width: 137px;
        }
        .start-box{
          margin: 60px 0 0 15px;
        }
      }
      .info-wrap{
        padding-top: 5px;
        flex: 1;
        display: flex;
        justify-content: space-between;
        .info-item{
          .item-title{
            padding-bottom: 10px;
            font-weight: 500;
            font-size: 22px;
            line-height: 108%;
          }
          .item-content{
            .item{
              padding: 10px 0;
              font-size: 16px;
              color: #AEB1B6;
            }
          }
          &.address-item{
            flex: 0 0 254px;
            .item-content{
              .item{
                .item-text{
                  margin-left: 24px;
                }
                .icon-img{
                  float: left;
                }
              }
            }
          }
        }
      }
    }
    .foot-ft{
      padding: 32px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      color: #929395;
    }
  }
</style>
