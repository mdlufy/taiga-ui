(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[92984],{92984:(e,t,n)=>{n.r(t),n.d(t,{ExampleMiscellaneousModule:()=>Q});var r=n(12057),o=n(23738),i=n(33982),a=n(73961),s=n(45294),u=n(62689),c=n(74788),l=n(43560),m=n(93525),p=n(33772),d=n(58196);let Z=(()=>{class e{get assertResult(){return 5===(new Date).getDay()?"Nothing in console":'There is a console assert: <br> "Today is not a friday"'}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-miscellaneous-example-1"]],decls:1,vars:1,consts:[[3,"innerHTML"]],template:function(e,t){1&e&&c._UZ(0,"p",0),2&e&&c.Q6J("innerHTML",t.assertResult,c.oJD)},encapsulation:2,changeDetection:0}),e})(),g=(()=>{class e{get flatted(){return(0,d.tuiFlatLength)([[1,2],[3,4],[5,6]])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-miscellaneous-example-2"]],decls:2,vars:1,template:function(e,t){1&e&&(c.TgZ(0,"p"),c._uU(1),c.qZA()),2&e&&(c.xp6(1),c.hij("",t.flatted," = flatLength([[1, 2], [3, 4], [5, 6]]);"))},encapsulation:2,changeDetection:0}),e})();var f=n(80867),h=n(50170),T=n(1414),x=n(52219),y=n(50020);function A(e,t){if(1&e&&c._UZ(0,"tui-data-list-wrapper",4),2&e){const e=c.oxw();c.Q6J("items",e.items)}}let _=(()=>{class e{constructor(){this.items=["6734567890123456","5536567890123456","2202567890123456","4405567890123456","4000567890123456"],this.parametersForm=new o.cw({cardNumber:new o.NI("")})}get paymentSystem(){const{cardNumber:e}=this.parametersForm.value;return(0,f.tuiGetPaymentSystem)(null!=e?e:"")}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-miscellaneous-example-4"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","cardNumber",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(c._uU(0),c.TgZ(1,"form",0),c.TgZ(2,"div",1),c.TgZ(3,"tui-select",2),c._uU(4," Choose card number "),c.YNc(5,A,1,1,"tui-data-list-wrapper",3),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.hij("'",t.paymentSystem,"' = getPaymentSystem(cardNumber); "),c.xp6(1),c.Q6J("formGroup",t.parametersForm))},directives:[o._Y,o.JL,o.sg,h.u,T.O,o.JJ,o.u,x.g,y.e],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();function w(e,t){if(1&e&&c._UZ(0,"tui-data-list-wrapper",4),2&e){const e=c.oxw();c.Q6J("items",e.items)}}let v=(()=>{class e{constructor(){this.items=["String","null","undefined"],this.parametersForm=new o.cw({value:new o.NI(null)})}get isPresent(){const{value:e}=this.parametersForm.value,t=this.objectifyValue(null!=e?e:"");return(0,d.tuiIsPresent)(t)}objectifyValue(e){return"null"===e?null:"undefined"!==e?e:void 0}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-miscellaneous-example-5"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(c._uU(0),c.TgZ(1,"form",0),c.TgZ(2,"div",1),c.TgZ(3,"tui-select",2),c._uU(4," value "),c.YNc(5,w,1,1,"tui-data-list-wrapper",3),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.hij("",t.isPresent," = isPresent(value); "),c.xp6(1),c.Q6J("formGroup",t.parametersForm))},directives:[o._Y,o.JL,o.sg,h.u,T.O,o.JJ,o.u,x.g,y.e],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var q=n(77027),b=n(41360),C=n(36951),L=n(7114);const J=function(){return[]};let N=(()=>{class e{constructor(){this.userDetailsForm=new o.cw({name:new o.NI("",o.kI.required),address:new o.cw({street:new o.NI("",o.kI.required),city:new o.NI("",o.kI.required),zipCode:new o.NI("",o.kI.required)})})}ngOnInit(){(0,d.tuiMarkControlAsTouchedAndValidate)(this.userDetailsForm)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["tui-miscellaneous-example-6"]],decls:26,vars:25,consts:[[1,"b-form",3,"formGroup"],["formControlName","name"],["formControlName","name",3,"error"],["formGroupName","address"],["formControlName","street"],["formControlName","street",3,"error"],["formControlName","zipCode"],["formControlName","zipCode",3,"error"],["formControlName","city"],["formControlName","city",3,"error"]],template:function(e,t){1&e&&(c.TgZ(0,"form",0),c.TgZ(1,"p"),c.TgZ(2,"tui-input",1),c._uU(3,"Name"),c.qZA(),c._UZ(4,"tui-error",2),c.ALo(5,"async"),c.ALo(6,"tuiFieldError"),c.qZA(),c.TgZ(7,"div",3),c.TgZ(8,"p"),c.TgZ(9,"tui-input",4),c._uU(10,"Street"),c.qZA(),c._UZ(11,"tui-error",5),c.ALo(12,"async"),c.ALo(13,"tuiFieldError"),c.qZA(),c.TgZ(14,"p"),c.TgZ(15,"tui-input",6),c._uU(16,"Zip code"),c.qZA(),c._UZ(17,"tui-error",7),c.ALo(18,"async"),c.ALo(19,"tuiFieldError"),c.qZA(),c.TgZ(20,"p"),c.TgZ(21,"tui-input",8),c._uU(22,"City"),c.qZA(),c._UZ(23,"tui-error",9),c.ALo(24,"async"),c.ALo(25,"tuiFieldError"),c.qZA(),c.qZA(),c.qZA()),2&e&&(c.Q6J("formGroup",t.userDetailsForm),c.xp6(4),c.Q6J("error",c.lcZ(5,5,c.lcZ(6,7,c.DdM(21,J)))),c.xp6(7),c.Q6J("error",c.lcZ(12,9,c.lcZ(13,11,c.DdM(22,J)))),c.xp6(6),c.Q6J("error",c.lcZ(18,13,c.lcZ(19,15,c.DdM(23,J)))),c.xp6(6),c.Q6J("error",c.lcZ(24,17,c.lcZ(25,19,c.DdM(24,J)))))},directives:[o._Y,o.JL,o.sg,q.K,b.w,o.JJ,o.u,C.v,o.x0],pipes:[r.Ov,L.A],encapsulation:2,changeDetection:0}),e})();var U=n(83074);function M(e,t){if(1&e&&(c.TgZ(0,"p"),c._uU(1,"Some utils to simplify the development process"),c.qZA(),c.TgZ(2,"tui-doc-example",3),c._UZ(3,"tui-miscellaneous-example-1"),c.qZA(),c.TgZ(4,"tui-doc-example",4),c._UZ(5,"tui-miscellaneous-example-2"),c.qZA(),c.TgZ(6,"tui-doc-example",5),c._UZ(7,"tui-miscellaneous-example-4"),c.qZA(),c.TgZ(8,"tui-doc-example",6),c._UZ(9,"tui-miscellaneous-example-5"),c.qZA(),c.TgZ(10,"tui-doc-example",7),c._UZ(11,"tui-miscellaneous-example-6"),c.qZA()),2&e){const e=c.oxw();c.xp6(2),c.Q6J("content",e.example1),c.xp6(2),c.Q6J("content",e.example2),c.xp6(2),c.Q6J("content",e.example4),c.xp6(2),c.Q6J("content",e.example5),c.xp6(2),c.Q6J("content",e.example6)}}function D(e,t){if(1&e&&(c.TgZ(0,"ol",8),c.TgZ(1,"li"),c.TgZ(2,"p"),c._uU(3,"Import into component and use:"),c.qZA(),c._UZ(4,"tui-doc-code",9),c.qZA(),c.qZA()),2&e){const e=c.oxw();c.xp6(4),c.Q6J("code",e.importComponentExample)}}let S=(()=>{class e{constructor(){this.importComponentExample=n.e(47152).then(n.t.bind(n,47152,17)),this.example1={TypeScript:n.e(33654).then(n.t.bind(n,33654,17)),HTML:n.e(1342).then(n.t.bind(n,1342,17))},this.example2={TypeScript:n.e(34569).then(n.t.bind(n,34569,17)),HTML:n.e(71006).then(n.t.bind(n,71006,17))},this.example4={TypeScript:n.e(99460).then(n.t.bind(n,99460,17)),HTML:n.e(34715).then(n.t.bind(n,34715,17)),LESS:n.e(96101).then(n.t.bind(n,96101,17))},this.example5={TypeScript:n.e(94146).then(n.t.bind(n,94146,17)),HTML:n.e(21162).then(n.t.bind(n,21162,17)),LESS:n.e(9307).then(n.t.bind(n,9307,17))},this.example6={TypeScript:n.e(34461).then(n.t.bind(n,34461,17)),HTML:n.e(33610).then(n.t.bind(n,33610,17))}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=c.Xpm({type:e,selectors:[["example-format"]],decls:3,vars:0,consts:[["header","Miscellaneous","package","CDK","type","utils"],["pageTab",""],["pageTab","Setup"],["id","assert","heading","assert","description","Logs assert into console in dev mode",3,"content"],["id","flat-length","heading","flatLength","description","Calculates a length of elements of two dimensional array",3,"content"],["id","get-payment-system","heading","getPaymentSystem","description","Card number to its payment system",3,"content"],["id","is-present","heading","isPresent","description","Checks value not to be null or undefined",3,"content"],["id","mark-control-as-touched-and-validate","heading","markControlAsTouchedAndValidate","description","Recursively marks form control as touched and triggers validation",3,"content"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(c.TgZ(0,"tui-doc-page",0),c.YNc(1,M,12,5,"ng-template",1),c.YNc(2,D,5,1,"ng-template",2),c.qZA())},directives:[l.q,m.n,p.f,Z,g,_,v,N,U.c],encapsulation:2,changeDetection:0}),e})(),Q=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=c.oAB({type:e}),e.ɵinj=c.cJS({imports:[[r.ez,o.u5,o.UX,u.TuiSelectModule,s.TuiDataListModule,u.TuiDataListWrapperModule,u.TuiInputModule,s.TuiErrorModule,u.TuiFieldErrorPipeModule,a.fV,i.Bz.forChild((0,a.Ve)(S))]]}),e})()}}]);