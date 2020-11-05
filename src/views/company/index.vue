<template>
  <div class="container">
    <div class="content-wrap wrap-one">
      <div class="content-left">
        <div class="content-hd">
          Commerce <span class="blue">Without</span> Borders
        </div>
        <div class="content-bd">
          We started Yuansfer with a mission to drive the businesses' growth by connecting them with consumers globally through better commerce infrastructures        </div>
        <div class="content-ft">
          <el-button class="grad-btn">GET DEMO<i class="el-icon-right el-icon--right"></i></el-button>
        </div>
      </div>
      <div class="content-right">
        <div class="img-box">
          <el-image :src="require('./img/y_ill-06-2.png')"></el-image>
        </div>
      </div>
    </div>
    <div class="content-wrap wrap-two">
      <div class="content-hd">
        <el-image :src="require('./img/y_ill-09-1.png')"></el-image>
        <!--<div class="group-69">-->
          <!--<el-image :src="require('./img/group-69.png')"></el-image>-->
        <!--</div>-->
        <!--<div class="group-70">-->
          <!--<el-image :src="require('./img/group-70.png')"></el-image>-->
        <!--</div>-->
      </div>
      <div class="content-bd">
        <div class="label">
          About <span class="blue">Yuansfer</span>
        </div>
        <div class="desc">
          Founded in 2017, Yuansfer is a leading alternative payment platform that helps businesses reach consumers around the world. Thousands of American businesses are already using Yuansfer to accept and make payments.
        </div>
      </div>
    </div>
    <div class="content-wrap wrap-three">
      <div class="content-hd">
        Our <span class="blue">Team</span>
      </div>
      <div class="content-bd">
        <ul class="team-list">
          <template v-for="item in teamList">
            <li class="team-item" :key="item.img">
              <div class="item-box">
                <div class="img">
                  <el-image class="avatar-img" :src="require('./img/' + item.img)"></el-image>
                </div>
                <div class="label">{{item.name}}</div>
                <div class="desc">{{item.job}}</div>
                <div class="link">
                  <a class="link-a" :href="item.link">
                    <span class="text">Linkedin</span>
                    <el-image class="arrow-icon" :src="require('./img/arrow-right.png')"></el-image>
                  </a>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="content-wrap wrap-four">
      <div class="content-hd">Investors</div>
      <div class="content-bd">
        <div class="left">
          We're lucky to be supported by an impressive group of advisors and investors who also believe in our mission of building an improved global commerce infrastructure.
        </div>
        <div class="right">
          <div class="item">
            <el-image :src="require('./img/image-27.png')"></el-image>
          </div>
          <div class="item">
            <el-image :src="require('./img/image-28.png')"></el-image>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrap wrap-five">
      <div class="content-hd">
        <div class="img-box">
          <el-image :src="require('./img/group-pack.png')"></el-image>
        </div>
        <div class="content-box">
          <div class="label">Join the Team</div>
          <div class="desc">Help businesses grow beyond their borders.</div>
        </div>
      </div>
      <div class="content-bd">
        <el-button class="grad-btn">explore open roles</el-button>
      </div>
    </div>
    <div class="content-wrap wrap-six">
      <div class="content-bd">
        <div class="label">Have a question about <span class="blue">Yuansfer's payment</span> platform?</div>
        <div class="desc">Do not hesitate to contact us</div>
        <div class="btn-box">
          <el-button class="grad-btn">CONTACT US</el-button>
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
        teamList: [
          {
            img: 'team-001.png',
            name: 'Mason Lin',
            job: 'Founder and CEO',
            link: ''
          },
          {
            img: 'team-002.png',
            name: 'Jerome d’Orchimont',
            job: 'CRO',
            link: ''
          },
          {
            img: 'team-003.png',
            name: 'Kai Zhou',
            job: 'CTO',
            link: ''
          },
          {
            img: 'team-004.png',
            name: 'Amy Liu',
            job: 'Business Developer',
            link: ''
          },
          {
            img: 'team-005.png',
            name: 'Ashley Wang',
            job: 'Operations Support',
            link: ''
          },
          {
            img: 'team-006.png',
            name: 'Xi Lin',
            job: 'Operations Manager',
            link: ''
          },
          {
            img: 'team-007.png',
            name: 'Frank Liu',
            job: 'Head of Integration',
            link: ''
          },
          {
            img: 'team-008.png',
            name: 'Luca Veneziano',
            job: 'Solution Engineer',
            link: ''
          },
          {
            img: 'team-009.png',
            name: 'Fly Zhu',
            job: 'Engineer',
            link: ''
          },
          {
            img: 'team-010.png',
            name: 'Zewen Liu',
            job: 'Engineer',
            link: ''
          },
          {
            img: 'team-011.png',
            name: 'Guobin Yu',
            job: 'Engineer',
            link: ''
          },
          {
            img: 'team-012.png',
            name: 'Jiaxing Dong',
            job: 'Engineer',
            link: ''
          },
          {
            img: 'team-013.png',
            name: 'Graziano de Boni',
            job: 'Advisor',
            link: ''
          },
          {
            img: 'team-014.png',
            name: 'Tom Demeri',
            job: 'Advisor',
            link: ''
          },
          {
            img: 'team-015.png',
            name: 'Joe Dela Cruz',
            job: 'Advisor',
            link: ''
          },
          {
            img: 'team-016.png',
            name: 'Doug Weich',
            job: 'Advisor',
            link: ''
          }
        ]
      }
    },
    created() {

    },
    methods: {
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
      margin-top: 250px;
      padding: 0 232px 83px;
      display: flex;
      .content-hd{
        margin-right: 95px;
        display: flex;
        align-items: center;
        .group-69{
          margin-right: -30px;
          width: 188px;
        }
        .group-70{
          width: 252px;
        }
      }
      .content-bd{
        padding-top: 130px;
        .label{
          font-weight: bold;
          font-size: 40px;
          line-height: 130%;
        }
        .desc{
          font-size: 16px;
          line-height: 140%;
        }
      }
    }
    .wrap-three{
      padding: 285px 185px 140px;
      background: url("./img/team-bg.png") no-repeat 0 0/100% 100%;
      .content-hd{
        font-weight: bold;
        font-size: 40px;
        line-height: 108%;
        text-align: center;
        color: #16181B;
      }
      .content-bd{
        padding-top: 80px;
        .team-list{
          display: flex;
          flex-wrap: wrap;
          .team-item{
            margin-bottom: 60px;
            flex: 0 0 25%;
            display: flex;
            justify-content: center;
            .item-box{
              .img{
                width: 220px;
                height: 220px;
                .avatar-img{
                  border-radius: 10px;
                }
              }
              .label{
                margin-top: 15px;
                font-weight: bold;
                font-size: 22px;
                line-height: 130%;
                color: #16181B;
              }
              .desc{
                margin-top: 10px;
                font-size: 16px;
                line-height: 140%;
                color: #73777D;
              }
              .link{
                margin-top: 10px;
                .link-a{
                  font-weight: 500;
                  font-size: 18px;
                  line-height: 140%;
                  color: #47A2FF;
                  text-decoration: none;
                  .text{
                    vertical-align: middle;
                  }
                  .arrow-icon{
                    margin-left: 5px;
                    vertical-align: middle;
                    /deep/.el-image__inner{
                      vertical-align: middle;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .wrap-four{
      padding: 160px 165px 0;
      .content-hd{
        font-weight: bold;
        font-size: 40px;
        line-height: 108%;
        text-align: center;
        color: #16181B;
      }
      .content-bd{
        margin-top: 48px;
        display: flex;
        .left{
          margin-right: 68px;
          padding-top: 96px;
          flex: 0 0 502px;
          font-size: 25px;
          line-height: 140%;
          color: #16181B;
        }
        .right{
          flex: 0 0 540px;
          justify-content: center;
          background: #F1F6FA;
          border: 1px solid #C8E7FB;
          box-sizing: border-box;
          border-radius: 20px;
          .item{
            height: 164px;
            display: flex;
            justify-content: center;
            align-items: center;
            &:not(:last-child) {
              border-bottom: 1px solid #C8E7FB;
            }
          }
        }
      }
    }
    .wrap-five{
      margin: 165px 165px 0;
      padding: 10px;
      display: flex;
      background: #2D363E;
      border-radius: 20px;
      .content-hd{
        display: flex;
        color: #FFFFFF;
        .img-box{
          width: 200px;
        }
        .content-box{
          padding-top: 60px;
          .label{
            font-weight: bold;
            font-size: 40px;
            line-height: 108%;
          }
          .desc{
            font-size: 16px;
            line-height: 140%;
          }
        }
      }
      .content-bd{
        margin-left: 260px;
        display: flex;
        align-items: center;
      }
    }
    .wrap-six{
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
