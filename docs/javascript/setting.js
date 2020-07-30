function setCookie(cname, cvalue) {//設置cookie
  var d = new Date();
    d.setTime(d.getTime() + 31557600000);
  var expires = "expires="+ d.toUTCString();
    document.cookie ='"'+ cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(cname + "=" + cvalue + ";" + expires + ';path=/"')
    console.log(document.cookie)
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}