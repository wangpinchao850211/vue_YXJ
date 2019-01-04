const ListRes = {
  status: 1,
  result: {
    html5: [
      {title: 'html5'},
      {title: '内容'}]
  }
}

export default {
  html5content: (req) => {
    const httpUrl = req.url
    const theIndex = httpUrl.indexOf('?')
    let a = httpUrl.substring(theIndex + 1, httpUrl.length)
    const thekeyIndex = a.indexOf('=')
    const theKey = a.substring(thekeyIndex + 1, a.length)
    // console.log(theKey)
    if (theKey === 'html5') {
      return ListRes
    }
  }
}
