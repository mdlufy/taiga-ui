(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{rWSn:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiRangeModule",(function(){return pe}));var a=n("An66"),o=n("3kIJ"),i=n("1VvW"),r=n("SVIu"),l=n("Qq0t"),c=n("dvRg"),s=n("kZht"),m=n("OZlg"),u=n("e0eB"),p=n("aPft"),d=n("iyc4"),g=n("intW"),f=n("hX29");let h=(()=>{class e{constructor(){this.control=new o.FormControl([4,6])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-range-example-1"]],decls:1,vars:3,consts:[[3,"formControl","max","quantum"]],template:function(e,t){1&e&&s["\u0275\u0275element"](0,"tui-range",0),2&e&&s["\u0275\u0275property"]("formControl",t.control)("max",10)("quantum",1)},directives:[g.b,f.a,o.NgControlStatus,o.FormControlDirective],encapsulation:2,changeDetection:0}),e})();var y=n("HvLL");let C=(()=>{class e{constructor(){this.smallRangeValue=[0,40],this.bigRangeControl=new o.FormControl([40,60])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-range-example-2"]],decls:20,vars:10,consts:[[1,"island"],[1,"tui-island__title"],["id","s-size-range","size","s",1,"range",3,"max","ngModel","ngModelChange"],[1,"tui-island__paragraph"],["for","s-size-range"],["id","m-size-range","size","m",1,"range",3,"formControl","max"],["for","m-size-range"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-island",0),s["\u0275\u0275elementStart"](1,"h3",1),s["\u0275\u0275text"](2,"S-size"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-range",2),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.smallRangeValue=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"p",3),s["\u0275\u0275text"](5," Control value: "),s["\u0275\u0275elementStart"](6,"output",4),s["\u0275\u0275elementStart"](7,"code"),s["\u0275\u0275text"](8),s["\u0275\u0275pipe"](9,"json"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"tui-island",0),s["\u0275\u0275elementStart"](11,"h3",1),s["\u0275\u0275text"](12,"M-size"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](13,"tui-range",5),s["\u0275\u0275elementStart"](14,"p",3),s["\u0275\u0275text"](15," Control value: "),s["\u0275\u0275elementStart"](16,"output",6),s["\u0275\u0275elementStart"](17,"code"),s["\u0275\u0275text"](18),s["\u0275\u0275pipe"](19,"json"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("max",100)("ngModel",t.smallRangeValue),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](9,6,t.smallRangeValue)),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("formControl",t.bigRangeControl)("max",100),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](19,8,t.bigRangeControl.value)))},directives:[y.a,g.b,f.a,o.NgControlStatus,o.NgModel,o.FormControlDirective],pipes:[a.k],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap;row-gap:1rem}.island[_ngcontent-%COMP%]{box-sizing:border-box;width:49%}@media screen and (max-width:37.4625em){.island[_ngcontent-%COMP%]{width:100%}}.range[_ngcontent-%COMP%]{margin:2rem 0}"],changeDetection:0}),e})();var b=n("ONKv");function P(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275text"](1),s["\u0275\u0275pipe"](2,"i18nPlural"),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit,t=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind2"](2,1,e,t.pluralMap)," ")}}function x(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div"),s["\u0275\u0275template"](1,P,3,4,"ng-container",6),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275nextContext"]();const n=s["\u0275\u0275reference"](4);s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",750!==e)("ngIfElse",n)}}function S(e,t){1&e&&(s["\u0275\u0275element"](0,"tui-svg",7),s["\u0275\u0275elementStart"](1,"div"),s["\u0275\u0275text"](2,"3/4"),s["\u0275\u0275elementEnd"]())}let _=(()=>{class e{constructor(){this.min=0,this.max=1e3,this.quantum=250,this.segments=4,this.labels=[...new Array(this.segments+1).keys()].map(e=>this.min+this.quantum*e),this.value=[0,250],this.pluralMap={"=0":"0","=1":"# item","=1000":"MAX",other:"# items"}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-range-example-3"]],decls:11,vars:9,consts:[["id","range-with-segments","new","","size","m",1,"range",3,"min","max","quantum","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],["labelWithIcon",""],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-segments"],[4,"ngIf","ngIfElse"],["src","tuiIconArrowUp"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-range",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275template"](2,x,2,2,"div",2),s["\u0275\u0275template"](3,S,3,0,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"p",4),s["\u0275\u0275text"](6," Control value: "),s["\u0275\u0275elementStart"](7,"output",5),s["\u0275\u0275elementStart"](8,"code"),s["\u0275\u0275text"](9),s["\u0275\u0275pipe"](10,"json"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("min",t.min)("max",t.max)("quantum",t.quantum)("segments",t.segments)("ngModel",t.value),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.labels),s["\u0275\u0275advance"](7),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](10,7,t.value)))},directives:[g.b,f.a,g.a,o.NgControlStatus,o.NgModel,a.s,a.t,b.a],pipes:[a.k,a.i],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m)/2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),e})();function O(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"span"),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate"](e)}}let M=(()=>{class e{constructor(){this.min=0,this.max=1e6,this.ticksLabels=["0","10K","100K","500k","1000K"],this.segments=this.ticksLabels.length-1,this.value=[0,1e5],this.keySteps=[[0,this.min],[25,1e4],[50,1e5],[75,5e5],[100,this.max]]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-range-example-4"]],decls:9,vars:10,consts:[["id","range-with-key-steps","new","","size","m",1,"range",3,"min","max","keySteps","steps","segments","ngModel","ngModelChange"],[1,"ticks-labels"],[4,"ngFor","ngForOf"],[1,"tui-space_top-12","tui-space_bottom-0"],["for","range-with-key-steps"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-range",0),s["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275template"](2,O,2,1,"span",2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"p",3),s["\u0275\u0275text"](4," Control value: "),s["\u0275\u0275elementStart"](5,"output",4),s["\u0275\u0275elementStart"](6,"code"),s["\u0275\u0275text"](7),s["\u0275\u0275pipe"](8,"json"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("min",t.min)("max",t.max)("keySteps",t.keySteps)("steps",2*t.segments)("segments",t.segments)("ngModel",t.value),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngForOf",t.ticksLabels),s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate"](s["\u0275\u0275pipeBind1"](8,8,t.value)))},directives:[g.b,f.a,g.a,o.NgControlStatus,o.NgModel,a.s],pipes:[a.k],styles:['.range[_ngcontent-%COMP%]{z-index:1}.range[_ngcontent-%COMP%]:after{content:"";position:absolute;top:-.5rem;bottom:-1.5rem;width:100%}.ticks-labels[_ngcontent-%COMP%]{display:flex;margin:0 .5rem;font:var(--tui-font-text-s)}.ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m)/2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .ticks-labels[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child{right:-1rem}'],changeDetection:0}),e})();var E,v,V,T,z=n("EPR0"),k=n("yHor"),w=n("zGJC"),A=n("yZWP"),$=n("u8jZ");E=$localize`:␟39507a5d0ef5f798ed73885e520e5ac975a9e93f␟2601219398064138169:Component allows to choose a part of a range`,v=$localize`:␟09456f65f3a00702ca9aedfa0f1bedf1b28d63ea␟1346465782286970335: This component is being refactored. Soon (next major release) you will see the fresh version of it! `,V=$localize`:␟f4ca6accec772a62b559fc95d86e63a49afb8a4e␟5861899087121976760: Of course, we keep backward compatibility in mind (for 2.x.x). You can still use old version of ${"\ufffd#7\ufffd"}:START_TAG_CODE:Range${"\ufffd/#7\ufffd"}:CLOSE_TAG_CODE: . `,T=$localize`:␟02ad0f5e7f445802501f951f04d033f492b1e40c␟559627014458016143: However, if you are going to use this component, we recommend to use new version. To enable the "new version"-mode, add ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:new${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: directive. Example:  ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:<tui‑range new ...>${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE:`,T=s["\u0275\u0275i18nPostprocess"](T);const R=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],D=["heading",$localize`:␟287516b9b4b5fac08bbffe1ebbaa2575b8ef50d8␟2165905371258601036:Sizes`],L=["heading",$localize`:␟da3ee626899400b20e2eec11b3ddadea8a3ddcc5␟7433618922144942348:Visual segments + labels for ticks`];var G,N;G=$localize`:␟b71cff54548c311b9382985ce173ddbd05b1455a␟7222770680801212686: Use mixin ${"\ufffd#23\ufffd"}:START_TAG_CODE:tui-slider-ticks-labels${"\ufffd/#23\ufffd"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `,N=$localize`:␟b43e37a55c51eed01f3c7b31c7fb8c20e9ea09ce␟7490709384902699339: The mixin accepts only a single argument – size of the slider ( ${"[\ufffd#26\ufffd|\ufffd#27\ufffd]"}:START_TAG_CODE:m${"[\ufffd/#26\ufffd|\ufffd/#27\ufffd]"}:CLOSE_TAG_CODE: or ${"[\ufffd#26\ufffd|\ufffd#27\ufffd]"}:START_TAG_CODE:s${"[\ufffd/#26\ufffd|\ufffd/#27\ufffd]"}:CLOSE_TAG_CODE: ). `,N=s["\u0275\u0275i18nPostprocess"](N);const I=["heading",$localize`:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`];function q(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,E),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-notification",2),s["\u0275\u0275elementStart"](3,"p",3),s["\u0275\u0275i18n"](4,v),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"p"),s["\u0275\u0275i18nStart"](6,V),s["\u0275\u0275element"](7,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"p"),s["\u0275\u0275i18nStart"](9,T),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275element"](11,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"tui-doc-example",4),s["\u0275\u0275i18nAttributes"](13,R),s["\u0275\u0275element"](14,"tui-range-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"tui-doc-example",5),s["\u0275\u0275i18nAttributes"](16,D),s["\u0275\u0275element"](17,"tui-range-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"tui-doc-example",6),s["\u0275\u0275i18nAttributes"](19,L),s["\u0275\u0275elementStart"](20,"tui-notification",7),s["\u0275\u0275elementStart"](21,"p",3),s["\u0275\u0275i18nStart"](22,G),s["\u0275\u0275element"](23,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"p"),s["\u0275\u0275i18nStart"](25,N),s["\u0275\u0275element"](26,"code"),s["\u0275\u0275element"](27,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](28,"tui-range-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](29,"tui-doc-example",8),s["\u0275\u0275i18nAttributes"](30,I),s["\u0275\u0275element"](31,"tui-range-example-4"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](12),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3),s["\u0275\u0275advance"](11),s["\u0275\u0275property"]("content",e.example4)}}function F(e,t){if(1&e&&s["\u0275\u0275element"](0,"tui-range",19),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275property"]("formControl",e.control)("min",e.min)("max",e.max)("steps",e.steps)("segments",e.segments)("pluralize",e.pluralize)("keySteps",e.keySteps)("size",e.size)("quantum",e.quantum)}}var H,j,K,B,W,X,J,Q,U,Z,Y;function ee(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,H),s["\u0275\u0275element"](1,"code"),s["\u0275\u0275i18nEnd"]())}function te(e,t){1&e&&s["\u0275\u0275i18n"](0,j)}function ne(e,t){1&e&&s["\u0275\u0275i18n"](0,K)}function ae(e,t){1&e&&s["\u0275\u0275i18n"](0,B)}function oe(e,t){1&e&&s["\u0275\u0275i18n"](0,W)}function ie(e,t){1&e&&s["\u0275\u0275i18n"](0,X)}function re(e,t){1&e&&s["\u0275\u0275i18n"](0,J)}function le(e,t){1&e&&s["\u0275\u0275i18n"](0,Q)}function ce(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,U),s["\u0275\u0275element"](1,"a",20),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275element"](3,"strong"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"]())}function se(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo",9),s["\u0275\u0275template"](1,F,1,9,"ng-template"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"tui-doc-documentation"),s["\u0275\u0275template"](3,ee,2,0,"ng-template",10),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().disabled=t})),s["\u0275\u0275template"](4,te,1,0,"ng-template",11),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().min=t})),s["\u0275\u0275template"](5,ne,1,0,"ng-template",12),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().max=t})),s["\u0275\u0275template"](6,ae,1,0,"ng-template",13),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().steps=t})),s["\u0275\u0275template"](7,oe,1,0,"ng-template",14),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().quantum=t})),s["\u0275\u0275template"](8,ie,1,0,"ng-template",15),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().segments=t})),s["\u0275\u0275template"](9,re,1,0,"ng-template",16),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().keySteps=t})),s["\u0275\u0275template"](10,le,1,0,"ng-template",17),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().size=t})),s["\u0275\u0275template"](11,ce,4,0,"ng-template",18),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().pluralize=t})),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("control",e.control),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("documentationPropertyValue",e.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.min),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.max),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.stepsVariants)("documentationPropertyValue",e.steps),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.quantumVariants)("documentationPropertyValue",e.quantum),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",e.segments),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.keyStepsVariants)("documentationPropertyValue",e.keySteps),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyDeprecated",!0)("documentationPropertyValues",e.pluralizeVariants)("documentationPropertyValue",e.pluralize)}}function me(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",21),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275text"](2," Import an Angular module for forms and "),s["\u0275\u0275elementStart"](3,"code"),s["\u0275\u0275text"](4,"TuiRangeModule"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](5," in the same module where you want to use our component: "),s["\u0275\u0275element"](6,"tui-doc-code",22),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"li"),s["\u0275\u0275elementStart"](8,"p"),s["\u0275\u0275i18nStart"](9,Z),s["\u0275\u0275element"](10,"code"),s["\u0275\u0275element"](11,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](12,"tui-doc-code",23),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"li"),s["\u0275\u0275elementStart"](14,"p"),s["\u0275\u0275i18n"](15,Y),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](16,"tui-doc-code",24),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleModule),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("code",e.exampleForm),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleHtml)}}H=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,j=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,K=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,B=$localize`:␟8dfc46111873255f9a00be9bbc894f8b5f38f108␟2083976673220646394: Number of actual discrete slider steps `,W=$localize`:␟23f30119daeff6564906dba6e420104007f78835␟6434524407760308527: Quantum `,X=$localize`:␟7d601e1c1a940ef8835249f19cb47d2311d8fd1e␟4941460931129258402: A number of visual segments `,J=$localize`:␟2883d0ab4e0e0af2984d0424198392cd5a3d234d␟5861269790634284762: Anchor points of non-uniform format between value and position `,Q=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,U=$localize`:␟63d35ea4b9b1256bf46c9b74912fa614224022bc␟3604160805509190513: Plural forms for labels. TuiPluralize array is deprecated. Use object that mimics the ${"\ufffd#1\ufffd"}:START_LINK: ICU format ${"\ufffd/#1\ufffd"}:CLOSE_LINK: for i18nPlural ${"\ufffd#2\ufffd"}:START_PARAGRAPH:${"\ufffd#3\ufffd"}:START_TAG_STRONG: See examples how create labels for ticks without this property (outside of the component). ${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#2\ufffd"}:CLOSE_PARAGRAPH:`,Z=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#10\ufffd|\ufffd#11\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#10\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,Z=s["\u0275\u0275i18nPostprocess"](Z),Y=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let ue=(()=>{class e{constructor(){this.exampleModule=n.e(1259).then(n.bind(null,"QVSy")),this.exampleHtml=n.e(1260).then(n.bind(null,"2pu2")),this.exampleForm=n.e(1258).then(n.bind(null,"XgQu")),this.example1={HTML:n.e(1247).then(n.bind(null,"0tpo")),TypeScript:n.e(1248).then(n.bind(null,"c1c2"))},this.example2={HTML:n.e(1249).then(n.bind(null,"DfNN")),TypeScript:n.e(1251).then(n.bind(null,"/8iH")),LESS:n.e(1250).then(n.bind(null,"X+nW"))},this.example3={HTML:n.e(1252).then(n.bind(null,"IXTe")),LESS:n.e(1253).then(n.bind(null,"AGzx")),TypeScript:n.e(1254).then(n.bind(null,"zq9X"))},this.example4={HTML:n.e(1255).then(n.bind(null,"fnJO")),TypeScript:n.e(1257).then(n.bind(null,"h7iN")),LESS:n.e(1256).then(n.bind(null,"xxcn"))},this.control=new o.FormControl([0,0]),this.sizeVariants=["s","m"],this.size=this.sizeVariants[1],this.min=0,this.max=100,this.segments=0,this.stepsVariants=[0,4,10],this.steps=this.stepsVariants[0],this.pluralizeVariants=[["year","years","years"],{one:"thing",few:"things",many:"things",other:"things"},{one:"year",other:"years"}],this.pluralize=null,this.keyStepsVariants=[[[50,1e3]]],this.keySteps=null,this.quantumVariants=[.01,.1,1,10],this.quantum=this.quantumVariants[0]}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-range"]],decls:4,vars:0,consts:[["header","Range","package","KIT","type","components"],["pageTab",""],["status","warning"],[1,"tui-space_top-0"],["id","base",3,"content",6,"heading"],["id","sizes",3,"content",6,"heading"],["id","segments",3,"content",6,"heading"],[1,"tui-space_bottom-8"],["id","key-steps",3,"content",6,"heading"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","steps","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","quantum","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pluralize","documentationPropertyMode","input","documentationPropertyType","TuiPluralize | Record<string, string>",3,"documentationPropertyDeprecated","documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","steps","segments","pluralize","keySteps","size","quantum"],["tuiLink","","href","https://unicode-org.github.io/icu/userguide/format_parse/messages/"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,q,32,4,"ng-template",1),s["\u0275\u0275template"](2,se,12,16,"ng-template",1),s["\u0275\u0275template"](3,me,17,3,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[m.a,u.a,p.a,d.a,h,C,_,M,z.a,k.a,w.a,g.b,f.a,o.NgControlStatus,o.FormControlDirective,A.a,$.a],encapsulation:2,changeDetection:0}),e})(),pe=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.Cb,c.Eb,a.c,o.FormsModule,o.ReactiveFormsModule,l.Db,r.m,c.nb,l.Lb,l.ac,i.f.forChild(Object(r.u)(ue))]]}),e})()}}]);