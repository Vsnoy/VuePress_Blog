# JS

## var、let 及 const 区别

![var_let_const](https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/var_let_const.jpg)

## async/await 与 Promise

因为 `async/await` 本身就是 `promise` + `generator` 的语法糖。所以 `await` 后面的代码是 `microtask` 。

```
async function async1() {
 console.log('async1 start')
 await async2()
 console.log('async1 end')
}
```

可视为

```
async function async1() {
 console.log('async1 start')
 Promise.resolve(async2()).then(() => {
  console.log('async1 end')
 })
}
```

可近似视为

```
async function async1() {
  new Promise((resolve, reject) => {
    console.log('async1 start')
    resolve(async2())
  }).then(() => {
    console.log('async1 end')
  })
}
```

:::warning
Promise.resolve(v) 与 new Promise(r => r(v)) 不完全等价。  
待后续研究。
:::

[从一道题浅说 JavaScript 的事件循环](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)
