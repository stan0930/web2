// 定义变量和数据类型
let userName = "游客";
const siteName = "金华市旅游"; // 缺少等号，已添加

// 更新页面标题
function updateTitle() {
    document.title = `${userName} - ${siteName}`;
}

// 确保在DOM加载完成后添加事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 为餐饮美食链接添加点击事件，使其可以平滑滚动到餐饮美食区域
    const foodLink = document.querySelector('a[href="#food"]');
    if (foodLink) {
        foodLink.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认行为
            const foodSection = document.getElementById('food');
            if (foodSection) {
                foodSection.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到餐饮美食区域
            }
        });
    }
    
    // 为新闻动态链接添加点击事件，使其可以平滑滚动到新闻区域
    const newsLink = document.querySelector('a[href="#news"]');
    if (newsLink) {
        newsLink.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认行为
            const newsSection = document.getElementById('news');
            if (newsSection) {
                newsSection.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到新闻区域
            }
        });
    }

    // 为游玩圣地按钮添加点击事件，使其可以平滑滚动到主要景点区域
    const playAreaLink = document.querySelector('button:nth-child(1) > a');
    if (playAreaLink) {
        playAreaLink.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认行为
            const playAreaSection = document.querySelector('.content .left');
            if (playAreaSection) {
                playAreaSection.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到主要景点区域
            }
        });
    }

    // 为服务热线按钮添加点击事件，使其可以平滑滚动到页面底部
    const serviceHotlineLink = document.querySelector('button:nth-child(2) > a'); // 修改选择器以匹配正确的按钮
    if (serviceHotlineLink) {
        serviceHotlineLink.addEventListener('click', function(event) {
            event.preventDefault(); // 阻止默认行为
            const footer = document.querySelector('footer');
            if (footer) {
                footer.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到页面底部
            }
        });
    }
});

// 表单提交事件处理
function handleFormSubmit(event) {
    event.preventDefault(); // 阻止表单默认提交行为
    const form = document.getElementById('memberLoginForm');
    const username = form.querySelector('input[name="account"]').value;
    const password = form.querySelector('input[name="password"]').value;

    if (validateForm(username, password)) {
        alert(`欢迎您，${username}！`);
    } else {
        // 如果validateForm返回false，可以在这里添加错误处理逻辑
    }
}

// 页面加载完成后执行
function onPageLoad() {
    updateTitle();
    document.getElementById('memberLoginForm').addEventListener('submit', handleFormSubmit);
}

// DOMContentLoaded事件，确保DOM加载完成后执行脚本
document.addEventListener('DOMContentLoaded', onPageLoad);

// 表单验证函数
function validateForm(username, password) {
    const errors = [];
    if (username.length < 4) {
        errors.push('用户名至少需要4个字符。');
    }
    if (password.length < 6) {
        errors.push('密码至少需要6个字符。');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
    }
    return true;
}