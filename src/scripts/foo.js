document.getElementById('search').oninput = function (e) {
	// 模拟ajax返回结果
	setTimeout(function () {
		var resultData = window.suggestData;
		document.getElementById('result').innerHTML = '';
		for (var i = 0; i < resultData.length; i ++) {
			var liDom = document.createElement('li');
			liDom.setAttribute('class', 'result-item');
			liDom.setAttribute('data-index', i);
			liDom.innerHTML = resultData[i].value;
			document.getElementById('result').appendChild(liDom);
		}
	}, 1000)
};
