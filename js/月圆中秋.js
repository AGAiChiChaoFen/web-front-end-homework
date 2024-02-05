
         //预加载,等页面加载完毕后，再执行脚本
         window.onload = function () {
          
             var num = document.getElementsByTagName("img")[0];
             //这里虽然只有一个img标签，但是num变量的结果依然是一个数组
             
             //定义图像地址
             var shuzu = ["img/picture1.png", "img/picture2.png","img/picture3.png" , "img/picture4.png", "img/picture5.png","img/picture6.png","img/picture7.png","img/picture8.png","img/picture9.png","img/picture10.png", ];
 
             //获取按钮
             var prev = document.getElementById("pre");
             var next = document.getElementById("next");
             var index = 0;
             
             //图片描述
             var pdesc = document.getElementById("desc");//查找一个id名称为desc的元素对象
             pdesc.innerHTML = "一共" + shuzu.length + "张图片" + ",当前是第" + (index + 1) + "张";
             //注意此处前面是字符串的拼接，实现加法需要用到括号,默认显示第一张图片的时候，index是0
             
             //点击切换图片（分为上一张和下一张）
             prev.onclick = function () {
                 index--;
                 //此处让它循环，点击上一张，表示数组的元素下标在减小，当index<0时，也就表示图片正在往下切换，每切换一张，数组就减一，
                 if (index < 0)
                     index = shuzu.length - 1;
                 num.src = shuzu[index];
                 pdesc.innerHTML = "一共" + shuzu.length + "张图片" + ",当前是第" + (index + 1) + "张";//注意此处前面是字符串的拼接，实现加法需要用到括号
             }
			//点击下一张，则index加一，当加到数组的总长度，也就是图片总数时，index恢复默认值
             next.onclick = function () {
                 index++;
                 if (index > shuzu.length - 1 )
                     index = 0;
                 num.src = shuzu[index];
                 //innerHTML用于获取起始的html标签，onclick 事件会在元素被点击时发生。
                 pdesc.innerHTML = "一共" + shuzu.length + "张图片" + ",当前是第" + (index + 1) + "张";//注意此处前面是字符串的拼接，实现加法需要用到括号
             }
            }
 