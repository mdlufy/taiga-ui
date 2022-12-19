"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[9272],{9272:(k,d,o)=>{o.r(d),o.d(d,{ExampleTuiPushModule:()=>W});var f=o(12057),g=o(33982),h=o(29851),p=o(76040),P=o(418),e=o(74788),O=o(88331),N=o(37159),x=o(57068),m=o(491),_=o(81538),r=o(34880),c=o(76189),T=o(66596);let y=(()=>{class t{constructor(n){this.alert=n}onClose(){this.alert.open("Close button is visible when you subscribe to (close) output").subscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.TuiAlertService))},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-push-example-1"]],decls:17,vars:2,consts:[[1,"wrapper"],["heading","Rachael","type","Replicant",1,"push",3,"timestamp","close"],["src","tuiIconSettingsLarge"],["tuiButton",""],["tuiLink",""],["heading","Deckard","type","Human?",1,"push",3,"timestamp"],["src","tuiIconShowLarge",1,"human"],["heading","Roy","type","Replicant",3,"close"],["src","assets/images/roy.jpg","alt",""]],template:function(n,u){1&n&&(e.TgZ(0,"div",0),e.TgZ(1,"tui-push",1),e.NdJ("close",function(){return u.onClose()}),e._UZ(2,"tui-svg",2),e._uU(3," Do you like our owl? "),e.TgZ(4,"button",3),e._uU(5,"It's artificial?"),e.qZA(),e.TgZ(6,"button",4),e._uU(7,"Nice hooters!"),e.qZA(),e.qZA(),e.TgZ(8,"tui-push",5),e._UZ(9,"tui-svg",6),e._uU(10," I've had people walk out on me before, but not when I was being so charming. "),e.qZA(),e.qZA(),e.TgZ(11,"tui-push",7),e.NdJ("close",function(){return u.onClose()}),e._UZ(12,"img",8),e._UZ(13,"tui-svg",2),e._uU(14," I\u2019ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. "),e.TgZ(15,"button",4),e._uU(16,"Time to die"),e.qZA(),e.qZA()),2&n&&(e.xp6(1),e.Q6J("timestamp",1661358075379),e.xp6(7),e.Q6J("timestamp",1661357e6))},directives:[m.H,_.G,r.P,c.v,T.V],styles:["[_nghost-%COMP%]{display:block}.wrapper[_ngcontent-%COMP%]{box-shadow:0 .25rem 1.5rem rgba(0,0,0,.12);width:22.5rem;max-width:100%;border-radius:var(--tui-radius-l);margin-bottom:1rem}.push[_ngcontent-%COMP%]{box-shadow:none}.human[_ngcontent-%COMP%]{color:var(--tui-positive)}"],changeDetection:0}),t})();var U=o(15257),v=o(43190);let Z=(()=>{class t{constructor(n,u){this.push=n,this.alert=u}onClick(){this.push.open("This is heavy!",{heading:"Great Scott!",type:"Quote",icon:"tuiIconVideoLarge",buttons:["Roads?","1.21 Gigawatts!?!"]}).pipe((0,U.q)(1),(0,v.w)(n=>this.alert.open(n))).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(P.TuiPushService),e.Y36(p.TuiAlertService))},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-push-example-2"]],decls:2,vars:0,consts:[["tuiButton","",3,"click"]],template:function(n,u){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return u.onClick()}),e._uU(1," Show push\n"),e.qZA())},directives:[c.v],encapsulation:2,changeDetection:0}),t})();var D=o(97075);function A(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tui-push",2),e.NdJ("close",function(){return e.CHM(n),e.oxw().toggle(!1)}),e._UZ(1,"tui-svg",3),e._uU(2," I have a bad feeling about this... "),e.TgZ(3,"button",0),e.NdJ("click",function(){return e.CHM(n),e.oxw().toggle(!1)}),e._uU(4," Fortune "),e.qZA(),e.TgZ(5,"button",4),e.NdJ("click",function(){return e.CHM(n),e.oxw().toggle(!1)}),e._uU(6," Glory "),e.qZA(),e.qZA()}}let L=(()=>{class t{constructor(){this.open=!1}toggle(n){this.open=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-push-example-3"]],decls:3,vars:1,consts:[["tuiButton","",3,"click"],["heading","Indiana Jones","type","Dr. Henry Walton Jones, Jr.",3,"close",4,"tuiPush"],["heading","Indiana Jones","type","Dr. Henry Walton Jones, Jr.",3,"close"],["src","tuiIconCommentLarge"],["tuiLink","",3,"click"]],template:function(n,u){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return u.toggle(!0)}),e._uU(1," Show push\n"),e.qZA(),e.YNc(2,A,7,0,"tui-push",1)),2&n&&(e.xp6(2),e.Q6J("tuiPush",u.open))},directives:[c.v,D.K,m.H,_.G,r.P,T.V],encapsulation:2,changeDetection:0}),t})();var F=o(31823),R=o(54476),H=o(17023),$=o(76349);function b(t,i){if(1&t&&(e.TgZ(0,"p"),e._uU(1,"Notifications in style of native browser push"),e.qZA(),e.TgZ(2,"tui-doc-example",2),e._UZ(3,"tui-push-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",3),e._UZ(5,"tui-push-example-2"),e.qZA(),e.TgZ(6,"tui-doc-example",4),e._UZ(7,"tui-push-example-3"),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("content",n.example1),e.xp6(2),e.Q6J("content",n.example2),e.xp6(2),e.Q6J("content",n.example3)}}function I(t,i){1&t&&e.SDv(0,21)}function J(t,i){1&t&&e.SDv(0,22)}function G(t,i){1&t&&(e.tHW(0,23),e.TgZ(1,"a",24),e._UZ(2,"code"),e.qZA(),e.N_p())}function V(t,i){1&t&&e._uU(0," Output for close button clicks. If you do not listen to this output, close button is hidden. ")}function X(t,i){1&t&&e.SDv(0,25)}function Y(t,i){1&t&&e.SDv(0,26)}function Q(t,i){1&t&&e.SDv(0,27)}function B(t,i){1&t&&e.SDv(0,28)}function z(t,i){1&t&&e.SDv(0,29)}function w(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"tui-push",5),e.NdJ("close",function(){return e.CHM(n),e.oxw().onClose()}),e._UZ(2,"img",6),e._UZ(3,"tui-svg",7),e._uU(4," I\u2019ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. "),e.TgZ(5,"button",8),e._uU(6,"I want more life"),e.qZA(),e.TgZ(7,"button",9),e._uU(8,"Time to die"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"tui-doc-documentation",10),e.YNc(10,I,1,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(n),e.oxw().heading=a}),e.YNc(11,J,1,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(n),e.oxw().type=a}),e.YNc(12,G,3,0,"ng-template",13),e.NdJ("documentationPropertyValueChange",function(a){return e.CHM(n),e.oxw().timestamp=a}),e.YNc(13,V,1,0,"ng-template",14),e.qZA(),e.TgZ(14,"tui-doc-documentation",15),e.YNc(15,X,1,0,"ng-template",16),e.YNc(16,Y,1,0,"ng-template",17),e.YNc(17,Q,1,0,"ng-template",18),e.YNc(18,B,1,0,"ng-template",19),e.YNc(19,z,1,0,"ng-template",20),e.qZA()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("heading",n.heading)("type",n.type)("timestamp",n.timestamp),e.xp6(9),e.Q6J("documentationPropertyValue",n.heading),e.xp6(1),e.Q6J("documentationPropertyValue",n.type),e.xp6(1),e.Q6J("documentationPropertyValue",n.timestamp),e.xp6(2),e.Q6J("showValues",!1)}}function K(t,i){if(1&t&&(e.TgZ(0,"ol",30),e.TgZ(1,"li"),e._uU(2," To use inline import "),e.TgZ(3,"code"),e._uU(4,"TuiPushModule"),e.qZA(),e._uU(5," in the same module where you want to use our component: "),e._UZ(6,"tui-doc-code",31),e.qZA(),e.TgZ(7,"li"),e.TgZ(8,"p"),e.SDv(9,32),e.qZA(),e._UZ(10,"tui-doc-code",33),e.qZA(),e.TgZ(11,"li"),e._uU(12," Make sure to include "),e.TgZ(13,"code"),e._uU(14,"TuiPushModule"),e.qZA(),e._uU(15," in your main module to be able to show push like alerts. "),e.qZA(),e.TgZ(16,"li"),e._uU(17,"See examples to explore display options."),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(6),e.Q6J("code",n.exampleImportModule),e.xp6(4),e.Q6J("code",n.exampleInsertTemplate)}}let j=(()=>{class t{constructor(n){this.alert=n,this.exampleImportModule=o.e(52301).then(o.t.bind(o,52301,17)),this.exampleInsertTemplate=o.e(3350).then(o.t.bind(o,3350,17)),this.example1={TypeScript:o.e(65745).then(o.t.bind(o,65745,17)),HTML:o.e(72181).then(o.t.bind(o,72181,17)),LESS:o.e(19073).then(o.t.bind(o,19073,17))},this.example2={TypeScript:o.e(99247).then(o.t.bind(o,99247,17)),HTML:o.e(2828).then(o.t.bind(o,2828,17))},this.example3={TypeScript:o.e(92062).then(o.t.bind(o,92062,17)),HTML:o.e(59455).then(o.t.bind(o,59455,17))},this.heading="",this.type="",this.timestamp=0}onClose(){this.alert.open("Close button is visible when you subscribe to (close) output").subscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.TuiAlertService))},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-tui-push"]],decls:4,vars:0,consts:function(){let i,n,u,a,l,S,E,C,M;return i=$localize`:␟f04ef2f784f7b0f9a785d84409e5ae5a3ed4077b␟6507514034076114436: Heading of the push `,n=$localize`:␟c470e39b0d890e73fa1f9c7b80f9e91cea9474aa␟1786648927050352279: Small text near icon, typically, category of the message `,u=$localize`:␟96756ac0151ec3a529cd67c03f37d181db63c0cf␟3296248737295462635: Timestamp of the arrival. Formatted with ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:FormatDate${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK: pipe. `,a=$localize`:␟56f8fa90fc856575489369784576e429cbe79e36␟6134744519870615123: Icon in the corner `,l=$localize`:␟344db88313b9a93b6f986a500d6dda333d931eea␟7974060266116202576: Image at the top (360×170px) `,S=$localize`:␟a31f473f47dca4ed5bbfc994b270cccb3e029319␟7140001989225322475: Single button `,E=$localize`:␟b77d10fe844ef9dbecb348e3590c6c4d2524b140␟766890365907528803: Additional button when it requires two `,C=$localize`:␟332af8b301d8903af7063cb873c209e06bcbf684␟7958693876154250869: The rest of the content is that push body. `,M=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Push","package","KIT"],["pageTab",""],["id","base","heading","basic",3,"content"],["id","service","heading","with service",3,"content"],["id","directive","heading","with directive",3,"content"],[3,"heading","type","timestamp","close"],["src","assets/images/roy.jpg","alt",""],["src","tuiIconSettingsLarge"],["tuiButton",""],["tuiLink",""],["heading","Inputs/Outputs"],["documentationPropertyName","heading","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","type","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","timestamp","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","close","documentationPropertyMode","output","documentationPropertyType","void"],["heading","Content slots",3,"showValues"],["documentationPropertyName","tui-svg","documentationPropertyType","Icon"],["documentationPropertyName","img","documentationPropertyType","Image"],["documentationPropertyName","tuiLink","documentationPropertyType","Link/Button"],["documentationPropertyName","tuiButton","documentationPropertyType","Link/Button"],["documentationPropertyName","ng-content","documentationPropertyType","Arbitrary"],i,n,u,["tuiLink","","routerLink","/pipes/format-date"],a,l,S,E,C,[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],M,["filename","myComponent.template.html",3,"code"]]},template:function(n,u){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,b,8,3,"ng-template",1),e.YNc(2,w,20,7,"ng-template",1),e.YNc(3,K,18,2,"ng-template",1),e.qZA())},directives:[O.q,N.n,x.f,y,Z,L,F.F,m.H,_.G,r.P,c.v,T.V,R.z,H.B,g.yS,$.c],encapsulation:2,changeDetection:0}),t})(),W=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[f.ez,P.TuiPushModule,p.TuiButtonModule,p.TuiLinkModule,p.TuiSvgModule,h.fV,g.Bz.forChild((0,h.Ve)(j))]]}),t})()}}]);