(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[119,118],{"1p7j":function(e,t,n){"use strict";n("GTID"),n("TcRa");var a=n("ZSGz");n.d(t,"default",(function(){return a["a"]}))},B68Z:function(e,t,n){"use strict";var a=n("0Owb"),i=n("PpiC"),r=n("k1fw"),s=n("q1tI"),l=n.n(s),o=n("1p7j"),u=(n("iCBh"),n("K3qG")),c=n("TSYQ"),m=n.n(c),d={large:18,small:14,mini:12},p=/.?(Outlined|Filled|TwoTone|Icon)$/;function f(e){return Object(u["h"])(e)?e.map((t,n)=>{var a,i,s,o=null===(a=t)||void 0===a?void 0:a.type,u="";o&&(u=(null===(i=o.render)||void 0===i?void 0:i.displayName)||(null===(s=o.render)||void 0===s?void 0:s.name)||o.name);if(u&&l.a.isValidElement(t)&&p.test(u)){var c={marginLeft:8,marginRight:8};0===n&&(c={marginRight:8}),n===e.length-1&&(c={marginLeft:8});var m=Object(r["a"])(Object(r["a"])({},t.props.style),c);return l.a.cloneElement(t,{style:m,key:n})}return t}):e}var b=e=>{var t=e.size,n=e.color,r=e.circle,u=e.outline,c=e.block,p=e.link,b=e.icon,v=e.disabled,h=e.loading,g=e.md,q=e.win,E=e.children,x=e.className,w=e.href,_=Object(i["a"])(e,["size","color","circle","outline","block","link","icon","disabled","loading","md","win","children","className","href"]),y=m()(x,"m78-btn","m78-effect",{["__".concat(n)]:n,["__".concat(t)]:t,__circle:r,__outline:u,__block:c,__link:p,__icon:b,__md:g,__win:q,__light:!!n&&!p&&!b,__disabled:v||h}),j=Object(s["useMemo"])(()=>f(E),[E]);return l.a.createElement("button",Object(a["a"])({type:"button"},_,{className:y,disabled:!!v||!!h}),p&&l.a.createElement("a",{className:"m78-btn__link",href:w}),l.a.createElement(o["default"],{style:{fontSize:t?d[t]:14,color:"#333"},show:!!h,full:!0,text:""}),l.a.createElement("span",null,j))};t["a"]=b},BO4J:function(e,t){},Ctpu:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n("k1fw"),i=n("q1tI"),r=n.n(i),s=n("1p7j"),l=n("K3qG"),o=n("uVtn"),u=n("t1JD"),c=n("efh2"),m=e=>{var t=e.children,n=e.send,i=e.loadingFull,m=e.loading,d=e.error,p=e.timeout,f=e.hasData,b=e.forceRenderChild,v=e.loadingStyle,h=e.emptyText,g=void 0===h?"\u6682\u65e0\u6570\u636e":h,q=()=>Object(l["k"])(t)?t():t;if(m)return r.a.createElement(r.a.Fragment,null,r.a.createElement(s["default"],{className:"ptb-12",style:Object(a["a"])({width:"100%"},v),full:i,loadingDelay:300}),(b||i)&&q());var E=n?r.a.createElement(o["default"],{onClick:n,color:"primary",link:!0,size:"small",style:{top:-1}},"\u70b9\u51fb\u91cd\u65b0\u52a0\u8f7d"):null;return d||p?r.a.createElement(u["a"],{status:"error",message:p?"\u8bf7\u6c42\u8d85\u65f6":"\u6570\u636e\u52a0\u8f7d\u5931\u8d25",desc:r.a.createElement("div",null,(null===d||void 0===d?void 0:d.message)&&r.a.createElement("div",{className:"color-error mb-8"},d.message),r.a.createElement("span",null,"\u8bf7\u7a0d\u540e\u91cd\u8bd5",n?"\u6216":null," "),E)}):f||m?q():r.a.createElement(c["default"],{desc:g},E)},d=e=>{var t=e.when,n=e.children;t=!!t;var a=Object(l["k"])(n);return t&&(a?n():n)},p=e=>{var t=e.when,n=e.children;function a(){return r.a.cloneElement(n,{style:{display:"none"}})}return t?n:a()},f=e=>{var t=e.children,n=r.a.Children.toArray(t),a=n.reduce((e,t)=>{if(t.type!==d&&t.type!==p)return e;var n="when"in t.props,a=!!t.props.when;return n||e.notWhen||(e.notWhen=r.a.cloneElement(t,{when:!0})),a&&!e.showEl&&(e.showEl=t),e},{showEl:null,notWhen:null});return a.showEl||a.notWhen||null};t["d"]=m},GTID:function(e,t,n){"use strict";n("iCBh"),n("pF+1")},HWsh:function(e,t,n){},Jiyh:function(e,t){},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},KCwa:function(e,t,n){e.exports=n.p+"static/4.963a5903.jpg"},LUSG:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("tJVT"),i=n("q1tI"),r=n("lgaZ");function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=arguments.length>2?arguments[2]:void 0,s=n||{},l=s.disabled,o=s.deps,u=void 0===o?[]:o,c=s.extraDelay,m=void 0===c?0:c,d=s.trailing,p=s.leading,f=void 0===p||p,b=!t||l||!d&&!f,v=Object(i["useState"])(!(!b&&f)&&e),h=Object(a["a"])(v,2),g=h[0],q=h[1],E=Object(r["j"])({toggleTimer:null});return Object(i["useEffect"])(()=>{if(!b&&e!==g){if((!e||f)&&(e||d))return E.toggleTimer=setTimeout(()=>{q(e)},t+m),()=>{E.toggleTimer&&clearTimeout(E.toggleTimer)};q(e)}},[e,...u]),b?e:g}},O60i:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=i.a.createContext({});function s(){return Object(a["useContext"])(r)}t["a"]={context:r,Provider:r.Provider,Consumer:r.Consumer,useConfig:s}},Qa2S:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=(n("iCBh"),n("HWsh"),n("tJVT")),s=n("jNhd"),l=n("kr9X"),o=n("TSYQ"),u=n.n(o),c=e=>{var t=e.watermark,n=e.html,a=e.content,o=e.style,c=e.className,m=Object(s["a"])(),d=Object(r["a"])(m,2),p=d[0],f=d[1],b=f.width,v=f.height,h=Math.ceil(v/240)+4,g=Math.ceil(b/300);return i.a.createElement("div",{ref:p,className:u()("m78-article-box",c),style:o},i.a.createElement(l["If"],{when:n},()=>i.a.createElement("div",{className:"m78-article-box_html",dangerouslySetInnerHTML:{__html:n}})),i.a.createElement(l["If"],{when:a&&!n},i.a.createElement("div",null,a)),i.a.createElement(l["If"],{when:t},()=>i.a.createElement("div",{className:"m78-article-box_watermark"},Array.from({length:h}).map((e,n)=>i.a.createElement("div",{className:"m78-article-box_watermark_item",key:n},Array.from({length:g}).map((e,n)=>i.a.createElement("span",{key:n},t)))))))},m=c,d=n("KCwa"),p=n.n(d),f='\n  <div>\n    <h2><center>\u4e00\u7bc7\u5173\u4e8e\u6a58\u5b50\u7684\u6587\u7ae0</center></h2>\n  \n    <img src="'.concat(p.a,'" />\n    \n    <h3 style="margin-top: 16px">\u6a58\u5b50\u7684\u8425\u517b\u6210\u5206:</h3>\n    <table border="1">\n      <tr>\n        <td>iam. Accusamus deciatis, sed.</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sint, ven</td>\n        <td>niti dicta eaque facilis fugiat, ipsum mollitia nisi porro possimus q</td>\n        <td>leuod recusandae sequi sit voluptate. Ipsum perspi</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n    </table>\n    \n    <h3 style="margin-top: 16px">\u5386\u53f2:</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n    <img src="').concat(p.a,'" style="width: 250px;float: left;margin-right: 12px" />\n    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit quo rerum? Ab accusamus consequatur culpa cumque debitis, dolorum eum exercitationem in ipsa iure quod rem saepe sed sit ullam.</span><span>Dicta, incidunt iusto libero neque omnis quas reprehenderit unde! Aspernatur beatae cumque eaque esse ex, fugit laboriosam laborum libero numquam officia pariatur perferendis placeat quidem sapiente suscipit unde, vero voluptate?</span><span>Ad aliquid esse fugiat fugit numquam rem, reprehenderit totam vitae. Hic nobis officiis quis quisquam repellat. Adipisci, dolore eum excepturi inventore libero numquam odit, pariatur quia repellat repellendus sunt voluptas!</span><span>Dicta iure odit officiis perferendis tempore. A ad aliquam animi aspernatur at delectus dolor, nobis quisquam, quos reiciendis saepe sunt tenetur vero? Doloribus inventore natus neque reprehenderit velit vero voluptatem!</span><span>Accusamus dolorem doloribus esse facilis impedit natus neque nulla provident, quia ratione rem rerum voluptate! Ab aliquam amet cum ea id illum magni molestiae quia repellendus, sed sit totam vero!</span></p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n  </div>\n'),b=()=>i.a.createElement("div",null,i.a.createElement(m,{watermark:"\u6211\u662f\u6c34\u5370",html:f}));t["default"]=b},QjBK:function(e,t,n){"use strict";n("iCBh"),n("tU1D")},TcRa:function(e,t){},WwnQ:function(e,t,n){},YeeV:function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),i=n("q1tI"),r=n.n(i),s=(n("B2uJ"),n("+su7"),n("qOys")),l=n.n(s),o=n("5Yjd"),u=n.n(o),c=r.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("Qa2S")),i=function(){return t["default"].createElement(a["default"],null)};return t["default"].createElement(i)}));t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"articlebox-\u5bcc\u6587\u672c\u76d2\u5b50"},r.a.createElement("a",{"aria-hidden":"true",href:"#articlebox-\u5bcc\u6587\u672c\u76d2\u5b50"},r.a.createElement("span",{className:"icon icon-link"})),"ArticleBox \u5bcc\u6587\u672c\u76d2\u5b50"),r.a.createElement("p",null,"\u4e00\u4e2a\u7528\u4e8e\u5c55\u793a\u5bcc\u6587\u672c\u7684\u5bb9\u5668"),r.a.createElement("p",null,"\u4e0e\u76f4\u63a5\u6e32\u67d3\u7684\u533a\u522b\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5bf9\u56fe\u7247\u3001\u8868\u683c\u7b49\u505a\u4e86\u9650\u5236\u5904\u7406\uff0c\u53ef\u4ee5\u9632\u6b62\u8fc7\u5bbd\u7684\u56fe\u7247\u8d85\u51fa\u5bb9\u5668\u7834\u574f\u6837\u5f0f\uff0c\u5e76\u4e14\u53ef\u4ee5\u5f88\u597d\u7684\u652f\u6301\u79fb\u52a8\u7aef"),r.a.createElement("li",null,"\u6dfb\u52a0\u6c34\u5370")),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),r.a.createElement(u.a,Object(a["a"])({source:{tsx:'import React from \'react\';\nimport ArticleBox from \'m78/article-box\';\nimport \'m78/article-box/style\';\n\nimport img from \'@/mock/img/4.jpg\';\n\nconst htmlStr = `\n  <div>\n    <h2><center>\u4e00\u7bc7\u5173\u4e8e\u6a58\u5b50\u7684\u6587\u7ae0</center></h2>\n  \n    <img src="${img}" />\n    \n    <h3 style="margin-top: 16px">\u6a58\u5b50\u7684\u8425\u517b\u6210\u5206:</h3>\n    <table border="1">\n      <tr>\n        <td>iam. Accusamus deciatis, sed.</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sint, ven</td>\n        <td>niti dicta eaque facilis fugiat, ipsum mollitia nisi porro possimus q</td>\n        <td>leuod recusandae sequi sit voluptate. Ipsum perspi</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n    </table>\n    \n    <h3 style="margin-top: 16px">\u5386\u53f2:</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n    <img src="${img}" style="width: 250px;float: left;margin-right: 12px" />\n    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit quo rerum? Ab accusamus consequatur culpa cumque debitis, dolorum eum exercitationem in ipsa iure quod rem saepe sed sit ullam.</span><span>Dicta, incidunt iusto libero neque omnis quas reprehenderit unde! Aspernatur beatae cumque eaque esse ex, fugit laboriosam laborum libero numquam officia pariatur perferendis placeat quidem sapiente suscipit unde, vero voluptate?</span><span>Ad aliquid esse fugiat fugit numquam rem, reprehenderit totam vitae. Hic nobis officiis quis quisquam repellat. Adipisci, dolore eum excepturi inventore libero numquam odit, pariatur quia repellat repellendus sunt voluptas!</span><span>Dicta iure odit officiis perferendis tempore. A ad aliquam animi aspernatur at delectus dolor, nobis quisquam, quos reiciendis saepe sunt tenetur vero? Doloribus inventore natus neque reprehenderit velit vero voluptatem!</span><span>Accusamus dolorem doloribus esse facilis impedit natus neque nulla provident, quia ratione rem rerum voluptate! Ab aliquam amet cum ea id illum magni molestiae quia repellendus, sed sit totam vero!</span></p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n  </div>\n`;\n\nconst Demo = () => (\n  <div>\n    <ArticleBox watermark="\u6211\u662f\u6c34\u5370" html={htmlStr} />\n  </div>\n);\n\nexport default Demo;\n',jsx:'import React from \'react\';\nimport ArticleBox from \'m78/article-box\';\nimport \'m78/article-box/style\';\nimport img from \'@/mock/img/4.jpg\';\n\nconst htmlStr = `\n  <div>\n    <h2><center>\u4e00\u7bc7\u5173\u4e8e\u6a58\u5b50\u7684\u6587\u7ae0</center></h2>\n  \n    <img src="${img}" />\n    \n    <h3 style="margin-top: 16px">\u6a58\u5b50\u7684\u8425\u517b\u6210\u5206:</h3>\n    <table border="1">\n      <tr>\n        <td>iam. Accusamus deciatis, sed.</td>\n        <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sint, ven</td>\n        <td>niti dicta eaque facilis fugiat, ipsum mollitia nisi porro possimus q</td>\n        <td>leuod recusandae sequi sit voluptate. Ipsum perspi</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n      <tr>\n        <td>1</td>\n        <td>2</td>\n        <td>3</td>\n        <td>4</td>\n      </tr>\n    </table>\n    \n    <h3 style="margin-top: 16px">\u5386\u53f2:</h3>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n    <img src="${img}" style="width: 250px;float: left;margin-right: 12px" />\n    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit quo rerum? Ab accusamus consequatur culpa cumque debitis, dolorum eum exercitationem in ipsa iure quod rem saepe sed sit ullam.</span><span>Dicta, incidunt iusto libero neque omnis quas reprehenderit unde! Aspernatur beatae cumque eaque esse ex, fugit laboriosam laborum libero numquam officia pariatur perferendis placeat quidem sapiente suscipit unde, vero voluptate?</span><span>Ad aliquid esse fugiat fugit numquam rem, reprehenderit totam vitae. Hic nobis officiis quis quisquam repellat. Adipisci, dolore eum excepturi inventore libero numquam odit, pariatur quia repellat repellendus sunt voluptas!</span><span>Dicta iure odit officiis perferendis tempore. A ad aliquam animi aspernatur at delectus dolor, nobis quisquam, quos reiciendis saepe sunt tenetur vero? Doloribus inventore natus neque reprehenderit velit vero voluptatem!</span><span>Accusamus dolorem doloribus esse facilis impedit natus neque nulla provident, quia ratione rem rerum voluptate! Ab aliquam amet cum ea id illum magni molestiae quia repellendus, sed sit totam vero!</span></p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus beatae dolorum, ea enim eos exercitationem libero molestiae, natus nobis officiis pariatur quaerat quas ratione repellendus sit tempora unde vel, vitae.</p>\n  </div>\n`;\n\nconst Demo = () => (\n  <div>\n    <ArticleBox watermark="\u6211\u662f\u6c34\u5370" html={htmlStr} />\n  </div>\n);\n\nexport default Demo;\n'}},{path:"/_demos/article-box-demo",dependencies:{},files:{}}),r.a.createElement(c,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"props"},r.a.createElement("a",{"aria-hidden":"true",href:"#props"},r.a.createElement("span",{className:"icon icon-link"})),"props"),r.a.createElement(l.a,{code:"interface ArticleBoxProps extends ComponentBaseProps {\n  /** \u5408\u6cd5\u7684html\u5b57\u7b26\u4e32 */\n  html?: string;\n  /** \u53ef\u4ee5\u4f20\u5165react\u8282\u70b9\u4ee3\u66ffhtml */\n  content?: React.ReactNode;\n  /** \u6c34\u5370\u5185\u5bb9\uff0c\u4e0d\u4f20\u65f6\u65e0\u6c34\u5370 */\n  watermark?: React.ReactNode;\n}\n",lang:"tsx"}),r.a.createElement("p",null,r.a.createElement("strong",null,"\u76f8\u5173\u63a5\u53e3")),r.a.createElement(l.a,{code:"interface ComponentBaseProps {\n  /** \u5305\u88f9\u5143\u7d20\u7684\u7c7b\u540d */\n  className?: string;\n  /** \u5305\u88f9\u5143\u7d20\u6837\u5f0f */\n  style?: React.CSSProperties;\n}\n",lang:"tsx"})))}},ZSGz:function(e,t,n){"use strict";var a=n("0Owb"),i=n("PpiC"),r=n("q1tI"),s=n.n(r),l=n("Rz6r"),o=n("LUSG"),u=n("9RZ+"),c=n("TSYQ"),m=n.n(c),d=e=>{var t=e.size,n=e.inline,r=e.text,c=void 0===r?"\u52a0\u8f7d\u4e2d":r,d=e.full,p=e.dark,f=e.show,b=void 0===f||f,v=e.className,h=e.loadingDelay,g=void 0===h?0:h,q=Object(i["a"])(e,["size","inline","text","full","dark","show","className","loadingDelay"]),E=Object(o["a"])(b,g);return s.a.createElement(u["a"],Object(a["a"])({toggle:E,type:"fade",mountOnEnter:!0,unmountOnExit:!0},q,{config:u["c"].stiff,className:m()(v,"m78-spin",{["__".concat(t)]:!!t,__inline:n,__full:d,__dark:p})}),s.a.createElement(l["WindmillIcon"],{className:"m78-spin_unit"}),c&&s.a.createElement("span",{className:"m78-spin_text"},c,s.a.createElement("span",{className:"m78-spin_ellipsis"})))};t["a"]=d},bf2K:function(e,t){},bgvL:function(e,t,n){},cDKg:function(e,t,n){"use strict";n("iCBh"),n("bgvL")},eTaW:function(e,t,n){"use strict";var a=n("0Owb"),i=n("PpiC"),r=n("q1tI"),s=n.n(r),l=n("Rz6r"),o=n("O60i"),u=n("TSYQ"),c=n.n(u);function m(e){return e?s.a.cloneElement(e,{className:c()("m78-empty_icon",e.props.className)}):null}var d=e=>{var t=e.desc,n=e.children,r=e.size,u=e.emptyNode,d=Object(i["a"])(e,["desc","children","size","emptyNode"]),p=o["a"].useConfig(),f=p.emptyNode;return s.a.createElement("div",Object(a["a"])({className:c()("m78-empty",r&&"__".concat(r),d.className)},d),m(u)||m(f)||s.a.createElement(l["EmptyIcon"],{className:"m78-empty_icon"}),s.a.createElement("div",{className:"m78-empty_desc"},t),s.a.createElement("div",{className:"m78-empty_actions"},n))};t["a"]=d},efh2:function(e,t,n){"use strict";n("lCdt");var a=n("eTaW");n("bf2K");t["default"]=a["a"]},jNhd:function(e,t,n){"use strict";var a=n("q1tI"),i=n("bdgK"),r=function(){var e=Object(a["useState"])({x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0}),t=e[0],n=e[1],r=Object(a["useState"])((function(){return new i["a"]((function(e){var t=e[0];t&&n(t.contentRect)}))}))[0],s=Object(a["useCallback"])((function(e){r.disconnect(),e&&r.observe(e)}),[r]);return[s,t]};t["a"]=r},kr9X:function(e,t,n){"use strict";n("cDKg");var a=n("Ctpu"),i=n("Jiyh");n.o(i,"If")&&n.d(t,"If",(function(){return i["If"]})),n.o(i,"Switch")&&n.d(t,"Switch",(function(){return i["Switch"]})),n.o(i,"Toggle")&&n.d(t,"Toggle",(function(){return i["Toggle"]})),n.d(t,"If",(function(){return a["a"]})),n.d(t,"Switch",(function(){return a["b"]})),n.d(t,"Toggle",(function(){return a["c"]}));var r=a["d"];r.If=a["a"],r.Toggle=a["c"],r.Switch=a["b"],t["default"]=r},lCdt:function(e,t,n){"use strict";n("iCBh"),n("WwnQ")},"pF+1":function(e,t,n){},rbUi:function(e,t,n){},t1JD:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));n("iCBh"),n("rbUi");var a=n("k1fw"),i=n("tJVT"),r=n("PpiC"),s=n("q1tI"),l=n.n(s),o=n("jNhd"),u=n("hEdC"),c=n("wEEd"),m=n("lgaZ"),d=n("Rz6r"),p=n("kr9X"),f=n("uVtn"),b=n("TSYQ"),v=n.n(b),h=e=>{var t=e.closable,n=void 0===t||t,s=e.desc,b=e.message,h=e.status,g=e.fixedTop,q=e.right,E=Object(r["a"])(e,["closable","desc","message","status","fixedTop","right"]),x=Object(o["a"])(),w=Object(i["a"])(x,2),_=w[0],y=w[1].height,j=Object(m["f"])(E,!0,{valueKey:"show",triggerKey:"onClose"}),O=Object(i["a"])(j,2),N=O[0],k=O[1],A=Object(c["d"])(()=>({height:"auto",config:Object(a["a"])(Object(a["a"])({},c["b"].stiff),{},{clamp:!0})})),C=Object(i["a"])(A,2),I=C[0],T=C[1];Object(u["a"])(()=>{T({height:N?y+36:0})},[N,y]);var S=d["lineStatusIcons"][h];return l.a.createElement(c["a"].div,{style:I,className:v()("m78-notice-bar",h&&"__".concat(h),{__fixed:g})},l.a.createElement("div",{ref:_,className:"m78-notice-bar_wrap"},l.a.createElement(p["If"],{when:h},()=>l.a.createElement("div",{className:"m78-notice-bar_left"},l.a.createElement(S,null))),l.a.createElement("div",{className:"m78-notice-bar_cont"},l.a.createElement("div",{className:"m78-notice-bar_title ellipsis"},b),l.a.createElement(p["If"],{when:s},l.a.createElement("div",{className:"m78-notice-bar_desc"},s))),l.a.createElement("div",{className:"m78-notice-bar_right"},q,l.a.createElement(p["If"],{when:n&&!q},l.a.createElement(f["default"],{className:"m78-notice-bar_close",icon:!0,size:"mini",onClick:()=>{k(!1)}},l.a.createElement(d["CloseOutlined"],null))))))},g=h},tU1D:function(e,t,n){},uVtn:function(e,t,n){"use strict";n("QjBK"),n("BO4J");var a=n("B68Z");n.d(t,"default",(function(){return a["a"]}))}}]);