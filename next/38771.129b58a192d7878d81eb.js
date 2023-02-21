"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[38771],{38771:(y,c,o)=>{o.r(c),o.d(c,{ExampleTuiLetModule:()=>R});var T=o(12057),m=o(33982),u=o(29851),E=o(68339),g=o(18738),e=o(74788),L=o(88331),C=o(37159),S=o(57068),f=o(20945),M=o(39761),s=o(40939),d=o(4123);function r(t,l){if(1&t&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4," It can be used many times: "),e._UZ(5,"tui-badge",1),e.qZA(),e.TgZ(6,"p"),e._uU(7,"It subsribed once and async pipe unsubsribes it after component destroy"),e.qZA(),e.BQk()),2&t){const n=l.tuiLet;e.xp6(2),e.hij("Timer value: ",n,""),e.xp6(3),e.Q6J("value",n)}}let F=(()=>{class t{constructor(){this.timer$=(0,f.F)(1e3).pipe((0,M.O)(0))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-let-example-1"]],decls:2,vars:3,consts:[[4,"tuiLet"],[3,"value"]],template:function(n,a){1&n&&(e.YNc(0,r,8,2,"ng-container",0),e.ALo(1,"async")),2&n&&e.Q6J("tuiLet",e.lcZ(1,1,a.timer$))},directives:[s.L,d.g],pipes:[T.Ov],encapsulation:2,changeDetection:0}),t})();var x=o(3497);function D(t,l){if(1&t&&(e.TgZ(0,"div"),e.TgZ(1,"p"),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4," That can be used many times: "),e._UZ(5,"tui-badge",1),e.qZA(),e.TgZ(6,"p"),e._uU(7,"And getter is called only once."),e.qZA(),e.qZA()),2&t){const n=l.tuiLet;e.xp6(2),e.hij("Calculated with getter value: ",n,""),e.xp6(3),e.Q6J("value",n)}}let v=(()=>{class t{constructor(n){this.alertService=n}get getter(){return this.alertService.open("Getter called").subscribe(),"\u{1f433}"}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(x.TuiAlertService))},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-let-example-2"]],decls:1,vars:1,consts:[[4,"tuiLet"],[3,"value"]],template:function(n,a){1&n&&e.YNc(0,D,8,2,"div",0),2&n&&e.Q6J("tuiLet",a.getter)},directives:[s.L,d.g],encapsulation:2,changeDetection:0}),t})();var O=o(76349);function Z(t,l){if(1&t&&(e.TgZ(0,"p"),e.tHW(1,3),e._UZ(2,"code"),e.N_p(),e.qZA(),e.TgZ(3,"tui-doc-example",4),e._UZ(4,"tui-let-example-1"),e.qZA(),e.TgZ(5,"tui-doc-example",5),e._UZ(6,"tui-let-example-2"),e.qZA()),2&t){const n=e.oxw();e.xp6(3),e.Q6J("content",n.example1),e.xp6(2),e.Q6J("content",n.example2)}}function A(t,l){if(1&t&&(e.TgZ(0,"ol",6),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,7),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",8),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,9),e.qZA(),e._UZ(9,"tui-doc-code",10),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(5),e.Q6J("code",n.exampleModule),e.xp6(4),e.Q6J("code",n.exampleHtml)}}let h=(()=>{class t{constructor(){this.exampleModule=o.e(89065).then(o.t.bind(o,89065,17)),this.exampleHtml=o.e(10686).then(o.t.bind(o,10686,17)),this.example1={TypeScript:o.e(33542).then(o.t.bind(o,33542,17)),HTML:o.e(757).then(o.t.bind(o,757,17))},this.example2={TypeScript:o.e(43846).then(o.t.bind(o,43846,17)),HTML:o.e(38782).then(o.t.bind(o,38782,17))}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-tui-let"]],decls:3,vars:0,consts:function(){let l,n,a,p;return l=$localize`:␟2b4b6c9f7e73ce6aef2d91dd38ed32e42dfbb287␟8326979193506336947:Let`,n=$localize`:␟0b86f52a4851e254f625dcfa6c3693c670ffe4a0␟2859072350697962150: Directive ${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiLet${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to reuse computed value in several places in template to avoid recalculations of getters or many async pipes `,a=$localize`:␟dcd5be68c9d00f31c19f8588105dcefcd365c747␟4468319477322216439: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLetModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,p=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",l,"package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],n,["id","pipe","heading","With Pipe",3,"content"],["id","getter","heading","With getter",3,"content"],[1,"b-demo-steps"],a,["filename","myComponent.module.ts",3,"code"],p,["filename","myComponent.template.html",3,"code"]]},template:function(n,a){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,Z,7,2,"ng-template",1),e.YNc(2,A,10,2,"ng-template",2),e.qZA())},directives:[L.q,C.n,S.f,F,v,O.c],encapsulation:2,changeDetection:0}),t})(),R=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[T.ez,E.TuiLetModule,g.TuiBadgeModule,u.fV,m.Bz.forChild((0,u.Ve)(h))]]}),t})()}}]);