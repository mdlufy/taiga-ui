"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[29268],{29268:(Rt,O,n)=>{n.r(O),n.d(O,{ExampleTuiAlertsModule:()=>Mt});var m=n(12057),C=n(24751),p=n(33982),S=n(23121),h=n(29851),s=n(76040),g=n(418),c=n(89570),t=n(74788),A=n(43190),M=n(16996),f=n(30644),T=n(76189),R=n(66596);let L=(()=>{class o{constructor(e){this.context=e,this.value=this.context.data}increaseBalance(){this.value+=10}submit(){this.context.completeWith(this.value)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.yf))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-notifications-service-example-with-data"]],decls:9,vars:2,consts:[[1,"text"],[3,"value"],["tuiMode","onLight",1,"controls","tui-space_top-3"],["tuiButton","","type","button","appearance","outline","size","m",1,"tui-space_right-3",3,"click"],["tuiLink","","type","button",3,"pseudo","click"]],template:function(e,u){1&e&&(t.TgZ(0,"span",0),t._uU(1,"Your balance:"),t.qZA(),t._uU(2,"\n\xa0\n"),t._UZ(3,"tui-money",1),t.TgZ(4,"div",2),t.TgZ(5,"button",3),t.NdJ("click",function(){return u.submit()}),t._uU(6," Submit "),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return u.increaseBalance()}),t._uU(8," Increase "),t.qZA(),t.qZA()),2&e&&(t.xp6(3),t.Q6J("value",u.value),t.xp6(4),t.Q6J("pseudo",!0))},directives:[M.o,f.w,T.v,R.V],styles:[".text[_ngcontent-%COMP%]{font-style:italic}.controls[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),o})();var H=n(88331),Y=n(37159),w=n(57068);let Q=(()=>{class o{constructor(e){this.alertService=e}showNotification(){this.alertService.open("A simple option",{label:"With a heading!"}).subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.TuiAlertService))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-alerts-example-1"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(e,u){1&e&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return u.showNotification()}),t._uU(1," Show\n"),t.qZA())},directives:[T.v],encapsulation:2,changeDetection:0}),o})();const B=["withdrawTemplate"],j=["depositTemplate"];function K(o,F){if(1&o){const e=t.EpF();t.TgZ(0,"p"),t.SDv(1,4),t.qZA(),t.TgZ(2,"p"),t._uU(3," Your balance: "),t._UZ(4,"tui-money",0),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){return t.CHM(e),t.oxw().withdraw()}),t._uU(6," Withdraw\xa0 "),t._UZ(7,"tui-money",0),t.qZA()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("value",e.money),t.xp6(3),t.Q6J("value",100)}}function k(o,F){if(1&o){const e=t.EpF();t.TgZ(0,"p"),t.tHW(1,6),t._UZ(2,"code"),t._UZ(3,"code"),t.N_p(),t.qZA(),t.TgZ(4,"p"),t._uU(5," Your balance: "),t._UZ(6,"tui-money",0),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return t.CHM(e),t.oxw().deposit()}),t._uU(8," Add\xa0 "),t._UZ(9,"tui-money",0),t.qZA()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("value",e.money),t.xp6(3),t.Q6J("value",100)}}let q=(()=>{class o{constructor(e){this.alertService=e,this.money=1e3}showWithdrawAlert(){this.alertService.open(this.withdrawTemplate||"",{label:"A template sample",status:"warning",autoClose:!1}).subscribe()}showDepositAlert(){this.alertService.open(this.depositTemplate||"",{label:"A template sample",status:"success",autoClose:!1}).subscribe()}withdraw(){this.money-=100}deposit(){this.money+=100}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.TuiAlertService))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-alerts-example-2"]],viewQuery:function(e,u){if(1&e&&(t.Gf(B,5),t.Gf(j,5)),2&e){let a;t.iGM(a=t.CRH())&&(u.withdrawTemplate=a.first),t.iGM(a=t.CRH())&&(u.depositTemplate=a.first)}},decls:14,vars:2,consts:function(){let F,e;return F=$localize`:␟8d3c5771978973f774594800055ea9d9f9187731␟1511830455526270445:Notifications can be shown with template`,e=$localize`:␟89d0371fa85a88f37afe5840ebc452e9ff9bdc34␟7003116325745007663: If there are many templates, you can use ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChildren${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: instead of ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:ViewChild${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: or set them IDs with "#" (see code of this sample) `,e=t.Zx4(e),[[3,"value"],["tuiButton","","type","button","size","m",1,"tui-space_right-3",3,"click"],["withdrawTemplate",""],["depositTemplate",""],F,["tuiButton","","type","button","tuiMode","onLight","appearance","outline","size","m",3,"click"],e]},template:function(e,u){1&e&&(t.TgZ(0,"p"),t._uU(1," Your balance: "),t._UZ(2,"tui-money",0),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return u.showWithdrawAlert()}),t._uU(4," Withdraw\n"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return u.showDepositAlert()}),t._uU(6," Add\n"),t.qZA(),t.TgZ(7,"button",1),t.NdJ("click",function(){return u.withdraw()}),t._uU(8," Withdraw\xa0 "),t._UZ(9,"tui-money",0),t.qZA(),t.YNc(10,K,8,2,"ng-template",null,2,t.W1O),t.YNc(12,k,10,2,"ng-template",null,3,t.W1O)),2&e&&(t.xp6(2),t.Q6J("value",u.money),t.xp6(7),t.Q6J("value",100))},directives:[M.o,T.v,f.w],encapsulation:2,changeDetection:0}),o})();var D=n(46782);let tt=(()=>{class o{constructor(e){this.context=e}ok(){this.context.completeWith(!0)}cancel(){this.context.completeWith(!1)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.yf))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-notifications-service-example"]],decls:7,vars:0,consts:[["tuiMode","onLight"],["tuiButton","","type","button","appearance","outline","size","s",3,"click"],["tuiButton","","type","button","appearance","outline","size","s",1,"tui-space_left-1",3,"click"]],template:function(e,u){1&e&&(t.TgZ(0,"p"),t._uU(1,"Yes?"),t.qZA(),t.TgZ(2,"div",0),t.TgZ(3,"button",1),t.NdJ("click",function(){return u.ok()}),t._uU(4," Yes "),t.qZA(),t.TgZ(5,"button",2),t.NdJ("click",function(){return u.cancel()}),t._uU(6," No "),t.qZA(),t.qZA())},directives:[f.w,T.v],encapsulation:2,changeDetection:0}),o})(),et=(()=>{class o{constructor(e,u,a){this.injector=a,this.notification=e.open(new c.Al(tt,this.injector),{label:"Question",status:"error",autoClose:!1}).pipe((0,A.w)(l=>e.open(`Got a value \u2014 ${l}`,{label:"Information"})),(0,D.R)(u.events))}showNotification(){this.notification.subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.TuiAlertService),t.Y36(p.F0),t.Y36(t.zs3))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-alerts-example-3"]],decls:4,vars:0,consts:function(){let F;return F=$localize`:␟8263fd5f4e59612e4fde19ba3a13cba5e6b5af73␟8127611195136646297:This notification will be removed after router change (see component sample)`,[F,["tuiButton","","type","button","size","m",3,"click"]]},template:function(e,u){1&e&&(t.TgZ(0,"p"),t.SDv(1,0),t.qZA(),t.TgZ(2,"button",1),t.NdJ("click",function(){return u.showNotification()}),t._uU(3," Show\n"),t.qZA())},directives:[T.v],encapsulation:2,changeDetection:0}),o})(),ot=(()=>{class o{constructor(e,u,a){this.injector=a,this.notification=e.open(new c.Al(L,this.injector),{label:"Heading is so long that it should be shown in two lines of text",data:237,status:"warning",autoClose:!1}).pipe((0,A.w)(l=>e.open(`Got a value \u2014 ${l}`,{label:"Information"})),(0,D.R)(u.events))}showNotification(){this.notification.subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.TuiAlertService),t.Y36(p.F0),t.Y36(t.zs3))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-alerts-example-4"]],decls:2,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"]],template:function(e,u){1&e&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return u.showNotification()}),t._uU(1," Show\n"),t.qZA())},directives:[T.v],encapsulation:2,changeDetection:0}),o})();var x=n(64762),$=n(68339);function nt(o,F){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const e=F.polymorpheusOutlet;t.xp6(1),t.hij(" ",e,"\n")}}const Ft=function(o){return{$implicit:o}};class E{constructor(F){this.context=F}get label(){return this.context.label}get status(){return this.context.status}}E.\u0275fac=function(F){return new(F||E)(t.Y36(c.yf))},E.\u0275cmp=t.Xpm({type:E,selectors:[["tui-notifications-service-example-with-custom-label"]],decls:5,vars:4,consts:[[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(F,e){1&F&&(t.TgZ(0,"h4"),t._uU(1,"Start content"),t.qZA(),t.YNc(2,nt,2,1,"ng-container",0),t.TgZ(3,"h4"),t._uU(4,"End content"),t.qZA()),2&F&&(t.xp6(2),t.Q6J("polymorpheusOutlet",e.label)("polymorpheusOutletContext",t.VKq(2,Ft,e.status)))},directives:[c.Li],encapsulation:2,changeDetection:0}),(0,x.gn)([$.tuiPure],E.prototype,"label",null),(0,x.gn)([$.tuiPure],E.prototype,"status",null);var ut=n(34880);let at=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-notifications-service-example-custom-label"]],decls:4,vars:0,consts:[[1,"label"],[1,"text"],["src","tuiIconHeart"]],template:function(e,u){1&e&&(t.TgZ(0,"label",0),t.TgZ(1,"span",1),t._uU(2,"From custom label component with"),t.qZA(),t._UZ(3,"tui-svg",2),t.qZA())},directives:[ut.P],styles:[".label[_ngcontent-%COMP%]{display:flex;align-items:center}.text[_ngcontent-%COMP%]{font-weight:normal;font-style:italic}"],changeDetection:0}),o})(),lt=(()=>{class o{constructor(e,u,a){this.injector=a,this.notification=e.open(new c.Al(E,this.injector),{label:({$implicit:l})=>"error"===l?"Error label from function":"Info label from function",status:"info",autoClose:!1}).pipe((0,D.R)(u.events)),this.notificationWithCustomLabel=e.open(new c.Al(E,this.injector),{label:new c.Al(at,this.injector),status:"warning",autoClose:!1}).pipe((0,D.R)(u.events))}showNotification(){this.notification.subscribe()}showNotificationWithCustomLabel(){this.notificationWithCustomLabel.subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.TuiAlertService),t.Y36(p.F0),t.Y36(t.zs3))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-alerts-example-5"]],decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tuiButton","","type","button","size","m",1,"tui-space_left-3",3,"click"]],template:function(e,u){1&e&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return u.showNotification()}),t._uU(1," With custom label function\n"),t.qZA(),t.TgZ(2,"button",1),t.NdJ("click",function(){return u.showNotificationWithCustomLabel()}),t._uU(3," With custom label component\n"),t.qZA())},directives:[T.v],encapsulation:2,changeDetection:0}),o})();var it=n(76349),st=n(54476),ct=n(17023);function Tt(o,F){if(1&o&&(t.TgZ(0,"p"),t.SDv(1,2),t.qZA(),t.TgZ(2,"p"),t.tHW(3,3),t._UZ(4,"code"),t.N_p(),t.qZA(),t.TgZ(5,"p"),t.tHW(6,4),t._UZ(7,"strong"),t.N_p(),t.qZA(),t.TgZ(8,"tui-doc-example",5),t._UZ(9,"tui-alerts-example-1"),t.qZA(),t.TgZ(10,"tui-doc-example",6),t._UZ(11,"tui-alerts-example-2"),t.qZA(),t.TgZ(12,"tui-doc-example",7),t._UZ(13,"tui-alerts-example-3"),t.qZA(),t.TgZ(14,"tui-doc-example",8),t._UZ(15,"tui-alerts-example-4"),t.qZA(),t.TgZ(16,"tui-doc-example",9),t._UZ(17,"tui-alerts-example-5"),t.qZA()),2&o){const e=t.oxw();t.xp6(8),t.Q6J("content",e.example1),t.xp6(2),t.Q6J("content",e.example2),t.xp6(2),t.Q6J("content",e.example3),t.xp6(2),t.Q6J("content",e.example4),t.xp6(2),t.Q6J("content",e.example5)}}function Et(o,F){1&o&&t.SDv(0,22)}function mt(o,F){1&o&&t.SDv(0,23)}function pt(o,F){1&o&&t.SDv(0,24)}function Dt(o,F){1&o&&t.SDv(0,25)}function dt(o,F){1&o&&t.SDv(0,26)}function rt(o,F){1&o&&t.SDv(0,27)}function _t(o,F){1&o&&t.SDv(0,28)}function Ct(o,F){if(1&o){const e=t.EpF();t.TgZ(0,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().showNotification()}),t._uU(1," Show "),t.qZA(),t.TgZ(2,"div",11),t.tHW(3,12),t._UZ(4,"p"),t._UZ(5,"tui-doc-code",13),t._UZ(6,"code"),t._UZ(7,"code"),t._UZ(8,"code"),t._UZ(9,"code"),t.TgZ(10,"p"),t._UZ(11,"code"),t._UZ(12,"code"),t._UZ(13,"code"),t.qZA(),t.N_p(),t.qZA(),t.TgZ(14,"tui-doc-documentation"),t.YNc(15,Et,1,0,"ng-template",14),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().content=a}),t.qZA(),t.TgZ(16,"p"),t.tHW(17,15),t._UZ(18,"code"),t.N_p(),t.qZA(),t.TgZ(19,"tui-doc-documentation"),t.YNc(20,mt,1,0,"ng-template",16),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().status=a}),t.YNc(21,pt,1,0,"ng-template",17),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().label=a}),t.YNc(22,Dt,1,0,"ng-template",18),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().data=a}),t.YNc(23,dt,1,0,"ng-template",19),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().autoClose=a}),t.YNc(24,rt,1,0,"ng-template",20),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().hasCloseButton=a}),t.YNc(25,_t,1,0,"ng-template",21),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().hasIcon=a}),t.qZA()}if(2&o){const e=t.oxw();t.xp6(5),t.Q6J("code",e.method),t.xp6(10),t.Q6J("documentationPropertyValues",e.contentVariants)("documentationPropertyValue",e.content),t.xp6(5),t.Q6J("documentationPropertyValues",e.statusVariants)("documentationPropertyValue",e.status),t.xp6(1),t.Q6J("documentationPropertyValue",e.label),t.xp6(1),t.Q6J("documentationPropertyValue",e.data),t.xp6(1),t.Q6J("documentationPropertyValues",e.autoCloseVariants)("documentationPropertyValue",e.autoClose),t.xp6(1),t.Q6J("documentationPropertyValue",e.hasCloseButton),t.xp6(1),t.Q6J("documentationPropertyValue",e.hasIcon)}}function St(o,F){if(1&o&&(t.TgZ(0,"ol",29),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,30),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",31),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.tHW(8,32),t._UZ(9,"code"),t._UZ(10,"code"),t.N_p(),t.qZA(),t._UZ(11,"tui-doc-code",33),t.qZA(),t.TgZ(12,"li"),t.tHW(13,34),t.TgZ(14,"a",35),t._UZ(15,"code"),t.qZA(),t.N_p(),t.qZA(),t.TgZ(16,"li"),t.TgZ(17,"p"),t.tHW(18,36),t._UZ(19,"code"),t._UZ(20,"code"),t._UZ(21,"code"),t._UZ(22,"code"),t.N_p(),t.qZA(),t.qZA(),t.TgZ(23,"li"),t.TgZ(24,"p"),t.tHW(25,37),t._UZ(26,"code"),t.N_p(),t.qZA(),t._UZ(27,"tui-doc-code",33),t.qZA(),t.TgZ(28,"li"),t.TgZ(29,"p"),t.tHW(30,38),t._UZ(31,"code"),t.N_p(),t.qZA(),t._UZ(32,"tui-doc-code",39),t.qZA(),t.TgZ(33,"li"),t.TgZ(34,"p"),t.tHW(35,40),t._UZ(36,"code"),t.N_p(),t.qZA(),t._UZ(37,"tui-doc-code",39),t.qZA(),t.TgZ(38,"li"),t.TgZ(39,"p"),t.tHW(40,41),t._UZ(41,"code"),t.N_p(),t.qZA(),t._UZ(42,"tui-doc-code",31),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("code",e.exampleModule),t.xp6(6),t.Q6J("code",e.exampleServiceUsage),t.xp6(16),t.Q6J("code",e.exampleServiceUsageComponent),t.xp6(5),t.Q6J("code",e.exampleCustomAlert),t.xp6(5),t.Q6J("code",e.exampleLazyModule),t.xp6(5),t.Q6J("code",e.exampleOptions)}}let gt=(()=>{class o{constructor(e,u){this.alertService=e,this.method=n.e(22864).then(n.t.bind(n,22864,17)),this.exampleServiceUsage=n.e(21779).then(n.t.bind(n,21779,17)),this.exampleServiceUsageComponent=n.e(47317).then(n.t.bind(n,47317,17)),this.exampleCustomAlert=n.e(89081).then(n.t.bind(n,89081,17)),this.exampleLazyModule=n.e(23040).then(n.t.bind(n,23040,17)),this.exampleModule=n.e(44780).then(n.t.bind(n,44780,17)),this.exampleOptions=n.e(44623).then(n.t.bind(n,44623,17)),this.example1={TypeScript:n.e(71703).then(n.t.bind(n,71703,17)),HTML:n.e(60849).then(n.t.bind(n,60849,17))},this.example2={TypeScript:n.e(76701).then(n.t.bind(n,76701,17)),HTML:n.e(23996).then(n.t.bind(n,23996,17))},this.example3={TypeScript:n.e(11885).then(n.t.bind(n,11885,17)),HTML:n.e(19597).then(n.t.bind(n,19597,17)),"alert-example/alert-example.component.ts":n.e(35010).then(n.t.bind(n,35010,17)),"alert-example/alert-example.template.html":n.e(99889).then(n.t.bind(n,99889,17)),"alert-example/alert-example.module.ts":n.e(41177).then(n.t.bind(n,41177,17))},this.example4={TypeScript:n.e(67005).then(n.t.bind(n,67005,17)),HTML:n.e(56103).then(n.t.bind(n,56103,17)),"alert-example-with-data/alert-example-with-data.component.ts":n.e(47368).then(n.t.bind(n,47368,17)),"alert-example-with-data/alert-example-with-data.template.html":n.e(52399).then(n.t.bind(n,52399,17)),"alert-example-with-data/alert-example-with-data.style.less":n.e(54926).then(n.t.bind(n,54926,17)),"alert-example-with-data/alert-example-with-data.module.ts":n.e(34124).then(n.t.bind(n,34124,17))},this.example5={TypeScript:n.e(73037).then(n.t.bind(n,73037,17)),HTML:n.e(24149).then(n.t.bind(n,24149,17)),"custom-label/custom-label.module.ts":n.e(68510).then(n.t.bind(n,68510,17)),"custom-label/custom-label.component.ts":n.e(62580).then(n.t.bind(n,62580,17)),"custom-label/custom-label.style.less":n.e(6664).then(n.t.bind(n,6664,17)),"custom-label/custom-label.template.html":n.e(23866).then(n.t.bind(n,23866,17)),"alert-example-with-custom-label/alert-example-with-custom-label.module.ts":n.e(49668).then(n.t.bind(n,49668,17)),"alert-example-with-custom-label/alert-example-with-custom-label.component.ts":n.e(95001).then(n.t.bind(n,95001,17)),"alert-example-with-custom-label/alert-example-with-custom-label.template.html":n.e(36561).then(n.t.bind(n,36561,17))},this.data=100,this.label="Heading",this.statusVariants=["info","success","error","warning"],this.status=this.statusVariants[0],this.contentVariants=["String","Component"],this.content=this.contentVariants[0],this.autoCloseVariants=[!0,!1,5e3,1e3,500],this.autoClose=this.autoCloseVariants[0],this.hasCloseButton=!0,this.hasIcon=!0,this.component=new c.Al(L,u)}get selectedContent(){return"String"===this.content?this.content:this.component}showNotification(){this.alertService.open(this.selectedContent,{label:this.label,data:this.data,status:this.status,autoClose:this.autoClose,hasCloseButton:this.hasCloseButton,hasIcon:this.hasIcon}).pipe((0,A.w)(e=>this.alertService.open(e,{label:"Notification responded with:"}))).subscribe()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(s.TuiAlertService),t.Y36(t.zs3))},o.\u0275cmp=t.Xpm({type:o,selectors:[["example-tui-alerts"]],decls:4,vars:0,consts:function(){let F,e,u,a,l,d,N,y,P,Z,b,I,U,v,G,r,V,_,J,X,z,W;return F=$localize`:␟1bc7f6b64817783f73d7fa20dacc10347f5dc0a9␟5275394011225250882:Service to show notifications`,e=$localize`:␟f9c768272ef2129e75edad899c468746678c8252␟4524286694660863035: Do not forget to add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module to use it `,u=$localize`:␟06634cafb8d09a8709af1c3b2f329d5d2a9e62de␟4498461250311742014:${"\ufffd#7\ufffd"}:START_TAG_STRONG:Singleton${"\ufffd/#7\ufffd"}:CLOSE_TAG_STRONG: you do not need to provide a service. It is just available to inject `,a=$localize`:␟0daf8614496e10971564a28775e074876405031d␟3087369671149412391:Component with data`,l=$localize`:␟51f3f834f095165ec2607a17213c7aa0bc5e4ba3␟1211513920026771159:Component with custom label`,d=$localize`:␟6867a837818a55e0f70764a5e68062bd01ab7163␟7317498188483132876:${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH:To show notification, use method${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:${"\ufffd#5\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#5\ufffd"}:CLOSE_TAG_TUI_DOC_CODE: of ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:TuiAlertService${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: is input data type. If content does not need input data, the second argument is optional. In the sample above the both of them are ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:number${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: . ${"[\ufffd#4\ufffd|\ufffd#10\ufffd]"}:START_PARAGRAPH: You can also just unsubscribe from a stream to hide a notification (this observable is returned from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: method). You can save a subscription for that or use ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:takeUntil${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE: like tools from ${"[\ufffd#6\ufffd|\ufffd#7\ufffd|\ufffd#8\ufffd|\ufffd#9\ufffd|\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#13\ufffd]"}:START_TAG_CODE:RxJs${"[\ufffd/#6\ufffd|\ufffd/#7\ufffd|\ufffd/#8\ufffd|\ufffd/#9\ufffd|\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#4\ufffd|\ufffd/#10\ufffd]"}:CLOSE_PARAGRAPH:`,d=t.Zx4(d),N=$localize`:␟07844fabcae9dbc5fe46cba91e975d09f6d9ce2a␟3466418148583049497:${"\ufffd#18\ufffd"}:START_TAG_CODE:TuiNotificationOptionsWithData${"\ufffd/#18\ufffd"}:CLOSE_TAG_CODE: interface: `,y=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,P=$localize`:␟054f7afbbdc6ffea0fc80d8039aba9a2d5dba955␟435210747077371139: Status `,Z=$localize`:␟5fb70b9672bd3114da4cc91ecf05bb7d571ea807␟9208464206964786295: Heading `,b=$localize`:␟f271223d9bb6bb62e01b785f8a9b0fefc37ab76e␟2636705087580276181: Input data of notification, type <I> `,I=$localize`:␟a96e2773c11aaa18bb3e8c5da1ebb43c9f750f02␟3778304849595610845: Autoclose after 3 seconds `,U=$localize`:␟12b3111611486481901517499f89b963c39f0e24␟8491523700308437284: Has close button `,v=$localize`:␟62b895a2a597c60a6ac9e4c819904b8eac08dbd5␟149058290855307515: Has icon `,G=$localize`:␟1429eb9bd9237455d53e9b7c4cef0d095719ab81␟2697985294473194370: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAlertModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,r=$localize`:␟f895bd0c51111cb2c8e68ceead5ada137ab6d5b2␟7179047044375359280: Use service ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:show${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE:`,r=t.Zx4(r),V=$localize`:␟6a766c93a51fcb02bf26ecacd479951c8f4b71fb␟8405226284519292539: To pass notification with custom content, you can use ${"\ufffd#14\ufffd"}:START_LINK:${"\ufffd#15\ufffd"}:START_TAG_CODE:your template${"\ufffd/#15\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#14\ufffd"}:CLOSE_LINK: . `,_=$localize`:␟32fa5ec086fe0d052bec5ed630ddd6f9ae157a69␟5461081268200211199: You can also customize notification logic with a component. Use ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd]"}:START_TAG_CODE:POLYMORPHEUS_CONTEXT${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_CODE: into the component to get context input data and to output results. It has the following interface: ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd]"}:START_TAG_CODE:TuiDialog<TuiAlertOptions<I>, O>${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_CODE: , where ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd]"}:START_TAG_CODE:O${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_CODE: is output data type and ${"[\ufffd#19\ufffd|\ufffd#20\ufffd|\ufffd#21\ufffd|\ufffd#22\ufffd]"}:START_TAG_CODE:I${"[\ufffd/#19\ufffd|\ufffd/#20\ufffd|\ufffd/#21\ufffd|\ufffd/#22\ufffd]"}:CLOSE_TAG_CODE: is input data type. `,_=t.Zx4(_),J=$localize`:␟ec507827c245a3395d58e897109309b8e3a99ac7␟1436172444558827801: Use ${"\ufffd#26\ufffd"}:START_TAG_CODE:new PolymorpheusComponent(CustomNotificationComponent)${"\ufffd/#26\ufffd"}:CLOSE_TAG_CODE: to show notification component with a service: `,X=$localize`:␟fd68ca58ffb42f8e63cf860073e9f9b9b30c0c70␟8335780216628034342: Use ${"\ufffd#31\ufffd"}:START_TAG_CODE:completeWith${"\ufffd/#31\ufffd"}:CLOSE_TAG_CODE: method to control notification from itself: `,z=$localize`:␟72bdc03d46093beeafa58136204fab3ed68241ec␟7759900700350680332: If you use it from lazy loading modules, do not forget to use ${"\ufffd#36\ufffd"}:START_TAG_CODE:new TuiComponentContent Injector${"\ufffd/#36\ufffd"}:CLOSE_TAG_CODE: of component where you call it `,W=$localize`:␟bad4e5730bd20ce05150c175f3923390d3e8bbf7␟8849888545184271088: Optionally use the ${"\ufffd#41\ufffd"}:START_TAG_CODE:TUI_NOTIFICATION_OPTIONS${"\ufffd/#41\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options (works only in app.module.ts). `,[["header","AlertService","package","CORE","path","core/components/alert/alert.service.ts"],["pageTab",""],F,e,u,["id","text","heading","Text",3,"content"],["id","template","heading","Template",3,"content"],["id","component","heading","Component",3,"content"],["id","data","heading",a,3,"content"],["id","label","heading",l,3,"content"],["tuiButton","","type","button","size","m",3,"click"],[1,"b-full-width"],d,[1,"tui-space_bottom-4",3,"code"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],N,["documentationPropertyName","status","documentationPropertyType","TuiNotification",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","label","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","autoClose","documentationPropertyType","boolean | number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasIcon","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],y,P,Z,b,I,U,v,[1,"b-demo-steps"],G,["filename","app.module.ts",3,"code"],r,["filename","myComponent.component.ts",3,"code"],V,["routerLink","/services/alert-service","fragment","example-template","tuiLink",""],_,J,X,["filename","customNotification.component.ts",3,"code"],z,W]},template:function(e,u){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,Tt,18,5,"ng-template",1),t.YNc(2,Ct,26,11,"ng-template",1),t.YNc(3,St,43,6,"ng-template",1),t.qZA())},directives:[H.q,Y.n,w.f,Q,q,et,ot,lt,T.v,it.c,st.z,ct.B,p.yS,R.V],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),o})(),At=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,C.u5,s.TuiButtonModule,s.TuiModeModule,g.TuiSelectModule,S.TuiMoneyModule]]}),o})(),ft=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,C.u5,s.TuiModeModule,s.TuiButtonModule,s.TuiLinkModule,S.TuiMoneyModule]]}),o})(),Ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,c.wq]]}),o})(),ht=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,s.TuiSvgModule]]}),o})(),Mt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,s.TuiButtonModule,s.TuiModeModule,S.TuiMoneyModule,c.wq,Ot,ft,At,ht,g.TuiRadioListModule,g.TuiInputModule,s.TuiLinkModule,C.u5,h.fV,p.Bz.forChild((0,h.Ve)(gt))]]}),o})()}}]);