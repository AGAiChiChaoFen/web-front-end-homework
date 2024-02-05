var erweima=document.getElementsByClassName("erweima")[0];
var erweima1=document.getElementsByClassName("erweima1")[0];
var zhengmian=document.getElementsByClassName("email")[0];
var fanmian=document.getElementsByClassName("email_erweima")[0];

erweima.onclick=function(){
    fanmian.style.display="block";
    zhengmian.style.display="none";
}
erweima1.onclick=function(){
    fanmian.style.display="none";
    zhengmian.style.display="block";
}
var canvas = document.getElementById("captchaCanvas");
var ctx = canvas.getContext("2d");
var idname=document.getElementById("text1");
var password=document.getElementById("text2");

const user = {
    1: {
        name: 'user1',
        password:'1111'
    },
    2: {
        name: 'user2',
        password:'2222'
    },
    3: {
        name: 'user3',
        password:'3333'
    },
    4: {
        name: 'user4',
        password:'4444'
    },
    5: {
        name: 'user5',
        password:'5555'
    },
};

// 生成随机验证码
function generateCaptcha() {
    // 清除Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制背景图案
    drawBackground();

    var currentCaptcha = generateRandomCaptcha();
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(currentCaptcha, 40, 40);

    // 存储生成的验证码以便检查
    canvas.dataset.captcha = currentCaptcha;
}

// 绘制背景图案
function drawBackground() {
    for (var i = 0; i < 100; i++) {
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = getRandomColor();
        ctx.fill();
    }
}

// 生成一个随机的4位数验证码
function generateRandomCaptcha() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var captcha = "";
    for (var i = 0; i < 4; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        captcha += characters.charAt(randomIndex);
    }
    return captcha;
}

// 生成随机颜色
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 检查验证码是否正确
function checkCaptcha() {
    var input = document.getElementById("captchaInput").value;
    var currentCaptcha = canvas.dataset.captcha;

    if (input === currentCaptcha) {
        var username = idname.value; // 获取用户名输入框的值
        var userpassword = password.value; // 获取密码输入框的值
        
        var userFound = false;

        for (var userId in user) {
            if (user.hasOwnProperty(userId)) {
                var userData = user[userId];
                if (userData.name === username && userData.password === userpassword) {
                    userFound = true;
                    alert("登录成功");
                    break;
                }
            }
        }

        if (!userFound) {
            alert("用户名或密码不正确!!!");
        }

    } else {
        alert("验证码不正确，请重试。");
        generateCaptcha();
    }
}



// 初始生成验证码
generateCaptcha();