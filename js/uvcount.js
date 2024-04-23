// 初始化访问量对象，包含总访问量和每日访问量
let visitCount = {
    total: 0,
    daily: 0
};

// 检查本地存储中是否有访问量数据
if (localStorage.getItem('visitCount')) {
    visitCount = JSON.parse(localStorage.getItem('visitCount'));

    // 如果是新的一天，重置每日访问量
    if (new Date().toDateString() !== new Date(Date.now()).toDateString()) {
        visitCount.daily = 0;
    }
}

// 增加总访问量和每日访问量
visitCount.total++;
visitCount.daily++;

// 存储访问量数据到本地存储
localStorage.setItem('visitCount', JSON.stringify(visitCount));

// 显示访问量
function displayVisitCount() {
    document.getElementById('totalVisits').textContent = visitCount.total;
    document.getElementById('dailyVisits').textContent = visitCount.daily;
    // alert("总访问量:"+visitCount.total+"今日访问量:"+visitCount.daily)
}

