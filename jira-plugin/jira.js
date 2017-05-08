function array_remove_repeat(a) { // 去重
			var r = [];
			for(var i = 0; i < a.length; i ++) {
				var flag = true;
				var temp = a[i];
				for(var j = 0; j < r.length; j ++) {
					if(temp === r[j]) {
						flag = false;
						break;
					}
				}
				if(flag) {
					r.push(temp);
				}
			}
			return r;
		}

		
    chrome.extension.onRequest.addListener(//监听扩展程序进程或内容脚本发送请求的请求
	
		

        function (request, sender, sendResponse) {
            if (request.action == "GetBaiduKeyWord") {
				ct="";
				//$("#gadget-11389 tbody tr")
				$(".dashboard-item-title:contains('过滤器结果: 当期发布功能')").parent().parent().first().find("tbody tr").each(function(){ 
					
						ct+=$(this).find("td.issuekey a").html()+" "+$(this).find("td.summary p a").html()+" "+$(this).find("td.customfield_12612 a").text()+"\r\n" ;
					
				}); 
				systemList = new Array();
				authorList = new Array();
				table=$(".dashboard-item-title:contains('过滤器结果: 当期发布功能')").parent().parent().first().find("tbody tr");
				table.find("td.components a.tinylink").each(function(){ 					
						systemList.push($(this).html());
					
				}); 
				table.find("td.customfield_12612 a.user-hover").each(function(){ 					
						authorList.push($(this).html());
					
				}); 
				systemList=array_remove_repeat(systemList);
				authorList=array_remove_repeat(authorList);
                sendResponse({ kw: { kw: ct },systemList:systemList,authorList:authorList });
            }

        }
    );