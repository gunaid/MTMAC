function gchkmac(o){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&200==t.status&&Gunaid__CheckDMAC2(t.responseText,o)},t.open("GET","https://raw.githubusercontent.com/gunaid/MTMAC/main/MikrotikDuplicatedMAC",!0),t.send()}function Gunaid__CheckDMAC2(o,t){null==o|""==o|-1==o.indexOf(t)||(document.getElementById("Gunaid_Alert").innerHTML="<link rel='stylesheet' href='https://raw.githubusercontent.com/gunaid/MTMAC/main/amaan_alert.css'><div class='modal' id='modal'><div class='modal__content'><a href='#' class='modal__close'>&times;</a><h2 class='modal__heading'>تحذير بوجود خلل بهاتفك !!</h2><p class='modal__paragraph'>عزيزي المستخدم, يبدو أن هاتفك من ضمن الهواتف التي تعاني من ثغرة تشابة الماك مع هواتف أخرى وهذه المشكلة تتسبب في كثرة فصلك عن الشبكة وتضعف الأنترنت بهاتفك<br> لحل هذه المشكلة يتوجب عليك تغيير الماك ادرس عند أحد محلات برمجة الهواتف</p></div></div>",window.location.href="#modal")}
