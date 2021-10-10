// 封装 Ajax为公共函数：传入回调函数 success 和 fail
function myAjax(url, success, fail) {
    // 1、创建XMLHttpRequest对象
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        // 兼容IE5、IE6浏览器。不写也没关系
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    // 2、发送请求
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
    // 3、服务端响应
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = xmlhttp.responseText;
            console.log('数据返回成功：' + obj);
            success && success(xmlhttp.responseText);
        } else {
            // 这里的 && 符号，意思是：如果传了 fail 参数，就调用后面的 fail()；如果没传 fail 参数，就不调用后面的内容。因为 fail 参数不一定会传。
            fail && fail(new Error('接口请求失败'));
        }
    };
}

// 单次调用 ajax
myAjax('a.json', (res) => {
    console.log(res);
});

// 多次调用 ajax。接口请求顺序：a --> b --> c
myAjax('a.json', (res) => {
    console.log(res);
    myAjax('b.json', (res) => {
        console.log(res);
        myAjax('c.json', (res) => {
            console.log(res);
        });
    });
});