(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{Q4Of:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),l=a("dEAq"),c=a("0zqC"),o=a("ZpkN"),s=a("Rsk4"),i=r.a.memo(s["default"]["result-demo"].component);n["default"]=e=>(r.a.useEffect(()=>{(null===e||void 0===e?void 0:e.location.hash)&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"result-\u7ed3\u679c"},r.a.createElement(l["AnchorLink"],{to:"#result-\u7ed3\u679c","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Result \u7ed3\u679c"),r.a.createElement("p",null,"\u7528\u4e8e\u5bf9\u7528\u6237\u64cd\u4f5c\u7ed3\u679c\u8fdb\u884c\u53cd\u9988\u6216\u63d0\u793a\u8fdb\u884c\u67d0\u7c7b\u64cd\u4f5c"),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement(l["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),r.a.createElement("p",null,"message \u7ec4\u4ef6\u57fa\u4e8e render-api \u5b9e\u73b0\uff0c\u5305\u542b\u8f7b\u63d0\u793a\u3001\u52a0\u8f7d\u4e2d\u3001\u6d88\u606f\u6846\u4e09\u79cd\u7528\u6cd5")),r.a.createElement(c["default"],s["default"]["result-demo"].previewerProps,r.a.createElement(i,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(o["a"],{code:"type ResultTypes =\n  | 'success'\n  | 'error'\n  | 'warning'\n  | 'waiting'\n  | 'notFound'\n  | 'serverError'\n  | 'notAuth';\n\nexport interface ResultProps {\n  /** true | \u7ec4\u4ef6\u5f00\u5173\uff0c\u4efb\u610ffalsy\u6216truthy\u503c */\n  show?: boolean;\n  /** 'success' | \u7c7b\u578b */\n  type?: ResultTypes;\n  /** '\u64cd\u4f5c\u6210\u529f' | \u6807\u9898 */\n  title?: string;\n  /** \u63cf\u8ff0 */\n  desc?: string;\n  /** \u5b50\u5143\u7d20\u4f1a\u4f5c\u4e3a\u8bf4\u660e\u533a\u57df\u663e\u793a */\n  children?: React.ReactNode;\n  /** \u64cd\u4f5c\u533a\uff0c\u4e00\u822c\u4f1a\u4f20\u9012\u4e00\u7ec4\u6309\u94ae\u6216\u8fde\u63a5 */\n  actions?: React.ReactNode;\n  /** false | \u6d6e\u52a8\u6a21\u5f0f\uff0c\u8131\u79bb\u6587\u6863\u6d41\u5168\u5c4f\u8fdb\u884c\u5c55\u793a */\n  fixed?: boolean;\n}",lang:"tsx"})))))}}]);