(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[26],{Fi4M:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),o=n.n(t),l=n("dEAq"),r=n("0zqC"),c=n("ZpkN"),i=n("Rsk4"),m=o.a.memo(i["default"]["drawer-demo"].component);a["default"]=e=>(o.a.useEffect(()=>{(null===e||void 0===e?void 0:e.location.hash)&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"drawer-\u62bd\u5c49"},o.a.createElement(l["AnchorLink"],{to:"#drawer-\u62bd\u5c49","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Drawer \u62bd\u5c49"),o.a.createElement("p",null,"\u4e0e Dialog \u7c7b\u4f3c\uff0c\u5728\u4e0d\u8df3\u8f6c\u9875\u9762\u7684\u60c5\u51b5\u4e0b\u5411\u7528\u6237\u5c55\u793a\u4e00\u7ec4\u5185\u5bb9, \u533a\u522b\u662f\u5b83\u4ece\u7a97\u4f53\u8fb9\u7f18\u52a8\u753b\u8fdb\u5165"),o.a.createElement("p",null,"\ud83d\udca1 \u901a\u8fc7 ",o.a.createElement(l["Link"],{to:"/feedback/modal"},"Modal")," \u4f5c\u4e3a\u5e95\u5c42\u5b9e\u73b0, \u57fa\u672c\u7684\u7528\u6cd5\u5982\u663e\u793a/\u9690\u85cf\u7684\u4e0d\u540c\u63a7\u5236\u65b9\u5f0f\u3001mask\u3001\u4f4d\u7f6e\u3001\u52a8\u753b\u3001\u6e32\u67d3\u7279\u6027\u7b49\u8bf7\u67e5\u9605\u5176\u6587\u6863"),o.a.createElement("h2",{id:"\u57fa\u7840\u793a\u4f8b"},o.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u793a\u4f8b")),o.a.createElement(r["default"],i["default"]["drawer-demo"].previewerProps,o.a.createElement(m,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"api"},o.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"API"),o.a.createElement("p",null,"\u8be5\u7ec4\u4ef6 props \u7ee7\u627f\u81f3 ModalBaseProps \u7684\u5b50\u96c6, \u5b8c\u6574\u914d\u7f6e\u7b49\u8bf7\u53c2\u8003 ",o.a.createElement(l["Link"],{to:"/feedback/modal"},"Modal")),o.a.createElement(c["a"],{code:"type OmitModalSpecific = Omit<\n  ModalBaseProps,\n  | 'baseZIndex'\n  | 'namespace'\n  | 'alignment'\n  | 'animationType'\n  | 'onRemove'\n  | 'onRemoveDelay'\n  | 'config'\n  | 'innerRef'\n>;\n\nexport interface DrawerProps extends OmitModalSpecific {\n  /** \u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae */\n  closeIcon?: boolean;\n  /** \u65b9\u5411 */\n  direction?: 'bottom' | 'left' | 'right' | 'top';\n  /** \u5168\u5c4f */\n  fullScreen?: boolean;\n}",lang:"tsx"})))))}}]);