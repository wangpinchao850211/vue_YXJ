<template>
  <transition name="slide"
    @enter="enter"
    @after-enter="afterEnter"
    @leave="leave"
    @after-leave="afterLeave">
  <div class="module">
    <el-row class="login-com">
      <div class="wpcLoginForm">
        <el-form class="login-form" v-show="showLogin" :model="ruleData" ref="loginForm" :rules="rules">
          <h4 class="title">web开发栈</h4>
          <el-form-item prop="username">
              <el-input type="text" v-model="ruleData.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
              <el-input type="password" v-model="ruleData.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <div style="overflow: hidden">
              <el-checkbox v-model="ruleData.checked" style="color: beige;">记住我</el-checkbox>
              <span class="gohome" @click="gohome">返回首页</span>
            </div>
          </el-form-item>
          <el-form-item>
              <el-button type="primary" class="login-btn" @click="loginIn('loginForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-row>
  </div>
  </transition>
</template>
<script>
import wpcCryptoJS from 'crypto-js'
import { mapState } from 'vuex'
import fetch from 'utils/fetch'

let Qs = require('qs')
export default {
  data () {
    return {
      pageContent: '首页',
      showLogin: true,
      ruleData: {
        username: 'wangqihuan',
        password: 'ppp909090',
        checked: false
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  props: {
    content: {
      type: Array,
      default: null
    }
  },
  components: {
  },
  computed: {
    ...mapState(['remeberValueLogin'])
  },
  created () {
    console.log(this.content) // 从每个知识模块传来的内容
  },
  mounted () {
    this.$store.commit('GET_REMEBERLOGIN_VALUE')
    if (this.remeberValueLogin != null && this.remeberValueLogin !== 'null') {
      let remeberParams = JSON.parse(this.remeberValueLogin)
      let usernameBytes = wpcCryptoJS.AES.decrypt(remeberParams.username.toString(), 'secret key 123')
      let passwordBytes = wpcCryptoJS.AES.decrypt(remeberParams.password.toString(), 'secret key 123')
      this.ruleData.username = usernameBytes.toString(wpcCryptoJS.enc.Utf8)
      this.ruleData.password = passwordBytes.toString(wpcCryptoJS.enc.Utf8)
      this.ruleData.checked = remeberParams.checked
    };
  },
  methods: {
    enter () {},
    afterEnter () {},
    leave () {},
    afterLeave () {},
    loginIn (form) {
      console.log(form)
      console.log(Qs.stringify(this.ruleData))
      this.$refs[form].validate((valid) => {
        if (valid) {
          fetch({
            url: '/login',
            method: 'post',
            data: Qs.stringify(this.ruleData)
          }).then((res) => {
            console.log(res)
            const { status, data } = res.data.result
            if (status === 1) {
              console.log(this.content[0].title)
              this.$router.push({path: '/webContent', query: {name: this.content[0].title}}) // 将那个知识模块的title路由传入
              console.log(data)
              if (this.ruleData.checked) { // 记住我
                let rememberValue = `{
                                        "username": "${wpcCryptoJS.AES.encrypt(this.ruleData.username, 'secret key 123')}",
                                        "password": "${wpcCryptoJS.AES.encrypt(this.ruleData.password, 'secret key 123')}",
                                        "checked": ${this.ruleData.checked}
                                    }`
                console.log(rememberValue)
                this.$store.commit('SET_REMEBERLOGIN_VALUE', rememberValue)// 记住用户和密码
              } else {
                this.$store.commit('REMOVE_REMEBERLOGIN_VALUE')// 删除用户和密码
              }
            } else {
              throw new Error('用户名和密码错误')
            }
          })
        } else {
          return false
        }
      })
    },
    gohome () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.module{
  width: 100%;
  height: 100%;
  /* background-color: rgba(46, 62, 70, 0.7); */
  background-image: url('../static/clock.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
/* .login-com{
} */
.wpcLoginForm{
  width: 340px;
  height: auto;
  margin-left: 54%;
  margin-top: 16vh;
}
.login-form{
  width: 100%;
  height: auto;
  background-color: rgba(100, 129, 131, 0.5);
  border-radius: 8px;
  box-shadow: 0 0 10px #999;
  padding: 30px;
  z-index: 5;
}
.title{
  color: bisque;
  line-height: 50px;
}
.gohome {
  width: auto;
  margin-right: 5px;
  cursor: pointer;
  float: right;
}
.login-btn{
  background-color: darkslategrey;
  opacity: 0.6;
}
.slide-enter-active, .slide-leave-active{
  transition : all 0.8s cubic-bezier(0.82,0,0.05,1)
}
.slide-enter, .slide-leave-to{
  transform : translate3d(0, 100% ,0)
}
</style>
