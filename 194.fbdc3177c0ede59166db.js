(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{CUSP:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiTablePaginationModule",(function(){return j}));var a=n("An66"),o=n("1VvW"),i=n("SVIu"),r=n("53zJ"),l=n("kZht"),c=n("OZlg"),p=n("e0eB"),m=n("iyc4"),u=n("o2jy");let s=(()=>{class e{constructor(){this.page=3,this.size=10}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-table-pagination-example-1"]],decls:5,vars:5,consts:[[3,"total","page","size","pageChange","sizeChange"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-table-pagination",0),l["\u0275\u0275listener"]("pageChange",(function(e){return t.page=e}))("sizeChange",(function(e){return t.size=e})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](1,"p"),l["\u0275\u0275text"](2),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](3,"p"),l["\u0275\u0275text"](4),l["\u0275\u0275elementEnd"]()),2&e&&(l["\u0275\u0275property"]("total",237)("page",t.page)("size",t.size),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("Current page: ",t.page,""),l["\u0275\u0275advance"](2),l["\u0275\u0275textInterpolate1"]("Items per page: ",t.size,""))},directives:[u.a],encapsulation:2,changeDetection:0}),e})();const d=({$implicit:e,total:t})=>{switch(e){case 10:return"Ten";case t:return"Show all rows";default:return e}};let f=(()=>{class e{constructor(){this.total=350,this.sizeOptions=[10,50,100,this.total]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-table-pagination-example-2"]],features:[l["\u0275\u0275ProvidersFeature"]([Object(r.f)({sizeOptionContent:d})])],decls:1,vars:2,consts:[[3,"total","items"]],template:function(e,t){1&e&&l["\u0275\u0275element"](0,"tui-table-pagination",0),2&e&&l["\u0275\u0275property"]("total",t.total)("items",t.sizeOptions)},directives:[u.a],encapsulation:2,changeDetection:0}),e})();var g,y=n("EPR0"),h=n("yHor"),b=n("zGJC"),P=n("u8jZ");g=$localize`:␟6848d6df5be6ff4b71028617c374e17b8f9c36c8␟1478194324430836348:Component to show pagination in table footer`;const C=["heading",$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`],x=["heading",$localize`:␟5ed3a7caf5293f1c78ac7cbc21dbd599df19b3fa␟6053806451915629650:Custom size-option content`];function E(e,t){1&e&&(l["\u0275\u0275text"](0," You can customize the component via DI-token "),l["\u0275\u0275elementStart"](1,"code"),l["\u0275\u0275text"](2,"TUI_TABLE_PAGINATION_OPTIONS"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](3," . "),l["\u0275\u0275elementStart"](4,"p",5),l["\u0275\u0275text"](5," Use function "),l["\u0275\u0275elementStart"](6,"code"),l["\u0275\u0275text"](7,"tuiTablePaginationOptionsProvider"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275text"](8," to provide new value of this token. "),l["\u0275\u0275elementEnd"]())}function z(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"p"),l["\u0275\u0275i18n"](1,g),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-example",2),l["\u0275\u0275i18nAttributes"](3,C),l["\u0275\u0275element"](4,"tui-table-pagination-example-1"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](5,"tui-doc-example",3),l["\u0275\u0275i18nAttributes"](6,x),l["\u0275\u0275template"](7,E,9,0,"ng-template",null,4,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275element"](9,"tui-table-pagination-example-2"),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275reference"](8),t=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("content",t.example1),l["\u0275\u0275advance"](3),l["\u0275\u0275property"]("description",e)("content",t.example2)}}var T,S,A,V,v,w,O,$;function _(e,t){1&e&&l["\u0275\u0275i18n"](0,T)}function R(e,t){1&e&&(l["\u0275\u0275i18nStart"](0,S),l["\u0275\u0275elementStart"](1,"p"),l["\u0275\u0275element"](2,"code"),l["\u0275\u0275elementEnd"](),l["\u0275\u0275i18nEnd"]())}function D(e,t){1&e&&(l["\u0275\u0275i18nStart"](0,A),l["\u0275\u0275element"](1,"p"),l["\u0275\u0275i18nEnd"]())}function I(e,t){1&e&&l["\u0275\u0275i18n"](0,V)}function M(e,t){1&e&&l["\u0275\u0275i18n"](0,v)}function G(e,t){1&e&&(l["\u0275\u0275i18nStart"](0,w),l["\u0275\u0275element"](1,"code"),l["\u0275\u0275i18nEnd"]())}function N(e,t){if(1&e){const e=l["\u0275\u0275getCurrentView"]();l["\u0275\u0275elementStart"](0,"tui-doc-demo"),l["\u0275\u0275elementStart"](1,"tui-table-pagination",6),l["\u0275\u0275listener"]("pageChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().page=t}))("sizeChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().size=t}))("pageChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275reference"](8).emitEvent(t)}))("sizeChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275reference"](10).emitEvent(t)})),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](2,"tui-doc-documentation"),l["\u0275\u0275template"](3,_,1,0,"ng-template",7),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().total=t})),l["\u0275\u0275template"](4,R,3,0,"ng-template",8),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().size=t})),l["\u0275\u0275template"](5,D,2,0,"ng-template",9),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().page=t})),l["\u0275\u0275template"](6,I,1,0,"ng-template",10),l["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return l["\u0275\u0275restoreView"](e),l["\u0275\u0275nextContext"]().items=t})),l["\u0275\u0275template"](7,M,1,0,"ng-template",11,12,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275template"](9,G,2,0,"ng-template",13,14,l["\u0275\u0275templateRefExtractor"]),l["\u0275\u0275elementEnd"]()}if(2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("items",e.items)("total",e.total)("page",e.page)("size",e.size),l["\u0275\u0275advance"](2),l["\u0275\u0275property"]("documentationPropertyValue",e.total),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValue",e.size),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValue",e.page),l["\u0275\u0275advance"](1),l["\u0275\u0275property"]("documentationPropertyValues",e.itemsVariants)("documentationPropertyValue",e.items)}}function H(e,t){if(1&e&&(l["\u0275\u0275elementStart"](0,"ol",15),l["\u0275\u0275elementStart"](1,"li"),l["\u0275\u0275elementStart"](2,"p"),l["\u0275\u0275i18nStart"](3,O),l["\u0275\u0275element"](4,"code"),l["\u0275\u0275i18nEnd"](),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](5,"tui-doc-code",16),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementStart"](6,"li"),l["\u0275\u0275elementStart"](7,"p"),l["\u0275\u0275i18n"](8,$),l["\u0275\u0275elementEnd"](),l["\u0275\u0275element"](9,"tui-doc-code",17),l["\u0275\u0275elementEnd"](),l["\u0275\u0275elementEnd"]()),2&e){const e=l["\u0275\u0275nextContext"]();l["\u0275\u0275advance"](5),l["\u0275\u0275property"]("code",e.exampleModule),l["\u0275\u0275advance"](4),l["\u0275\u0275property"]("code",e.exampleHtml)}}T=$localize`:␟eaf6d24a0f009870b331ae9d771e001e06155f34␟6816839641464864911: Total amount of items/lines in the table. `,S=$localize`:␟35463f4b77f9ff5411e98522c622e91581136bc8␟472889151489355337: Items/Lines per page. ${"\ufffd#1\ufffd"}:START_PARAGRAPH: Uses the first element inside ${"\ufffd#2\ufffd"}:START_TAG_CODE:items${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: by default. ${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,A=$localize`:␟eae5c93afe4b3193ae93b7c73f9f78a3b17f7219␟6481797631087629204: Current page. ${"\ufffd#1\ufffd"}:START_PARAGRAPH:Indexing starts at zero.${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,V=$localize`:␟5945646525a4f23c75ba8716e4f1087acb1b89a7␟8829701352843744315: Options to select amount of lines per page. `,v=$localize`:␟31776859d3ef1d6442876c807f289e80836a2261␟8720838308796482253: Emits the selected page when user navigates by spin buttons or selects new size of items per page. `,w=$localize`:␟a2c03c2522a598de3b28473d219c75c3d84150e2␟7639320364970904664: Emits the new ${"\ufffd#1\ufffd"}:START_TAG_CODE:size${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: -property (user selects new amount of lines per page). `,O=$localize`:␟29846a83e0cdbad86f552b549fcde62d80c7bf90␟3424664730177588095: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTablePaginationModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,$=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let L=(()=>{class e{constructor(){this.itemsVariants=[[10,20,50,100],[10,100,500]],this.total=1e3,this.page=5,this.items=this.itemsVariants[0],this.size=this.items[0],this.example1={HTML:n.e(1772).then(n.bind(null,"jVTi")),TypeScript:n.e(1773).then(n.bind(null,"FK/t"))},this.example2={TypeScript:n.e(1775).then(n.bind(null,"YHjD")),HTML:n.e(1774).then(n.bind(null,"+xbP"))},this.exampleModule=n.e(1776).then(n.bind(null,"rvOi")),this.exampleHtml=n.e(1777).then(n.bind(null,"Eclb"))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-table-pagination"]],decls:4,vars:0,consts:[["header","TablePagination","package","ADDON-TABLE","type","components"],["pageTab",""],["id","usage",3,"content",6,"heading"],["id","custom-size-option-content",3,"description","content",6,"heading"],["tokenDescription",""],[1,"tui-space_bottom-0"],[3,"items","total","page","size","pageChange","sizeChange"],["documentationPropertyName","total","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","page","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","items","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","pageChange","documentationPropertyMode","output","documentationPropertyType","number"],["documentationPropertyPageChange","documentationProperty"],["documentationPropertyName","sizeChange","documentationPropertyMode","output","documentationPropertyType","number"],["documentationPropertySizeChange","documentationProperty"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(l["\u0275\u0275elementStart"](0,"tui-doc-page",0),l["\u0275\u0275template"](1,z,10,3,"ng-template",1),l["\u0275\u0275template"](2,N,11,9,"ng-template",1),l["\u0275\u0275template"](3,H,10,2,"ng-template",1),l["\u0275\u0275elementEnd"]())},directives:[c.a,p.a,m.a,s,f,y.a,u.a,h.a,b.a,P.a],encapsulation:2,changeDetection:0}),e})(),j=(()=>{class e{}return e.\u0275mod=l["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=l["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,r.d,i.m,o.f.forChild(Object(i.t)(L))]]}),e})()}}]);