(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{458:function(t,e,v){"use strict";v.r(e);var _=v(19),r=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"事件循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),v("h2",{attrs:{id:"为什么会有事件循环"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么会有事件循环"}},[t._v("#")]),t._v(" 为什么会有事件循环")]),t._v(" "),v("p",[v("code",[t._v("JS")]),t._v(" 的一大特点就是单线程，也就是说，同一时间只能做一件事。那为什么要设计成单线程呢，多线程效率不是更高吗？")]),t._v(" "),v("p",[t._v("有这样一个场景：假定 "),v("code",[t._v("JS")]),t._v(" 同时有两个线程，一个线程在某个 "),v("code",[t._v("DOM")]),t._v(" 节点上添加内容，另一个线程删除了这个节点，这时浏览器应该以哪个线程为准？")]),t._v(" "),v("p",[t._v("所以，"),v("code",[t._v("JS")]),t._v(" 从诞生就是单线程。但是单线程就导致有很多任务需要排队，只有一个任务执行完才能执行后一个任务。如果某个执行时间太长，就容易造成阻塞；为了解决这一问题，"),v("code",[t._v("JS")]),t._v(" 引入了事件循环机制。")]),t._v(" "),v("h2",{attrs:{id:"任务队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#任务队列"}},[t._v("#")]),t._v(" 任务队列")]),t._v(" "),v("p",[t._v("首先我们需要明白以下几件事情：")]),t._v(" "),v("ul",[v("li",[t._v("JS 分为同步任务和异步任务。")]),t._v(" "),v("li",[t._v("同步任务都在主线程上执行，形成一个执行栈。")]),t._v(" "),v("li",[t._v("主线程之外，事件触发线程管理着一个任务队列，只要异步任务有了运行结果，就在任务队列之中放置一个事件。")]),t._v(" "),v("li",[t._v("一旦执行栈中的所有同步任务执行完毕（此时 JS 引擎空闲），系统就会读取任务队列，将可运行的异步任务添加到可执行栈中，开始执行。")])]),t._v(" "),v("p",[t._v("根据规范，事件循环是通过任务队列的机制来进行协调的。\n一个 "),v("code",[t._v("Event Loop")]),t._v(" 中，可以有一个或者多个任务队列 ("),v("code",[t._v("task queue")]),t._v(")，一个任务队列便是一系列有序任务 ("),v("code",[t._v("task")]),t._v(") 的集合。\n每个任务都有一个任务源 ("),v("code",[t._v("task source")]),t._v(")，源自同一个任务源的 "),v("code",[t._v("task")]),t._v(" 必须放到同一个任务队列，从不同源来的则被添加到不同队列。\n"),v("code",[t._v("setTimeout/Promise")]),t._v(" 等 API 便是任务源，而进入任务队列的是他们指定的具体执行任务。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/event_loop_01.png",alt:"event_loop_01"}})]),t._v(" "),v("h2",{attrs:{id:"宏微任务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#宏微任务"}},[t._v("#")]),t._v(" 宏微任务")]),t._v(" "),v("ul",[v("li",[t._v("浏览器的任务队列\n"),v("ul",[v("li",[t._v("主任务队列：存储的都是同步任务")]),t._v(" "),v("li",[t._v("等待任务队列：存储的都是异步任务\n"),v("ul",[v("li",[t._v("宏任务队列\n"),v("ul",[v("li",[t._v("script 整体")]),t._v(" "),v("li",[t._v("setTimeout")]),t._v(" "),v("li",[t._v("setInterval")]),t._v(" "),v("li",[t._v("setImmediate (nodeJS)")]),t._v(" "),v("li",[t._v("requestAnimationFrame (html5)")])])]),t._v(" "),v("li",[t._v("微任务队列\n"),v("ul",[v("li",[t._v("await")]),t._v(" "),v("li",[t._v("Promise.then")]),t._v(" "),v("li",[t._v("process.nextTick (nodeJS)")]),t._v(" "),v("li",[t._v("MutationObserver (html5)")])])])])])])])]),t._v(" "),v("h2",{attrs:{id:"运行机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运行机制"}},[t._v("#")]),t._v(" 运行机制")]),t._v(" "),v("p",[t._v("在事件循环中，每进行一次循环操作称为 tick，每一次 tick 的任务处理模型是比较复杂的，但关键步骤如下：")]),t._v(" "),v("ul",[v("li",[t._v("执行一个宏任务（栈中没有就从事件队列中获取）")]),t._v(" "),v("li",[t._v("执行过程中如果遇到微任务，就将它添加到微任务的任务队列中")]),t._v(" "),v("li",[t._v("宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）")]),t._v(" "),v("li",[t._v("微任务都执行完毕后，开始下一个宏任务（从事件队列中获取）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://raw.githubusercontent.com/Vsnoy/PicGo/main/VuePress/event_loop_03.png",alt:"event_loop_03"}})]),t._v(" "),v("h2",{attrs:{id:"参考"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"http://file.jing999.cn/workspace/Js/eventloop.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event-Loop"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://jishuin.proginn.com/p/763bfbd5505b",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何跟面试官解释事件循环"),v("OutboundLink")],1)]),t._v(" "),v("li",[v("a",{attrs:{href:"https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7",target:"_blank",rel:"noopener noreferrer"}},[t._v("从一道题浅说 JavaScript 的事件循环"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);