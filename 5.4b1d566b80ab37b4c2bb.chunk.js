webpackJsonp([5],{"1zOK":function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=t("/oeL"),e=t("ywHH"),o=t("u8xd"),r=t("d+d+"),c=t("qbdv"),d=t("BkNc"),a=t("vgjo"),i=t("6ReJ"),s=(t.n(i),t("bIam")),f=t("jcBm");t.d(n,"BluetoothModuleNgFactory",function(){return p});var p=u["ɵcmf"](e.a,[],function(l){return u["ɵmod"]([u["ɵmpd"](512,u.ComponentFactoryResolver,u["ɵCodegenComponentFactoryResolver"],[[8,[o.a,r.a]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["ɵmpd"](4608,c.a,c.b,[u.LOCALE_ID]),u["ɵmpd"](512,c.d,c.d,[]),u["ɵmpd"](512,d.w,d.w,[[2,d.m],[2,d.c]]),u["ɵmpd"](512,a.a,a.a,[]),u["ɵmpd"](512,i.ChartsModule,i.ChartsModule,[]),u["ɵmpd"](512,s.a,s.a,[]),u["ɵmpd"](512,e.a,e.a,[]),u["ɵmpd"](1024,d.r,function(){return[[{path:"",component:f.a,data:{title:"Bluetooth"}}]]},[])])})},jcBm:function(l,n,t){"use strict";var u=t("diGR");t.d(n,"a",function(){return r});var e=this&&this.__awaiter||function(l,n,t,u){return new(t||(t=Promise))(function(e,o){function r(l){try{d(u.next(l))}catch(l){o(l)}}function c(l){try{d(u.throw(l))}catch(l){o(l)}}function d(l){l.done?e(l.value):new t(function(n){n(l.value)}).then(r,c)}d((u=u.apply(l,n||[])).next())})},o=this&&this.__generator||function(l,n){function t(l){return function(n){return u([l,n])}}function u(t){if(e)throw new TypeError("Generator is already executing.");for(;d;)try{if(e=1,o&&(r=o[2&t[0]?"return":t[0]?"throw":"next"])&&!(r=r.call(o,t[1])).done)return r;switch(o=0,r&&(t=[0,r.value]),t[0]){case 0:case 1:r=t;break;case 4:return d.label++,{value:t[1],done:!1};case 5:d.label++,o=t[1],t=[0];continue;case 7:t=d.ops.pop(),d.trys.pop();continue;default:if(r=d.trys,!(r=r.length>0&&r[r.length-1])&&(6===t[0]||2===t[0])){d=0;continue}if(3===t[0]&&(!r||t[1]>r[0]&&t[1]<r[3])){d.label=t[1];break}if(6===t[0]&&d.label<r[1]){d.label=r[1],r=t;break}if(r&&d.label<r[2]){d.label=r[2],d.ops.push(t);break}r[2]&&d.ops.pop(),d.trys.pop();continue}t=n.call(l,d)}catch(l){t=[6,l],o=0}finally{e=r=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}var e,o,r,c,d={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return c={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c},r=function(){function l(){this.supported=!1,this.title="Connect a device Device"}return l.prototype.connect=function(){return e(this,void 0,void 0,function(){return o(this,function(l){return this.supported&&u.a.Instance.ConnectToBluetooth(),[2]})})},l.prototype.ngOnInit=function(){navigator.bluetooth?(this.supported=!0,console.log("bluetooth supported")):this.title="Bluetooth is not supported in your browser! Please use Chrome or Chrome for Android"},l}()},u8xd:function(l,n,t){"use strict";function u(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,54,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n    "])),(l()(),o["ɵeld"](0,null,null,29,"div",[["class","card"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵeld"](0,null,null,7,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,4,"h5",[["class","mb-0"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n                    "])),(l()(),o["ɵeld"](0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["Connect to a device"])),(l()(),o["ɵted"](null,["\n                    \n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵeld"](0,null,null,17,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,5,"div",[["class","bluetooth"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,2,"button",[["class","btn btn-outline-primary  w-100 p-3"],["style","border-radius: 15px;"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],function(l,n,t){var u=!0,e=l.component;if("click"===n){u=!1!==e.connect()&&u}return u},null,null)),(l()(),o["ɵeld"](0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-bluetooth fa-3x"],["style","margin: 20px;"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["Connect to a bluetooth device"])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,0,"br",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,5,"div",[["class","serial w-100 p-3"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n            "])),(l()(),o["ɵeld"](0,null,null,2,"button",[["class","btn btn-outline-secondary w-100 p-3"],["style","border-radius: 15px;"],["type","button"]],[[8,"disabled",0]],null,null,null,null)),(l()(),o["ɵeld"](0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-microchip fa-3x"],["style","margin: 20px;"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["Connect to a serial device"])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](null,["\n      "])),(l()(),o["ɵted"](null,["\n      "])),(l()(),o["ɵted"](null,["\n\n  "])),(l()(),o["ɵeld"](0,null,null,18,"div",[["class","card"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n    "])),(l()(),o["ɵeld"](0,null,null,12,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n      "])),(l()(),o["ɵeld"](0,null,null,9,"h5",[["class","mb-0"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵeld"](0,null,null,6,"a",[],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,1,"h4",[["class","card-title mb-0"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),o["ɵted"](null,["Connected Device"])),(l()(),o["ɵted"](null,["\n          "])),(l()(),o["ɵeld"](0,null,null,0,"div",[["class","small text-muted"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n        "])),(l()(),o["ɵted"](null,["\n      "])),(l()(),o["ɵted"](null,["\n    "])),(l()(),o["ɵted"](null,["\n    "])),(l()(),o["ɵeld"](0,null,null,1,"div",[["class","card-block"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n\n    "])),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵted"](null,["\n"])),(l()(),o["ɵted"](null,["\n"]))],null,function(l,n){var t=n.component;l(n,17,0,!t.supported);l(n,26,0,!0),l(n,42,0,t.title)})}function e(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,1,"ng-component",[],null,null,null,u,d)),o["ɵdid"](114688,null,0,r.a,[],null,null)],function(l,n){l(n,1,0)},null)}var o=t("/oeL"),r=t("jcBm");t.d(n,"a",function(){return a});var c=[".bluetooth[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    color:#40a0fc;\n  }\n  .bluetooth[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    color: blue;\n  }\n  .bluetooth[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, .bluetooth[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{\n    color: grey;\n  }\n  .serial[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    color: LightGrey;\n  }\n  .serial[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    color: black;\n  }\n  .serial[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, .serial[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{\n    color: grey;\n  }"],d=o["ɵcrt"]({encapsulation:0,styles:c,data:{}}),a=o["ɵccf"]("ng-component",r.a,e,{},{},[])},vgjo:function(l,n,t){"use strict";var u=t("jcBm");t.d(n,"a",function(){return e});var e=(u.a,function(){function l(){}return l}())},ywHH:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=function(){function l(){}return l}()}});