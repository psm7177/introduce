(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],[,,,,,function(e,t,a){},,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/myface.3e058ae1.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),c=a(6),r=a.n(c),o=(a(14),a(5),a(2)),i=a(7),m=a(8),s=a(3),d=["Home","About","Interest","Education"];var u=function(e){var t=Object(n.useState)(0),c=Object(o.a)(t,2),r=c[0],u=c[1],E=Object(n.useState)("none"),p=Object(o.a)(E,2),v=p[0],f=p[1],b=Object(n.useState)(!0),h=Object(o.a)(b,2),N=h[0],g=h[1];return l.a.createElement("div",{className:"App",onWheel:function(t){console.log(t.deltaY),N&&(t.deltaY<0?r>0&&(setTimeout((function(){return g(!0)}),300),u(r-1),g(!1)):t.deltaY>0&&r<e.children.length-1&&(setTimeout((function(){return g(!0)}),300),u(r+1),g(!1)))}},l.a.createElement("header",{className:"App-header"}),l.a.createElement("main",null,l.a.createElement("section",null,e.children[r]),l.a.createElement("aside",{className:"profile"},l.a.createElement("div",{className:"picture",style:{width:200,height:200,borderWidth:3,borderColor:"#FFF",borderRadius:300,overflow:"hidden"}},l.a.createElement("img",{style:{width:200,position:"relative",top:-20},src:a(15),alt:""})),l.a.createElement("div",{className:"wrap"},l.a.createElement("div",{className:"name"},"Park Sangmin"),l.a.createElement("div",{className:"menu"},d.map((function(e,t){return l.a.createElement("div",{onClick:function(){u(t)},className:r===t?"selected":"unselected"},e)}))),l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"row",onClick:function(){return function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),setTimeout((function(){return f("hide")}),2e3),f("popup")}("raspberry-pi@kakao.com")}},l.a.createElement(i.a,{size:25,color:"#FFF"}),l.a.createElement("span",{className:"content"},"raspberry-pi@kakao.com")),l.a.createElement("div",{className:"row",onClick:function(){window.open("https://github.com/psm7177")}},l.a.createElement(s.a,{size:25,color:"#FFF"}),l.a.createElement("span",{className:"content"},"psm7177")),l.a.createElement("div",{className:"row",onClick:function(){window.open("https://www.facebook.com/profile.php?id=100006275895805")}},l.a.createElement(m.a,{size:25,color:"#FFF"}),l.a.createElement("span",{className:"content"},"\ubc15\uc0c1\ubbfc")),l.a.createElement("div",{className:"row",onClick:function(){window.open("https://www.instagram.com/sangmin_coder")}},l.a.createElement(s.b,{size:25,color:"#FFF"}),l.a.createElement("span",{className:"content"},"sangmin_coder")))))),l.a.createElement("footer",{className:"alert"},l.a.createElement("div",{className:"content "+v},"copied 'raspberry-pi@kakao.com' to clipboard")))},E=function(){return l.a.createElement("div",{className:"Phrases appear"},l.a.createElement("div",{className:"IAMDEV"},l.a.createElement("div",{className:"row"},l.a.createElement("div",null,"I"),l.a.createElement("div",null),l.a.createElement("div",null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",null,"A"),l.a.createElement("div",null,"M"),l.a.createElement("div",null)),l.a.createElement("div",{className:"row"},l.a.createElement("div",null,"D"),l.a.createElement("div",null,"E"),l.a.createElement("div",null,"V"))),l.a.createElement("div",{className:"eloper"},l.a.createElement("div",null,l.a.createElement("div",{style:{flex:1}})),l.a.createElement("div",null,l.a.createElement("div",{style:{flex:1}})),l.a.createElement("div",null,"eloper")))},p=function(){return l.a.createElement("div",{className:"about appear"},l.a.createElement("div",{className:"title",style:{fontSize:80,fontWeight:"bold"}},"About"),l.a.createElement("div",{class:"content",style:{fontSize:50}},"Front-End",l.a.createElement("br",null),"Back-End",l.a.createElement("br",null),"React-Native",l.a.createElement("br",null),"Android Native",l.a.createElement("br",null),"Unity",l.a.createElement("br",null)))},v=function(){return l.a.createElement("div",{className:"about appear"},l.a.createElement("div",{className:"title",style:{fontSize:80,fontWeight:"bold"}},"Education"),l.a.createElement("div",{className:"categories",style:{fontSize:30}},"School",l.a.createElement("div",{class:"element"},l.a.createElement("div",{className:"year"},"2018.03 ~ 2020.12"),l.a.createElement("span",{className:"organization"},"Daejeon DongSan HighSchool ")),l.a.createElement("div",{class:"element"},l.a.createElement("div",{className:"year"},"2021.02 ~"),l.a.createElement("span",{className:"organization"},"Daegu Gyeongbuk Institute of Science and Technology "))),l.a.createElement("div",{style:{fontSize:80,fontWeight:"bold"}}))},f=function(){return l.a.createElement("div",{className:"about appear"},l.a.createElement("div",{className:"title",style:{fontSize:80,fontWeight:"bold"}},"Interest"),l.a.createElement("div",{style:{fontSize:50}},"Game",l.a.createElement("br",null),"Distributed Computing",l.a.createElement("br",null),"Vision",l.a.createElement("br",null),"Algorithm",l.a.createElement("br",null),"MCU for Artificial Intelligence",l.a.createElement("br",null)))};var b=function(){return l.a.createElement(u,null,[l.a.createElement(E,null),l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(v,null)])};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.de2bf62f.chunk.js.map