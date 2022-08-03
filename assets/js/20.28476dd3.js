(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{462:function(s,n,t){"use strict";t.r(n);var e=t(14),a=Object(e.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"new-执行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-执行过程"}},[s._v("#")]),s._v(" new 执行过程")]),s._v(" "),t("h2",{attrs:{id:"执行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行过程"}},[s._v("#")]),s._v(" 执行过程")]),s._v(" "),t("ul",[t("li",[s._v("创建一个新的空对象")]),s._v(" "),t("li",[s._v("将新对象的原型设置为构造函数的 "),t("code",[s._v("prototype")])]),s._v(" "),t("li",[s._v("将新对象绑定到构造函数中的 "),t("code",[s._v("this")])]),s._v(" "),t("li",[s._v("若构造函数没有显式返回其他对象，则返回该新对象")])]),s._v(" "),t("h2",{attrs:{id:"模拟实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模拟实现"}},[s._v("#")]),s._v(" 模拟实现")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// con 指 constructor，构造器\n// ret 指 return，返回值\nfunction new(con, ...args) {\n  const obj = {}\n  obj.__proto__ = con.prototype\n  const ret = con.apply(obj, args)\n  return typeof ret === 'Object' && ret !== null ? ret : obj\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// 简写\nfunction new(con, ...args) {\n  const obj = Object.create(con.prototype)\n  const ret = con.apply(obj, args)\n  return ret instanceof Object ? ret : obj\n}\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/mqyqingfeng/Blog/issues/13",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript 深入之 new 的模拟实现"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://muyiy.cn/blog/3/3.5.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("深度解析 new 原理及模拟实现"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"http://file.jing999.cn/workspace/Js/extends.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("new 调用构造器"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);n.default=a.exports}}]);