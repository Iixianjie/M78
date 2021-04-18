(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[114,115],{"+q3S":function(e,n,a){"use strict";a.r(n);var t=a("0Owb"),l=a("55Ip"),c=a("q1tI"),o=a.n(c),r=(a("B2uJ"),a("+su7"),a("qOys")),s=a.n(r),u=a("5Yjd"),i=a.n(u),m=o.a.memo((function(){var e=a("K+nK"),n=e(a("q1tI")),t=e(a("AAdU")),l=function(){return n["default"].createElement(t["default"],null)};return n["default"].createElement(l)}));n["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"checkbox-\u591a\u9009"},o.a.createElement("a",{"aria-hidden":"true",href:"#checkbox-\u591a\u9009"},o.a.createElement("span",{className:"icon icon-link"})),"CheckBox \u591a\u9009"),o.a.createElement("p",null,"\u57fa\u4e8e",o.a.createElement(l["a"],{to:"/form/check"},"Check"),"\u7ec4\u4ef6\u5b9e\u73b0\u7684\u4e0a\u5c42\u7ec4\u4ef6\uff0c\u7528\u4e8e\u5bf9\u4e00\u7ec4\u9009\u9879\u4e2d\u7684\u4e00\u9879\u6216\u591a\u9879\u8fdb\u884c\u9009\u62e9"),o.a.createElement("h2",{id:"\u793a\u4f8b"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},o.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),o.a.createElement(i.a,Object(t["a"])({source:{tsx:"import CheckBox from 'm78/check-box';\nimport React, { useState, useRef } from 'react';\nimport { UseCheckReturns } from '@lxjx/hooks';\nimport Button from 'm78/button';\n\nconst options = [\n  {\n    label: '\ud83e\uddda\u200d\u2642\ufe0f',\n    value: 1,\n  },\n  {\n    label: '\ud83e\uddda\u200d\u2640\ufe0f',\n    value: 2,\n  },\n  {\n    label: '\ud83e\udddc\u200d\u2640\ufe0f',\n    value: 3,\n    disabled: true,\n  },\n  {\n    label: '\ud83e\udddb\u200d\u2642\ufe0f',\n    value: 4,\n  },\n];\n\nconst Demo = () => {\n  const ck = useRef<UseCheckReturns<number, any>>(null!);\n  const [val, setVal] = useState<number[]>([2, 3]);\n\n  return (\n    <div>\n      <Button type=\"button\" onClick={() => setVal([1, 4])}>\n        set [1, 4]\n      </Button>\n      <Button type=\"button\" onClick={() => ck.current.toggleAll()}>\n        \u53cd\u9009\n      </Button>\n      <CheckBox\n        ref={ck}\n        name=\"like\"\n        value={val}\n        options={options}\n        onChange={value => {\n          setVal(value);\n        }}\n      />\n      <div className=\"mt-12\">\u9009\u4e2d\u503c: {val.join(',')}</div>\n    </div>\n  );\n};\n\nexport default Demo;\n",jsx:"import CheckBox from 'm78/check-box';\nimport React, { useState, useRef } from 'react';\nimport Button from 'm78/button';\n\nconst options = [\n  {\n    label: '\ud83e\uddda\u200d\u2642\ufe0f',\n    value: 1,\n  },\n  {\n    label: '\ud83e\uddda\u200d\u2640\ufe0f',\n    value: 2,\n  },\n  {\n    label: '\ud83e\udddc\u200d\u2640\ufe0f',\n    value: 3,\n    disabled: true,\n  },\n  {\n    label: '\ud83e\udddb\u200d\u2642\ufe0f',\n    value: 4,\n  },\n];\n\nconst Demo = () => {\n  const ck = useRef(null);\n  const [val, setVal] = useState([2, 3]);\n  return (\n    <div>\n      <Button type=\"button\" onClick={() => setVal([1, 4])}>\n        set [1, 4]\n      </Button>\n      <Button type=\"button\" onClick={() => ck.current.toggleAll()}>\n        \u53cd\u9009\n      </Button>\n      <CheckBox\n        ref={ck}\n        name=\"like\"\n        value={val}\n        options={options}\n        onChange={value => {\n          setVal(value);\n        }}\n      />\n      <div className=\"mt-12\">\u9009\u4e2d\u503c: {val.join(',')}</div>\n    </div>\n  );\n};\n\nexport default Demo;\n"}},{path:"/_demos/demo-12",dependencies:{},files:{}}),o.a.createElement(m,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"props"},o.a.createElement("a",{"aria-hidden":"true",href:"#props"},o.a.createElement("span",{className:"icon icon-link"})),"props"),o.a.createElement("p",null,o.a.createElement("strong",null,o.a.createElement("code",null,"props"))),o.a.createElement("p",null,"\u53c2\u6570\u7528\u6cd5\u4e0e",o.a.createElement(l["a"],{to:"/form/check"},"Check"),"\u57fa\u672c\u4e00\u81f4"),o.a.createElement(s.a,{code:"interface Item<Val> {\n  label?: string;\n  beforeLabel?: string;\n  value: Val;\n  disabled?: boolean;\n}\n\nexport interface CheckBoxProps<Val> extends FormLike<Val[]> {\n  /** \u4f20\u9012\u7ed9\u539f\u751f\u7ec4\u4ef6 */\n  name?: string;\n  /** \u7981\u7528 */\n  disabled?: boolean;\n  /** \u5355\u884c\u663e\u793a */\n  block?: boolean;\n  /** \u7528\u4e8e\u5b9a\u5236\u9009\u6846\u6837\u5f0f */\n  customer?: CheckCustom;\n  /** \u900f\u4f20\u81f3Check\u7ec4\u4ef6\u7684\u9009\u9879 */\n  options: Array<Item<Val>>;\n}\n",lang:"ts"}),o.a.createElement("p",null,o.a.createElement("strong",null,o.a.createElement("code",null,"ref"))),o.a.createElement(s.a,{code:"interface UseCheckReturns<T, OPTION> {\n  /** \u90e8\u5206\u503c\u88ab\u9009\u4e2d */\n  partialChecked: boolean;\n  /** \u662f\u5426\u5168\u90e8\u9009\u4e2d */\n  allChecked: boolean;\n  /** \u6ca1\u6709\u4efb\u4f55\u503c\u88ab\u9009\u4e2d */\n  noneChecked: boolean;\n  /** \u88ab\u9009\u4e2d\u503c, \u5b58\u5728collector\u65f6\u6240\u6709check\u9879\u90fd\u4f1a\u5148\u8d70collector */\n  checked: T[];\n  /** \u88ab\u9009\u4e2d\u7684\u539f\u59cb\u503c\uff0c\u4e0d\u8d70collector\uff0c\u672a\u4f20collector\u65f6\u4e0echeck\u8868\u73b0\u4e00\u81f4 */\n  originalChecked: OPTION[];\n  /** \u68c0\u6d4b\u503c\u662f\u5426\u88ab\u9009\u4e2d */\n  isChecked: (val: T) => boolean;\n  /** \u68c0\u6d4b\u503c\u662f\u5426\u88ab\u7981\u7528 */\n  isDisabled: (val: T) => boolean;\n  /** \u9009\u4e2d\u4f20\u5165\u7684\u503c */\n  check: (val: T) => void;\n  /** \u53d6\u6d88\u9009\u4e2d\u4f20\u5165\u7684\u503c */\n  unCheck: (val: T) => void;\n  /** \u9009\u62e9\u5168\u90e8\u503c */\n  checkAll: () => void;\n  /** \u53d6\u6d88\u9009\u4e2d\u6240\u6709\u503c */\n  unCheckAll: () => void;\n  /** \u53cd\u9009, \u8fd4\u56de\u53cd\u9009\u540e\u7684\u503c */\n  toggle: (val: T) => boolean | undefined;\n  /** \u53cd\u9009\u6240\u6709\u503c */\n  toggleAll: () => void;\n  /** \u4e00\u6b21\u6027\u8bbe\u7f6e\u6240\u6709\u9009\u4e2d\u7684\u503c, \u4e0d\u5f71\u54cd\u7981\u7528\u9879 */\n  setChecked: (nextChecked: T[]) => void;\n  /** \u6307\u5b9a\u503c\u5e76\u8bbe\u7f6e\u5176\u9009\u4e2d\u72b6\u6001 */\n  setCheckBy: (val: T, isChecked: boolean) => void;\n}\n",lang:"ts"})))}},AAdU:function(e,n,a){"use strict";a.r(n);var t=a("tJVT"),l=a("o2Q/"),c=a("q1tI"),o=a.n(c),r=a("uVtn"),s=[{label:"\ud83e\uddda\u200d\u2642\ufe0f",value:1},{label:"\ud83e\uddda\u200d\u2640\ufe0f",value:2},{label:"\ud83e\udddc\u200d\u2640\ufe0f",value:3,disabled:!0},{label:"\ud83e\udddb\u200d\u2642\ufe0f",value:4}],u=()=>{var e=Object(c["useRef"])(null),n=Object(c["useState"])([2,3]),a=Object(t["a"])(n,2),u=a[0],i=a[1];return o.a.createElement("div",null,o.a.createElement(r["a"],{type:"button",onClick:()=>i([1,4])},"set [1, 4]"),o.a.createElement(r["a"],{type:"button",onClick:()=>e.current.toggleAll()},"\u53cd\u9009"),o.a.createElement(l["default"],{ref:e,name:"like",value:u,options:s,onChange:e=>{i(e)}}),o.a.createElement("div",{className:"mt-12"},"\u9009\u4e2d\u503c: ",u.join(",")))};n["default"]=u},"K+nK":function(e,n){function a(e){return e&&e.__esModule?e:{default:e}}e.exports=a},PIl8:function(e,n,a){"use strict";var t=a("tJVT"),l=a("q1tI"),c=a.n(l),o=a("kr9X"),r=a("zdPv"),s=a("TSYQ"),u=a.n(s);function i(e){var n=e.focus,a=e.checked,t=e.disabled;return{__focus:n,__checked:a,__disabled:t}}var m={radio:e=>c.a.createElement("span",{className:u()("m78-check_base m78-effect __md",i(e))},c.a.createElement("span",{className:"m78-check_base-main"},c.a.createElement("span",{className:"m78-check_base-inner"}))),checkbox:(e,n)=>{var a=n.partial;return c.a.createElement("span",{className:u()("m78-check_base m78-effect __md","__checkbox",a&&"__partial",i(e))},c.a.createElement("span",{className:"m78-check_base-main"},c.a.createElement("span",{className:"m78-check_base-inner"})))},switch:(e,n)=>{var a=n.switchOff,t=n.switchOn;return c.a.createElement("span",{className:u()("m78-check_switch",i(e))},c.a.createElement("span",{className:u()("m78-check_switch-inner m78-effect __md",e.disabled&&"__disabled")},c.a.createElement("span",{className:"m78-check_switch-handle"},c.a.createElement(o["If"],{when:a&&t},c.a.createElement("span",null,e.checked?t:a)))))}},d=e=>{var n=e.type,a=void 0===n?"checkbox":n,s=e.disabled,i=void 0!==s&&s,d=e.label,b=e.beforeLabel,k=e.autoFocus,h=e.value,v=e.name,f=e.block,p=void 0!==f&&f,E=e.className,_=e.style,C=e.customer,g=e.waveWrap,w=void 0===g||g,x=e.size,N=void 0===x?"large":x,B=Object(r["useFormState"])(e,!1,{valueKey:"checked",defaultValueKey:"defaultChecked",triggerKey:"onChange"}),y=Object(t["a"])(B,2),O=y[0],j=y[1],I=Object(l["useState"])(!1),V=Object(t["a"])(I,2),T=V[0],S=V[1],A=C||m[a];function R(){S(!0)}function P(){S(!1)}function q(e){0===e.keyCode&&R()}function K(){j(e=>!e,h)}var U={__focus:T,__checked:O,__disabled:i,__block:p,["__".concat(a)]:!0};return A?c.a.createElement("label",{className:u()("m78-check",U,E,N&&"__".concat(N),{"__wave-wrap":w}),style:_,onKeyPress:q,onClick:P},c.a.createElement(o["If"],{when:b&&!C},c.a.createElement("span",{className:"m78-check_label-before"},b)),c.a.createElement("input",{value:String(h||""),onFocus:R,onBlur:P,checked:O,onChange:K,className:"m78-check_hidden-check",type:"checkbox",name:v,disabled:i,autoFocus:k}),A&&A({focus:T,checked:O,disabled:i},e),c.a.createElement(o["If"],{when:d&&!C},c.a.createElement("span",{className:"m78-check_label"},d))):null};d.Group=e=>{var n=e.children;return c.a.createElement("div",{className:"m78-check_group"},n)},n["a"]=d},gvGZ:function(e,n,a){"use strict";var t=a("k1fw"),l=a("q1tI"),c=a.n(l),o=a("zdPv"),r=a("k9Si"),s=c.a.forwardRef((e,n)=>{var a=e.options,s=e.disabled,u=e.name,i=e.block,m=e.customer,d=e.waveWrap,b=e.size,k=Object(l["useMemo"])(()=>a.reduce((e,n)=>(n.disabled&&e.push(n.value),e),[]),[a]),h=Object(o["useCheck"])(Object(t["a"])(Object(t["a"])({},e),{},{collector:e=>e.value,disables:k}));return Object(l["useImperativeHandle"])(n,()=>h),c.a.createElement("div",{className:"m78-radio-box m78-check_group"},a.map((e,n)=>c.a.createElement(r["default"],{key:n,type:"checkbox",name:u,block:i,customer:m,label:e.label,beforeLabel:e.beforeLabel,value:e.value,checked:h.checked.includes(e.value),disabled:s||e.disabled,onChange:(e,n)=>h.setCheckBy(n,e),waveWrap:d,size:b})))});n["a"]=s},k9Si:function(e,n,a){"use strict";a("ogwW");var t=a("PIl8");a("quBZ");n["default"]=t["a"]},"o2Q/":function(e,n,a){"use strict";a("ogwW");var t=a("gvGZ");a("rf2e");n["default"]=t["a"]},ogwW:function(e,n,a){"use strict";a("iCBh"),a("xUPd")},quBZ:function(e,n){},rf2e:function(e,n){},xUPd:function(e,n,a){}}]);