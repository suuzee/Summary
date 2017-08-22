# Summary
Summary

## 深克隆浅克隆
1. 如何理解深克隆浅克隆？
2. 怎样实现一个深克隆浅克隆？
```javascript
var deepCopy = function (source) { 
	var result = {};
	for (var key in source) {
		result[key] = typeof source[key]==='object' ? deepCopy(source[key]) : source[key];
	}
	return result; 
}
```

3. 如果数据结构中有数组，应该怎样实现浅克隆？

```javascript
var isArray = function (data) {
	return Object.prototype.toString.call(data) === '[object Array]';
}

var deepClone = function () {
	let result = {};

    if (isArray(source)) {
        result = [];
    }

    for (let key in source) {
        if (isArray(source)) {
            result.push(typeof source[key] === 'object' ? deepClone(source[key]) : source[key]);
        } else {
            result[key] = typeof source[key] === 'object' ? deepClone(source[key]) : source[key];
        }
    } 
    return result; 
}

var source = {
    "a": [
        1,
        3,
        4
    ],
    "b": {
        "c": 2,
        "d": {
            "x": 4
        }
    }
};
```

## 找出代码问题，或潜在问题，并谈谈可以优化的点

PS: 代码见index.html; 答案见answer.html