/*! For license information please see 9306.510e7190.js.LICENSE.txt */
"use strict";(self.webpackChunkleno_admin=self.webpackChunkleno_admin||[]).push([[9306,7787,3138],{76822:function(e,t,n){n.d(t,{E$:function(){return c},M2:function(){return o},Xs:function(){return i},c_:function(){return u},mO:function(){return a},xu:function(){return l}});var r=n(19462),o=function(e){return(0,r.dJ)("GET","/system/dictType/list",e)};function i(e){return(0,r.dJ)("DELETE","/system/dictType/".concat(e))}var a=function(e){return(0,r.dJ)("POST","/system/dictType",e)},u=function(e){return(0,r.dJ)("GET","/system/dictType/".concat(e))},c=function(e){return(0,r.dJ)("PUT","/system/dictType",e)},l=function(){return(0,r.dJ)("GET","/system/dictType/optionselect")}},14955:function(e,t,n){n.d(t,{CZ:function(){return o},GF:function(){return s},M2:function(){return u},Nv:function(){return c},Qj:function(){return a},_F:function(){return f},ld:function(){return l},vz:function(){return i}});var r=n(19462),o=function(e){return(0,r.dJ)("GET","/tool/gen/db/list",e)},i=function(){return(0,r.dJ)("GET","/tool/gen/sql/list")},a=function(e){return(0,r.dJ)("POST","/tool/gen/import/".concat(e))},u=function(e){return(0,r.dJ)("GET","/tool/gen/list",e)};function c(e){return(0,r.dJ)("DELETE","/tool/gen/del/".concat(e))}var l=function(e){return(0,r.dJ)("PUT","/tool/gen",e)},s=function(e){return(0,r.dJ)("GET","/tool/gen/preview/".concat(e))},f=function(e){return(0,r.dJ)("POST","/tool/gen/genCode/generatedCode/".concat(e))}},46984:function(e,t,n){n.d(t,{Z:function(){return j}});n(96649),n(96078),n(82526),n(41817),n(41539),n(9653),n(47941),n(57327),n(38880),n(54747),n(49337),n(32165),n(66992),n(78783),n(33948),n(67294);var r=n(71577),o=n(94184),i=n.n(o),a="Sa0KCFyg",u="wPtK2c8P",c="RCL44OPK",l="IDP0ECKy",s="Opvk2v2o",f="C3i549LD",d="uavLsyOB",h="uV5xrSU3",p="GUsbJhhO",y="QAwRS9Eu",v=n(85893);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){var t,n=e.disabled,o=e.children,m=e.color,b=i()((w(t={},a,"primary"===m&&!n),w(t,u,"primary"===m&&n),w(t,c,"success"===m&&!n),w(t,l,"success"===m&&n),w(t,s,"danger"===m&&!n),w(t,f,"danger"===m&&n),w(t,d,"info"===m&&!n),w(t,h,"info"===m&&n),w(t,p,"warning"===m&&!n),w(t,y,"warning"===m&&n),t));return(0,v.jsx)("span",{className:b,children:(0,v.jsx)(r.Z,g(g({},e),{},{children:o}))})};x.defaultProps={color:"primary"};var j=x},47787:function(e,t,n){n.r(t);var r=n(67294),o=n(74485),i=n(22245),a=n(71230),u=n(15746),c=n(81182),l=n(85893),s=function(e){var t=e.baseForm,n=e.currentTable,c=o.Z.TextArea;return(0,r.useEffect)((function(){n&&(t.resetFields(),t.setFieldsValue({tableName:n.tableName,tableComment:n.tableComment,className:n.className,functionAuthor:n.functionAuthor,remark:n.remark}))}),[n]),(0,l.jsxs)(i.Z,{form:t,labelCol:{span:6},initialValues:n,children:[(0,l.jsxs)(a.Z,{gutter:16,children:[(0,l.jsx)(u.Z,{span:12,children:(0,l.jsx)(i.Z.Item,{label:"表名称",name:"tableName",rules:[{required:!0,message:"请输入表名称!"}],children:(0,l.jsx)(o.Z,{placeholder:"请输入表名称"})})}),(0,l.jsx)(u.Z,{span:12,children:(0,l.jsx)(i.Z.Item,{label:"表描述",name:"tableComment",rules:[{required:!0,message:"请输入表描述!"}],children:(0,l.jsx)(o.Z,{placeholder:"请输入表描述"})})})]}),(0,l.jsxs)(a.Z,{gutter:16,children:[(0,l.jsx)(u.Z,{span:12,children:(0,l.jsx)(i.Z.Item,{label:"实体类名称",name:"className",rules:[{required:!0,message:"请输入实体类名称!"}],children:(0,l.jsx)(o.Z,{placeholder:"请输入实体类名称"})})}),(0,l.jsx)(u.Z,{span:12,children:(0,l.jsx)(i.Z.Item,{label:"作者",name:"functionAuthor",rules:[{required:!0,message:"请输入作者!"}],children:(0,l.jsx)(o.Z,{placeholder:"请输入作者"})})})]}),(0,l.jsx)(i.Z.Item,{labelCol:{span:3},label:"备注",name:"remark",rules:[{max:200,message:"请输入内容(200字以内)!"}],children:(0,l.jsx)(c,{showCount:!0,placeholder:"请输入内容(200字以内)",rows:3})})]})};t.default=(0,r.memo)(s,c.Qp)},4591:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});n(69826),n(41539),n(9653),n(57327),n(47941),n(21249),n(92222),n(82526),n(41817),n(32165),n(66992),n(78783),n(33948),n(47042),n(39714),n(68309),n(91038),n(74916),n(88674),n(72443),n(39341),n(73706),n(10408),n(30489),n(54747),n(68304),n(96649),n(96078),n(38880),n(49337);var r=n(67294),o=n(22245),i=n(55026),a=n(74485),u=n(34041),c=n(9676),l=n(71230),s=n(15746),f=n(50888),d=n(95562),h=n(87462),p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 545.5L536.1 163a31.96 31.96 0 00-48.3 0L156 545.5a7.97 7.97 0 006 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"}}]},name:"arrow-up",theme:"outlined"},y=n(86496),v=function(e,t){return r.createElement(y.Z,(0,h.Z)({},e,{ref:t,icon:p}))};var m=r.forwardRef(v),b=n(76822),g=n(46984),w=n(89250),x=n(14955),j=n(68949),O=n(5509),E=n(47787),T=n(7346),k=n(85893);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t=function(e){var t=function(e,t){if("object"!==S(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===S(t)?t:String(t)}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(){I=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),u=new C(r||[]);return o(a,"_invoke",{value:k(e,n,u)}),a}function f(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}t.wrap=s;var d="suspendedStart",h="suspendedYield",p="executing",y="completed",v={};function m(){}function b(){}function g(){}var w={};l(w,a,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(N([])));j&&j!==n&&r.call(j,a)&&(w=j);var O=g.prototype=m.prototype=Object.create(w);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(o,i,a,u){var c=f(e[o],e,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"==S(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){n("next",e,a,u)}),(function(e){n("throw",e,a,u)})):t.resolve(s).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,u)}))}u(c.arg)}var i;o(this,"_invoke",{value:function(e,r){function o(){return new t((function(t,o){n(e,r,t,o)}))}return i=i?i.then(o,o):o()}})}function k(t,n,r){var o=d;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:e,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var c=Z(u,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var l=f(t,n,r);if("normal"===l.type){if(o=r.done?y:h,l.arg===v)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=y,r.method="throw",r.arg=l.arg)}}}function Z(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,Z(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var i=f(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function N(t){if(t||""===t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}throw new TypeError(S(t)+" is not iterable")}return b.prototype=g,o(O,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,c,"GeneratorFunction")),e.prototype=Object.create(O),e},t.awrap=function(e){return{__await:e}},E(T.prototype),l(T.prototype,u,(function(){return this})),t.AsyncIterator=T,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new T(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},E(O),l(O,c,"Generator"),l(O,a,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=N,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return u.type="throw",u.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}function C(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function N(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){C(i,r,o,a,u,"next",e)}function u(e){C(i,r,o,a,u,"throw",e)}a(void 0)}))}}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=function(){var e=F(o.Z.useForm(),1)[0],t=F(o.Z.useForm(),1)[0],n=(0,w.UO)().tableId,h=(0,w.s0)(),p=(0,O.Z)().useLayoutStore,y=p.defaultObjMobx,v=p.changeTabsListMobx,S=F((0,r.useState)([]),2),Z=S[0],P=S[1],C=F((0,r.useState)(),2),J=C[0],_=C[1],G=F((0,r.useState)([]),2),A=G[0],D=G[1],q=F((0,r.useState)(!0),2),R=q[0],U=q[1],K=F((0,r.useState)([]),2),M=K[0],V=K[1],Q=F((0,r.useState)("2"),2),B=Q[0],z=Q[1],Y=function(){var e=N(I().mark((function e(){var t,r,o;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.vz)();case 3:t=e.sent,r=t.data.result.rows,D(r),o=r.find((function(e){return e.tableId===Number(n)})),_(o),P(null==o?void 0:o.columns),U(!1),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){var e=function(){var e=N(I().mark((function e(){var t,n;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.xu)();case 3:t=e.sent,n=t.data,V(n.result),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e(),Y()}),[]);var $=function(){var r=N(I().mark((function r(){var o;return I().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(o={}).columns=Z,e.validateFields().then((function(){o=L(L({},o),e.getFieldsValue()),t.validateFields().then(N(I().mark((function e(){var r,a,u;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=L(L({tableId:n},o),t.getFieldsValue()),e.next=3,(0,x.ld)(o);case 3:r=e.sent,a=r.data,i.ZP.success(a.message),u=(0,j.ZN)(y.tabsListMobx),v(u.filter((function(e){return-1===e.path.indexOf("genEdit/".concat(n))}))),h("/tool/gen");case 9:case"end":return e.stop()}}),e)})))).catch((function(){z("3")}))})).catch((function(){z("1")}));case 3:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),W=function(e,t,n){var r=JSON.parse(JSON.stringify(Z));r[t][n]=e,P(r)},X=function(e,t,n){var r=JSON.parse(JSON.stringify(Z));r[t][n]=e.target.checked?"0":"1",P(r)},H=[{value:"input",label:"文本框"},{value:"textarea",label:"文本域"},{value:"select",label:"下拉框"},{value:"radio",label:"单选框"},{value:"checkbox",label:"复选框"},{value:"datetime",label:"日期控件"},{value:"imageUpload",label:"图片上传"},{value:"fileUpload",label:"文件上传"},{value:"editor",label:"富文本控件"}],ee=[{value:"eq",label:"="},{value:"ne",label:"!="},{value:"gt",label:">"},{value:"gte",label:">="},{value:"lt",label:"<"},{value:"lte",label:"<="},{value:"like",label:"LIKE"},{value:"between",label:"BETWEEN"}],te=[{value:"string",label:"String"},{value:"number",label:"Number"},{value:"date",label:"Date"},{value:"boolean",label:"Boolean"}],ne=[{title:"序号",dataIndex:"columnId",key:"columnId",align:"center",width:"5%",render:function(e,t,n){return n+1}},{title:"字段列名",dataIndex:"columnName",key:"columnName",align:"center",width:"10%",render:function(e,t,n){return(0,k.jsx)(a.Z,{value:e,onChange:function(e){W(e.target.value,n,"columnName")}})}},{title:"字段描述",dataIndex:"columnComment",key:"columnComment",align:"center",width:"10%",render:function(e,t,n){return(0,k.jsx)(a.Z,{value:e,onChange:function(e){W(e.target.value,n,"columnComment")}})}},{title:"物理类型",dataIndex:"columnType",key:"columnType",align:"center"},{title:"Ts类型",dataIndex:"tsType",key:"tsType",align:"center",render:function(e,t,n){return(0,k.jsx)(u.Z,{style:{width:120},value:e,onChange:function(e){W(e,n,"tsType")},options:te})}},{title:"Ts属性",dataIndex:"tsField",key:"tsField",align:"center",width:"10%",render:function(e,t,n){return(0,k.jsx)(a.Z,{onChange:function(e){W(e.target.value,n,"tsField")},value:e})}},{title:"新增",dataIndex:"isInsert",key:"isInsert",align:"center",width:"5%",render:function(e,t,n){return(0,k.jsx)(c.Z,{checked:"0"===e,onChange:function(e){return X(e,n,"isInsert")}})}},{title:"编辑",dataIndex:"isEdit",key:"isEdit",align:"center",width:"5%",render:function(e,t,n){return(0,k.jsx)(c.Z,{checked:"0"===e,onChange:function(e){return X(e,n,"isEdit")}})}},{title:"列表",dataIndex:"isList",key:"isList",align:"center",width:"5%",render:function(e,t,n){return(0,k.jsx)(c.Z,{checked:"0"===e,onChange:function(e){return X(e,n,"isList")}})}},{title:"查询",dataIndex:"isQuery",key:"isQuery",align:"center",width:"5%",render:function(e,t,n){return(0,k.jsx)(c.Z,{checked:"0"===e,onChange:function(e){return X(e,n,"isQuery")}})}},{title:"查询方式",dataIndex:"queryType",key:"queryType",align:"center",render:function(e,t,n){return(0,k.jsx)(u.Z,{style:{width:120},value:e,onChange:function(e){W(e,n,"queryType")},options:ee})}},{title:"必填",dataIndex:"isRequired",key:"isRequired",align:"center",width:"5%",render:function(e,t,n){return(0,k.jsx)(c.Z,{checked:"0"===e,onChange:function(e){return X(e,n,"isRequired")}})}},{title:"显示类型",dataIndex:"htmlType",key:"htmlType",align:"center",render:function(e,t,n){return(0,k.jsx)(u.Z,{style:{width:120},value:e,onChange:function(e){W(e,n,"htmlType")},options:H})}},{title:"字典类型",dataIndex:"dictType",key:"dictType",align:"center",render:function(e,t,n){return(0,k.jsx)(u.Z,{allowClear:!0,style:{width:120},placeholder:"字典类型",value:e,onChange:function(e){W(e||"",n,"dictType")},options:M.map((function(e){return{value:e.dictType,label:"".concat(e.dictName," ").concat(e.dictType)}}))})}}],re=Z,oe=(0,k.jsx)(l.Z,{gutter:8,children:(0,k.jsx)(s.Z,{children:(0,k.jsx)(g.Z,{color:"success",icon:(0,k.jsx)(m,{}),onClick:function(){return $()},children:"提交"})})}),ie=(0,k.jsx)("div",{className:"leno-table",children:(0,k.jsx)(f.Z,{columns:ne,dataSource:re,pagination:!1,rowKey:"columnId",size:"middle",loading:R})});return(0,k.jsx)("div",{className:"app-container",children:(0,k.jsx)(l.Z,{gutter:16,children:(0,k.jsx)(s.Z,{span:24,children:(0,k.jsx)(d.Z,{activeKey:B,tabBarExtraContent:oe,onTabClick:function(e){z(e)},items:[{label:"基本信息",key:"1",children:(0,k.jsx)(E.default,{baseForm:e,currentTable:J}),forceRender:!0},{label:"字段信息",key:"2",children:ie},{label:"生成信息",key:"3",children:(0,k.jsx)(T.default,{generateForm:t,columns:Z,tableList:A,currentTable:J}),forceRender:!0}]})})})})}}}]);