(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[60,59],{"1p7j":function(e,n,t){"use strict";t("GTID"),t("TcRa");var l=t("ZSGz");t.d(n,"default",(function(){return l["a"]}))},B68Z:function(e,n,t){"use strict";var l=t("0Owb"),a=t("PpiC"),o=t("k1fw"),r=t("q1tI"),i=t.n(r),c=t("1p7j"),s=(t("iCBh"),t("K3qG")),m=t("TSYQ"),u=t.n(m),d={large:18,small:14,mini:12},f=/.?(Outlined|Filled|TwoTone|Icon)$/;function k(e){return Object(s["f"])(e)?e.map((n,t)=>{var l,a,r,c=null===(l=n)||void 0===l?void 0:l.type,s="";c&&(s=(null===(a=c.render)||void 0===a?void 0:a.displayName)||(null===(r=c.render)||void 0===r?void 0:r.name)||c.name);if(s&&i.a.isValidElement(n)&&f.test(s)){var m={marginLeft:8,marginRight:8};0===t&&(m={marginRight:8}),t===e.length-1&&(m={marginLeft:8});var u=Object(o["a"])(Object(o["a"])({},n.props.style),m);return i.a.cloneElement(n,{style:u,key:t})}return n}):e}var h=e=>{var n=e.size,t=e.color,o=e.circle,s=e.outline,m=e.block,f=e.link,h=e.icon,v=e.disabled,b=e.loading,w=e.md,g=e.win,S=e.children,E=e.className,p=e.href,_=Object(a["a"])(e,["size","color","circle","outline","block","link","icon","disabled","loading","md","win","children","className","href"]),N=u()(E,"fr-btn","fr-effect",{["__".concat(t)]:t,["__".concat(n)]:n,__circle:o,__outline:s,__block:m,__link:f,__icon:h,__md:w,__win:g,__light:!!t&&!f&&!h,__disabled:v||b}),O=Object(r["useMemo"])(()=>k(S),[S]);return i.a.createElement("button",Object(l["a"])({type:"button"},_,{className:N,disabled:!!v||!!b}),f&&i.a.createElement("a",{className:"fr-btn__link",href:p}),i.a.createElement(c["default"],{style:{fontSize:n?d[n]:14,color:"#333"},show:!!b,full:!0,text:""}),i.a.createElement("span",null,O))};n["a"]=h},BO4J:function(e,n){},GTID:function(e,n,t){"use strict";t("iCBh"),t("pF+1")},"K+nK":function(e,n){function t(e){return e&&e.__esModule?e:{default:e}}e.exports=t},QjBK:function(e,n,t){"use strict";t("iCBh"),t("tU1D")},TcRa:function(e,n){},ZSGz:function(e,n,t){"use strict";var l=t("0Owb"),a=t("PpiC"),o=t("q1tI"),r=t.n(o),i=t("Rz6r"),c=t("tJVT"),s=t("lgaZ");function m(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,t=arguments.length>2?arguments[2]:void 0,l=t||{},a=l.disabled,r=l.deps,i=void 0===r?[]:r,m=l.extraDelay,u=void 0===m?0:m,d=Object(o["useState"])(!!a&&e),f=Object(c["a"])(d,2),k=f[0],h=f[1],v=Object(s["h"])({toggleTimer:null});return Object(o["useEffect"])(()=>{if(n&&!a){if(e!==k)return v.toggleTimer=setTimeout(()=>{h(e)},n+u),()=>{v.toggleTimer&&clearTimeout(v.toggleTimer)}}else h(e)},[e,...i]),k}var u=t("9RZ+"),d=t("TSYQ"),f=t.n(d),k=e=>{var n=e.size,t=e.inline,o=e.text,c=void 0===o?"\u52a0\u8f7d\u4e2d":o,s=e.full,d=e.dark,k=e.show,h=void 0===k||k,v=e.className,b=e.loadingDelay,w=void 0===b?0:b,g=Object(a["a"])(e,["size","inline","text","full","dark","show","className","loadingDelay"]),S=m(h,w);return r.a.createElement(u["a"],Object(l["a"])({toggle:S,type:"fade",mountOnEnter:!0,unmountOnExit:!0},g,{config:u["c"].stiff,className:f()(v,"fr-spin",{["__".concat(n)]:!!n,__inline:t,__full:s,__dark:d})}),r.a.createElement(i["WindmillIcon"],{className:"fr-spin_unit"}),c&&r.a.createElement("span",{className:"fr-spin_text"},c,r.a.createElement("span",{className:"fr-spin_ellipsis"})))};n["a"]=k},krlp:function(e,n,t){"use strict";t.r(n);var l=t("tJVT"),a=t("q1tI"),o=t.n(a),r=(t("iCBh"),t("r3MW"),t("0Owb")),i=t("PpiC"),c=t("TSYQ"),s=t.n(c);function m(e){var n=u(0,80);return"".concat(n+e,"%")}function u(e,n){return Math.floor(Math.random()*(n-e)+e)}var d=e=>{var n=e.width,t=e.lineNumber,l=void 0===t?6:t,r=e.shadow,i=void 0===r||r,c=e.backgroundColor,d=void 0===c?"#fff":c,f=e.circle,k=e.img;function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,n=k&&l<4?4:e;return Array.from({length:n}).map((e,t)=>{var l=n>1&&t===n-1;return o.a.createElement("div",{key:t,className:"fr-skeleton_line-box"},Array.from({length:l?3:5}).map((e,n)=>o.a.createElement("div",{key:n,className:"fr-skeleton_line fr-skeleton_animate",style:{width:l?"".concat(u(8,36),"%"):m(10)}})))})}var v=Object(a["useMemo"])(()=>h(l),[l]);return o.a.createElement("div",{className:s()("fr-skeleton",{__shadow:i}),style:{width:n,backgroundColor:d}},k&&o.a.createElement("div",{className:s()("fr-skeleton_img",{__circle:!!f}),style:{backgroundColor:d}}),v)},f=e=>{var n=e.width,t=e.height,l=e.shadow,a=void 0===l||l,r=e.backgroundColor,i=void 0===r?"#fff":r;return o.a.createElement("div",{className:s()("fr-skeleton fr-skeleton_banner",{__shadow:a}),style:{width:n,backgroundColor:i}},o.a.createElement("div",{className:"fr-skeleton_banner-main fr-skeleton_animate",style:{height:t}}),o.a.createElement(d,{show:!0,lineNumber:2}))};function k(e){var n=n=>{var t=n.number,l=void 0===t?1:t,a=n.show,c=void 0===a||a,s=n.children,m=void 0===s?null:s,u=Object(i["a"])(n,["number","show","children"]),d=()=>Array.from({length:l}).map((n,t)=>o.a.createElement(e,Object(r["a"])({key:t},u)));return c?d():m};return n}var h=k(d),v=k(f),b=Object.assign(h,{BannerSkeleton:v,SkeletonFactory:k}),w=b,g=t("uVtn"),S=()=>{var e=o.a.useState(!0),n=Object(l["a"])(e,2),t=n[0],a=n[1];return o.a.createElement("div",null,o.a.createElement(g["default"],{className:"mb-24",onClick:()=>a(e=>!e)},"toggle"),o.a.createElement(w,{show:t},o.a.createElement("div",null,"Skeleton 1")),o.a.createElement(w,{show:t,img:!0},o.a.createElement("div",null,"Skeleton 2")),o.a.createElement(w,{show:t,img:!0,lineNumber:4,circle:!0},o.a.createElement("div",null,"Skeleton 3")),o.a.createElement(w,{show:t,img:!0,lineNumber:4},o.a.createElement("div",null,"Skeleton 4")),o.a.createElement(w,{show:t,lineNumber:5},o.a.createElement("div",null,"Skeleton 5")),o.a.createElement(w.BannerSkeleton,{show:t}))};n["default"]=S},"pF+1":function(e,n,t){},r3MW:function(e,n,t){},tU1D:function(e,n,t){},tgau:function(e,n,t){"use strict";t.r(n);var l=t("0Owb"),a=t("q1tI"),o=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),i=t.n(r),c=t("5Yjd"),s=t.n(c),m=o.a.memo((function(){var e=t("K+nK"),n=e(t("q1tI")),l=e(t("krlp")),a=function(){return n["default"].createElement(l["default"],null)};return n["default"].createElement(a)}));n["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"skeleton-\u62bd\u5c49"},o.a.createElement("a",{"aria-hidden":"true",href:"#skeleton-\u62bd\u5c49"},o.a.createElement("span",{className:"icon icon-link"})),"Skeleton \u62bd\u5c49"),o.a.createElement("p",null,"\u4e0e",o.a.createElement("code",null,"Spin"),"\u7c7b\u4f3c\uff0c\u7528\u4e8e\u5bf9\u67d0\u4e2a\u533a\u57df\u5143\u7d20\u7684\u5360\u4f4d\u52a0\u8f7d\u63d0\u9192\u3002"),o.a.createElement("h2",{id:"\u57fa\u7840\u793a\u4f8b"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u7840\u793a\u4f8b"},o.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u793a\u4f8b")),o.a.createElement(s.a,Object(l["a"])({source:{tsx:"import React from 'react';\nimport Skeleton from '@lxjx/fr/lib/skeleton';\nimport Button from '@lxjx/fr/lib/button';\n\nconst Demo = () => {\n  const [show, setShow] = React.useState(true);\n\n  return (\n    <div>\n      <Button className=\"mb-24\" onClick={() => setShow(p => !p)}>\n        toggle\n      </Button>\n      <Skeleton show={show}>\n        <div>Skeleton 1</div>\n      </Skeleton>\n      <Skeleton show={show} img>\n        <div>Skeleton 2</div>\n      </Skeleton>\n      <Skeleton show={show} img lineNumber={4} circle>\n        <div>Skeleton 3</div>\n      </Skeleton>\n      <Skeleton show={show} img lineNumber={4}>\n        <div>Skeleton 4</div>\n      </Skeleton>\n      <Skeleton show={show} lineNumber={5}>\n        <div>Skeleton 5</div>\n      </Skeleton>\n      <Skeleton.BannerSkeleton show={show} />\n    </div>\n  );\n};\n\nexport default Demo;\n",jsx:"import React from 'react';\nimport Skeleton from '@lxjx/fr/lib/skeleton';\nimport Button from '@lxjx/fr/lib/button';\n\nconst Demo = () => {\n  const [show, setShow] = React.useState(true);\n  return (\n    <div>\n      <Button className=\"mb-24\" onClick={() => setShow(p => !p)}>\n        toggle\n      </Button>\n      <Skeleton show={show}>\n        <div>Skeleton 1</div>\n      </Skeleton>\n      <Skeleton show={show} img>\n        <div>Skeleton 2</div>\n      </Skeleton>\n      <Skeleton show={show} img lineNumber={4} circle>\n        <div>Skeleton 3</div>\n      </Skeleton>\n      <Skeleton show={show} img lineNumber={4}>\n        <div>Skeleton 4</div>\n      </Skeleton>\n      <Skeleton show={show} lineNumber={5}>\n        <div>Skeleton 5</div>\n      </Skeleton>\n      <Skeleton.BannerSkeleton show={show} />\n    </div>\n  );\n};\n\nexport default Demo;\n"}},{path:"/_demos/demo-8",dependencies:{},files:{}}),o.a.createElement(m,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"api"},o.a.createElement("a",{"aria-hidden":"true",href:"#api"},o.a.createElement("span",{className:"icon icon-link"})),"API"),o.a.createElement("p",null,o.a.createElement("strong",null,o.a.createElement("code",null,"Skeleton"))),o.a.createElement(i.a,{code:"interface SkeletonProps extends SkeletonFactoryProps {\n  /** 6 | \u6587\u672c\u884c\u7684\u6570\u91cf */\n  lineNumber?: number;\n  /** \u9ad8\u5ea6 */\n  height?: number;\n  /** \u5bbd\u5ea6 */\n  width?: number;\n  /** #fff | \u5305\u88f9\u5143\u7d20\u80cc\u666f\u8272 */\n  backgroundColor?: string;\n  /** true | \u5305\u88f9\u5143\u7d20\u662f\u5426\u6709\u9634\u5f71 */\n  shadow?: boolean;\n  /** false | \u5706\u89d2\u56fe\u7247,\u53ea\u5728\u4f20img\u65f6\u751f\u6548 */\n  circle?: boolean;\n  /** \u663e\u793a\u56fe\u7247\u5360\u4f4d\u56fe\uff0c\u9ed8\u8ba4false */\n  img?: boolean;\n}\n",lang:"tsx"}),o.a.createElement("p",null,o.a.createElement("strong",null,o.a.createElement("code",null,"BannerSkeleton"))),o.a.createElement(i.a,{code:"Omit<SkeletonProps, 'circle' | 'img' | 'lineNumber'>\n",lang:"tsx"}),o.a.createElement("p",null,o.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),o.a.createElement(i.a,{code:"interface SkeletonFactoryProps {\n  /** \u8981\u6e32\u67d3\u7684\u9aa8\u67b6\u603b\u6570 */\n  number?: number;\n  /** \u663e\u793a/\u9690\u85cf\u9aa8\u67b6 */\n  show?: boolean;\n\n  children?: React.ReactNode;\n}\n",lang:"tsx"})))}},uVtn:function(e,n,t){"use strict";t("QjBK"),t("BO4J");var l=t("B68Z");t.d(n,"default",(function(){return l["a"]}))}}]);