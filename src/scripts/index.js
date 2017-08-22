// 应该有window.onload 类似的dom ready

document.getElementById('result').getElementsByTagName('li').onclick = function (e) {
	var targe = e.target;
	document.getElementById('li').value = '我是第' + i + '个结果: ' + target.innerText;
}