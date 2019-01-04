const ListRes = {
  status: 1,
  result: {
    css3: [
      {title: 'css3'},
      {title: '内容'}]
  }
}

export default {
  css3content: (req) => {
    const httpUrl = req.url
    const theIndex = httpUrl.indexOf('?')
    let a = httpUrl.substring(theIndex + 1, httpUrl.length)
    const thekeyIndex = a.indexOf('=')
    const theKey = a.substring(thekeyIndex + 1, a.length)
    // console.log(theKey)
    if (theKey === 'css3') {
      return ListRes
    }
  }
}
