# this 指向

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
