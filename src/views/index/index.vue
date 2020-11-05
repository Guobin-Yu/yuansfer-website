<template>
  <div class="container">
    <div class="content-wrap wrap-one">
      <div class="content-left">
        <div class="content-hd">
          Go <span class="blue">Global</span> Think Local
        </div>
        <div class="content-bd">
          Expands your reach across multiple markets by accepting all major global wallets with a simple integration online and in-store
        </div>
        <div class="content-ft">
          <el-button class="grad-btn">GET DEMO<i class="el-icon-right el-icon--right"></i></el-button>
        </div>
      </div>
      <div class="content-right">
        <div class="img-box">
          <el-image :src="require('./img/y_ill-05-2.png')"></el-image>
        </div>
      </div>
    </div>
    <div class="content-wrap wrap-two">
      <div class="content-hd">
        One Integration to All Major Wallets:
      </div>
      <div class="content-bd">
        <ul class="wallets-list">
          <template v-for="item in walletsList">
            <li class="wallets-item" :key="item.img">
              <el-image :src="require('./img/' + item.img)"></el-image>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="content-wrap wrap-three">
      <div class="content-hd">
        Drive Revenue Growth and Decrease Costs
      </div>
      <div class="content-bd">
        <ul class="drive-list">
          <template v-for="item in driveList">
            <li class="drive-item" :key="item.img">
              <div class="img">
                <el-image :src="require('./img/' + item.img)"></el-image>
              </div>
              <div class="label">{{item.label}}</div>
              <div class="desc">{{item.desc}}</div>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="content-wrap wrap-four">
      <div class="content-hd">
        <div class="label">
          Enhance <span class="blue">Security</span> and Compliance
        </div>
        <div class="desc">Yuansfer integrates directly with your commerce platform to standardize operations and reconciliations.</div>
        <div class="btn-box">
          <el-button class="btn">Learn more<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </div>
      </div>
      <div class="content-bd">
        <ul class="security-list">
          <template v-for="item in securityList">
            <li class="security-item" :key="item.img">
              <div class="img">
                <el-image :src="require('./img/' + item.img)"></el-image>
              </div>
              <div class="label">{{item.label}}</div>
              <div class="desc">{{item.desc}}</div>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="content-wrap wrap-five">
      <div class="content-hd">
        Trusted by <span class="">2000+</span> Businesses
      </div>
      <div class="content-bd">
        <button type="button" class="el-carousel__arrow el-carousel__arrow--left" @click="carouselToggle(-1)"><i class="el-icon-back"></i></button>
        <button type="button" class="el-carousel__arrow el-carousel__arrow--right" @click="carouselToggle(1)"><i class="el-icon-right"></i></button>
        <el-carousel ref="carousel" class="business-carousel" trigger="click" :autoplay="false" arrow="never" height="165px">
          <template v-for="(item,i) in businessList">
            <el-carousel-item class="item" :key="i">
              <div class="img-box" v-for="img in item" :key="img.img">
                <el-image class="img" :src="require('./img/' + img.img)"></el-image>
              </div>
            </el-carousel-item>
          </template>
        </el-carousel>
      </div>
    </div>
    <div class="content-wrap wrap-six">
      <div class="content-hd">
        Easily <span class="blue">Integrate</span> With Your Existing Systems
      </div>
      <div class="content-bd">
        <div class="integrate-list">
          <div class="integrate-item">
            <div class="img">
              <el-image :src="require('./img/integrate-1.png')"></el-image>
            </div>
            <div class="label">API</div>
            <div class="desc">Build a custom solution for any POS or eCommerce platform</div>
            <div class="btn-box">
              <el-button class="grad-btn">EXPLORE THE API</el-button>
            </div>
          </div>
          <div class="integrate-item">
            <div class="img">
              <el-image :src="require('./img/integrate-2.png')"></el-image>
            </div>
            <div class="label">SDK</div>
            <div class="desc">Everything you need to quickly integrate with Yuansfer</div>
            <div class="btn-box">
              <el-button class="grad-btn">EXPLORE THE SDK</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrap wrap-seven">
      <div class="content-hd">What <span class="blue">Customers</span> Say</div>
      <div class="content-bd">
        <div class="hd">
          “Yuansfer has been a pleasure to work with. The product is responsive, the team is knowledgeable and hard working. I am very happy with our partnership and I would recommend Yuansfer to my friends.”
        </div>
        <div class="bd">
          <div class="left">
            <div class="label">Chad Buchanan Buchanan </div>
            <div class="desc">Finalmouse, Founder and COO</div>
          </div>
          <div class="right">
            <el-image :src="require('./img/finalmouse.png')"></el-image>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrap wrap-eight">
      <div class="content-bd">
        <div class="label">Ready to <span class="blue">get started?</span></div>
        <div class="desc">Focus on what you do best and let us handle the rest.</div>
        <div class="btn-box">
          <el-button class="grad-btn">GET DEMO</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: '',
    data() {
      return {
        walletsList: [
          { img:'image-2.png' },
          { img:'image-3.png' },
          { img:'image-4.png' },
          { img:'image-5.png' },
          { img:'image-6.png' },
          { img:'image-7.png' },
          { img:'image-8.png' },
          { img:'image-9.png' },
          { img:'image-11.png' },
          { img:'image-12.png' },
          { img:'image-13.png' },
          { img:'image-14.png' }
        ],
        driveList: [
          {
            img: 'icon-1.png',
            label: 'Improve Checkout Experience',
            desc: 'Provide a quick, simple, and contactless checkout experience for customers around the world.'
          },
          {
            img: 'icon-2.png',
            label: 'Increase Customer Loyalty',
            desc: 'Connect and engage with customers through social platforms for additional revenue opportunities.'
          },
          {
            img: 'icon-3.png',
            label: 'Improve Operational Efficiencies',
            desc: 'Provide a quick, simple, and contactless checkout experience for customers around the world.'
          },
          {
            img: 'icon-4.png',
            label: 'Increase Conversion',
            desc: 'No longer turning away customers who want to pay with mobile wallets.'
          },
          {
            img: 'icon-5.png',
            label: 'Eliminate Fraudulences',
            desc: 'Digital wallets acceptance safeguards your business from fraud and chargebacks.'
          },
          {
            img: 'icon-6.png',
            label: 'Decrease Fees',
            desc: 'Yuansfer offers the lowest transaction fees in the market.'
          }
        ],
        securityList: [
          {
            img: 'security-1.png',
            label: 'Secured',
            desc: 'Transactions are tokenized, encrypted, and verified to ensure security'
          },
          {
            img: 'security-2.png',
            label: 'Compliant',
            desc: 'Built-In risk and prevention system that actively monitors for KYC, AML, CTF, and sanctions'
          },
          {
            img: 'security-3.png',
            label: 'Protected',
            desc: 'No sensitive customer information is stored or transmitted'
          }
        ],
        businessList: [
          [
            {
              img: 'business-1.png'
            },
            {
              img: 'business-2.png'
            },
            {
              img: 'business-3.png'
            },
            {
              img: 'business-4.png'
            },
            {
              img: 'business-5.png'
            }
          ],
          [
            {
              img: 'business-2.png'
            },
            {
              img: 'business-1.png'
            },
            {
              img: 'business-5.png'
            },
            {
              img: 'business-4.png'
            },
            {
              img: 'business-3.png'
            }
          ],
          [
            {
              img: 'business-3.png'
            },
            {
              img: 'business-4.png'
            },
            {
              img: 'business-5.png'
            }
          ]
        ]
      }
    },
    created() {

    },
    methods: {
      carouselToggle(type) {
        if(type>0){
          this.$refs['carousel'].prev()
        } else {
          this.$refs['carousel'].next()
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .container{
    .blue{
      color: #47A2FF;
    }
    .wrap-one{
      padding: 0 163px;
      display: flex;
      .content-left{
        flex: 0 0 443px;
        padding-top: 182px;
        .content-hd{
          font-weight: bold;
          font-size: 70px;
          line-height: 108%;
          color: #16181B;
        }
        .content-bd{
          padding: 18px 0 30px;
          font-size: 18px;
          line-height: 140%;
          color: #16181B;
          opacity: 0.6;
        }
        .content-ft{

        }
      }
      .content-right{
        padding-top: 100px;
      }
    }
    .wrap-two{
      padding: 281px 277px 276px;
      background: url("./img/rectangle.png") no-repeat 0 0/100% 100%;
      .content-hd{
        padding-bottom: 50px;
        font-weight: bold;
        font-size: 40px;
        line-height: 108%;
        text-align: center;
        color: #FFFFFF;
      }
      .content-bd{
        .wallets-list{
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
          .wallets-item{
            margin-bottom: 10px;
            flex: 0 0 24%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 108px;
            background: #FFFFFF;
            box-shadow: 0 0.8px 1.5px rgba(101, 117, 131, 0.31);
            border-radius: 20px;
          }
        }
      }
    }
    .wrap-three{
      padding: 116px 185px 0;
      .content-hd{
        font-weight: bold;
        font-size: 40px;
        line-height: 108%;
        text-align: center;
        color: #16181B;
      }
      .content-bd{
        .drive-list{
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          .drive-item{
            flex: 0 0 33.33%;
            padding: 50px 38px 40px;
            box-sizing: border-box;
            &:not(:nth-child(3n)){
              border-right: 2px solid #F5F5F5;
            }
            &:nth-child(-n+3){
              border-bottom: 2px solid #F5F5F5;
            }
            .img{
              height: 51px;
            }
            .label{
              padding: 22px 0 10px;
              width: 95%;
              font-weight: bold;
              font-size: 22px;
              line-height: 130%;color: #16181B;
            }
            .desc{
              font-size: 16px;
              line-height: 140%;
              color: #73777D;
            }
          }
        }
      }
    }
    .wrap-four{
      display: flex;
      padding: 160px 165px 0;
      .content-hd{
        flex: 0 0 350px;
        padding-right: 15px;
        .label{
          font-weight: bold;
          font-size: 40px;
          line-height: 130%;
          color: #16181B;
        }
        .desc{
          padding-bottom: 35px;
          font-size: 16px;
          line-height: 140%;
          color: #73777D;
        }
        .btn-box{
          .btn{
            /*color: linear-gradient(275.7deg, #47A2FF -7.22%, #374BFF 108.91%);
            border-color: linear-gradient(275.7deg, #47A2FF -7.22%, #374BFF 108.91%);*/
            background-image: linear-gradient(275.7deg, #47A2FF -7.22%, #374BFF 108.91%);
            -webkit-background-clip: text;
            color: transparent;
            border-color: transparent;
            border-image: linear-gradient(275.7deg, #47A2FF -7.22%, #374BFF 108.91%);
            border-image-slice: 1;
            border-radius: 0;
            /deep/.el-icon-arrow-right{
              color: #374BFF;
              vertical-align: middle;
            }
          }
        }
      }
      .content-bd{
        .security-list{
          display: flex;
          .security-item{
            flex: 1;
            padding: 46px 15px 55px;
            background: #2D363E;
            border-radius: 20px;
            text-align: center;
            color: #ffffff;
            &:not(:last-child){
              margin-right: 10px;
            }
            .img{
              margin-bottom: 30px;
            }
            .label{
              font-weight: 600;
              font-size: 22px;
              line-height: 130%;
            }
            .desc{
              font-size: 14px;
              line-height: 140%;
            }
          }
        }
      }
    }
    .wrap-five{
      margin-top: 135px;
      padding: 162px 165px 0;
      background: url("./img/rectangle-55.png") no-repeat 0 0/100% 100%;
      .content-hd{
        margin-bottom: 52px;
        font-size: 40px;
        line-height: 108%;
        text-align: center;
        color: #FFFFFF;
      }
      .content-bd{
        position: relative;
        .el-carousel__arrow{
          font-size: 20px;
          background: #F1F6FA;
          color: #47A2FF;
          &.el-carousel__arrow--left{
            left: -18px;
          }
          &.el-carousel__arrow--right{
            right: -18px;
          }
        }
        .business-carousel{
          background: #FFFFFF;
          .item{
            display: flex;
            align-items: center;
            .img-box{
              flex: 0 0 20%;
              text-align: center;
              .img{

              }
            }
          }
        }
      }
    }
    .wrap-six{
      padding: 104px 165px 0;
      .content-hd{
        font-weight: bold;
        font-size: 40px;
        line-height: 108%;
        text-align: center;
        color: #16181B;
      }
      .content-bd{
        margin-top: 70px;
        .integrate-list{
          display: flex;
          background: #2D363E;
          border-radius: 20px;
          .integrate-item{
            padding: 70px 124px 65px;
            box-sizing: border-box;
            flex: 1;
            text-align: center;
            color: #FFFFFF;
            &:not(:last-child){
              border-right: 2px solid #424a53;
            }
            .img{
              margin-bottom: 22px;
            }
            .label{
              margin-bottom: 10px;
              font-weight: 600;
              font-size: 22px;
              line-height: 130%;
            }
            .desc{
              margin-bottom: 35px;
              font-size: 16px;
              line-height: 140%;
            }
            .btn-box{

            }
          }
        }
      }
    }
    .wrap-seven{
      padding: 210px 165px 0;
      display: flex;
      color: #16181B;
      .content-hd{
        flex: 0 0 242px;
        font-weight: bold;
        font-size: 40px;
        line-height: 130%;
      }
      .content-bd{
        margin-left: 135px;
        padding-right: 20px;
        .hd{
          font-size: 29px;
          line-height: 140%;
        }
        .bd{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 45px;
          .left{
            .label{
              font-weight: 600;
              font-size: 18px;
              line-height: 140%;
            }
            .desc{
              font-weight: 300;
              font-size: 16px;
              line-height: 140%;
            }
          }
          .right{

          }
        }
      }
    }
    .wrap-eight{
      padding: 200px 165px 85px;
      .content-bd{
        padding: 125px 0 140px;
        color: #16181B;
        background: url("../../assets/map-bg.png") no-repeat 0 0/100% 100%;
        .label{
          font-weight: bold;
          font-size: 40px;
          line-height: 108%;
          text-align: center;
        }
        .desc{
          padding-top: 10px;
          font-size: 16px;
          line-height: 140%;
          text-align: center;
          color: #73777D
        }
        .btn-box{
          padding-top: 35px;
          text-align: center;
        }
      }
    }
  }
</style>
