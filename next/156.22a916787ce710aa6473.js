(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{UaWz:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiActiveZoneModule",(function(){return _}));var o,i,a=n("An66"),c=n("1VvW"),l=n("SVIu"),r=n("l4xa"),d=n("Qq0t"),m=n("dvRg"),p=n("kZht"),u=n("OZlg"),s=n("e0eB"),v=n("iyc4"),f=n("4hRd"),b=n("zV1d"),h=n("GdrL"),A=n("71sB");o=$localize`:␟a5c932c71cc41af03986749d41d4e3c1ec8b9644␟6238607653600005463: You can bind different elements with ${"\ufffd#23\ufffd"}:START_TAG_CODE:[tuiActiveZoneParent]${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE: directive `,i=$localize`:␟a18de0931ff43128131c2fcc6058c5f7542df1e0␟1484761029469449608:Zone keeps active after browser tab change`;let E=(()=>{class e{constructor(){this.childActive=!1,this.parentActive=!1,this.items=[1,2,3]}onParentActiveZone(e){this.parentActive=e}onChildActiveZone(e){this.childActive=e}onClick({nativeFocusableElement:e}){e&&Object(r.ed)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-active-zone-example-1"]],decls:30,vars:7,consts:[["placeholder","input outside a zone"],[1,"active-zone",3,"tuiActiveZoneChange"],["parent","tuiActiveZone"],["tuiButton","","type","button"],[1,"active-zone",3,"tuiActiveZoneParent","tuiActiveZoneChange"],["input",""],["placeholder","input outside zone"],[3,"click"]],template:function(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275text"](3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"p"),p["\u0275\u0275element"](5,"input",0),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"div",1,2),p["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return t.onParentActiveZone(e)})),p["\u0275\u0275elementStart"](8,"h2"),p["\u0275\u0275text"](9,"Parent zone"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](10,"button",3),p["\u0275\u0275text"](11," A button inside zone "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](12,"p"),p["\u0275\u0275elementStart"](13,"button"),p["\u0275\u0275text"](14,"A button outside of zone"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](15,"div",4),p["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return t.onChildActiveZone(e)})),p["\u0275\u0275elementStart"](16,"h2"),p["\u0275\u0275text"](17,"Child zone"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](18,"tui-input",null,5),p["\u0275\u0275text"](20,"Input inside zone"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](21,"p"),p["\u0275\u0275i18nStart"](22,o),p["\u0275\u0275element"](23,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](24,"p"),p["\u0275\u0275element"](25,"input",6),p["\u0275\u0275elementStart"](26,"button",7),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](e);const n=p["\u0275\u0275reference"](19);return t.onClick(n)})),p["\u0275\u0275text"](27,"Focus input in zone"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](28,"p"),p["\u0275\u0275i18n"](29,i),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275reference"](7);p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"]("Parent zone: ",t.parentActive,""),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"]("Child zone: ",t.childActive,""),p["\u0275\u0275advance"](3),p["\u0275\u0275classProp"]("active-zone_active",t.parentActive),p["\u0275\u0275advance"](9),p["\u0275\u0275classProp"]("active-zone_active",t.childActive),p["\u0275\u0275property"]("tuiActiveZoneParent",e)}},directives:[f.a,b.a,h.a,A.a],styles:[".active-zone[_ngcontent-%COMP%]{padding:1.25rem;border:2px solid}.active-zone_active[_ngcontent-%COMP%]{border-color:var(--tui-primary)}"],changeDetection:0}),e})();var C=n("u8jZ");const S=["header",$localize`:␟12cbb0bfca7aa943e6579cb408b6e5cad88c810b␟4573156301401658203:ActiveZone`];var x;x=$localize`:␟c21d9e6d201daf36fd245fa08f46330abfdd8b11␟5491960160291226248:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiActiveZone${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to track a scope that user interacts with. For example, for closing dropdown on blur `;const z=["heading",$localize`:␟dbc6ad292bce741b6302c6fc70a32a796734e2fa␟8188585896827437796:Composite zone`];function g(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,x),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](4,z),p["\u0275\u0275element"](5,"tui-active-zone-example-1"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example1)}}var w,y;function Z(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",4),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,w),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,y),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",6),p["\u0275\u0275element"](10,"tui-doc-code",7),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleHtml),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("code",e.exampleComponent)}}w=$localize`:␟565d5c4a6d667762251f4fdeb1e747718456c702␟4423300948625175026: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiActiveZoneModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,y=$localize`:␟17eb6975c7e319b982144e2bd8f0ee6999e9eb2e␟3799636229807761262:Add to the template and subscribe to a change:`;let T=(()=>{class e{constructor(){this.exampleModule=n.e(1505).then(n.bind(null,"QQgv")),this.exampleHtml=n.e(1506).then(n.bind(null,"rNIn")),this.exampleComponent=n.e(1504).then(n.bind(null,"c4sN")),this.example1={TypeScript:n.e(1503).then(n.bind(null,"dB6e")),HTML:n.e(1502).then(n.bind(null,"Af/k"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-active-zone"]],decls:4,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["pageTab","Setup"],["id","multiple",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,S),p["\u0275\u0275template"](2,g,6,1,"ng-template",1),p["\u0275\u0275template"](3,Z,11,3,"ng-template",2),p["\u0275\u0275elementEnd"]())},directives:[u.a,s.a,v.a,E,C.a],styles:[".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],changeDetection:0}),e})(),_=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,m.cb,d.ab,r.bb,l.m,c.f.forChild(Object(l.u)(T))]]}),e})()}}]);