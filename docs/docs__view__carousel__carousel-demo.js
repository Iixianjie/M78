(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[196],{"3FHi":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),c=a.n(r),n=a("JE2c"),i=(a("gtaE"),a("RyVj")),l=a.n(i),o=a("vxau"),s=a.n(o),u=a("xsK1"),h=a.n(u),m=()=>c.a.createElement("div",null,c.a.createElement("p",null,"\u652f\u6301\u901a\u8fc7\u6eda\u8f6e\u3001drag\u3001\u63a7\u5236\u5668\u7b49\u65b9\u5f0f\u8fdb\u884c\u64cd\u4f5c"),c.a.createElement(n["a"],{width:320},c.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}})),c.a.createElement("p",{className:"mt-32"},"\u5173\u95edloop\u6a21\u5f0f\u3002\u5f53\u5b50\u9879\u8fc7\u591a\u65f6\u4f1a\u663e\u793a\u6570\u5b57\u5206\u9875\u5668"),c.a.createElement(n["a"],{loop:!1,width:320},c.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}})),c.a.createElement("p",{className:"mt-32"},"\u5173\u95ed\u5206\u9875\u63a7\u5236\u5668"),c.a.createElement(n["a"],{control:!1,width:320},c.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}})),c.a.createElement("p",{className:"mt-32"},"\u81ea\u52a8\u8f6e\u64ad"),c.a.createElement(n["a"],{autoplay:2e3,style:{width:320}},c.a.createElement("img",{src:l.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:s.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}}),c.a.createElement("img",{src:h.a,alt:"",style:{width:"100%",height:"200px",objectFit:"cover"}})));t["default"]=m},BTKg:function(e,t,a){"use strict";var r=a("q1tI"),c=function(e){return++e%1e6},n=function(){var e=Object(r["useState"])(0),t=e[1];return Object(r["useCallback"])((function(){return t(c)}),[])};t["a"]=n},JE2c:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));a("gtaE");var r=a("k1fw"),c=a("tJVT"),n=a("q1tI"),i=a.n(n),l=a("jNhd"),o=a("BTKg"),s=function(e,t){var a=Object(n["useRef"])((function(){}));Object(n["useEffect"])((function(){a.current=e})),Object(n["useEffect"])((function(){if(null!==t){var e=setInterval((function(){return a.current()}),t||0);return function(){return clearInterval(e)}}}),[t])},u=s,h=a("wEEd"),m=a("y4v0"),d=a("9nhX"),f=a.n(d),v=a("TSYQ"),g=a.n(v),b=a("K3qG"),p=a("zdPv");function j(e,t){if(e.length<2||!t)return[e,!1];var a=i.a.Children.toArray(e);return a.push(i.a.cloneElement(e[0])),a.unshift(i.a.cloneElement(e[e.length-1])),[a,!0]}var E=i.a.forwardRef((e,t)=>{var a=e.children,s=e.vertical,d=void 0!==s&&s,v=e.height,E=e.width,w=e.loop,y=void 0===w||w,O=e.control,x=void 0===O||O,F=e.forceNumberControl,N=void 0!==F&&F,S=e.initPage,_=void 0===S?0:S,R=e.onChange,C=e.autoplay,D=void 0===C?0:C,T=e.style,k=e.className,I=e.wheel,q=void 0===I||I,J=e.drag,K=void 0===J||J,H=e.onWillChange,V=void 0===H?b["f"]:H,A=e.noScale,B=void 0!==A&&A,M=e.invisibleUnmount,W=void 0!==M&&M,z=e.invisibleHidden,P=void 0!==z&&z,G=e.noShadow,Q=j(a,y),U=Object(c["a"])(Q,2),X=U[0],Y=U[1],L=Object(l["a"])(),Z=Object(c["a"])(L,2),$=Z[0],ee=Z[1],te=ee.width,ae=ee.height,re=Object(n["useRef"])(null),ce=Object(n["useRef"])(null),ne=d?ae:te,ie=Object(n["useRef"])(Y?_+1:_),le=Object(p["useSelf"])({disabledDrag:!1}),oe=Object(h["useSpring"])(()=>({offset:ie.current*ne,scale:1,config:{clamp:!0},reset:!1})),se=Object(c["a"])(oe,2),ue=se[0],he=se[1],me=Object(o["a"])(),de=Object(n["useState"])(D),fe=Object(c["a"])(de,2),ve=fe[0],ge=fe[1],be=Object(n["useRef"])();v=v||0,Object(n["useEffect"])((function(){we(ie.current,!0)}),[ne]),Object(n["useEffect"])((function(){ie.current=Y?_+1:_,we(ie.current,!0),Se()}),[X.length]),Object(n["useEffect"])((function(){xe(ie.current,!0)}),[]),Object(n["useImperativeHandle"])(t,()=>({prev:je,next:Ee,goTo(e,t){we(Y?e+1:e,t)}})),u((function(){Ee()}),ve>0?ve:null);var pe=Object(m["b"])({onDragStart(){V()},onWheelStart(){V()},onDrag(e){var t=e.down,a=Object(c["a"])(e.movement,2),r=a[0],n=a[1],i=Object(c["a"])(e.direction,2),l=i[0],o=i[1],s=e.cancel,u=e.first,h=d?o:l,m=d?n:r,f=Math.abs(m),v=Math.abs(r),g=Math.abs(n);if((g>5||v>5)&&(!d&&g>v||d&&v>g)&&(s(),f=0,m=0),t&&f>ne/2)return s(),Fe(),void(h<0?Ee():je());var b=Y&&u&&0===ie.current,p=Y&&u&&ie.current===X.length-1;function j(e){le.disabledDrag=!0;var t=ie.current*ne+ue.offset.get();E(-(e*ne-t)),ie.current=e}function E(e){he({offset:e||-(ie.current*ne+(t?-m:0)),immediate:!!e||!1,scale:t?1-f/ne/2:1,default:!0,onRest(){e&&(le.disabledDrag=!1)}})}b?j(X.length-2):p?j(1):le.disabledDrag||E()},onWheel(e){var t=e.event,a=e.memo,r=Object(c["a"])(e.direction,2),n=r[1],i=e.timeStamp;if(null===t||void 0===t||t.preventDefault(),!a)return n<0?je():Ee(),Fe(),i},onHover(e){var t=e.hovering;t&&Fe()}},{domTarget:re,wheel:{enabled:q},drag:{enabled:K},eventOptions:{passive:!1}});function je(){Y&&0===ie.current?we(X.length-2,!0,()=>{we(ye(ie.current-1))}):we(ye(ie.current-1))}function Ee(){Y&&ie.current===X.length-1?we(1,!0,()=>{we(ye(ie.current+1))}):we(ye(ie.current+1))}function we(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2?arguments[2]:void 0;e=ye(e),t||e===ie.current||xe(e),ie.current=e,he({offset:-e*ne,scale:1,immediate:t,default:!0,onRest(){a&&a()}}),me()}function ye(e){return f()(e,0,X.length-1)}function Oe(e){return Y?0===e?X.length-3:e===X.length-1?0:e-1:e}function xe(e,t){W&&Se(),R&&R(Oe(e),!!t)}function Fe(){D<=0||ve<=0||be.current||(ge(0),be.current=window.setTimeout(()=>{ge(D),be.current=void 0,clearTimeout(be.current)},4e3))}function Ne(e,t){var a=!0,c=e;if(W||P){var n=Oe(ie.current),l=Y&&(t<=1||t>=X.length-2),o=t<n-(Y?0:1)||t>n+(Y?2:1),s=!o||l;W&&(a=s),P&&!s&&i.a.isValidElement(e)&&(c=i.a.cloneElement(e,{style:Object(r["a"])(Object(r["a"])({},e.props.style),{},{display:"none"})}))}return i.a.createElement(h["animated"].div,{key:t,className:"m78-carousel_item",style:{height:d?v:void 0,zIndex:ie.current===t?1:0,transform:B?void 0:ue.scale.to(e=>{var a=t<ie.current-1||t>ie.current+1;return"scale(".concat(a?1:e,")")})}},a&&c)}function Se(){re.current&&Array.from(re.current.querySelectorAll("img")).forEach(e=>{e.ondragstart=e=>e.preventDefault()})}return Object(n["useEffect"])(pe,[pe]),i.a.createElement("div",{className:g()("m78-carousel",k,{__vertical:d,__noShadow:G}),ref:$,style:Object(r["a"])({height:d?v:"auto",width:E||"auto"},T)},i.a.createElement("div",{ref:ce,className:"m78-carousel_calc-node"}),i.a.createElement(h["animated"].div,{className:"m78-carousel_wrap",ref:re,style:{transform:ue.offset.to(e=>"translate3d(".concat(d?"0,".concat(e,"px"):"".concat(e,"px,0"),",0)"))}},X.map(Ne)),x&&i.a.createElement("div",{className:"m78-carousel_ctrl m78-stress"},(a.length<7||d)&&!N?X.map((e,t)=>{var a=!Y||t<X.length-2;return a&&i.a.createElement("div",{key:t,onClick:()=>{we(Y?t+1:t),Fe()},className:g()("m78-carousel_ctrl-item",{__active:t===Oe(ie.current)})})}):i.a.createElement("span",{className:"m78-carousel_ctrl-text"},Oe(ie.current)+1," /"," ",Y?X.length-2:X.length)))});E.displayName="Carousel";var w=E},RyVj:function(e,t,a){e.exports=a.p+"static/11.983b1fca.jpg"},SoiO:function(e,t,a){},gtaE:function(e,t,a){"use strict";a("iCBh"),a("SoiO")},vxau:function(e,t,a){e.exports=a.p+"static/22.f379e2df.jpg"},xsK1:function(e,t,a){e.exports=a.p+"static/33.df9bac6c.jpg"}}]);