

var a = document.getElementById('a');
a.onclick = function () {//给对象绑定事件
    chrome.tabs.getSelected(null, function (tab) {//获取当前tab
        //向tab发送请求
        chrome.tabs.sendRequest(tab.id, { action: "GetBaiduKeyWord" }, function (response) {
            $("#ct").text(response.kw.kw);
			$("#input-system").val(response.systemList);
			$("#input-author").val(response.authorList);
        });
    });
}
document.getElementById('b').onclick = function () {
    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.sendRequest(tab.id, { action: "SubmitForm" }, function (response) {
            alert(response.kw.kw + "-JSON");
        });
    });
}