(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{"RG/b":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiStepperModule",(function(){return k}));var a=n("An66"),o=n("1VvW"),i=n("SVIu"),r=n("Qq0t"),c=n("dvRg"),p=n("kZht"),l=n("OZlg"),m=n("e0eB"),d=n("iyc4"),u=n("NfYv"),s=n("VCp3");let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-stepper-example-1"]],decls:11,vars:1,consts:[[3,"activeItemIndex"],["tuiStep","","state","pass"],["tuiStep",""],["tuiStep","","state","error"],["tuiStep","","disabled",""],["tuiStep","","icon","tuiIconTimeLarge"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-stepper",0),p["\u0275\u0275elementStart"](1,"button",1),p["\u0275\u0275text"](2," Finished step "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"button",2),p["\u0275\u0275text"](4,"Simple step"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"button",3),p["\u0275\u0275text"](6," Error step "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"button",4),p["\u0275\u0275text"](8," Disabled step "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"button",5),p["\u0275\u0275text"](10," Step with an icon "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("activeItemIndex",1)},directives:[u.a,s.a],encapsulation:2,changeDetection:0}),e})();function b(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"button",2),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e," ")}}let f=(()=>{class e{constructor(){this.steps=["Start Up","Cash In","Sell Out","Bro Down"]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-stepper-example-2"]],decls:2,vars:2,consts:[["orientation","vertical",3,"activeItemIndex"],["tuiStep","",4,"ngFor","ngForOf"],["tuiStep",""]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-stepper",0),p["\u0275\u0275template"](1,b,2,1,"button",1),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275property"]("activeItemIndex",1),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",t.steps))},directives:[u.a,a.s,s.a],encapsulation:2,changeDetection:0}),e})();var x=n("EPR0"),S=n("yHor"),h=n("zGJC"),v=n("u8jZ");const V=["header",$localize`:␟d3380eafd2964129c0f2494ac124f7ee3ec18773␟4182533721007312825:Stepper`];var g;g=$localize`:␟490cac10bf1b9dbae7bb9b4d439cb5de3a31b887␟7773050250158572107:Stepper makes visual step navigation`;const I=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`];function P(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18n"](1,g),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-example",2),p["\u0275\u0275i18nAttributes"](3,I),p["\u0275\u0275element"](4,"tui-stepper-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-doc-example",3),p["\u0275\u0275element"](6,"tui-stepper-example-2"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example2)}}var E,C,w,T,$,z;function M(e,t){1&e&&p["\u0275\u0275i18n"](0,E)}function O(e,t){1&e&&p["\u0275\u0275i18n"](0,C)}function A(e,t){1&e&&p["\u0275\u0275i18n"](0,w)}function D(e,t){1&e&&p["\u0275\u0275i18n"](0,T)}function L(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-doc-demo"),p["\u0275\u0275elementStart"](1,"tui-stepper",4),p["\u0275\u0275listener"]("activeItemIndexChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().activeItemIndex=t})),p["\u0275\u0275elementStart"](2,"button",5),p["\u0275\u0275text"](3,"Simple step"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"button",5),p["\u0275\u0275text"](5,"Simple step"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"button",6),p["\u0275\u0275text"](7," Simple step "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"button",5),p["\u0275\u0275text"](9,"Simple step"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"button",5),p["\u0275\u0275text"](11,"Simple step"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"tui-doc-documentation",7),p["\u0275\u0275template"](13,M,1,0,"ng-template",8),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().orientation=t})),p["\u0275\u0275template"](14,O,1,0,"ng-template",9),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().activeItemIndex=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"tui-doc-documentation",10),p["\u0275\u0275template"](16,A,1,0,"ng-template",11),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().state=t})),p["\u0275\u0275template"](17,D,1,0,"ng-template",12),p["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().icon=t})),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("orientation",e.orientation)("activeItemIndex",e.activeItemIndex),p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("state",e.state)("icon",e.icon),p["\u0275\u0275advance"](7),p["\u0275\u0275property"]("documentationPropertyValues",e.orientationVariants)("documentationPropertyValue",e.orientation),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValue",e.activeItemIndex),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("documentationPropertyValues",e.stateVariants)("documentationPropertyValue",e.state),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("documentationPropertyValues",e.iconVariants)("documentationPropertyValue",e.icon)}}function H(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",13),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,$),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",14),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,z),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",15),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml)}}E=$localize`:␟2478a860994d0761c58bbd3f7dd3f03d465a8d19␟2107304068844688435: Steps direction `,C=$localize`:␟ee3142d9eaaea0b924d9d01805d271f4069fa81d␟1062293258822311131: Active step index `,w=$localize`:␟4c20ec0c2e6451c09e8f66381ebb03153f9a2138␟3689121194833681634: Step state `,T=$localize`:␟9c9a93b5087be17cbebeca00ceb9e84e3b09fd02␟5578787756132554741: Step custom icon `,$=$localize`:␟1a30b934dd4f85022d1df7b9bd54d8266dae8965␟1361292692274604913: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiStepperModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,z=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let N=(()=>{class e{constructor(){this.exampleModule=n.e(1369).then(n.bind(null,"LfUY")),this.exampleHtml=n.e(1370).then(n.bind(null,"BYfF")),this.example1={TypeScript:n.e(1366).then(n.bind(null,"OKuE")),HTML:n.e(1365).then(n.bind(null,"0+bL"))},this.example2={TypeScript:n.e(1368).then(n.bind(null,"Pu+X")),HTML:n.e(1367).then(n.bind(null,"GcQ/"))},this.activeItemIndex=0,this.orientationVariants=["horizontal","vertical"],this.orientation=this.orientationVariants[0],this.iconVariants=["","tuiIconTimeLarge","tuiIconHeart"],this.icon=this.iconVariants[0],this.stateVariants=["normal","pass","error"],this.state=this.stateVariants[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-stepper"]],decls:5,vars:0,consts:[["package","KIT","type","components",6,"header"],["pageTab",""],["id","base",3,"content",6,"heading"],["id","vertical","heading","Vertical",3,"content"],[3,"orientation","activeItemIndex","activeItemIndexChange"],["tuiStep",""],["tuiStep","",3,"state","icon"],["heading","Stepper"],["documentationPropertyName","orientation","documentationPropertyMode","input","documentationPropertyType","TuiOrientationT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["heading","Step"],["documentationPropertyName","state","documentationPropertyMode","input","documentationPropertyType","'normal' | 'pass' | 'error'",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","icon","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,V),p["\u0275\u0275template"](2,P,7,2,"ng-template",1),p["\u0275\u0275template"](3,L,18,11,"ng-template",1),p["\u0275\u0275template"](4,H,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[l.a,m.a,d.a,y,f,x.a,u.a,s.a,S.a,h.a,v.a],encapsulation:2,changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.f,c.Ib,r.Bb,i.m,o.f.forChild(Object(i.u)(N))]]}),e})()}}]);