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

## this 指向

```
var obj1 = {
  a: 2,
  getA: function() {
    console.log(this) // obj1
    setTimeout(() => {
      console.log(this) // obj1
    }, 1000)
  }
};

obj1.getA();
```

```
var obj2 = {
  a: 2,
  getA: function() {
    console.log(this) // obj2
    setTimeout(function() {
      console.log(this) // window
    }, 1000)
  }
}

obj2.getA()
```

```
var obj3 = {
  a: 2,
  getA: () => {
    console.log(this) // window
    setTimeout(function() {
      console.log(this) // window
    }, 1000)
  }
}

obj3.getA()
```

```
var obj4 = {
  a: 2,
  getA: () => {
      console.log(this) // window
      setTimeout(() => {
        console.log(this) // window
      }, 1000)
  }
}

obj4.getA()
```

```
var tag = "window"

function getTag() {
  console.log(tag)
  console.log(this.tag)
}

const obj1 = (function(){
  const tag="1-1"
  return {
    tag:"1-2",
    getTag(){
      console.log(tag)
      console.log(this.tag)
    }
  }
})()

const obj2 = (function(){
  const tag="2-1"
  return {
    tag:"2-2",
    getTag(){
      console.log(tag)
      console.log(this.tag)
    }
  }
})()

getTag()
obj1.getTag()
obj2.getTag()
obj1.getTag = getTag
obj1.getTag()
obj1.getTag = obj2.getTag
obj1.getTag()

// 输出结果
window
1-1
1-2
2-1
2-2
window
1-2
2-1
1-2
```
