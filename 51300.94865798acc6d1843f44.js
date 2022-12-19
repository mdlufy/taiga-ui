"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[51300],{51300:(Oe,M,o)=>{o.r(M),o.d(M,{ExampleTuiTreeModule:()=>Ce});var m=o(12057),x=o(24751),C=o(33982),O=o(29851),u=o(68339),E=o(76040),r=o(418),e=o(74788),y=o(88331),_=o(37159),A=o(57068),g=o(84239),Z=o(23046);let U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-1"]],decls:17,vars:1,consts:[[3,"tuiTreeController"]],template:function(n,i){1&n&&(e.ynx(0,0),e.TgZ(1,"tui-tree-item"),e._uU(2," Fruits "),e.TgZ(3,"tui-tree-item"),e._uU(4," Apples "),e.TgZ(5,"tui-tree-item"),e._uU(6,"Granny Smith"),e.qZA(),e.TgZ(7,"tui-tree-item"),e._uU(8,"Red Delicious"),e.qZA(),e.qZA(),e.TgZ(9,"tui-tree-item"),e._uU(10,"Oranges"),e.qZA(),e.qZA(),e.TgZ(11,"tui-tree-item"),e._uU(12," Animals "),e.TgZ(13,"tui-tree-item"),e._uU(14,"Cats"),e.qZA(),e.TgZ(15,"tui-tree-item"),e._uU(16,"Dogs"),e.qZA(),e.qZA(),e.BQk()),2&n&&e.Q6J("tuiTreeController",!0)},directives:[g.o,Z.R],encapsulation:2,changeDetection:0}),t})();var d=o(93759);let L=(()=>{class t{constructor(){this.data=["Top level 1",["Second level item",["Third level 1","Third level 2","Third level 3"]],"Top level 2","Top level 3",["Second 1","Second 2"]]}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-2"]],decls:1,vars:1,consts:[[3,"value"]],template:function(n,i){1&n&&e._UZ(0,"tui-tree",0),2&n&&e.Q6J("value",i.data)},directives:[d.Y],styles:["tui-tree[_ngcontent-%COMP%]{margin-left:-3.5rem}"],changeDetection:0}),t})();var p=o(97247),N=o(34880);function $(t,l){if(1&t&&e._UZ(0,"tui-svg",4),2&t){const n=e.oxw().$implicit;e.Q6J("src",n.icon)}}function D(t,l){if(1&t&&(e.TgZ(0,"div",2),e.YNc(1,$,1,1,"tui-svg",3),e._uU(2),e.qZA()),2&t){const n=l.$implicit;e.Udp("opacity",1/l.node.level),e.xp6(1),e.Q6J("ngIf",n.icon),e.xp6(1),e.hij(" ",n.text," ")}}let J=(()=>{class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",icon:"tuiIconHeart",children:[{text:"Another item",children:[{text:"Next level 1",icon:"tuiIconHeart"},{text:"Next level 2",icon:"tuiIconHeart"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2",icon:"tuiIconHeart"}]}]},this.handler=n=>n.children||u.EMPTY_ARRAY}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-3"]],decls:3,vars:4,consts:[[3,"tuiTreeController","value","content","childrenHandler"],["content",""],[1,"wrapper"],[3,"src",4,"ngIf"],[3,"src"]],template:function(n,i){if(1&n&&(e._UZ(0,"tui-tree",0),e.YNc(1,D,3,4,"ng-template",null,1,e.W1O)),2&n){const a=e.MAs(2);e.Q6J("tuiTreeController",!0)("value",i.data)("content",a)("childrenHandler",i.handler)}},directives:[d.Y,p.n,g.o,m.O5,N.P],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),t})();var S=o(63624),F=o(76189);function I(t,l){1&t&&e._uU(0),2&t&&e.hij(" ",l.$implicit.text,"\n")}let Y=(()=>{class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.map=new Map,this.handler=n=>n.children||u.EMPTY_ARRAY}toggleTopmost(){this.map.set(this.data,!this.map.get(this.data))}toggleLevel(){const n=this.data.children||[];this.map.set(n[0],!this.map.get(n[0]))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-4"]],decls:8,vars:5,consts:[[3,"tuiTreeController","map","value","content","childrenHandler"],["content",""],["tuiButton","","size","s",1,"tui-space_right-2",3,"click"],["tuiButton","","size","s",3,"click"]],template:function(n,i){if(1&n&&(e._UZ(0,"tui-tree",0),e.YNc(1,I,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"p"),e.TgZ(4,"button",2),e.NdJ("click",function(){return i.toggleTopmost()}),e._uU(5," Toggle Topmost "),e.qZA(),e.TgZ(6,"button",3),e.NdJ("click",function(){return i.toggleLevel()}),e._uU(7," Toggle Top level 1 "),e.qZA(),e.qZA()),2&n){const a=e.MAs(2);e.Q6J("tuiTreeController",!1)("map",i.map)("value",i.data)("content",a)("childrenHandler",i.handler)}},directives:[d.Y,p.n,S.m,F.v],encapsulation:2,changeDetection:0}),t})();var H=o(89570);let X=(()=>{class t extends r.TuiTreeItemContentComponent{get icon(){return this.isExpandable?"tuiIconFolderLarge":"tuiIconFileLarge"}}return t.\u0275fac=function(){let l;return function(i){return(l||(l=e.n5z(t)))(i||t)}}(),t.\u0275cmp=e.Xpm({type:t,selectors:[["folders"]],hostBindings:function(n,i){1&n&&e.NdJ("click",function(){return i.onClick()})},features:[e.qOj],decls:2,vars:2,consts:[[1,"tui-space_right-2",3,"src"],[3,"ngTemplateOutlet"]],template:function(n,i){1&n&&(e._UZ(0,"tui-svg",0),e.GkF(1,1)),2&n&&(e.Q6J("src",i.icon),e.xp6(1),e.Q6J("ngTemplateOutlet",i.context.template))},directives:[N.P,m.tP],styles:['[_nghost-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;height:var(--tui-height-s);display:flex;align-items:center;padding:0 .5rem;border-radius:var(--tui-radius-xs);background:var(--tui-base-01)}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{content:"";position:absolute;left:-.75rem;z-index:-1}[_nghost-%COMP%]:before{width:1rem;border-bottom:1px solid var(--tui-base-04)}[_nghost-%COMP%]:after{top:-1rem;bottom:1rem;border-left:1px solid var(--tui-base-04)}._expandable[_nghost-%COMP%]:hover{cursor:pointer;background:var(--tui-base-02)}tui-svg[_ngcontent-%COMP%]{position:relative;background:inherit;z-index:1}']}),t})();function Q(t,l){if(1&t&&e._UZ(0,"tui-tree",2),2&t){const n=l.$implicit,i=e.oxw(),a=e.MAs(2);e.Q6J("tuiTreeController",!0)("value",n)("content",a)("childrenHandler",i.handler)}}function G(t,l){1&t&&e._uU(0),2&t&&e.hij(" ",l.$implicit.text,"\n")}let z=(()=>{class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=n=>n.children||u.EMPTY_ARRAY}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-5"]],features:[e._Bn([{provide:r.TUI_TREE_CONTENT,useValue:new H.Al(X)}])],decls:3,vars:1,consts:[[3,"tuiTreeController","value","content","childrenHandler",4,"ngFor","ngForOf"],["content",""],[3,"tuiTreeController","value","content","childrenHandler"]],template:function(n,i){1&n&&(e.YNc(0,Q,1,4,"tui-tree",0),e.YNc(1,G,1,1,"ng-template",null,1,e.W1O)),2&n&&e.Q6J("ngForOf",i.data.children)},directives:[m.sg,d.Y,p.n,g.o],styles:["tui-tree[_ngcontent-%COMP%]{overflow:hidden}"],changeDetection:0}),t})();var B=o(81894),V=o(35271);function W(t,l){if(1&t&&e._UZ(0,"tui-tree",2),2&t){const n=l.$implicit,i=e.oxw(),a=e.MAs(2);e.Q6J("tuiTreeController",!0)("value",n)("content",a)("childrenHandler",i.handler)}}function j(t,l){if(1&t){const n=e.EpF();e.TgZ(0,"tui-checkbox-labeled",3),e.NdJ("ngModelChange",function(a){const s=e.CHM(n).$implicit;return e.oxw().onChecked(s,a)}),e.ALo(1,"tuiMapper"),e._uU(2),e.qZA()}if(2&t){const n=l.$implicit,i=e.oxw();e.Q6J("ngModel",e.Dn7(1,2,n,i.getValue,i.map)),e.xp6(2),e.hij(" ",n.text," ")}}let K=(()=>{class t{constructor(){this.map=new Map,this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=n=>n.children||u.EMPTY_ARRAY,this.getValue=(n,i)=>{const a=h(n),c=!!i.get(a[0]);for(let s=0;s<a.length;s++)if(c!==!!i.get(a[s]))return null;return c}}onChecked(n,i){h(n).forEach(a=>this.map.set(a,i)),this.map=new Map(this.map.entries())}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-6"]],decls:3,vars:1,consts:[[3,"tuiTreeController","value","content","childrenHandler",4,"ngFor","ngForOf"],["content",""],[3,"tuiTreeController","value","content","childrenHandler"],[1,"tui-space_vertical-2","tui-space_left-1",3,"ngModel","ngModelChange"]],template:function(n,i){1&n&&(e.YNc(0,W,1,4,"tui-tree",0),e.YNc(1,j,3,6,"ng-template",null,1,e.W1O)),2&n&&e.Q6J("ngForOf",i.data.children)},directives:[m.sg,d.Y,p.n,g.o,B.p,x.JJ,x.On],pipes:[V.c],encapsulation:2,changeDetection:0}),t})();function h(t){return t.children?t.children.map(h).reduce((l,n)=>[...l,...n],[]):[t]}var b=o(46797),w=o(96736);let k=(()=>{class t{loadChildren({text:n}){return(0,b.H)(3e3).pipe((0,w.h)([{text:`${n} 1`,children:Math.random()>.5},{text:`${n} 2`,children:Math.random()>.5},{text:`${n} 3`,children:Math.random()>.5}]))}hasChildren({children:n}){return!!n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var q=o(23184);function ee(t,l){1&t&&e._UZ(0,"tui-loader",4)}function te(t,l){if(1&t&&e._uU(0),2&t){const n=e.oxw().$implicit;e.Oqu(n.text)}}function ne(t,l){if(1&t&&(e.YNc(0,ee,1,0,"tui-loader",2),e.YNc(1,te,1,1,"ng-template",null,3,e.W1O)),2&t){const n=l.$implicit,i=e.MAs(2),a=e.oxw();e.Q6J("ngIf",n===a.loading)("ngIfElse",i)}}let oe=(()=>{class t{constructor(n,i){this.loading=n,this.service=i,this.map=new Map,this.childrenHandler=a=>this.service.getChildren(a)}onToggled(n){this.service.loadChildren(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(r.TUI_TREE_LOADING),e.Y36(r.TuiTreeService))},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-tree-example-7"]],features:[e._Bn([r.TuiTreeService,{provide:r.TUI_TREE_START,useValue:{text:"Topmost"}},{provide:r.TUI_TREE_LOADER,useClass:k}])],decls:4,vars:7,consts:[[3,"tuiTreeController","map","value","childrenHandler","content","toggled"],["content",""],["class","loader",4,"ngIf","ngIfElse"],["text",""],[1,"loader"]],template:function(n,i){if(1&n&&(e.TgZ(0,"tui-tree",0),e.NdJ("toggled",function(c){return i.onToggled(c)}),e.ALo(1,"async"),e.qZA(),e.YNc(2,ne,3,2,"ng-template",null,1,e.W1O)),2&n){const a=e.MAs(3);e.Q6J("tuiTreeController",!1)("map",i.map)("value",e.lcZ(1,5,i.service.data$))("childrenHandler",i.childrenHandler)("content",a)}},directives:[d.Y,p.n,S.m,m.O5,q.k],pipes:[m.Ov],styles:[".loader[_ngcontent-%COMP%]{width:2rem;margin:1rem 0}"],changeDetection:0}),t})();var le=o(54476),ie=o(17023),ae=o(66596),re=o(76349);function Te(t,l){if(1&t&&(e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-tree-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",4),e._UZ(5,"tui-tree-example-2"),e.qZA(),e.TgZ(6,"tui-doc-example",5),e._UZ(7,"tui-tree-example-3"),e.qZA(),e.TgZ(8,"tui-doc-example",6),e._UZ(9,"tui-tree-example-4"),e.qZA(),e.TgZ(10,"tui-doc-example",7),e._UZ(11,"tui-tree-example-5"),e.qZA(),e.TgZ(12,"tui-doc-example",8),e._UZ(13,"tui-tree-example-6"),e.qZA(),e.TgZ(14,"tui-doc-example",9),e._UZ(15,"tui-tree-example-7"),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("content",n.example1),e.xp6(2),e.Q6J("content",n.example2),e.xp6(2),e.Q6J("content",n.example3),e.xp6(2),e.Q6J("content",n.example4),e.xp6(2),e.Q6J("content",n.example5),e.xp6(2),e.Q6J("content",n.example6),e.xp6(2),e.Q6J("content",n.example7)}}function ce(t,l){1&t&&(e._uU(0," Directive used to enable opening/closing of nodes with children. "),e.TgZ(1,"code"),e._uU(2,"Boolean"),e.qZA(),e._uU(3," input is the default state. "))}function se(t,l){}function me(t,l){}function de(t,l){}function ue(t,l){1&t&&(e._uU(0," Directive used to enable opening/closing of nodes with children. "),e.TgZ(1,"code"),e._uU(2,"Boolean"),e.qZA(),e._uU(3," input is the default state. "))}function pe(t,l){1&t&&e._uU(0," A map used with controller directive for manual programmatic toggling. ")}function Ee(t,l){1&t&&(e._uU(0," Provide your own component used internally to display node content (see "),e.TgZ(1,"a",21),e._uU(2," this example "),e.qZA(),e._uU(3," ) "))}function ge(t,l){1&t&&e._uU(0," Provide your own open/closed controlling mechanism ")}function xe(t,l){1&t&&(e._uU(0," Provide your own tracker for value/node pairs (so you can match "),e.TgZ(1,"code"),e._uU(2,"TreeItem"),e.qZA(),e._uU(3," instances to their corresponding "),e.TgZ(4,"code"),e._uU(5,"data: T"),e.qZA(),e._uU(6," when using "),e.TgZ(7,"code"),e._uU(8,"Tree"),e.qZA(),e._uU(9," component with custom open/closed controller) "))}function he(t,l){1&t&&(e.TgZ(0,"tui-doc-documentation",10),e.YNc(1,ce,4,0,"ng-template",11),e.qZA(),e.TgZ(2,"tui-doc-documentation",12),e.YNc(3,se,0,0,"ng-template",13),e.YNc(4,me,0,0,"ng-template",14),e.YNc(5,de,0,0,"ng-template",15),e.YNc(6,ue,4,0,"ng-template",11),e.YNc(7,pe,1,0,"ng-template",16),e.qZA(),e.TgZ(8,"tui-doc-documentation",17),e.YNc(9,Ee,4,0,"ng-template",18),e.YNc(10,ge,1,0,"ng-template",19),e.YNc(11,xe,10,0,"ng-template",20),e.qZA()),2&t&&(e.Q6J("showValues",!1),e.xp6(2),e.Q6J("showValues",!1),e.xp6(6),e.Q6J("showValues",!1))}function fe(t,l){if(1&t&&(e.TgZ(0,"ol",22),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,23),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",24),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,25),e.qZA(),e._UZ(9,"tui-doc-code",26),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(5),e.Q6J("code",n.exampleModule),e.xp6(4),e.Q6J("code",n.exampleHtml)}}let Me=(()=>{class t{constructor(){this.exampleModule=o.e(148).then(o.t.bind(o,148,17)),this.exampleHtml=o.e(27696).then(o.t.bind(o,27696,17)),this.example1={TypeScript:o.e(79720).then(o.t.bind(o,79720,17)),HTML:o.e(93017).then(o.t.bind(o,93017,17))},this.example2={TypeScript:o.e(12878).then(o.t.bind(o,12878,17)),HTML:o.e(90894).then(o.t.bind(o,90894,17)),LESS:o.e(4918).then(o.t.bind(o,4918,17))},this.example3={TypeScript:o.e(64387).then(o.t.bind(o,64387,17)),HTML:o.e(39585).then(o.t.bind(o,39585,17)),LESS:o.e(82776).then(o.t.bind(o,82776,17))},this.example4={TypeScript:o.e(29166).then(o.t.bind(o,29166,17)),HTML:o.e(93606).then(o.t.bind(o,93606,17))},this.example5={TypeScript:o.e(29902).then(o.t.bind(o,29902,17)),HTML:o.e(45433).then(o.t.bind(o,45433,17)),LESS:o.e(21457).then(o.t.bind(o,21457,17)),"content.ts":o.e(90422).then(o.t.bind(o,90422,17)),"content.less":o.e(90351).then(o.t.bind(o,90351,17))},this.example6={TypeScript:o.e(15661).then(o.t.bind(o,15661,17)),HTML:o.e(45946).then(o.t.bind(o,45946,17))},this.example7={TypeScript:o.e(67978).then(o.t.bind(o,67978,17)),HTML:o.e(21825).then(o.t.bind(o,21825,17)),LESS:o.e(5690).then(o.t.bind(o,5690,17)),"service.ts":o.e(97485).then(o.t.bind(o,97485,17))}}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-tree"]],decls:4,vars:0,consts:function(){let l,n,i,a,c,s,f,v,R,P;return l=$localize`:␟149371ee21e2bfea977655b73a5d24d2f79cf9c8␟7525510331693117035:Component to display tree-like data structure`,n=$localize`:␟9d0ac9c23563b10fafabeedbf739e933b054d1c8␟2233560223291461480:Manual`,i=$localize`:␟5f507ba5cd0e7796cb0e2e09d95b267384069287␟427843987492660980:Array`,a=$localize`:␟467bff8643ae9525e0477374f132a6b19bedbfd5␟5610425955750546094:Template`,c=$localize`:␟ce39c4f4b594097cb27118d8439de3dadb3d6fbb␟959005572385202816:Programmatic control`,s=$localize`:␟a5c05002b0ac2040f1aede5e727e0ffd06eda819␟7590013429208346303:Custom`,f=$localize`:␟4550f610fd0713a3f3ac61109ee77ba83124ac8e␟289341251890660084:Checkbox`,v=$localize`:␟b2f9aee0adc67cfacfc0d888ba57440260cd29e5␟8275800366978668046:Asynchronous`,R=$localize`:␟6e79a7191ed5e61990905539aa327e48d2514354␟5790081766230251440: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTreeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,P=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","Tree","package","KIT","type","components"],["pageTab",""],l,["id","manual","heading",n,3,"content"],["id","array","heading",i,3,"content"],["id","template","heading",a,3,"content"],["id","programmatic","heading",c,3,"content"],["id","custom","heading",s,3,"content"],["id","checkbox","heading",f,3,"content"],["id","async","heading",v,3,"content"],["heading","TreeItem",3,"showValues"],["documentationPropertyName","tuiTreeController","documentationPropertyType","boolean","documentationPropertyMode","input"],["heading","Tree",3,"showValues"],["documentationPropertyName","childrenHandler","documentationPropertyType","TuiHandler<T, readonly T[]>","documentationPropertyMode","input"],["documentationPropertyName","content","documentationPropertyType","PolymorpheusContent<TuiTreeContext>","documentationPropertyMode","input"],["documentationPropertyName","data","documentationPropertyType","T","documentationPropertyMode","input"],["documentationPropertyName","map","documentationPropertyType","Map<T, boolean>","documentationPropertyMode","input"],["heading","Tokens",3,"showValues"],["documentationPropertyName","TUI_TREE_CONTENT","documentationPropertyType","PolymorpheusContent<TuiTreeItemContext>"],["documentationPropertyName","TUI_TREE_CONTROLLER","documentationPropertyType","TuiTreeController"],["documentationPropertyName","TUI_TREE_ACCESSOR","documentationPropertyType","TuiTreeAccessor<T>"],["tuiLink","","routerLink","/components/tree","fragment","custom"],[1,"b-demo-steps"],R,["filename","myComponent.module.ts",3,"code"],P,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,Te,16,7,"ng-template",1),e.YNc(2,he,12,3,"ng-template",1),e.YNc(3,fe,10,2,"ng-template",1),e.qZA())},directives:[y.q,_.n,A.f,U,L,J,Y,z,K,oe,le.z,ie.B,ae.V,C.yS,re.c],encapsulation:2,changeDetection:0}),t})(),Ce=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.TuiTreeModule,E.TuiSvgModule,E.TuiButtonModule,E.TuiLinkModule,r.TuiCheckboxLabeledModule,u.TuiMapperPipeModule,E.TuiLoaderModule,x.u5,m.ez,O.fV,C.Bz.forChild((0,O.Ve)(Me))]]}),t})()}}]);