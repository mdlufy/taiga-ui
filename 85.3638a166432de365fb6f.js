(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{pzXc:function(e,t,r){"use strict";r.r(t),r.d(t,"ExampleTuiFieldErrorModule",(function(){return ve}));var n=r("An66"),o=r("3kIJ"),a=r("1VvW"),l=r("SVIu"),i=r("Qq0t"),u=r("dvRg"),m=r("cWK9"),s=r("kZht"),d=r("OZlg"),c=r("e0eB"),p=r("yZWP"),f=r("aPft"),b=r("iyc4"),h=r("1Nkj"),g=r("GdrL"),x=r("71sB"),y=r("2wTY"),C=r("gEyt"),S=r("kNZY");const v=["label",$localize`:␟c2f188eeca60463782738d8247914bf170df5098␟3772154377692784553:Type the ultimate answer`],E=["label",$localize`:␟4de3cc8dba3c7b052f74a1db4752f51bda859e9c␟8591875090862306452:Set a password`];var V;V=$localize`:␟55293e53f2eaf13c5a165765c4319f4527d577a4␟5532503478235461752: If you need to show validation message as early as a user started to type something, subscribe on form value changes and call markAsTouched on control on first value change `;const T=/^[a-zA-Z]+$/;function w(e){return e.value&&T.test(e.value)?null:{other:"Only latin letters are allowed"}}function F(e){return"42"===e.value?null:{other:"Wrong"}}let L=(()=>{class e{constructor(){this.testValue1=new o.FormControl("",[o.Validators.required,w]),this.testForm=new o.FormGroup({testValue1:this.testValue1,testValue2:new o.FormControl("",[o.Validators.required,F])}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-1"]],decls:13,vars:3,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","",1,"tui-space_bottom-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2"],["tuiLabel","",6,"label"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"label",1),s["\u0275\u0275i18nAttributes"](2,v),s["\u0275\u0275elementStart"](3,"tui-input",2),s["\u0275\u0275text"](4," to the Question of Life, the Universe, and Everything "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-field-error",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"label",4),s["\u0275\u0275i18nAttributes"](7,E),s["\u0275\u0275elementStart"](8,"tui-input",5),s["\u0275\u0275text"](9," Latin letters only "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](10,"tui-field-error",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"p"),s["\u0275\u0275i18n"](12,V),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,g.a,x.a,o.NgControlStatus,o.FormControlName,y.b,C.b,S.a],encapsulation:2,changeDetection:0}),e})();var _=r("l4xa"),N=r("zV1d");const O=["errorContent"],A=["bigErrorContent"],z=["label",$localize`:␟7d66ae66a6f955b1eb6f5c00aac4d4e2584cdeed␟2295031025708706060:Enter company name`];function G(e,t){1&e&&(s["\u0275\u0275text"](0," Secret number must contain "),s["\u0275\u0275elementStart"](1,"strong"),s["\u0275\u0275text"](2,"10 or 12 digits"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](3," . "))}function D(e,t){1&e&&(s["\u0275\u0275text"](0," This company is already registered "),s["\u0275\u0275elementStart"](1,"button",9),s["\u0275\u0275text"](2," It is mine "),s["\u0275\u0275elementEnd"]())}const k=function(){return["required","inn"]},M=/^\d{10}$/,$=/^\d{12}$/;let P=(()=>{class e{constructor(){this.errorContent="",this.bigErrorContent="",this.testValue2=new o.FormControl(""),this.testForm=new o.FormGroup({testValue1:new o.FormControl("",[o.Validators.required,this.getSecretValidator()]),testValue2:this.testValue2}),this.companyValidator=e=>e.value?{inn:new _.fc(this.bigErrorContent)}:null}ngOnInit(){this.testValue2.setValidators([o.Validators.required,this.companyValidator])}getSecretValidator(){return e=>e.value&&(M.test(e.value)||$.test(e.value))?null:{secret:new _.fc(this.errorContent)}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-2"]],viewQuery:function(e,t){var r;1&e&&(s["\u0275\u0275viewQuery"](O,!0),s["\u0275\u0275viewQuery"](A,!0)),2&e&&(s["\u0275\u0275queryRefresh"](r=s["\u0275\u0275loadQuery"]())&&(t.errorContent=r.first),s["\u0275\u0275queryRefresh"](r=s["\u0275\u0275loadQuery"]())&&(t.bigErrorContent=r.first))},decls:12,vars:5,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Secret number"],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"order"],["tuiLabel","",1,"tui-space_top-4",6,"label"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2"],["tuiButton","","type","button",1,"tui-space_top-2"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"label",1),s["\u0275\u0275element"](2,"tui-input",2),s["\u0275\u0275template"](3,G,4,0,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275element"](5,"tui-field-error",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"label",5),s["\u0275\u0275i18nAttributes"](7,z),s["\u0275\u0275element"](8,"tui-input",6),s["\u0275\u0275template"](9,D,3,0,"ng-template",null,7,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275element"](11,"tui-field-error",8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("order",s["\u0275\u0275pureFunction0"](4,k)),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,g.a,x.a,o.NgControlStatus,o.FormControlName,y.b,C.b,S.a,N.a],encapsulation:2,changeDetection:0}),e})();var I=r("bYz0"),j=r("LhIY"),q=r("CDxv");const R=["phoneErrorContent"];function Q(e,t){1&e&&s["\u0275\u0275text"](0,"Invalid phone number length")}function B(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"label",4),s["\u0275\u0275elementStart"](1,"span",5),s["\u0275\u0275element"](2,"tui-input-phone",6),s["\u0275\u0275elementStart"](3,"button",7),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const r=t.index;return s["\u0275\u0275nextContext"]().removePhone(r)})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](4,Q,1,0,"ng-template",null,8,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275element"](6,"tui-field-error",9),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.index;s["\u0275\u0275propertyInterpolate1"]("label","Phone number ",e+1,""),s["\u0275\u0275advance"](2),s["\u0275\u0275propertyInterpolate"]("formControlName",e),s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0),s["\u0275\u0275advance"](4),s["\u0275\u0275propertyInterpolate"]("formControlName",e)}}let H=(()=>{class e{constructor(){this.phoneErrorContent="",this.testForm=new o.FormGroup({phones:new o.FormArray([new o.FormControl("",[o.Validators.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new o.FormControl("",this.addValidators()))}removePhone(e){this.formData.removeAt(e);let t=0;for(;t<=1&&this.formData.controls[t];)this.formData.controls[t].setValidators([o.Validators.required,this.getPhoneLengthValidator()]),t++}addValidators(){return this.formData.controls.length<2?[o.Validators.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return e=>12!==e.value.length?{lenght:new _.fc(this.phoneErrorContent)}:null}getPhoneArrayValidator(){return e=>e.controls.length<2||e.controls.filter(e=>e.errors).length&&e.controls.length?{length:new _.fc("You should add at least 2 phone number")}:null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-3"]],viewQuery:function(e,t){var r;1&e&&s["\u0275\u0275viewQuery"](R,!0),2&e&&s["\u0275\u0275queryRefresh"](r=s["\u0275\u0275loadQuery"]())&&(t.phoneErrorContent=r.first)},decls:5,vars:2,consts:[[3,"formGroup"],["tuiLabel","","formArrayName","phones","class","tui-space_bottom-4",3,"label",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error"],["tuiButton","","type","button","size","s",1,"tui-space_top-4",3,"click"],["tuiLabel","","formArrayName","phones",1,"tui-space_bottom-4",3,"label"],[1,"row"],["tuiTextfieldAutocomplete","off","tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["tuiIconButton","","type","button","size","m","title","Delete phone number","appearance","icon","icon","tuiIconTrash",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275template"](1,B,7,4,"label",1),s["\u0275\u0275element"](2,"tui-field-error",2),s["\u0275\u0275elementStart"](3,"button",3),s["\u0275\u0275listener"]("click",(function(){return t.addPhone()})),s["\u0275\u0275text"](4," Add a phone number "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.formData.controls))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,n.s,S.a,o.FormArrayName,N.a,h.a,I.a,j.a,q.b,y.b,o.NgControlStatus,o.FormControlName,C.b],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),e})();var W=r("ROBh"),Y=r("BwBJ"),Z=r("ruxD");const J=/^[a-zA-Z]+$/;let K=(()=>{class e{constructor(e,t,r){this.fb=e,this.form=this.fb.group({text:["\u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0442\u0435\u043a\u0441\u0442",o.Validators.required]}),this.form.controls.text.setAsyncValidators(function(e,t){return r=>r.value&&J.test(r.value)?Object(W.a)(null):Object(W.a)({error:new _.fc("Only latin letters allowed")}).pipe(e?Object(Y.a)(0):Object(Y.a)(5e3),Object(Z.a)(()=>t.markForCheck()))}(t,r)),this.form.controls.text.markAsTouched()}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](o.FormBuilder),s["\u0275\u0275directiveInject"](_.P),s["\u0275\u0275directiveInject"](s.ChangeDetectorRef))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-4"]],decls:5,vars:1,consts:[[3,"formGroup"],[1,"tui-form__row"],["formControlName","text",1,"input"],["formControlName","text"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"tui-input",2),s["\u0275\u0275text"](3," Enter some text "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](4,"tui-field-error",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("formGroup",t.form)},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,g.a,x.a,o.NgControlStatus,o.FormControlName,S.a],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),e})();var U,X=r("3p4X"),ee=r("SrNW"),te=r("YtkY"),re=r("jIqt"),ne=r("okGw"),oe=r("x8/p");function ae(e){return"Maximum length \u2014 "+e.requiredLength}function le(e){return"Minimum length \u2014 "+e.requiredLength}U=$localize`:␟87a9e0f6ceb1444cab6185424f933a376357a91c␟3646762244302681891: Required `;let ie=(()=>{class e{constructor(){this.testValue1=new o.FormControl("",[o.Validators.minLength(4),o.Validators.maxLength(4)]),this.testValue2=new o.FormControl("",[o.Validators.required,o.Validators.email]),this.testValue3=new o.FormControl(2,[o.Validators.min(3)]),this.testForm=new o.FormGroup({testValue1:this.testValue1,testValue2:this.testValue2,testValue3:this.testValue3}),this.testValue1.valueChanges.subscribe(()=>{this.testValue1.markAsTouched()})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-field-error-example-5"]],features:[s["\u0275\u0275ProvidersFeature"]([{provide:u.v,useValue:{required:"Enter this!",email:"Enter a valid email",maxlength:ae,minlength:le,min:Object(X.a)(2e3).pipe(Object(ee.a)(e=>!e,!1),Object(te.a)(e=>e?"Fix please":"Min number 3"),Object(re.a)("Min number 3"))}}])],decls:13,vars:2,consts:[[1,"b-form",3,"formGroup"],["tuiLabel","","label","Enter an email",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2"],["tuiLabel","","label","Minimum and maximum length",1,"tui-space_bottom-4"],["formControlName","testValue1","tuiTextfieldSize","m"],["formControlName","testValue1"],["tuiLabel","","label","Minimum number"],["formControlName","testValue3","tuiTextfieldSize","m"],["formControlName","testValue3"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"label",1),s["\u0275\u0275elementStart"](2,"tui-input",2),s["\u0275\u0275i18n"](3,U),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](4,"tui-field-error",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"label",4),s["\u0275\u0275elementStart"](6,"tui-input",5),s["\u0275\u0275text"](7," 4 letters word... "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](8,"tui-field-error",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"label",7),s["\u0275\u0275elementStart"](10,"tui-input-count",8),s["\u0275\u0275text"](11," number "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](12,"tui-field-error",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.testForm),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,h.a,g.a,x.a,o.NgControlStatus,o.FormControlName,y.b,C.b,S.a,ne.a,oe.a],encapsulation:2,changeDetection:0}),e})();var ue=r("u8jZ");const me=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var se;se=$localize`:␟3f27c72dea09d55e44acaf9c2da962eca6048e41␟3207439097338829675:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:FieldError${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE: shows a validation error of a field. If you do not use forms, see ${"\ufffd#3\ufffd"}:START_LINK:${"[\ufffd#2\ufffd|\ufffd#4\ufffd]"}:START_TAG_CODE:TuiError${"[\ufffd/#2\ufffd|\ufffd/#4\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#3\ufffd"}:CLOSE_LINK: . `,se=s["\u0275\u0275i18nPostprocess"](se);const de=["heading",$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`],ce=["heading",$localize`:␟beedd8b329a8f8773c3b0f41eefeeb5e601578a9␟7592818721454246340:with a template`],pe=["heading",$localize`:␟f168335edcd7a2503812f5cdb86f5fdf3f53881e␟296183290148574667:With adding new controls (FormArray)`],fe=["heading",$localize`:␟4dd4c0a5cc2f0b5edcf6ce49c7de250516eb991e␟2219993318238885702:async validator`],be=["heading",$localize`:␟878e6fe461fd9ca2712122350e24522f5de8fd18␟8087109270529539309:With custom messages for validators`],he=function(){return["/components/error"]};function ge(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,se),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275elementStart"](3,"a",3),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"tui-notification",4),s["\u0275\u0275elementStart"](6,"strong"),s["\u0275\u0275text"](7,"Deprecated."),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](8," Use "),s["\u0275\u0275elementStart"](9,"code"),s["\u0275\u0275text"](10,"tuiFieldError"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](11," pipe from "),s["\u0275\u0275elementStart"](12,"a",5),s["\u0275\u0275text"](13," TuiFieldErrorPipeModule "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"tui-doc-example",6),s["\u0275\u0275i18nAttributes"](15,de),s["\u0275\u0275element"](16,"tui-field-error-example-1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"tui-doc-example",7),s["\u0275\u0275i18nAttributes"](18,ce),s["\u0275\u0275element"](19,"tui-field-error-example-2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"tui-doc-example",8),s["\u0275\u0275i18nAttributes"](21,pe),s["\u0275\u0275element"](22,"tui-field-error-example-3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"tui-doc-example",9),s["\u0275\u0275i18nAttributes"](24,fe),s["\u0275\u0275element"](25,"tui-field-error-example-4"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](26,"tui-doc-example",10),s["\u0275\u0275i18nAttributes"](27,be),s["\u0275\u0275element"](28,"tui-field-error-example-5"),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("routerLink",s["\u0275\u0275pureFunction0"](6,he)),s["\u0275\u0275advance"](11),s["\u0275\u0275property"]("content",e.example1),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example2),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example3),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example4),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",e.example5)}}var xe,ye;function Ce(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",11),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,xe),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,ye),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",e.exampleModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",e.exampleHtml)}}xe=$localize`:␟642fb8eaf79852b6d813ddb81c4dbf7f3529ebeb␟6845184443201904975: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiFieldErrorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,ye=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Se=(()=>{class e{constructor(){this.exampleModule=r.e(700).then(r.bind(null,"z2Io")),this.exampleHtml=r.e(701).then(r.bind(null,"3z46")),this.example1={TypeScript:r.e(691).then(r.bind(null,"CUjJ")),HTML:r.e(690).then(r.bind(null,"FNJL"))},this.example2={TypeScript:r.e(693).then(r.bind(null,"jyK7")),HTML:r.e(692).then(r.bind(null,"VxUP"))},this.example3={TypeScript:r.e(38).then(r.bind(null,"x1Bp")),HTML:r.e(694).then(r.bind(null,"05Q8")),LESS:r.e(38).then(r.bind(null,"x1Bp"))},this.example4={TypeScript:r.e(697).then(r.bind(null,"8UFu")),HTML:r.e(695).then(r.bind(null,"aGr5")),LESS:r.e(696).then(r.bind(null,"nMuN"))},this.example5={TypeScript:r.e(699).then(r.bind(null,"bq1p")),HTML:r.e(698).then(r.bind(null,"eQOQ"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-field-error"]],decls:4,vars:0,consts:[["header","FieldError","package","KIT","type","components","deprecated",""],["pageTab",""],[6,"pageTab"],["tuiLink","",3,"routerLink"],["status","error"],["tuiLink","","routerLink","/pipes/field-error"],["id","base",3,"content",6,"heading"],["id","patterns",3,"content",6,"heading"],["id","formArray",3,"content",6,"heading"],["id","async",3,"content",6,"heading"],["id","customMessages",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,ge,29,7,"ng-template",1),s["\u0275\u0275template"](2,Ce,10,2,"ng-template",2),s["\u0275\u0275i18nAttributes"](3,me),s["\u0275\u0275elementEnd"]())},directives:[d.a,c.a,p.a,a.e,f.a,b.a,L,P,H,K,ie,ue.a],encapsulation:2,changeDetection:0}),e})(),ve=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[u.cb,o.ReactiveFormsModule,n.c,u.O,i.Cb,u.ib,u.V,i.Db,l.m,m.c,i.bb,i.Lb,i.dc,a.f.forChild(Object(l.u)(Se))]]}),e})()}}]);