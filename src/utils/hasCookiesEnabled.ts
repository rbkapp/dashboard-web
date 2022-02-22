const hasCookiesEnabled = ()=>{
  //localstorage
  let hasCookies = localStorage.getItem('cookies');
  //cookies
  let name = "cookies"
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  
  if (match) {
    if (match[2] === "1" && hasCookies === "1"){
      return true
    } else {
      return false
    }
  }
}
export default hasCookiesEnabled