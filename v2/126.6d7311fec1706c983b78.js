(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{pDJ8:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPushModule",(function(){return Y}));var o=n("An66"),a=n("1VvW"),i=n("SVIu"),r=n("Qq0t"),l=n("dvRg"),c=n("kZht"),u=n("OZlg"),s=n("e0eB"),m=n("iyc4"),p=n("kznq"),d=n("hbSJ"),h=n("ONKv"),y=n("zV1d"),g=n("yZWP");let f=(()=>{class e{constructor(e){this.alert=e}onClose(){this.alert.open("Close button is visible when you subscribe to (close) output").subscribe()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](r.Z))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-push-example-1"]],decls:17,vars:2,consts:[[1,"wrapper"],["heading","Rachael","type","Replicant",1,"push",3,"timestamp","close"],["src","tuiIconSettingsLarge"],["tuiButton",""],["tuiLink",""],["heading","Deckard","type","Human?",1,"push",3,"timestamp"],["src","tuiIconShowLarge",1,"human"],["heading","Roy","type","Replicant",3,"close"],["src","assets/images/roy.jpg","alt",""]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"tui-push",1),c["\u0275\u0275listener"]("close",(function(){return t.onClose()})),c["\u0275\u0275element"](2,"tui-svg",2),c["\u0275\u0275text"](3," Do you like our owl? "),c["\u0275\u0275elementStart"](4,"button",3),c["\u0275\u0275text"](5,"It's artificial?"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"button",4),c["\u0275\u0275text"](7,"Nice hooters!"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"tui-push",5),c["\u0275\u0275element"](9,"tui-svg",6),c["\u0275\u0275text"](10," I've had people walk out on me before, but not when I was being so charming. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"tui-push",7),c["\u0275\u0275listener"]("close",(function(){return t.onClose()})),c["\u0275\u0275element"](12,"img",8),c["\u0275\u0275element"](13,"tui-svg",2),c["\u0275\u0275text"](14," I\u2019ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. "),c["\u0275\u0275elementStart"](15,"button",4),c["\u0275\u0275text"](16,"Time to die"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("timestamp",1661358075379),c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("timestamp",1661357e6))},directives:[p.a,d.a,h.a,y.a,g.a],styles:["[_nghost-%COMP%]{display:block}.wrapper[_ngcontent-%COMP%]{box-shadow:0 .25rem 1.5rem rgba(0,0,0,.12);width:22.5rem;max-width:100%;border-radius:var(--tui-radius-l);margin-bottom:1rem}.push[_ngcontent-%COMP%]{box-shadow:none}.human[_ngcontent-%COMP%]{color:var(--tui-positive)}"],changeDetection:0}),e})();var b=n("J+dc"),x=n("TLy2");let v=(()=>{class e{constructor(e,t){this.push=e,this.alert=t}onClick(){this.push.open("This is heavy!",{heading:"Great Scott!",type:"Quote",icon:"tuiIconVideoLarge",buttons:["Roads?","1.21 Gigawatts!?!"]}).pipe(Object(b.a)(1),Object(x.a)(e=>this.alert.open(e))).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](l.zb),c["\u0275\u0275directiveInject"](r.Z))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-push-example-2"]],decls:2,vars:0,consts:[["tuiButton","",3,"click"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"button",0),c["\u0275\u0275listener"]("click",(function(){return t.onClick()})),c["\u0275\u0275text"](1," Show push\n"),c["\u0275\u0275elementEnd"]())},directives:[y.a],encapsulation:2,changeDetection:0}),e})();var S=n("DvO8");function w(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-push",2),c["\u0275\u0275listener"]("close",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().toggle(!1)})),c["\u0275\u0275element"](1,"tui-svg",3),c["\u0275\u0275text"](2," I have a bad feeling about this... "),c["\u0275\u0275elementStart"](3,"button",0),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().toggle(!1)})),c["\u0275\u0275text"](4," Fortune "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](5,"button",4),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().toggle(!1)})),c["\u0275\u0275text"](6," Glory "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}}let C=(()=>{class e{constructor(){this.open=!1}toggle(e){this.open=e}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-push-example-3"]],decls:3,vars:1,consts:[["tuiButton","",3,"click"],["heading","Indiana Jones","type","Dr. Henry Walton Jones, Jr.",3,"close",4,"tuiPush"],["heading","Indiana Jones","type","Dr. Henry Walton Jones, Jr.",3,"close"],["src","tuiIconCommentLarge"],["tuiLink","",3,"click"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"button",0),c["\u0275\u0275listener"]("click",(function(){return t.toggle(!0)})),c["\u0275\u0275text"](1," Show push\n"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](2,w,7,0,"tui-push",1)),2&e&&(c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("tuiPush",t.open))},directives:[y.a,S.a,p.a,d.a,h.a,g.a],encapsulation:2,changeDetection:0}),e})();var P,T,E,I,k,V,L,O,M,N=n("EPR0"),z=n("yHor"),D=n("zGJC"),j=n("u8jZ");function A(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"p"),c["\u0275\u0275text"](1,"Notifications in style of native browser push"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](2,"tui-doc-example",2),c["\u0275\u0275element"](3,"tui-push-example-1"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"tui-doc-example",3),c["\u0275\u0275element"](5,"tui-push-example-2"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"tui-doc-example",4),c["\u0275\u0275element"](7,"tui-push-example-3"),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example1),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example2),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("content",e.example3)}}function $(e,t){1&e&&c["\u0275\u0275i18n"](0,P)}function J(e,t){1&e&&c["\u0275\u0275i18n"](0,T)}function B(e,t){1&e&&(c["\u0275\u0275i18nStart"](0,E),c["\u0275\u0275elementStart"](1,"a",21),c["\u0275\u0275element"](2,"code"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275i18nEnd"]())}function _(e,t){1&e&&c["\u0275\u0275text"](0," Output for close button clicks. If you do not listen to this output, close button is hidden. ")}function G(e,t){1&e&&c["\u0275\u0275i18n"](0,I)}function R(e,t){1&e&&c["\u0275\u0275i18n"](0,k)}function H(e,t){1&e&&c["\u0275\u0275i18n"](0,V)}function Z(e,t){1&e&&c["\u0275\u0275i18n"](0,L)}function K(e,t){1&e&&c["\u0275\u0275i18n"](0,O)}function W(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tui-doc-demo"),c["\u0275\u0275elementStart"](1,"tui-push",5),c["\u0275\u0275listener"]("close",(function(){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().onClose()})),c["\u0275\u0275element"](2,"img",6),c["\u0275\u0275element"](3,"tui-svg",7),c["\u0275\u0275text"](4," I\u2019ve seen things you people wouldn't believe. Attack ships on fire off The Shoulder Of Orion. I watched C-Beams glitter in the dark near The Tannhauser Gate. All those moments will be lost in time, like tears in rain. "),c["\u0275\u0275elementStart"](5,"button",8),c["\u0275\u0275text"](6,"I want more life"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"button",9),c["\u0275\u0275text"](8,"Time to die"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"tui-doc-documentation",10),c["\u0275\u0275template"](10,$,1,0,"ng-template",11),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().heading=t})),c["\u0275\u0275template"](11,J,1,0,"ng-template",12),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().type=t})),c["\u0275\u0275template"](12,B,3,0,"ng-template",13),c["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return c["\u0275\u0275restoreView"](e),c["\u0275\u0275nextContext"]().timestamp=t})),c["\u0275\u0275template"](13,_,1,0,"ng-template",14),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"tui-doc-documentation",15),c["\u0275\u0275template"](15,G,1,0,"ng-template",16),c["\u0275\u0275template"](16,R,1,0,"ng-template",17),c["\u0275\u0275template"](17,H,1,0,"ng-template",18),c["\u0275\u0275template"](18,Z,1,0,"ng-template",19),c["\u0275\u0275template"](19,K,1,0,"ng-template",20),c["\u0275\u0275elementEnd"]()}if(2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("heading",e.heading)("type",e.type)("timestamp",e.timestamp),c["\u0275\u0275advance"](9),c["\u0275\u0275property"]("documentationPropertyValue",e.heading),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.type),c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("documentationPropertyValue",e.timestamp),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("showValues",!1)}}function F(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"ol",22),c["\u0275\u0275elementStart"](1,"li"),c["\u0275\u0275text"](2," To use inline import "),c["\u0275\u0275elementStart"](3,"code"),c["\u0275\u0275text"](4,"TuiPushModule"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](5," in the same module where you want to use our component: "),c["\u0275\u0275element"](6,"tui-doc-code",23),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"li"),c["\u0275\u0275elementStart"](8,"p"),c["\u0275\u0275i18n"](9,M),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](10,"tui-doc-code",24),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](11,"li"),c["\u0275\u0275text"](12," Make sure to include "),c["\u0275\u0275elementStart"](13,"code"),c["\u0275\u0275text"](14,"TuiPushModule"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](15," in your main module to be able to show push like alerts. "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"li"),c["\u0275\u0275text"](17,"See examples to explore display options."),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("code",e.exampleImportModule),c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}P=$localize`:␟f04ef2f784f7b0f9a785d84409e5ae5a3ed4077b␟6507514034076114436: Heading of the push `,T=$localize`:␟c470e39b0d890e73fa1f9c7b80f9e91cea9474aa␟1786648927050352279: Small text near icon, typically, category of the message `,E=$localize`:␟96756ac0151ec3a529cd67c03f37d181db63c0cf␟3296248737295462635: Timestamp of the arrival. Formatted with ${"\ufffd#1\ufffd"}:START_LINK:${"\ufffd#2\ufffd"}:START_TAG_CODE:FormatDate${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_LINK: pipe. `,I=$localize`:␟56f8fa90fc856575489369784576e429cbe79e36␟6134744519870615123: Icon in the corner `,k=$localize`:␟344db88313b9a93b6f986a500d6dda333d931eea␟7974060266116202576: Image at the top (360×170px) `,V=$localize`:␟a31f473f47dca4ed5bbfc994b270cccb3e029319␟7140001989225322475: Single button `,L=$localize`:␟b77d10fe844ef9dbecb348e3590c6c4d2524b140␟766890365907528803: Additional button when it requires two `,O=$localize`:␟332af8b301d8903af7063cb873c209e06bcbf684␟7958693876154250869: The rest of the content is that push body. `,M=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let q=(()=>{class e{constructor(e){this.alert=e,this.exampleImportModule=n.e(1207).then(n.bind(null,"jvpp")),this.exampleInsertTemplate=n.e(1208).then(n.bind(null,"WpLA")),this.example1={TypeScript:n.e(1202).then(n.bind(null,"IGd5")),HTML:n.e(1200).then(n.bind(null,"4r22")),LESS:n.e(1201).then(n.bind(null,"F4v/"))},this.example2={TypeScript:n.e(1204).then(n.bind(null,"MYzv")),HTML:n.e(1203).then(n.bind(null,"lKI0"))},this.example3={TypeScript:n.e(1206).then(n.bind(null,"uUot")),HTML:n.e(1205).then(n.bind(null,"Y0eD"))},this.heading="",this.type="",this.timestamp=0}onClose(){this.alert.open("Close button is visible when you subscribe to (close) output").subscribe()}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](r.Z))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-push"]],decls:4,vars:0,consts:[["header","Push","package","KIT"],["pageTab",""],["id","base","heading","basic",3,"content"],["id","service","heading","with service",3,"content"],["id","directive","heading","with directive",3,"content"],[3,"heading","type","timestamp","close"],["src","assets/images/roy.jpg","alt",""],["src","tuiIconSettingsLarge"],["tuiButton",""],["tuiLink",""],["heading","Inputs/Outputs"],["documentationPropertyName","heading","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","type","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","timestamp","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","close","documentationPropertyMode","output","documentationPropertyType","void"],["heading","Content slots",3,"showValues"],["documentationPropertyName","tui-svg","documentationPropertyType","Icon"],["documentationPropertyName","img","documentationPropertyType","Image"],["documentationPropertyName","tuiLink","documentationPropertyType","Link/Button"],["documentationPropertyName","tuiButton","documentationPropertyType","Link/Button"],["documentationPropertyName","ng-content","documentationPropertyType","Arbitrary"],["tuiLink","","routerLink","/pipes/format-date"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"tui-doc-page",0),c["\u0275\u0275template"](1,A,8,3,"ng-template",1),c["\u0275\u0275template"](2,W,20,7,"ng-template",1),c["\u0275\u0275template"](3,F,18,2,"ng-template",1),c["\u0275\u0275elementEnd"]())},directives:[u.a,s.a,m.a,f,v,C,N.a,p.a,d.a,h.a,y.a,g.a,z.a,D.a,a.e,j.a],encapsulation:2,changeDetection:0}),e})(),Y=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,l.yb,r.bb,r.Bb,r.Yb,i.m,a.f.forChild(Object(i.u)(q))]]}),e})()}}]);