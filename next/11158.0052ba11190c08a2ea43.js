"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[11158],{11158:(G,T,o)=>{o.r(T),o.d(T,{ExampleTuiErrorModule:()=>U});var p=o(12057),E=o(24751),s=o(33982),c=o(29851),F=o(68339),d=o(3497),g=o(18738),C=o(89570),e=o(74788),O=o(88331),R=o(37159),M=o(66596),_=o(57068),D=o(82535),m=o(36951);let f=(()=>{class t{constructor(){this.enabled=!1,this.error=new F.TuiValidationError("An error")}get computedError(){return this.enabled?this.error:null}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-error-example-1"]],decls:3,vars:2,consts:[[3,"ngModel","ngModelChange"],[3,"error"]],template:function(r,l){1&r&&(e.TgZ(0,"tui-toggle",0),e.NdJ("ngModelChange",function(u){return l.enabled=u}),e._uU(1,"Show"),e.qZA(),e._UZ(2,"tui-error",1)),2&r&&(e.Q6J("ngModel",l.enabled),e.xp6(2),e.Q6J("error",l.computedError))},directives:[D.p,E.JJ,E.On,m.v],encapsulation:2,changeDetection:0}),t})();var S=o(31823),N=o(54476),x=o(17023),h=o(76349);const A=["errorContent"],$=function(){return["/pipes/field-error"]};function P(t,n){if(1&t&&(e.TgZ(0,"p"),e.tHW(1,2),e._UZ(2,"code"),e.TgZ(3,"a",3),e._UZ(4,"code"),e.qZA(),e.N_p(),e.qZA(),e.TgZ(5,"tui-doc-example",4),e._UZ(6,"tui-error-example-1"),e.qZA()),2&t){const r=e.oxw();e.xp6(3),e.Q6J("routerLink",e.DdM(2,$)),e.xp6(2),e.Q6J("content",r.example1)}}function L(t,n){1&t&&(e._uU(0," Error with "),e.TgZ(1,"em"),e.TgZ(2,"strong"),e._uU(3,"HTML"),e.qZA(),e.qZA())}function Z(t,n){1&t&&(e.tHW(0,8),e._UZ(1,"code"),e.N_p())}function y(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"tui-doc-demo"),e._UZ(1,"tui-error",5),e.qZA(),e.YNc(2,L,4,0,"ng-template",null,6,e.W1O),e.TgZ(4,"tui-doc-documentation"),e.YNc(5,Z,2,0,"ng-template",7),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(r),e.oxw().selectedError=a}),e.qZA()}if(2&t){const r=e.oxw();e.xp6(1),e.Q6J("error",r.error),e.xp6(4),e.Q6J("documentationPropertyValues",r.errorVariants)("documentationPropertyValue",r.selectedError)}}function v(t,n){if(1&t&&(e.TgZ(0,"ol",9),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,10),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",11),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,12),e.qZA(),e._UZ(9,"tui-doc-code",13),e.qZA(),e.qZA()),2&t){const r=e.oxw();e.xp6(5),e.Q6J("code",r.exampleModule),e.xp6(4),e.Q6J("code",r.exampleHtml)}}let J=(()=>{class t{constructor(){this.exampleModule=o.e(51620).then(o.t.bind(o,51620,17)),this.exampleHtml=o.e(50166).then(o.t.bind(o,50166,17)),this.example1={TypeScript:o.e(9295).then(o.t.bind(o,9295,17)),HTML:o.e(72729).then(o.t.bind(o,72729,17))},this.errorVariants=["Error as string","Error as HTML content"],this.selectedError=this.errorVariants[0]}get error(){return null===this.selectedError?null:this.selectedError===this.errorVariants[0]?this.selectedError:new F.TuiValidationError(this.errorContent||"")}}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-tui-error"]],viewQuery:function(r,l){if(1&r&&e.Gf(A,5),2&r){let a;e.iGM(a=e.CRH())&&(l.errorContent=a.first)}},decls:4,vars:0,consts:function(){let n,r,l,a,u;return n=$localize`:␟e3a016b8e7670ad0631485363cf4a2807fa23877␟6514627498355334136:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:Error${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: allows to show an error. If you work with a form, see ${"\ufffd#3\ufffd"}:START_LINK:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:tuiFieldError${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_LINK: . `,n=e.Zx4(n),r=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,l=$localize`:␟6bb0fe2848c9231f09868951164d61899af84e77␟2999611618373406443: Active state for ${"\ufffd#1\ufffd"}:START_TAG_CODE:routerLinkActive${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: , for example `,a=$localize`:␟b1de08c442ae1c5128ffb30368c65f72085703ff␟2233161597921029410: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiErrorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,u=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Error","package","CORE","type","components"],["pageTab",""],n,["tuiLink","",3,"routerLink"],["id","base","heading",r,3,"content"],[3,"error"],["errorContent",""],["documentationPropertyName","error","documentationPropertyMode","input","documentationPropertyType","TuiValidationError | string | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],l,[1,"b-demo-steps"],a,["filename","myComponent.module.ts",3,"code"],u,["filename","myComponent.template.html",3,"code"]]},template:function(r,l){1&r&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,P,7,3,"ng-template",1),e.YNc(2,y,6,3,"ng-template",1),e.YNc(3,v,10,2,"ng-template",1),e.qZA())},directives:[O.q,R.n,M.V,s.yS,_.f,f,S.F,m.v,N.z,x.B,h.c],encapsulation:2,changeDetection:0}),t})(),U=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[p.ez,E.u5,g.TuiToggleModule,d.TuiErrorModule,d.TuiLinkModule,C.wq,F.TuiMapperPipeModule,c.fV,s.Bz.forChild((0,c.Ve)(J))]]}),t})()}}]);