(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[66,8,67,68,69],{"0aMQ":function(e,n,a){},"1p7j":function(e,n,a){"use strict";a("GTID"),a("TcRa");var t=a("ZSGz");a.d(n,"default",(function(){return t["a"]}))},"3P4x":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("k9Si"),r=(a("0aMQ"),a("TSYQ")),s=a.n(r),i=(e,n)=>{var a=e.checked,t=e.disabled,c=e.focus;return l.a.createElement("span",{className:s()("MyCustomCheck",{__checked:a,__disabled:t,__focus:c})},n.label)},o=()=>l.a.createElement("div",null,l.a.createElement("h3",null,"\u8fd8\u662f\u9009\u62e9\u4f60\u6700\u7231\u7684\u6c34\u679c"),l.a.createElement(c["default"],{label:"\ud83c\udf49\u897f\u74dc",customer:i}),l.a.createElement(c["default"],{label:"\ud83c\udf4c\u9999\u8549",customer:i}),l.a.createElement(c["default"],{disabled:!0,label:"\ud83c\udf4e\u82f9\u679c(\u7f3a\u8d27)",customer:i}),l.a.createElement(c["default"],{label:"\ud83c\udf47\u8461\u8404",customer:i}));n["default"]=o},B68Z:function(e,n,a){"use strict";var t=a("0Owb"),l=a("PpiC"),c=a("k1fw"),r=a("q1tI"),s=a.n(r),i=a("1p7j"),o=(a("iCBh"),a("K3qG")),d=a("TSYQ"),m=a.n(d),u={large:18,small:14,mini:12},h=/.?(Outlined|Filled|TwoTone|Icon)$/;function b(e){return Object(o["h"])(e)?e.map((n,a)=>{var t,l,r,i=null===(t=n)||void 0===t?void 0:t.type,o="";i&&(o=(null===(l=i.render)||void 0===l?void 0:l.displayName)||(null===(r=i.render)||void 0===r?void 0:r.name)||i.name);if(o&&s.a.isValidElement(n)&&h.test(o)){var d={marginLeft:8,marginRight:8};0===a&&(d={marginRight:8}),a===e.length-1&&(d={marginLeft:8});var m=Object(c["a"])(Object(c["a"])({},n.props.style),d);return s.a.cloneElement(n,{style:m,key:a})}return n}):e}var f=e=>{var n=e.size,a=e.color,c=e.circle,o=e.outline,d=e.block,h=e.link,f=e.icon,k=e.disabled,p=e.loading,C=e.md,E=e.win,v=e.children,_=e.className,y=e.href,g=Object(l["a"])(e,["size","color","circle","outline","block","link","icon","disabled","loading","md","win","children","className","href"]),w=m()(_,"m78-btn","m78-effect",{["__".concat(a)]:a,["__".concat(n)]:n,__circle:c,__outline:o,__block:d,__link:h,__icon:f,__md:C,__win:E,__light:!!a&&!h&&!f,__disabled:k||p}),N=Object(r["useMemo"])(()=>b(v),[v]);return s.a.createElement("button",Object(t["a"])({type:"button"},g,{className:w,disabled:!!k||!!p}),h&&s.a.createElement("a",{className:"m78-btn__link",href:y}),s.a.createElement(i["default"],{style:{fontSize:n?u[n]:14,color:"#333"},show:!!p,full:!0,text:""}),s.a.createElement("span",null,N))};n["a"]=f},BO4J:function(e,n){},Ctpu:function(e,n,a){"use strict";a.d(n,"a",(function(){return u})),a.d(n,"b",(function(){return b})),a.d(n,"c",(function(){return h}));var t=a("k1fw"),l=a("q1tI"),c=a.n(l),r=a("1p7j"),s=a("K3qG"),i=a("uVtn"),o=a("t1JD"),d=a("efh2"),m=e=>{var n=e.children,a=e.send,l=e.loadingFull,m=e.loading,u=e.error,h=e.timeout,b=e.hasData,f=e.forceRenderChild,k=e.loadingStyle,p=e.emptyText,C=void 0===p?"\u6682\u65e0\u6570\u636e":p,E=()=>Object(s["k"])(n)?n():n;if(m)return c.a.createElement(c.a.Fragment,null,c.a.createElement(r["default"],{className:"ptb-12",style:Object(t["a"])({width:"100%"},k),full:l,loadingDelay:300}),(f||l)&&E());var v=a?c.a.createElement(i["default"],{onClick:a,color:"primary",link:!0,size:"small",style:{top:-1}},"\u70b9\u51fb\u91cd\u65b0\u52a0\u8f7d"):null;return u||h?c.a.createElement(o["a"],{status:"error",message:h?"\u8bf7\u6c42\u8d85\u65f6":"\u6570\u636e\u52a0\u8f7d\u5931\u8d25",desc:c.a.createElement("div",null,(null===u||void 0===u?void 0:u.message)&&c.a.createElement("div",{className:"color-error mb-8"},u.message),c.a.createElement("span",null,"\u8bf7\u7a0d\u540e\u91cd\u8bd5",a?"\u6216":null," "),v)}):b||m?E():c.a.createElement(d["default"],{desc:C},v)},u=e=>{var n=e.when,a=e.children;n=!!n;var t=Object(s["k"])(a);return n&&(t?a():a)},h=e=>{var n=e.when,a=e.children;function t(){return c.a.cloneElement(a,{style:{display:"none"}})}return n?a:t()},b=e=>{var n=e.children,a=c.a.Children.toArray(n),t=a.reduce((e,n)=>{if(n.type!==u&&n.type!==h)return e;var a="when"in n.props,t=!!n.props.when;return a||e.notWhen||(e.notWhen=c.a.cloneElement(n,{when:!0})),t&&!e.showEl&&(e.showEl=n),e},{showEl:null,notWhen:null});return t.showEl||t.notWhen||null};n["d"]=m},GTID:function(e,n,a){"use strict";a("iCBh"),a("pF+1")},Jiyh:function(e,n){},"K+nK":function(e,n){function a(e){return e&&e.__esModule?e:{default:e}}e.exports=a},LUSG:function(e,n,a){"use strict";a.d(n,"a",(function(){return r}));var t=a("tJVT"),l=a("q1tI"),c=a("lgaZ");function r(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,a=arguments.length>2?arguments[2]:void 0,r=a||{},s=r.disabled,i=r.deps,o=void 0===i?[]:i,d=r.extraDelay,m=void 0===d?0:d,u=r.trailing,h=r.leading,b=void 0===h||h,f=!n||s||!u&&!b,k=Object(l["useState"])(!(!f&&b)&&e),p=Object(t["a"])(k,2),C=p[0],E=p[1],v=Object(c["j"])({toggleTimer:null});return Object(l["useEffect"])(()=>{if(!f&&e!==C){if((!e||b)&&(e||u))return v.toggleTimer=setTimeout(()=>{E(e)},n+m),()=>{v.toggleTimer&&clearTimeout(v.toggleTimer)};E(e)}},[e,...o]),f?e:C}},O60i:function(e,n,a){"use strict";var t=a("q1tI"),l=a.n(t),c=l.a.createContext({});function r(){return Object(t["useContext"])(c)}n["a"]={context:c,Provider:c.Provider,Consumer:c.Consumer,useConfig:r}},PIl8:function(e,n,a){"use strict";var t=a("tJVT"),l=a("q1tI"),c=a.n(l),r=a("kr9X"),s=a("lgaZ"),i=a("TSYQ"),o=a.n(i);function d(e){var n=e.focus,a=e.checked,t=e.disabled;return{__focus:n,__checked:a,__disabled:t}}var m={radio:e=>c.a.createElement("span",{className:o()("m78-check_base m78-effect __md",d(e))},c.a.createElement("span",{className:"m78-check_base-main"},c.a.createElement("span",{className:"m78-check_base-inner"}))),checkbox:(e,n)=>{var a=n.partial;return c.a.createElement("span",{className:o()("m78-check_base m78-effect __md","__checkbox",a&&"__partial",d(e))},c.a.createElement("span",{className:"m78-check_base-main"},c.a.createElement("span",{className:"m78-check_base-inner"})))},switch:(e,n)=>{var a=n.switchOff,t=n.switchOn;return c.a.createElement("span",{className:o()("m78-check_switch",d(e))},c.a.createElement("span",{className:o()("m78-check_switch-inner m78-effect __md",e.disabled&&"__disabled")},c.a.createElement("span",{className:"m78-check_switch-handle"},c.a.createElement(r["If"],{when:a&&t},c.a.createElement("span",null,e.checked?t:a)))))}},u=e=>{var n=e.type,a=void 0===n?"checkbox":n,i=e.disabled,d=void 0!==i&&i,u=e.label,h=e.beforeLabel,b=e.autoFocus,f=e.value,k=e.name,p=e.block,C=void 0!==p&&p,E=e.className,v=e.style,_=e.customer,y=Object(s["f"])(e,!1,{valueKey:"checked",defaultValueKey:"defaultChecked",triggerKey:"onChange"}),g=Object(t["a"])(y,2),w=g[0],N=g[1],O=Object(l["useState"])(!1),x=Object(t["a"])(O,2),j=x[0],I=x[1],B=_||m[a];function S(){I(!0)}function T(){I(!1)}function D(e){0===e.keyCode&&S()}function K(){N(e=>!e,f)}var P={__focus:j,__checked:w,__disabled:d,__block:C,["__".concat(a)]:!0};return B?c.a.createElement("label",{className:o()("m78-check",P,E),style:v,onKeyPress:D,onClick:T},c.a.createElement(r["If"],{when:h&&!_},c.a.createElement("span",{className:"m78-check_label-before"},h)),c.a.createElement("input",{value:String(f||""),onFocus:S,onBlur:T,checked:w,onChange:K,className:"m78-check_hidden-check",type:"checkbox",name:k,disabled:d,autoFocus:b}),B&&B({focus:j,checked:w,disabled:d},e),c.a.createElement(r["If"],{when:u&&!_},c.a.createElement("span",{className:"m78-check_label"},u))):null};n["a"]=u},Petc:function(e,n,a){"use strict";a.r(n);var t=a("0Owb"),l=a("q1tI"),c=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),s=a.n(r),i=a("5Yjd"),o=a.n(i),d=c.a.memo((function(){var e=a("K+nK"),n=e(a("q1tI")),t=e(a("VC7C")),l=function(){return n["default"].createElement(t["default"],null)};return n["default"].createElement(l)})),m=c.a.memo((function(){var e=a("K+nK"),n=e(a("q1tI")),t=e(a("3P4x")),l=function(){return n["default"].createElement(t["default"],null)};return n["default"].createElement(l)})),u=c.a.memo((function(){var e=a("K+nK"),n=e(a("q1tI")),t=e(a("hDVJ")),l=function(){return n["default"].createElement(t["default"],null)};return n["default"].createElement(l)}));n["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"check-\u9009\u62e9\u6846"},c.a.createElement("a",{"aria-hidden":"true",href:"#check-\u9009\u62e9\u6846"},c.a.createElement("span",{className:"icon icon-link"})),"Check \u9009\u62e9\u6846"),c.a.createElement("p",null,c.a.createElement("code",null,"Check"),"\u662f\u4f5c\u4e3a",c.a.createElement("code",null,"Radio"),"\u548c",c.a.createElement("code",null,"CheckBox"),"\u7684\u5e95\u5c42\u7ec4\u4ef6\u5b58\u5728\u7684\uff0c\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u4f1a\u76f4\u63a5\u4f7f\u7528\u5b83\uff0c\u800c\u662f\u4f7f\u7528\u57fa\u4e8e\u5176\u5b9e\u73b0\u7684\u4e0a\u5c42\u7ec4\u4ef6\u3002"),c.a.createElement("p",null,"\u5c3d\u7ba1\u5982\u6b64\uff0c\u6bcf\u4e00\u4e2a",c.a.createElement("code",null,"Check"),"\u4e5f\u90fd\u53ef\u4ee5\u4f5c\u4e3a\u72ec\u7acb\u7684",c.a.createElement("code",null,"Switch"),"\u7ec4\u4ef6(value \u4e3a boolean \u503c\u7684\u8f93\u5165\u7ec4\u4ef6)\u6765\u4f7f\u7528"),c.a.createElement("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u7684 API \u6765\u5b9a\u5236\u81ea\u5df1\u7684",c.a.createElement("code",null,"Switch"),"\u3001",c.a.createElement("code",null,"Radio"),"\u3001\u6216\u8005\u662f",c.a.createElement("code",null,"CheckBox"),"\u7ec4\u4ef6"),c.a.createElement("h2",{id:"\u793a\u4f8b"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},c.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),c.a.createElement(o.a,Object(t["a"])({source:{tsx:'import React from \'react\';\n\nimport Check from \'m78/check\';\n\nconst Demo = () => (\n  <div>\n    <h3>\u9009\u62e9\u4f60\u6700\u7231\u7684\u6c34\u679c</h3>\n    <div>\n      <Check label="\ud83c\udf49\u897f\u74dc" />\n      <Check label="\ud83c\udf4c\u9999\u8549" />\n      <Check disabled label="\ud83c\udf4e\u82f9\u679c(\u7f3a\u8d27)" />\n      <Check label="\ud83c\udf47\u8461\u8404" />\n      <Check partial label="\ud83c\udf53\u8349\u8393" />\n    </div>\n\n    <h3 className="mt-32">\u9009\u62e9\u4f60\u7684\u804c\u4e1a</h3>\n    <div>\n      <Check type="radio" label="\ud83c\udf85\u5723\u8bde\u8001\u4eba\u200d" />\n      <Check type="radio" label="\ud83d\udd75\ufe0f\u4fa6\u63a2" />\n      <Check type="radio" label="\ud83e\udddf\u200d\u2640\ufe0f\u50f5\u5c38" />\n      <Check type="radio" label="\ud83e\udddb\u200d\u2640\ufe0f\u200d\u5438\u8840\u9b3c" />\n    </div>\n\n    <h3 className="mt-32">\u70b9\u51fb\u5f00\u706f</h3>\n    <div>\n      <Check disabled type="switch" label="\u5367\u5ba4\u200d" />\n      <Check type="switch" label="\u53a8\u623f" />\n      <Check type="switch" label="\u5ba2\u5385" />\n      <Check type="switch" label="\u8d70\u5eca" />\n    </div>\n\n    <h3 className="mt-32">\u5b9a\u5236\u6587\u672c</h3>\n    <div>\n      <Check disabled defaultChecked type="switch" label="\u6211\u540c\u610f\u200d" beforeLabel="\u6211\u4e0d\u540c\u610f" />\n\n      <span className="ml-32">\n        <Check type="switch" switchOff="\u5173" switchOn="\u5f00" />\n      </span>\n      <span className="ml-32">\n        <Check type="switch" switchOff="off" switchOn="on" />\n      </span>\n    </div>\n\n    <h3 className="mt-32">block\u6a21\u5f0f</h3>\n    <div>\n      <Check label="\ud83c\udf49\u897f\u74dc" block />\n      <Check label="\ud83c\udf4c\u9999\u8549" block />\n      <Check disabled label="\ud83c\udf4e\u82f9\u679c(\u7f3a\u8d27)" block />\n      <Check label="\ud83c\udf47\u8461\u8404" block />\n    </div>\n  </div>\n);\n\nexport default Demo;\n',jsx:'import React from \'react\';\nimport Check from \'m78/check\';\n\nconst Demo = () => (\n  <div>\n    <h3>\u9009\u62e9\u4f60\u6700\u7231\u7684\u6c34\u679c</h3>\n    <div>\n      <Check label="\ud83c\udf49\u897f\u74dc" />\n      <Check label="\ud83c\udf4c\u9999\u8549" />\n      <Check disabled label="\ud83c\udf4e\u82f9\u679c(\u7f3a\u8d27)" />\n      <Check label="\ud83c\udf47\u8461\u8404" />\n      <Check partial label="\ud83c\udf53\u8349\u8393" />\n    </div>\n\n    <h3 className="mt-32">\u9009\u62e9\u4f60\u7684\u804c\u4e1a</h3>\n    <div>\n      <Check type="radio" label="\ud83c\udf85\u5723\u8bde\u8001\u4eba\u200d" />\n      <Check type="radio" label="\ud83d\udd75\ufe0f\u4fa6\u63a2" />\n      <Check type="radio" label="\ud83e\udddf\u200d\u2640\ufe0f\u50f5\u5c38" />\n      <Check type="radio" label="\ud83e\udddb\u200d\u2640\ufe0f\u200d\u5438\u8840\u9b3c" />\n    </div>\n\n    <h3 className="mt-32">\u70b9\u51fb\u5f00\u706f</h3>\n    <div>\n      <Check disabled type="switch" label="\u5367\u5ba4\u200d" />\n      <Check type="switch" label="\u53a8\u623f" />\n      <Check type="switch" label="\u5ba2\u5385" />\n      <Check type="switch" label="\u8d70\u5eca" />\n    </div>\n\n    <h3 className="mt-32">\u5b9a\u5236\u6587\u672c</h3>\n    <div>\n      <Check disabled defaultChecked type="switch" label="\u6211\u540c\u610f\u200d" beforeLabel="\u6211\u4e0d\u540c\u610f" />\n\n      <span className="ml-32">\n        <Check type="switch" switchOff="\u5173" switchOn="\u5f00" />\n      </span>\n      <span className="ml-32">\n        <Check type="switch" switchOff="off" switchOn="on" />\n      </span>\n    </div>\n\n    <h3 className="mt-32">block\u6a21\u5f0f</h3>\n    <div>\n      <Check label="\ud83c\udf49\u897f\u74dc" block />\n      <Check label="\ud83c\udf4c\u9999\u8549" block />\n      <Check disabled label="\ud83c\udf4e\u82f9\u679c(\u7f3a\u8d27)" block />\n      <Check label="\ud83c\udf47\u8461\u8404" block />\n    </div>\n  </div>\n);\n\nexport default Demo;\n'}},{path:"/_demos/demo-9",dependencies:{},files:{}}),c.a.createElement(d,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h2",{id:"\u6837\u5f0f\u5b9a\u5236"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u6837\u5f0f\u5b9a\u5236"},c.a.createElement("span",{className:"icon icon-link"})),"\u6837\u5f0f\u5b9a\u5236"),c.a.createElement("p",null,c.a.createElement("code",null,"Check"),"\u7ec4\u4ef6\u662f\u9ad8\u5ea6\u53ef\u5b9a\u5236\u7684\uff0c\u5b9e\u9645\u4e0a\uff0c\u5185\u7f6e\u7684",c.a.createElement("code",null,"'radio' | 'checkbox' | 'switch'"),"\u7b49\u6837\u5f0f\u4e5f\u662f\u901a\u8fc7\u5b9a\u5236 API \u6765\u5b9e\u73b0\u7684\u3002")),c.a.createElement(o.a,Object(t["a"])({source:{tsx:"import React from 'react';\n\nimport Check, { CheckCustom } from 'm78/check';\nimport './style.scss';\nimport cls from 'classnames';\n\nconst myCheck: CheckCustom = ({ checked, disabled, focus }, props) => (\n  <span\n    className={cls('MyCustomCheck', {\n      __checked: checked,\n      __disabled: disabled,\n      __focus: focus,\n    })}\n  >\n    {props.label}\n  </span>\n);\n\nconst Demo2 = () => (\n  <div>\n    <h3>\u8fd8\u662f\u9009\u62e9\u4f60\u6700\u7231\u7684\u6c34\u679c</h3>\n    <Check label=\"\ud83c\udf49\u897f\u74dc\" customer={myCheck} />\n    <Check label=\"\ud83c\udf4c\u9999\u8549\" customer={myCheck} />\n    <Check disabled label=\"\ud83c\udf4e\u82f9\u679c(\u7f3a\u8d27)\" customer={myCheck} />\n    <Check label=\"\ud83c\udf47\u8461\u8404\" customer={myCheck} />\n  </div>\n);\n\nexport default Demo2;\n",jsx:"import React from 'react';\nimport Check from 'm78/check';\nimport './style.scss';\nimport cls from 'classnames';\n\nconst myCheck = ({ checked, disabled, focus }, props) => (\n  <span\n    className={cls('MyCustomCheck', {\n      __checked: checked,\n      __disabled: disabled,\n      __focus: focus,\n    })}\n  >\n    {props.label}\n  </span>\n);\n\nconst Demo2 = () => (\n  <div>\n    <h3>\u8fd8\u662f\u9009\u62e9\u4f60\u6700\u7231\u7684\u6c34\u679c</h3>\n    <Check label=\"\ud83c\udf49\u897f\u74dc\" customer={myCheck} />\n    <Check label=\"\ud83c\udf4c\u9999\u8549\" customer={myCheck} />\n    <Check disabled label=\"\ud83c\udf4e\u82f9\u679c(\u7f3a\u8d27)\" customer={myCheck} />\n    <Check label=\"\ud83c\udf47\u8461\u8404\" customer={myCheck} />\n  </div>\n);\n\nexport default Demo2;\n"}},{path:"/_demos/custom",dependencies:{classnames:"2.2.6"},files:{"style.scss":{path:"./style.scss",content:".MyCustomCheck {\n  display: inline-block;\n  border: 1px solid #ccc;\n  color: #666;\n  padding: 4px 8px;\n  border-radius: 4px;\n\n  &.__checked {\n    border-color: #13c2c2;\n    background-color: #13c2c2;\n    color: #fff;\n  }\n\n  &.__disabled {\n    border-color: #eee;\n    color: rgba(0, 0, 0, 0.35);\n  }\n\n  &.__focus {\n    box-shadow: 0 0 0 2px blue;\n  }\n}\n"}}}),c.a.createElement(m,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("p",null,"\u7ec4\u4ef6 css"),c.a.createElement(s.a,{code:".MyCustomCheck {\n  display: inline-block;\n  border: 1px solid #ccc;\n  color: #666;\n  padding: 4px 8px;\n  border-radius: 4px;\n\n  &.__checked {\n    border-color: #13c2c2;\n    background-color: #13c2c2;\n    color: #fff;\n  }\n\n  &.__disabled {\n    border-color: #eee;\n    color: rgba(0, 0, 0, 0.35);\n  }\n\n  &.__focus {\n    box-shadow: 0 0 0 2px blue;\n  }\n}\n",lang:"scss"}),c.a.createElement("p",null,"\u2764 \u9700\u8981\u6ce8\u610f\u7684\u4e00\u70b9\u662f\uff0c\u4e0a\u4f8b\u4e2d\u7684",c.a.createElement("code",null,"myCheck"),"\u51fd\u6570\u662f",c.a.createElement("code",null,"CheckCustom"),"\u63a5\u53e3\u7684\u5b9e\u73b0\uff0c\u800c\u4e0d\u662f",c.a.createElement("code",null,"React"),"\u7ec4\u4ef6"),c.a.createElement("h2",{id:"\u4f7f\u7528usecheck"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u4f7f\u7528usecheck"},c.a.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528",c.a.createElement("code",null,"useCheck")),c.a.createElement("p",null,"\u901a\u8fc7",c.a.createElement("code",null,"useCheck"),"\u94a9\u5b50\u6765\u4fbf\u6377\u7684\u5b9e\u73b0\u9009\u4e2d\u72b6\u6001\u7ba1\u7406")),c.a.createElement(o.a,Object(t["a"])({source:{tsx:"import React from 'react';\n\nimport Check from 'm78/check';\nimport Button from 'm78/button';\nimport { useCheck } from '@lxjx/hooks';\n\nconst options = [\n  { id: 1, label: '\ud83c\udf49\u897f\u74dc' },\n  { id: 2, label: '\ud83c\udf4c\u9999\u8549' },\n  { id: 3, label: '\ud83c\udf4e\u82f9\u679c' },\n  { id: 4, label: '\ud83c\udf47\u8461\u8404' },\n  { id: 5, label: '\ud83c\udf53\u8349\u8393' },\n];\n\nconst useCheckDemo = () => {\n  const res = useCheck<number, { id: number }>({\n    options,\n    collector: item => item.id,\n  });\n\n  return (\n    <div>\n      <h3>\u9009\u62e9\u4f60\u6700\u7231\u7684\u6c34\u679c</h3>\n      <Check\n        label={res.allChecked ? '\u53d6\u6d88' : '\u5168\u9009'}\n        checked={res.allChecked}\n        partial={res.partialChecked}\n        onChange={checked => {\n          checked ? res.checkAll() : res.unCheckAll();\n        }}\n      />\n      <Button size=\"small\" className=\"ml-12\" onClick={res.toggleAll}>\n        \u53cd\u9009\n      </Button>\n      <Button size=\"small\" className=\"ml-12\" onClick={() => res.setChecked([1, 4])}>\n        \u9009\u4e2d1, 4\n      </Button>\n      <div>\n        {options.map(option => (\n          <Check\n            key={option.id}\n            label={option.label}\n            disabled={res.isDisabled(option.id)}\n            checked={res.isChecked(option.id)}\n            onChange={checked => res.setCheckBy(option.id, checked)}\n          />\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default useCheckDemo;\n",jsx:"import React from 'react';\nimport Check from 'm78/check';\nimport Button from 'm78/button';\nimport { useCheck } from '@lxjx/hooks';\n\nconst options = [\n  {\n    id: 1,\n    label: '\ud83c\udf49\u897f\u74dc',\n  },\n  {\n    id: 2,\n    label: '\ud83c\udf4c\u9999\u8549',\n  },\n  {\n    id: 3,\n    label: '\ud83c\udf4e\u82f9\u679c',\n  },\n  {\n    id: 4,\n    label: '\ud83c\udf47\u8461\u8404',\n  },\n  {\n    id: 5,\n    label: '\ud83c\udf53\u8349\u8393',\n  },\n];\n\nconst useCheckDemo = () => {\n  const res = useCheck({\n    options,\n    collector: item => item.id,\n  });\n  return (\n    <div>\n      <h3>\u9009\u62e9\u4f60\u6700\u7231\u7684\u6c34\u679c</h3>\n      <Check\n        label={res.allChecked ? '\u53d6\u6d88' : '\u5168\u9009'}\n        checked={res.allChecked}\n        partial={res.partialChecked}\n        onChange={checked => {\n          checked ? res.checkAll() : res.unCheckAll();\n        }}\n      />\n      <Button size=\"small\" className=\"ml-12\" onClick={res.toggleAll}>\n        \u53cd\u9009\n      </Button>\n      <Button size=\"small\" className=\"ml-12\" onClick={() => res.setChecked([1, 4])}>\n        \u9009\u4e2d1, 4\n      </Button>\n      <div>\n        {options.map(option => (\n          <Check\n            key={option.id}\n            label={option.label}\n            disabled={res.isDisabled(option.id)}\n            checked={res.isChecked(option.id)}\n            onChange={checked => res.setCheckBy(option.id, checked)}\n          />\n        ))}\n      </div>\n    </div>\n  );\n};\n\nexport default useCheckDemo;\n"}},{path:"/_demos/use-check-demo",dependencies:{"@lxjx/hooks":"1.4.0"},files:{}}),c.a.createElement(u,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("p",null,"\u5173\u4e8e useCheck \u7684\u66f4\u591a\u7528\u4f8b\uff0c\u8bf7\u67e5\u770b",c.a.createElement("code",null,"useCheck")," // TODO: \u6dfb\u52a0\u94fe\u63a5"),c.a.createElement("h2",{id:"props"},c.a.createElement("a",{"aria-hidden":"true",href:"#props"},c.a.createElement("span",{className:"icon icon-link"})),"props"),c.a.createElement("p",null,c.a.createElement("strong",null,c.a.createElement("code",null,"Check"))),c.a.createElement(s.a,{code:"interface CheckProps extends ComponentBaseProps {\n  /** \u663e\u793a\u7684\u6837\u5f0f */\n  type?: 'radio' | 'checkbox' | 'switch';\n  /** \u5728\u89c6\u89c9\u4e0a\u8bbe\u7f6e\u4e3a `\u5f85\u5b9a`\uff0c\u7528\u4e8e\u5168\u9009\u7b49\u64cd\u4f5c\u6ee1\u8db3\u90e8\u5206\u6761\u4ef6\u7684\u60c5\u51b5\uff0c \u53ea\u9650\u4e8etype=checkbox,\u4f18\u9009\u7ea7\u5c0f\u4e8echecked */\n  partial?: boolean;\n  /** \u7981\u7528 */\n  disabled?: boolean;\n  /** \u6e32\u67d3\u65f6\u81ea\u52a8\u83b7\u53d6\u7126\u70b9 */\n  autoFocus?: boolean;\n  /** \u8868\u5355\u503c\uff0c\u5728onChange\u65f6\u4ee5\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165 */\n  value?: string;\n  /** \u540e\u7f6elabel\u6587\u672c */\n  label?: string;\n  /** \u524d\u7f6elabel\u6587\u672c */\n  beforeLabel?: string;\n  /** type=switch\u65f6\u751f\u6548\uff0c\u8bbe\u7f6e\u5f00\u542f\u72b6\u6001\u7684handle\u6587\u672c, \u4e00\u4e2a\u6c49\u5b57\u62164\u4e2a\u5b57\u6bcd\u4ee5\u5185 */\n  switchOn?: string;\n  /** type=switch\u65f6\u751f\u6548\uff0c\u8bbe\u7f6e\u5173\u95ed\u72b6\u6001\u7684handle\u6587\u672c, \u4e00\u4e2a\u6c49\u5b57\u62164\u4e2a\u5b57\u6bcd\u4ee5\u5185 */\n  switchOff?: string;\n  /** \u5355\u884c\u663e\u793a */\n  block?: boolean;\n  /** \u540c\u539f\u751f\u7ec4\u4ef6\u7684`name` */\n  name?: string;\n  /** customer */\n  customer?: CheckCustom;\n  /** \u662f\u5426\u9009\u4e2d */\n  checked?: boolean;\n  /** \u975e\u53d7\u63a7\u6a21\u5f0f\u4e0b\u4f7f\u7528 */\n  defaultChecked?: boolean;\n  /** checked\u89e6\u53d1\u6539\u53d8\u7684\u94a9\u5b50\uff0c\u56de\u4f20\u503c\u4e3achecked\u72b6\u6001\u548cvalue(\u672a\u4f20\u5165\u65f6\u4e3a'') */\n  onChange?: (checked: boolean, value: string) => void;\n}\n",lang:"tsx"}),c.a.createElement("p",null,c.a.createElement("strong",null,c.a.createElement("code",null,"\u76f8\u5173\u63a5\u53e3"))),c.a.createElement(s.a,{code:"interface ComponentBaseProps {\n  /** \u5305\u88f9\u5143\u7d20\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5305\u88f9\u5143\u7d20\u6837\u5f0f */\n  style?: React.CSSProperties;\n}\n\n/**\n * \u5b9a\u5236Check\u6837\u5f0f\u65f6\u4f1a\u7528\u5230\u7684\u63a5\u53e3\n * @param meta - \u5b9a\u5236\u65f6\u4f1a\u7528\u5230\u7684\u4e00\u4e9b\u7ec4\u4ef6\u5185\u90e8\u72b6\u6001\n * @param checkProps - Check\u7ec4\u4ef6\u63a5\u6536\u5230\u7684prop\n * */\nexport interface CheckCustom {\n  (meta: ShareMeta, checkProps: CheckProps): React.ReactElement;\n}\n\ninterface ShareMeta {\n  focus: boolean;\n  checked: boolean;\n  disabled: boolean;\n}\n",lang:"tsx"})))}},QjBK:function(e,n,a){"use strict";a("iCBh"),a("tU1D")},TcRa:function(e,n){},VC7C:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("k9Si"),r=()=>l.a.createElement("div",null,l.a.createElement("h3",null,"\u9009\u62e9\u4f60\u6700\u7231\u7684\u6c34\u679c"),l.a.createElement("div",null,l.a.createElement(c["default"],{label:"\ud83c\udf49\u897f\u74dc"}),l.a.createElement(c["default"],{label:"\ud83c\udf4c\u9999\u8549"}),l.a.createElement(c["default"],{disabled:!0,label:"\ud83c\udf4e\u82f9\u679c(\u7f3a\u8d27)"}),l.a.createElement(c["default"],{label:"\ud83c\udf47\u8461\u8404"}),l.a.createElement(c["default"],{partial:!0,label:"\ud83c\udf53\u8349\u8393"})),l.a.createElement("h3",{className:"mt-32"},"\u9009\u62e9\u4f60\u7684\u804c\u4e1a"),l.a.createElement("div",null,l.a.createElement(c["default"],{type:"radio",label:"\ud83c\udf85\u5723\u8bde\u8001\u4eba\u200d"}),l.a.createElement(c["default"],{type:"radio",label:"\ud83d\udd75\ufe0f\u4fa6\u63a2"}),l.a.createElement(c["default"],{type:"radio",label:"\ud83e\udddf\u200d\u2640\ufe0f\u50f5\u5c38"}),l.a.createElement(c["default"],{type:"radio",label:"\ud83e\udddb\u200d\u2640\ufe0f\u200d\u5438\u8840\u9b3c"})),l.a.createElement("h3",{className:"mt-32"},"\u70b9\u51fb\u5f00\u706f"),l.a.createElement("div",null,l.a.createElement(c["default"],{disabled:!0,type:"switch",label:"\u5367\u5ba4\u200d"}),l.a.createElement(c["default"],{type:"switch",label:"\u53a8\u623f"}),l.a.createElement(c["default"],{type:"switch",label:"\u5ba2\u5385"}),l.a.createElement(c["default"],{type:"switch",label:"\u8d70\u5eca"})),l.a.createElement("h3",{className:"mt-32"},"\u5b9a\u5236\u6587\u672c"),l.a.createElement("div",null,l.a.createElement(c["default"],{disabled:!0,defaultChecked:!0,type:"switch",label:"\u6211\u540c\u610f\u200d",beforeLabel:"\u6211\u4e0d\u540c\u610f"}),l.a.createElement("span",{className:"ml-32"},l.a.createElement(c["default"],{type:"switch",switchOff:"\u5173",switchOn:"\u5f00"})),l.a.createElement("span",{className:"ml-32"},l.a.createElement(c["default"],{type:"switch",switchOff:"off",switchOn:"on"}))),l.a.createElement("h3",{className:"mt-32"},"block\u6a21\u5f0f"),l.a.createElement("div",null,l.a.createElement(c["default"],{label:"\ud83c\udf49\u897f\u74dc",block:!0}),l.a.createElement(c["default"],{label:"\ud83c\udf4c\u9999\u8549",block:!0}),l.a.createElement(c["default"],{disabled:!0,label:"\ud83c\udf4e\u82f9\u679c(\u7f3a\u8d27)",block:!0}),l.a.createElement(c["default"],{label:"\ud83c\udf47\u8461\u8404",block:!0})));n["default"]=r},WwnQ:function(e,n,a){},ZSGz:function(e,n,a){"use strict";var t=a("0Owb"),l=a("PpiC"),c=a("q1tI"),r=a.n(c),s=a("Rz6r"),i=a("LUSG"),o=a("9RZ+"),d=a("TSYQ"),m=a.n(d),u=e=>{var n=e.size,a=e.inline,c=e.text,d=void 0===c?"\u52a0\u8f7d\u4e2d":c,u=e.full,h=e.dark,b=e.show,f=void 0===b||b,k=e.className,p=e.loadingDelay,C=void 0===p?0:p,E=Object(l["a"])(e,["size","inline","text","full","dark","show","className","loadingDelay"]),v=Object(i["a"])(f,C);return r.a.createElement(o["a"],Object(t["a"])({toggle:v,type:"fade",mountOnEnter:!0,unmountOnExit:!0},E,{config:o["c"].stiff,className:m()(k,"m78-spin",{["__".concat(n)]:!!n,__inline:a,__full:u,__dark:h})}),r.a.createElement(s["WindmillIcon"],{className:"m78-spin_unit"}),d&&r.a.createElement("span",{className:"m78-spin_text"},d,r.a.createElement("span",{className:"m78-spin_ellipsis"})))};n["a"]=u},bf2K:function(e,n){},bgvL:function(e,n,a){},cDKg:function(e,n,a){"use strict";a("iCBh"),a("bgvL")},eTaW:function(e,n,a){"use strict";var t=a("0Owb"),l=a("PpiC"),c=a("q1tI"),r=a.n(c),s=a("Rz6r"),i=a("O60i"),o=a("TSYQ"),d=a.n(o);function m(e){return e?r.a.cloneElement(e,{className:d()("m78-empty_icon",e.props.className)}):null}var u=e=>{var n=e.desc,a=e.children,c=e.size,o=e.emptyNode,u=Object(l["a"])(e,["desc","children","size","emptyNode"]),h=i["a"].useConfig(),b=h.emptyNode;return r.a.createElement("div",Object(t["a"])({className:d()("m78-empty",c&&"__".concat(c),u.className)},u),m(o)||m(b)||r.a.createElement(s["EmptyIcon"],{className:"m78-empty_icon"}),r.a.createElement("div",{className:"m78-empty_desc"},n),r.a.createElement("div",{className:"m78-empty_actions"},a))};n["a"]=u},efh2:function(e,n,a){"use strict";a("lCdt");var t=a("eTaW");a("bf2K");n["default"]=t["a"]},hDVJ:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),c=a("k9Si"),r=a("uVtn"),s=a("lgaZ"),i=[{id:1,label:"\ud83c\udf49\u897f\u74dc"},{id:2,label:"\ud83c\udf4c\u9999\u8549"},{id:3,label:"\ud83c\udf4e\u82f9\u679c"},{id:4,label:"\ud83c\udf47\u8461\u8404"},{id:5,label:"\ud83c\udf53\u8349\u8393"}],o=()=>{var e=Object(s["a"])({options:i,collector:e=>e.id});return l.a.createElement("div",null,l.a.createElement("h3",null,"\u9009\u62e9\u4f60\u6700\u7231\u7684\u6c34\u679c"),l.a.createElement(c["default"],{label:e.allChecked?"\u53d6\u6d88":"\u5168\u9009",checked:e.allChecked,partial:e.partialChecked,onChange:n=>{n?e.checkAll():e.unCheckAll()}}),l.a.createElement(r["default"],{size:"small",className:"ml-12",onClick:e.toggleAll},"\u53cd\u9009"),l.a.createElement(r["default"],{size:"small",className:"ml-12",onClick:()=>e.setChecked([1,4])},"\u9009\u4e2d1, 4"),l.a.createElement("div",null,i.map(n=>l.a.createElement(c["default"],{key:n.id,label:n.label,disabled:e.isDisabled(n.id),checked:e.isChecked(n.id),onChange:a=>e.setCheckBy(n.id,a)}))))};n["default"]=o},jNhd:function(e,n,a){"use strict";var t=a("q1tI"),l=a("bdgK"),c=function(){var e=Object(t["useState"])({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0}),n=e[0],a=e[1],c=Object(t["useState"])((function(){return new l["a"]((function(e){var n=e[0];n&&a(n.contentRect)}))}))[0],r=Object(t["useCallback"])((function(e){c.disconnect(),e&&c.observe(e)}),[c]);return[r,n]};n["a"]=c},k9Si:function(e,n,a){"use strict";a("ogwW");var t=a("PIl8");a("quBZ");n["default"]=t["a"]},kr9X:function(e,n,a){"use strict";a("cDKg");var t=a("Ctpu"),l=a("Jiyh");a.o(l,"If")&&a.d(n,"If",(function(){return l["If"]})),a.o(l,"Switch")&&a.d(n,"Switch",(function(){return l["Switch"]})),a.o(l,"Toggle")&&a.d(n,"Toggle",(function(){return l["Toggle"]})),a.d(n,"If",(function(){return t["a"]})),a.d(n,"Switch",(function(){return t["b"]})),a.d(n,"Toggle",(function(){return t["c"]}));var c=t["d"];c.If=t["a"],c.Toggle=t["c"],c.Switch=t["b"],n["default"]=c},lCdt:function(e,n,a){"use strict";a("iCBh"),a("WwnQ")},ogwW:function(e,n,a){"use strict";a("iCBh"),a("xUPd")},"pF+1":function(e,n,a){},quBZ:function(e,n){},rbUi:function(e,n,a){},t1JD:function(e,n,a){"use strict";a.d(n,"a",(function(){return C}));a("iCBh"),a("rbUi");var t=a("k1fw"),l=a("tJVT"),c=a("PpiC"),r=a("q1tI"),s=a.n(r),i=a("jNhd"),o=a("hEdC"),d=a("wEEd"),m=a("lgaZ"),u=a("Rz6r"),h=a("kr9X"),b=a("uVtn"),f=a("TSYQ"),k=a.n(f),p=e=>{var n=e.closable,a=void 0===n||n,r=e.desc,f=e.message,p=e.status,C=e.fixedTop,E=e.right,v=Object(c["a"])(e,["closable","desc","message","status","fixedTop","right"]),_=Object(i["a"])(),y=Object(l["a"])(_,2),g=y[0],w=y[1].height,N=Object(m["f"])(v,!0,{valueKey:"show",triggerKey:"onClose"}),O=Object(l["a"])(N,2),x=O[0],j=O[1],I=Object(d["d"])(()=>({height:"auto",config:Object(t["a"])(Object(t["a"])({},d["b"].stiff),{},{clamp:!0})})),B=Object(l["a"])(I,2),S=B[0],T=B[1];Object(o["a"])(()=>{T({height:x?w+36:0})},[x,w]);var D=u["lineStatusIcons"][p];return s.a.createElement(d["a"].div,{style:S,className:k()("m78-notice-bar",p&&"__".concat(p),{__fixed:C})},s.a.createElement("div",{ref:g,className:"m78-notice-bar_wrap"},s.a.createElement(h["If"],{when:p},()=>s.a.createElement("div",{className:"m78-notice-bar_left"},s.a.createElement(D,null))),s.a.createElement("div",{className:"m78-notice-bar_cont"},s.a.createElement("div",{className:"m78-notice-bar_title ellipsis"},f),s.a.createElement(h["If"],{when:r},s.a.createElement("div",{className:"m78-notice-bar_desc"},r))),s.a.createElement("div",{className:"m78-notice-bar_right"},E,s.a.createElement(h["If"],{when:a&&!E},s.a.createElement(b["default"],{className:"m78-notice-bar_close",icon:!0,size:"mini",onClick:()=>{j(!1)}},s.a.createElement(u["CloseOutlined"],null))))))},C=p},tU1D:function(e,n,a){},uVtn:function(e,n,a){"use strict";a("QjBK"),a("BO4J");var t=a("B68Z");a.d(n,"default",(function(){return t["a"]}))},xUPd:function(e,n,a){}}]);