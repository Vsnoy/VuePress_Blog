# JS

## var 循环绑定

```
for(var i = 1; i <= 5; i ++){
  setTimeout(function timer(){
    console.log(i)
  }, 0)
}

// 输出
6 6 6 6 6
```

```
// 因为 setTimeout 为宏任务，由于 JS 中单线程 eventLoop 机制，在主线程同步任务执行完后才去执行宏任务，
// 因此循环结束后 setTimeout 中的回调才依次执行，但输出 i 的时候当前作用域没有，往上一级再找，
// 发现了 i，此时循环已经结束，i 变成了 6。
// 因此会全部输出 6。

// 法一：let。
for(let i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i)
  }, 0)
}

// 法二：IIFE。
for(var i = 1;i <= 5;i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j)
    }, 0)
  })(i)
}

// 法三：setTimeout 第三个参数。
for(var i=1;i<=5;i++) {
  setTimeout(function timer(j) {
    console.log(j)
  }, 0, i)
}
```

## 变量、函数提升

```
console.log(a)
console.log(a())

var a = 3
function a() {
  console.log(10) 
}

console.log(a)   

a = 6

console.log(a())

// 输出
function a() { console.log(10) }
10
3
Uncaught TypeError: a is not a function
```