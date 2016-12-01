 var lottery = {
     "lotteryinfo": [
         { "name": "009", "workId": "009" },
         { "name": "030", "workId": "030" },
         { "name": "058", "workId": "058" },
         { "name": "090", "workId": "090" },
         { "name": "091", "workId": "091" },
         { "name": "092", "workId": "092" },
         { "name": "114", "workId": "114" },
         { "name": "117", "workId": "117" },
         { "name": "122", "workId": "122" },
         { "name": "131", "workId": "131" },
         { "name": "142", "workId": "142" },
         { "name": "145", "workId": "145" },
         { "name": "173", "workId": "173" },
         { "name": "176", "workId": "176" },
         { "name": "182", "workId": "182" },
         { "name": "184", "workId": "184" },
         { "name": "186", "workId": "186" },
         { "name": "189", "workId": "189" },
         { "name": "191", "workId": "191" },
         { "name": "192", "workId": "192" },
         { "name": "194", "workId": "194" },
         { "name": "196", "workId": "196" },
         { "name": "197", "workId": "197" },
         { "name": "199", "workId": "199" },
         { "name": "202", "workId": "202" },
         { "name": "205", "workId": "205" },
         { "name": "207", "workId": "207" },
         { "name": "208", "workId": "208" },
         { "name": "209", "workId": "209" },
         { "name": "210", "workId": "210" },
         { "name": "211", "workId": "211" },
         { "name": "212", "workId": "212" },
         { "name": "214", "workId": "214" },
         { "name": "216", "workId": "216" },
         { "name": "217", "workId": "217" },
         { "name": "218", "workId": "218" },
         { "name": "220", "workId": "220" },
         { "name": "221", "workId": "221" },
         { "name": "222", "workId": "222" },
         { "name": "223", "workId": "223" },
         { "name": "224", "workId": "224" },
         { "name": "225", "workId": "225" },
         { "name": "226", "workId": "226" },
         { "name": "227", "workId": "227" },
         { "name": "229", "workId": "229" },
         { "name": "232", "workId": "232" },
         { "name": "233", "workId": "233" }
     ]
 };

 var lotteryinfo = lottery.lotteryinfo;

 var divMod;

 for (var i = 0; i < lotteryinfo.length; i++) {

     var lottery_info = lotteryinfo[i];
     var lotteryName = lottery_info.name;
     var workId = lottery_info.workId;

     divMod = document.createElement("div");
     // divMod.width = "120";
     // divMod.height = "200";
     // divMod.className = "transImg";


     var img = document.createElement("img");
     img.src = "pics.jpg";
     divMod.appendChild(img);
     var lotName = document.createElement('p');
     lotName.innerText = "姓名:" + lotteryName;
     divMod.appendChild(lotName);
     var workNum = document.createElement('p');
     workNum.innerText = "工号:107401" + workId;
     divMod.appendChild(workNum);
     document.getElementById('lotteryArea').appendChild(divMod);



 }

 var runImgLoop = document.getElementById("lotteryArea").getElementsByTagName("div");


 // //给照片加id
 // for (var i = 0; i < runImgLoop.length; i++) {
 //     // document.write(runImgLoop[i].name);
 //     runImgLoop[i].id = "img" + i;
 //     var imgIds = new Array();
 //     imgIds[i] = "img" + i;


 // }

 //跑马灯循环
 var btnState = false;
 //是否在运行跑马灯
 var isRun = true;

 var imgState = false;

 function getRandom() {

     var eArr = new Array();
     var Num = Math.random() * lotteryinfo.length + 1;
     luckNum = Math.floor(Num);

     return luckNum;
 };


 function setRandLott() {
     var luckyNum = getRandom();
     // var eArr = new Array();
     document.getElementById('img' + luckNum).className = "transImg";
 }
 var timer

 function getLoop() {

     // document.getElementById('img'+luckNum).style.border = "3px solid #595959";
     timer = setInterval(function() {
         //每隔一秒产生一个随机数 
         setRandLott();

     }, 200);

 }

 function stopLoop() {

     clearInterval(timer);
 }
 //抽奖的函数;
 function run() {

     if (isRun) {
         document.getElementById("startBtn").innerHTML = "停止抽奖";
         getLoop();
         isRun = false;
     } else {
         document.getElementById("startBtn").innerHTML = "开始抽奖";

         stopLoop();
         // setRandLott()；
         document.getElementById('img' + getRandom()).style.border = "10px solid #f60";
         var lottImg = document.getElementById('img' + getRandom()).getElementsByTagName('img');
         lottImg.width = "240";
         lottImg.height = "400";

         document.getElementById('congword').innerHTML = '恭喜获奖';
         isRun = true;
     }
     //没隔 500ms 产生一个新的随机数     
 }

 // document.write(luckNum);
 // var num = 0;
 //  var imgs = 'img';
 //  function run2()
 //  {
 //      //获取第一个img
 //      imgs= document.getElementById(imgs+num);
 //      // document.write(imgs);
 //      imgs.className += 'transImg';
 //      num++;
 //      if (num > lotteryinfo.length) {
 //          num = 0;
 //      }
 //      setInterval(function(){
 //          imgs.className = '';

 //      },500)
 //  }

 //  var timer = setInterval(run,500); 

 //重置数据
 function reset() {
     /* Act on the event */
     location.reload();

 }

 document.getElementById("startBtn").onclick = run;

 document.getElementById("reset").onclick = reset;


 //跑马灯暂停状态
 var pause = false;

 //程序是否开始运行
 var isStart = false;

 // 频率
 var freq = 50;

 var runColor = "#98ff98";


 var keyStatus = false;

 $("body").keyup(function(e) {
     keyStatus = false;
 });

 $("body").keydown(function(e) {
     // 32 spacebar
     if (e.keyCode == 32 || e.keyCode == 65) {
         isStart = !isStart;

         run();

         return false
     }
 });

 function startApp() {
     runMusic.play();

     var rand = 0;

     tx = setInterval(function() {
         if (isRun) {}
     })
 }