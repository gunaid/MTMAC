function gchkmac(o){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&200==t.status&&Gunaid__CheckDMAC2(t.responseText,o)},t.open("GET","https://raw.githubusercontent.com/gunaid/MTMAC/main/MikrotikDuplicatedMAC",!0),t.send()}function Gunaid__CheckDMAC2(o,t){null==o|""==o|-1==o.indexOf(t)||(document.getElementById("Gunaid_Alert").innerHTML="<style>.modal{background-color:rgba(0,0,0,.8);width:100%;height:100vh;position:absolute;top:0;left:0;z-index:10;opacity:0;visibility:hidden;transition:all .5s}.modal__content{width:75%;background-color:#fff;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);padding:2em;border-radius:1em;opacity:0;visibility:hidden;transition:all .5s}#modal:target{opacity:1;visibility:visible}#modal:target .modal__content{opacity:1;visibility:visible}.modal__close{color:#fff;border-radius:.5em;padding:0 9px 0 9px;font-weight:700;text-decoration:auto;background-color:#000;font-size:2em;position:absolute;top:.5em}.modal__heading{color:#fff;margin-bottom:1em;border-radius:.5em;background-color:#8c1200;text-align:center;margin-left:64px;margin-top:-16px;padding:5px}.modal__paragraph{line-height:1.5em;text-align:center;font-weight:700}.modal-open{display:inline-block;color:#1e90ff;margin:2em}</style><div class='modal' id='modal'><div class='modal__content'><a href='#' class='modal__close'>&times;</a><h2 class='modal__heading'>تحذير بوجود خلل بهاتفك !!</h2><p class='modal__paragraph'>عزيزي المستخدم, يبدو أن هاتفك من ضمن الهواتف التي تعاني من ثغرة تشابة الماك مع هواتف أخرى وهذه المشكلة تتسبب في كثرة فصلك عن الشبكة وتضعف الأنترنت بهاتفك<br> لحل هذه المشكلة يتوجب عليك تغيير الماك ادرس عند أحد محلات برمجة الهواتف</p></div></div>",window.location.href="#modal")}
