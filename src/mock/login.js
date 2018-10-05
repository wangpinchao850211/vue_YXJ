const UserRes = {
  result: {
    status: 1,
    data: {
      userName: 'wangqihuan',
      passWord: 'ppp909090'
    }
  }
}

export default {
  Logincontent: (req) => {
    console.log(req)
    const httpUrl = req.url
    // 由于是Qs安全传递，用户名密码加载成如下，需手动转换
    let param = '0=u&1=s&2=e&3=r&4=n&5=a&6=m&7=e&8=%3D&9=w&10=a&11=n&12=g&13=q&14=i&15=h&16=u&17=a&18=n&19=%26&20=p&21=a&22=s&23=s&24=w&25=o&26=r&27=d&28=%3D&29=p&30=p&31=p&32=9&33=0&34=9&35=0&36=9&37=0&38=%26&39=c&40=h&41=e&42=c&43=k&44=e&45=d&46=%3D&47=f&48=a&49=l&50=s&51=e&'
    const arr = param.split('&')
    let userName = ''
    let passWord = ''
    arr.forEach((i, index) => {
      if (index >= 9 && index < 19) {
        const uArr = i.split('=')
        userName += uArr[1]
      }
      if (index >= 29 && index < 38) {
        const pArr = i.split('=')
        passWord += pArr[1]
      }
    })
    console.log(userName)
    console.log(passWord)
    if (httpUrl === 'https://wpcWeb.test.wpc.net/api1/login') {
      if (userName === 'wangqihuan' && passWord === 'ppp909090') {
        return UserRes
      } else {
        UserRes.result.status = -1
        UserRes.result.data = {}
        return UserRes
      }
    }
  }
}
