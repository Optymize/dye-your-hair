(this["webpackJsonphair-dyer"]=this["webpackJsonphair-dyer"]||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},17:function(e,t,n){e.exports={App:"App_App__2FeJX",bigButtons:"App_bigButtons__3z0Dg",recently:"App_recently__3ERKB",title:"App_title__3eBu_",intro:"App_intro__muNmh",actionsHolder:"App_actionsHolder__Sv6CC"}},22:function(e,t,n){e.exports={buttons:"toggleButton_buttons__1j3wE",normal:"toggleButton_normal__3MaeR",name:"toggleButton_name__vi95l",tiny:"toggleButton_tiny__2dZdG",icon:"toggleButton_icon__1PPDI",buttonSelected:"toggleButton_buttonSelected__2hirk"}},223:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),i=n(95),r=n.n(i),o=(n(110),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,225)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))}),s=n(17),l=n.n(s),d=n(9),j=n(96),u=n.n(j),b=n(15),m=n.n(b);function g(e){var t,n=e.name,c=e.className,i=e.onClick;return Object(a.jsx)("svg",{className:m()((t={},Object(d.a)(t,u.a.feather,!0),Object(d.a)(t,c,!!c),t)),onClick:i,children:Object(a.jsx)("use",{xlinkHref:"/dye-your-hair"+"/feather-sprite.svg#".concat(n)})})}var _=n(41),h=n.n(_);function O(e){var t=e.icon,n=e.title;return Object(a.jsx)("div",{className:h.a.button,children:Object(a.jsxs)("div",{className:h.a.content,children:[Object(a.jsx)("div",{className:h.a.icon,children:Object(a.jsx)(g,{name:t})}),Object(a.jsx)("p",{children:n})]})})}var p=n(104),x=(n(111),n(24)),f=n.n(x);function v(e){var t=e.images,n=e.selected,c=e.onClick;return Object(a.jsx)("div",{className:f.a.galleryRow,children:t.map((function(e,t){var i;return Object(a.jsxs)("div",{className:m()((i={},Object(d.a)(i,f.a.holder,!0),Object(d.a)(i,f.a.selected,t===n),i)),children:[Object(a.jsx)("div",{className:f.a.cover,children:Object(a.jsx)(g,{name:"check"})}),Object(a.jsx)("img",{className:f.a.image,src:e,alt:"recent-img",onClick:function(){return c&&c(e)}})]})}))})}function y(e){var t=e.className,n=e.rowNum,c=e.colNum,i=e.images,r=e.selected,o=e.onClick,s=0;return Object(a.jsx)("div",{className:m()(Object(d.a)({},t,!!t)),children:Object(p.a)(Array(n).keys()).map((function(e){return s=e*c<=r&&r<(e+1)*c?r%c:-1,Object(a.jsx)(v,{images:i.slice(e*c,e*c+c),selected:s,onClick:o})}))})}var N=n(40);function w(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var k=n(4);var C=n(8),S=n(28),B=n.n(S),E=n(65),L=n(66),I=n.n(L);function A(e){var t=e.id,n=e.status,c=e.onChangeValue;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{class:I.a.checkbox,type:"checkbox",checked:n,hidden:"hidden",id:t,onChange:function(){c(n)}}),Object(a.jsx)("label",{class:I.a.switch,for:t})]})}var H=n(22),P=n.n(H);function R(e){var t=e.items,n=e.selected,c=e.onSelected;return Object(a.jsx)("div",{className:P.a.buttons,children:t.map((function(e,t){var i,r=e.icon,o=e.name;return Object(a.jsxs)("button",{className:m()((i={},Object(d.a)(i,P.a.tiny,!r),Object(d.a)(i,P.a.normal,!!r),Object(d.a)(i,P.a.buttonSelected,n===t),i)),onClick:function(){c&&c(t)},children:[Object(a.jsx)("span",{className:P.a.name,children:o}),r?Object(a.jsx)("span",{className:P.a.icon,children:Object(a.jsx)(g,{name:r})}):void 0]})}))})}var D,F=n(5),G=n.n(F),U=n(103),W=n(68),z=n.n(W);function M(e){var t=e.title,n=e.icon,c=e.onClick;return Object(a.jsxs)("div",{className:z.a.stretchedButton,onClick:function(){c&&c()},children:[Object(a.jsx)("span",{children:Object(a.jsx)(g,{name:n})}),Object(a.jsx)("span",{class:z.a.title,children:t})]})}function q(e){var t=e.slice(1,e.length);return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}}window.allocator=function(e){return new Uint8Array(e)};var J=n(102);r.a.render(Object(a.jsxs)(J.a,{basename:"/",children:[Object(a.jsx)(k.a,{exact:!0,path:"/",component:function(){var e=function(){var e=Object(c.useState)(w()),t=Object(N.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){function e(){a(w())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().width,t=Object(k.e)();return Object(a.jsxs)("div",{className:l.a.App,children:[Object(a.jsx)("h1",{className:l.a.intro,children:"\u0645\u0648 \u0647\u0627\u062a\u0648 \u0631\u0646\u06af \u06a9\u0646"}),Object(a.jsx)("p",{className:l.a.intro,children:"\u0628\u0627 \u0645\u0648\u0647\u0627\u062a\u0648 \u0631\u0646\u06af \u06a9\u0646 \u0645\u06cc\u062a\u0648\u0646\u06cc \u0628\u062f\u0648\u0646 \u0627\u06cc\u0646\u06a9\u0647 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0631\u0646\u06af \u06a9\u0631\u062f\u0646 \u0648\u0627\u0642\u0639\u06cc \u0645\u0648 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u06cc \u0645\u06cc\u062a\u0648\u0646\u06cc \u062a\u0648\u06cc \u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u0628\u0628\u06cc\u0646\u06cc \u06a9\u0647 \u0686\u0647 \u0631\u0646\u06af \u0645\u0648\u06cc\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0628\u0647 \u0686\u0647\u0631\u0647 \u0627\u062a \u0645\u06cc\u0627\u062f \u0648 \u06a9\u0644\u06cc \u0648\u0642\u062a \u0648 \u0647\u0632\u06cc\u0646\u0647 \u0627\u062a \u0635\u0631\u0641\u0647 \u062c\u0648\u06cc\u06cc \u0645\u06cc\u0634\u0647"}),Object(a.jsx)("h3",{className:l.a.title,children:"\u0627\u0632 \u0639\u06a9\u0633 \u0647\u0627\u06cc \u0642\u0628\u0644\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646"}),Object(a.jsx)(y,{className:l.a.recently,rowNum:e<800?2:1,colNum:e<800?2:4,images:["images/3.jpg","images/4.jpg","images/8.jpg","images/3.jpg"],onClick:function(e){window.localStorage.setItem("image",e),window.localStorage.setItem("mask",e.replace(".jpg",".png")),t.push("/edit")}}),Object(a.jsx)("h3",{className:l.a.title,children:"\u06cc\u0627 \u06cc\u0647 \u0639\u06a9\u0633 \u062c\u062f\u06cc\u062f \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646"}),Object(a.jsx)("div",{className:l.a.actionsHolder,children:Object(a.jsxs)("div",{className:l.a.bigButtons,children:[Object(a.jsx)(O,{title:"\u0627\u0632 \u062f\u0648\u0631\u0628\u06cc\u0646",icon:"camera"}),Object(a.jsx)(O,{title:"\u0627\u0632 \u06af\u0627\u0644\u0631\u06cc",icon:"image"})]})})]})}}),Object(a.jsx)(k.a,{exact:!0,path:"/Edit",component:function(){var e,t=Object(k.e)();if(!D){var n=window.Go;D=n,WebAssembly.instantiateStreaming||(WebAssembly.instantiateStreaming=function(){var e=Object(E.a)(B.a.mark((function e(t,n){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return e.next=4,e.sent.arrayBuffer();case 4:return a=e.sent,e.next=7,WebAssembly.instantiate(a,n);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var i,r=new D;WebAssembly.instantiateStreaming(fetch("./main.wasm"),r.importObject).then(function(){var e=Object(E.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.instance,e.next=3,r.run(i);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error(e)}))}var o=Object(c.useState)({currentStyleIndex:1,currentColorIndex:0,sColor:"#ffffff",darkLayer:!1,lightLayer:!1,previousSetting:"Empty",selectedMode:0,inferenceStatus:"Done"}),s=Object(N.a)(o,2),l=s[0],j=s[1],u="",b={mode1:"#ff0000",mode2:"#ffffff",mode3:"#90ee90",mode4:"#ffff00",mode5:"#8b0000",mode6:"#006400"},_=String(l.currentColorIndex)+String(l.sColor)+String(l.darkLayer)+String(l.lightLayer),h=Object(a.jsx)("div",{class:G.a.buttonHolder,children:Object(a.jsx)(M,{title:"\u0627\u0639\u0645\u0627\u0644 \u062a\u063a\u06cc\u06cc\u0631\u0627\u062a",icon:"check",id:"hello",onClick:function(){var e=q(l.sColor),t=e.r,n=e.g,a=e.b;j(Object(C.a)(Object(C.a)({},l),{},{previousSetting:_,inferenceStatus:"Doing"}));var c=function(e){return window.localStorage.getItem(e)};window.colorize(c("image"),c("mask"),t,n,a,l.lightLayer,l.darkLayer,l.currentColorIndex+1,(function(e){document.getElementById("yourPhoto").src=URL.createObjectURL(new Blob([e.buffer],{type:"image/jpeg"})),j(Object(C.a)(Object(C.a)({},l),{},{inferenceStatus:"Done"}))}))}})});return _!==l.previousSetting&&1!==l.currentStyleIndex||(h=""),u=1===l.currentStyleIndex?Object(a.jsx)(y,{className:G.a.gallery,rowNum:2,colNum:3,images:["mode1.png","mode2.png","mode3.png","mode4.png","mode5.png","mode6.png"],selected:l.selectedMode-1,onClick:function(e){e=e.split(".")[0],j(Object(C.a)(Object(C.a)({},l),{},{sColor:b[e],selectedMode:parseInt(e[e.length-1]),inferenceStatus:"Doing"}));var t=q(b[e]),n=t.r,a=t.g,c=t.b,i=function(e){return window.localStorage.getItem(e)};window.colorizeAuto(i("image"),i("mask"),n,a,c,(function(t){document.getElementById("yourPhoto").src=URL.createObjectURL(new Blob([t.buffer],{type:"image/jpeg"})),j(Object(C.a)(Object(C.a)({},l),{},{inferenceStatus:"Done",selectedMode:parseInt(e[e.length-1]),sColor:b[e]}))}))}}):Object(a.jsxs)("div",{class:G.a.Options,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{children:"\u0631\u0646\u06af"}),Object(a.jsx)("div",{className:G.a.colorPickerContainer,children:Object(a.jsx)(U.a,{className:G.a.colorPicker,color:l.sColor,onChange:function(e){return j(Object(C.a)(Object(C.a)({},l),{},{sColor:e.hex}))}})}),Object(a.jsx)("div",{})]}),Object(a.jsxs)("div",{className:G.a.Option,children:[Object(a.jsx)("div",{className:G.a.optionaLabel,children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0644\u0627\u06cc\u0647 \u062a\u06cc\u0631\u0647 \u062a\u0631"}),Object(a.jsx)("div",{className:G.a.optionGear,children:Object(a.jsx)(A,{id:"dark",status:l.darkLayer,onChangeValue:function(){return j(Object(C.a)(Object(C.a)({},l),{},{darkLayer:!l.darkLayer}))}})})]}),Object(a.jsxs)("div",{className:G.a.Option,children:[Object(a.jsx)("div",{className:G.a.optionaLabel,children:"\u0627\u0641\u0632\u0648\u062f\u0646 \u0644\u0627\u06cc\u0647 \u0631\u0648\u0634\u0646 \u062a\u0631"}),Object(a.jsx)("div",{className:G.a.optionGear,children:Object(a.jsx)(A,{id:"light",status:l.lightLayer,onChangeValue:function(){return j(Object(C.a)(Object(C.a)({},l),{},{lightLayer:!l.lightLayer}))}})})]}),Object(a.jsxs)("div",{className:G.a.Option,children:[Object(a.jsx)("div",{className:G.a.optionaLabel,children:"\u0645\u062a\u062f \u0631\u0646\u06af \u0622\u0645\u06cc\u0632\u06cc"}),Object(a.jsx)("div",{className:G.a.optionGear,children:Object(a.jsx)(R,{items:[{name:"\u06f1"},{name:"\u06f2"},{name:"\u06f3"}],selected:l.currentColorIndex,onSelected:function(e){return j(Object(C.a)(Object(C.a)({},l),{},{currentColorIndex:e}))}})})]})]}),Object(a.jsxs)("div",{className:G.a.editContainer,children:[Object(a.jsxs)("div",{className:G.a.topBar,children:[Object(a.jsx)(g,{name:"upload"}),Object(a.jsx)(g,{name:"arrow-right",onClick:function(){t.goBack()}}),Object(a.jsx)("div",{class:G.a.clearFix})]}),Object(a.jsxs)("div",{className:G.a.contentHolder,children:[Object(a.jsxs)("div",{className:G.a.image,children:[Object(a.jsx)("div",{class:m()((e={},Object(d.a)(e,G.a.imageLoading,!0),Object(d.a)(e,G.a.displayNone,"Done"===l.inferenceStatus),e)),children:Object(a.jsx)("img",{src:"./Circle_loader.svg"})}),Object(a.jsx)("img",{src:window.localStorage.getItem("image"),alt:"your uploaded photo_ to edit",id:"yourPhoto"})]}),Object(a.jsxs)("div",{className:G.a.optionHolder,children:[Object(a.jsx)("div",{className:G.a.modeSetting,children:Object(a.jsx)(R,{items:[{icon:"sliders",name:"\u062d\u0631\u0641\u0647 \u0627\u06cc"},{icon:"droplet",name:"\u0633\u0627\u062f\u0647"}],selected:l.currentStyleIndex,onSelected:function(e){return j(Object(C.a)(Object(C.a)({},l),{},{currentStyleIndex:e}))}})}),u,h]})]})]})}})]}),document.getElementById("root")),o()},24:function(e,t,n){e.exports={galleryRow:"galleryRow_galleryRow__2JFYs",image:"galleryRow_image__Dyfwb",holder:"galleryRow_holder__15hHN",selected:"galleryRow_selected__1t5C3",cover:"galleryRow_cover__20hsn"}},41:function(e,t,n){e.exports={button:"bigButton_button__3AAdd",content:"bigButton_content__m7Py5",icon:"bigButton_icon__fub-l"}},5:function(e,t,n){e.exports={editContainer:"Edit_editContainer__1gq0B",optionHolder:"Edit_optionHolder__yWHoF",contentHolder:"Edit_contentHolder__2ExNK",topBar:"Edit_topBar__2N5UH",clearFix:"Edit_clearFix__U8s5P",image:"Edit_image__2gUkH",modeSetting:"Edit_modeSetting__1gGsF",Options:"Edit_Options__1Cz45",Option:"Edit_Option__2x19q",optionaLabel:"Edit_optionaLabel__3H8nA",optionGear:"Edit_optionGear__2MqZ-",colorPickerContainer:"Edit_colorPickerContainer__3QgJu",colorPicker:"Edit_colorPicker__395jT",gallery:"Edit_gallery__1vScr",buttonHolder:"Edit_buttonHolder__1asaa",imageLoading:"Edit_imageLoading__1TKZp",spin:"Edit_spin__3qrDO",displayNone:"Edit_displayNone__5Iqag"}},66:function(e,t,n){e.exports={switch:"switchBttuon_switch__oYbuY",checkbox:"switchBttuon_checkbox__3WsZo"}},68:function(e,t,n){e.exports={stretchedButton:"stretchedButton_stretchedButton__3QFD2",title:"stretchedButton_title__3SuaY"}},96:function(e,t,n){e.exports={feather:"featherIcon_feather__2NNa7"}}},[[223,1,2]]]);
//# sourceMappingURL=main.1ffa7705.chunk.js.map