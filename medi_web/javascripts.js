// 状态码
let intervalId = null;
let isRunning = false;

function generateRandomNumber() {  
    const randomNum1 = Math.floor(Math.random() * 100); // 0-99之间的随机数  
    const randomNum2 = Math.floor(Math.random() * 100);  
    document.getElementById('box1').textContent = `${randomNum1}`;  
    document.getElementById('box2').textContent = `${randomNum2}`;  
}

document.getElementById('bt').addEventListener('click', function() {  
    if (!isRunning) {  
        // 开始滚动随机数  
        intervalId = setInterval(generateRandomNumber, 60); // 每60毫秒更新一次  
        isRunning = true;  
        this.textContent = '结束抽题';  
    } else {  
        // 停止滚动随机数  
        clearInterval(intervalId);  
        isRunning = false;  
        this.textContent = '开始抽题';  
    }  
});