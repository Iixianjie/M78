(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[175],{Ink9:function(e,a,t){"use strict";t.d(a,"a",(function(){return n})),t.d(a,"b",(function(){return r}));var n={padding:"4px 12px",border:"1px solid #eee"},r=()=>new Promise((e,a)=>{setTimeout(()=>{var t=Math.random();if(t<.3)a(new Error("\u52a0\u8f7d\u5f02\u5e38"));else{var n=Array.from({length:Math.random()>.5?0:8}).map(()=>Math.random());e(n)}},1e3)})},jgEu:function(e,a,t){"use strict";t.r(a);var n=t("0Owb"),r=t("q1tI"),l=t.n(r),o=t("kr9X"),c=t("zdPv"),s=t("uVtn"),m=t("Ink9"),d=()=>{var e,a=Object(c["useFetch"])(m["b"],{timeout:Math.random()>.7?500:8e3});return l.a.createElement("div",null,l.a.createElement("div",{className:"mb-12"},l.a.createElement(s["a"],{disabled:a.loading,onClick:a.send},a.loading?"\u52a0\u8f7d\u4e2d":"\u53d1\u8d77\u8bf7\u6c42")),l.a.createElement(o["default"],Object(n["a"])({hasData:null===(e=a.data)||void 0===e?void 0:e.length},a,{customLoading:l.a.createElement("span",null,"\u23f3 \u52a0\u8f7d\u4e2d..."),customNotice:(e,t)=>l.a.createElement("div",null,l.a.createElement("h3",{className:"color-error"},e,l.a.createElement("span",{className:"mlr-12 color-second fs"},t),l.a.createElement(s["a"],{className:"fs",onClick:a.send,size:"small",color:"primary",text:!0},"\u91cd\u8bd5"))),customEmpty:l.a.createElement("span",null,"\ud83d\ude10 \u6ca1\u6709\u6570\u636e\u5594~")}),()=>l.a.createElement("ul",null,a.data.map(e=>l.a.createElement("li",{key:e,style:m["a"]},"rand num: ",e)))))};a["default"]=d}}]);