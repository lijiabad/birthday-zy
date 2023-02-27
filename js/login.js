$('#login-button').click(function (event) {
  var userName = document.getElementById("userName").value;
  var pwd = document.getElementById("pwd").value;
  //修改密码请改此处
  if (userName == "张莹" && pwd == "19990218") {
    event.preventDefault();
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
    requestFullScreen();
    setTimeout(function () {
      location.href = "BirthdayCake.html";
    }, 2000);
  }
  else if (userName == "1" && pwd == "1") {
    event.preventDefault();
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
    requestFullScreen();
    setTimeout(function () {
      location.href = "BirthdayCake.html";
    }, 2000);
  }
  else {
    alert("密码错误");
  }
  // handleLogin();
});

//新增 js变量获取函数
function handleLogin() {
  var e = $("#userName").val();
  var p = $("#password").val();

  if(e != "") {
      $.ajax({ 
               type: 'POST', 
               url: 'http://localhost/BirthdayCake.html', 
               crossDomain: true,
               data:  {username: e},
               dataType: 'json', 
               async: false,

               success: function (response){ 
                  if (response.success) { 
                      $.mobile.changePage("#loginTest");
                   } 
                  else {
                      alert("Your login failed");
                  }
               },
               error: function(error){
                  alert('Could not connect to the database' + error);
               }
             }); 
  }
  else {
      alert("You must enter username and password");
  }
  return false;
}

function requestFullScreen (element) {
  var element = document.documentElement;
  var requestMethod = element.requestFullScreen || //W3C
    element.webkitRequestFullScreen || //Chrome等
    element.mozRequestFullScreen || //FireFox
    element.msRequestFullScreen; //IE11
  if (requestMethod) {
    requestMethod.call(element);
  }
  else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}
