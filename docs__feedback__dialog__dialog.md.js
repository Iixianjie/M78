(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{zcaz:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),o=a.n(t),l=a("dEAq"),r=a("0zqC"),i=a("ZpkN"),c=a("Rsk4"),s=o.a.memo(c["default"]["dialog-demo"].component),m=o.a.memo(c["default"]["dialog-api"].component);n["default"]=e=>(o.a.useEffect(()=>{(null===e||void 0===e?void 0:e.location.hash)&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"dialog-\u5bf9\u8bdd\u6846"},o.a.createElement(l["AnchorLink"],{to:"#dialog-\u5bf9\u8bdd\u6846","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"Dialog \u5bf9\u8bdd\u6846"),o.a.createElement("p",null,"\u7528\u4e8e\u5728\u4e0d\u8df3\u8f6c\u9875\u9762\u7684\u524d\u63d0\u4e0b\u4e3a\u7528\u6237\u63d0\u4f9b\u4e00\u7ec4\u8be2\u95ee\u3001\u8868\u5355\u7b49\u64cd\u4f5c, \u53ef\u4ee5\u5c06\u5176\u7406\u89e3\u4e3a\u5305\u542b\u9884\u8bbe\u6837\u5f0f\u548c\u7b80\u5316\u4e86\u4ea4\u4e92\u64cd\u4f5c\u7684",o.a.createElement(l["Link"],{to:"/feedback/modal"},"Modal")),o.a.createElement("p",null,"\ud83d\udca1 \u901a\u8fc7 ",o.a.createElement(l["Link"],{to:"/feedback/modal"},"Modal")," \u4f5c\u4e3a\u5e95\u5c42\u5b9e\u73b0, \u57fa\u672c\u7684\u7528\u6cd5\u5982\u663e\u793a/\u9690\u85cf\u7684\u4e0d\u540c\u63a7\u5236\u65b9\u5f0f\u3001mask\u3001\u4f4d\u7f6e\u3001\u52a8\u753b\u3001\u6e32\u67d3\u7279\u6027\u7b49\u8bf7\u67e5\u9605\u5176\u6587\u6863"),o.a.createElement("h2",{id:"\u57fa\u7840\u793a\u4f8b"},o.a.createElement(l["AnchorLink"],{to:"#\u57fa\u7840\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u7840\u793a\u4f8b"),o.a.createElement("p",null,"Dialog \u7ec4\u4ef6\u7684\u914d\u7f6e\u975e\u5e38\u591a\u6837\u5316\uff0c\u901a\u8fc7\u5408\u7406\u7684\u914d\u7f6e\u53ef\u4ee5\u5b9e\u73b0\u7edd\u5927\u591a\u6570\u7684 Dialog \u529f\u80fd")),o.a.createElement(r["default"],c["default"]["dialog-demo"].previewerProps,o.a.createElement(s,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"\u901a\u8fc7-api-\u4f7f\u7528"},o.a.createElement(l["AnchorLink"],{to:"#\u901a\u8fc7-api-\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"\u901a\u8fc7 api \u4f7f\u7528"),o.a.createElement("p",null,"\u901a\u8fc7 api \u4f7f\u7528\u65b9\u5f0f\u6765\u8fdb\u884c\u7ec4\u4ef6\u5916\u6e32\u67d3")),o.a.createElement(r["default"],c["default"]["dialog-api"].previewerProps,o.a.createElement(m,null)),o.a.createElement("div",{className:"markdown"},o.a.createElement("h2",{id:"api"},o.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},o.a.createElement("span",{className:"icon icon-link"})),"API"),o.a.createElement("p",null,"\u8be5\u7ec4\u4ef6 props \u7ee7\u627f\u81f3 ModalBaseProps \u7684\u5b50\u96c6, \u5b8c\u6574\u914d\u7f6e\u7b49\u8bf7\u53c2\u8003 ",o.a.createElement(l["Link"],{to:"/feedback/modal"},"Modal")),o.a.createElement(i["a"],{code:"interface DialogProps extends Omit<ModalBaseProps, 'children' | 'onClose'> {\n  /** \u5185\u5bb9\u533a\u57df\u7684\u6700\u5927\u5bbd\u5ea6, \u9ed8\u8ba4\u4e3a360 */\n  maxWidth?: number | string;\n  /** '\u63d0\u793a' | \u6807\u9898\u6587\u672c */\n  title?: string;\n  /** \u5185\u5bb9\u533a\u57df */\n  children?: React.ReactNode;\n  /**\n   * \u9ed8\u8ba4\u7684\u5173\u95ed\u6309\u94ae/\u786e\u8ba4\u6309\u94ae/\u53f3\u4e0a\u89d2\u5173\u95ed\u6309\u94ae\u70b9\u51fb, \u6216\u89e6\u53d1\u4e86clickAway\u65f6\n   * - \u5982\u679c\u662f\u901a\u8fc7\u786e\u8ba4\u6309\u94ae\u70b9\u51fb\u7684\uff0cisConfirm\u4e3atrue\n   * - prompt\u6a21\u5f0f\u4e0b\uff0cpromptValue\u4e3a\u7528\u6237\u8f93\u5165\u7684\u503c\n   * */\n  onClose?(isConfirm?: boolean, promptValue?: string): void;\n  /** false | '\u53d6\u6d88' | \u662f\u5426\u663e\u793a\u53d6\u6d88\u6309\u94ae\uff0c\u4f20\u5165string\u65f6\uff0c\u4e3a\u6309\u94ae\u6587\u672c */\n  close?: boolean | string;\n  /** '\u786e\u8ba4' | \u662f\u5426\u663e\u793a\u786e\u8ba4\u6309\u94ae\uff0c\u4f20\u5165string\u65f6\uff0c\u4e3a\u6309\u94ae\u6587\u672c */\n  confirm?: boolean | string;\n  /** true | \u662f\u5426\u663e\u793a\u5173\u95ed\u56fe\u6807 */\n  closeIcon?: boolean;\n  /** \u8bbe\u7f6e\u5f39\u5c42\u4e3aloading\u72b6\u6001\uff0c\u963b\u6b62\u64cd\u4f5c(\u5728loading\u7ed3\u675f\u524d\u4f1a\u963b\u6b62clickAwayClosable) */\n  loading?: boolean;\n  /** \u8bbe\u7f6eDialog\u7684\u72b6\u6001 */\n  status?: 'success' | 'error' | 'warning';\n  /** \u542f\u7528\u54cd\u5e94\u5f0f\u6309\u94ae\uff0c\u6309\u94ae\u4f1a\u6839\u636e\u5e95\u90e8\u7684\u5bbd\u5ea6\u5e73\u5206\u5269\u4f59\u5bbd\u5ea6 */\n  flexBtn?: boolean;\n  /** true | \u70b9\u51fb\u9ed8\u8ba4\u7684\u786e\u8ba4\u6309\u94ae\u65f6\uff0c\u662f\u5426\u5173\u95ed\u5f39\u7a97 */\n  confirmClose?: boolean;\n\n  /** \u81ea\u5b9a\u4e49\u9876\u90e8\u5185\u5bb9\uff0c\u4f1a\u8986\u76d6title\u7684\u914d\u7f6e */\n  header?: React.ReactNode;\n  /** \u81ea\u5b9a\u4e49\u5e95\u90e8\u5185\u5bb9\uff0c\u4e0e\u5176\u4ed6\u5e95\u90e8\u76f8\u5173\u914d\u7f6e\u7684\u4f18\u5148\u7ea7\u4e3a footer > btns > confirm\u3001close */\n  footer?: React.ReactNode;\n  /** \u901a\u8fc7\u914d\u7f6e\u8bbe\u7f6e\u6309\u94ae\u7ec4 */\n  btns?: (Pick<\n    ButtonPropsWithHTMLButton,\n    'color' | 'children' | 'onClick' | 'disabled' | 'icon'\n  > & {\n    text: string;\n  })[];\n  /** \u5185\u5bb9\u533a\u57dfclass */\n  contentClassName?: string;\n  /** \u5934\u90e8\u533a\u57dfclass */\n  headerClassName?: string;\n  /** \u811a\u90e8\u533a\u57dfclass */\n  footerClassName?: string;\n\n  /** \u63d0\u793a\u8f93\u5165\u6846\u6a21\u5f0f, \u901a\u8fc7onClose\u7b2c\u4e8c\u4e2a\u53c2\u6570\u63a5\u6536\u503c */\n  prompt?: boolean;\n  /** \u63d0\u793a\u8f93\u5165\u6846\u7684\u9ed8\u8ba4\u5185\u5bb9 */\n  promptDefaultValue?: string;\n  /** \u900f\u4f20\u7ed9prompt\u8f93\u5165\u6846\u7684props\uff0c\u4e0eInput\u7ec4\u4ef6\u4e00\u81f4 */\n  promptInputProps?: InputProps;\n}",lang:"tsx"})))))}}]);