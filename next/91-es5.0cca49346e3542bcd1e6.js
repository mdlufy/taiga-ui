var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(e);if(t){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{d2li:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiPrimitiveTextfieldModule",(function(){return He}));var i,o,a=n("An66"),r=n("3kIJ"),l=n("1VvW"),c=n("SVIu"),u=n("Qq0t"),d=n("dvRg"),p=n("cWK9"),s=n("kZht"),m=((o=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=s["\u0275\u0275defineNgModule"]({type:o}),o.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||o)},imports:[[r.FormsModule,a.c,c.m,c.l,u.TuiModeModule,d.TuiAccordionModule]]}),o),f=((i=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=s["\u0275\u0275defineNgModule"]({type:i}),i.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||i)}}),i),b=n("jjvb"),y=n("Piem"),g=n("3tXr"),v=n("K/iL"),h=n("pVuH"),x=n("OZlg"),C=n("e0eB"),_=n("iyc4"),T=n("aPft"),O=n("yZWP"),P=n("l4xa"),V=n("luNI"),w=n("SgIQ"),S=n("vwaW"),j=n("ONKv"),E=n("fHzR");function I(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-svg",4),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().togglePasswordVisibility()})),s["\u0275\u0275elementEnd"]()}if(2&e){var i=s["\u0275\u0275nextContext"](),o=s["\u0275\u0275reference"](6);s["\u0275\u0275property"]("tuiHint",o)("src",i.icon)}}function M(e,t){if(1&e&&s["\u0275\u0275text"](0),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275textInterpolate"](n.hint)}}var L,k=["*"],A=((L=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i){var o;return _classCallCheck(this,n),(o=t.call(this,e,i)).isPasswordHidden=!0,o}return _createClass(n,[{key:"nativeFocusableElement",get:function(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}},{key:"focused",get:function(){return!!this.textfield&&this.textfield.focused}},{key:"icon",get:function(){return this.isPasswordHidden?"tuiIconHideLarge":"tuiIconShowLarge"}},{key:"hint",get:function(){return this.isPasswordHidden?"Show password":"Hide password"}},{key:"inputType",get:function(){return this.isPasswordHidden?"password":"text"}},{key:"onValueChange",value:function(e){this.updateValue(e)}},{key:"onFocused",value:function(e){this.updateFocused(e)}},{key:"togglePasswordVisibility",value:function(){this.isPasswordHidden=!this.isPasswordHidden}},{key:"getFallbackValue",value:function(){return""}}]),n}(P.AbstractTuiControl)).\u0275fac=function(e){return new(e||L)(s["\u0275\u0275directiveInject"](r.NgControl,10),s["\u0275\u0275directiveInject"](s.ChangeDetectorRef))},L.\u0275cmp=s["\u0275\u0275defineComponent"]({type:L,selectors:[["tui-primitive-textfield-example-1"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](u.TuiPrimitiveTextfieldComponent,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.textfield=n.first)},features:[s["\u0275\u0275InheritDefinitionFeature"]],ngContentSelectors:k,decls:7,vars:7,consts:[[3,"invalid","focusable","disabled","readOnly","iconContent","value","valueChange","focusedChange"],["tuiTextfield","",3,"type"],["iconContent",""],["hintContent",""],["tuiHintId","not_required",1,"icon",3,"tuiHint","src","click"]],template:function(e,t){if(1&e&&(s["\u0275\u0275projectionDef"](),s["\u0275\u0275elementStart"](0,"tui-primitive-textfield",0),s["\u0275\u0275listener"]("valueChange",(function(e){return t.onValueChange(e)}))("focusedChange",(function(e){return t.onFocused(e)})),s["\u0275\u0275projection"](1),s["\u0275\u0275element"](2,"input",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,I,1,2,"ng-template",null,2,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](5,M,1,1,"ng-template",null,3,s["\u0275\u0275templateRefExtractor"])),2&e){var n=s["\u0275\u0275reference"](4);s["\u0275\u0275property"]("invalid",t.computedInvalid)("focusable",t.focusable)("disabled",t.disabled)("readOnly",t.readOnly)("iconContent",n)("value",t.value),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("type",t.inputType)}},directives:[V.a,w.a,S.a,j.a,E.b],styles:["[_nghost-%COMP%]{display:block}.icon[_ngcontent-%COMP%]{cursor:pointer;pointer-events:auto}"],changeDetection:0}),L),z=n("2wTY"),R=n("gEyt"),N=n("eB8V"),D=n("1Nkj"),F=["label",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241ff37c19d3d4ffc35f74d9ae6f62d686cb69b3890c\u241f270336154752876683:Modified cleaner icon"])))],H=["label",$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fcf50d9a6ca344e37ff60255e1c9bd1332e292b01\u241f7576419264776917124:Override modified cleaner icon"])))];function $(e,t){1&e&&s["\u0275\u0275element"](0,"tui-svg",7)}var G,K,Q=((G=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i){return _classCallCheck(this,n),t.call(this,e,i)}return _createClass(n,[{key:"nativeFocusableElement",get:function(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}},{key:"focused",get:function(){return!!this.textfield&&this.textfield.focused}},{key:"onValueChange",value:function(e){this.updateValue(e)}},{key:"onFocused",value:function(e){this.updateFocused(e)}},{key:"getFallbackValue",value:function(){return""}}]),n}(P.AbstractTuiControl)).\u0275fac=function(e){return new(e||G)(s["\u0275\u0275directiveInject"](r.NgControl,10),s["\u0275\u0275directiveInject"](s.ChangeDetectorRef))},G.\u0275cmp=s["\u0275\u0275defineComponent"]({type:G,selectors:[["tui-primitive-textfield-example-2"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](u.TuiPrimitiveTextfieldComponent,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.textfield=n.first)},features:[s["\u0275\u0275ProvidersFeature"]([{provide:u.TUI_PRIMITIVE_TEXTFIELD_OPTIONS,useValue:Object.assign(Object.assign({},u.TUI_PRIMITIVE_TEXTFIELD_DEFAULT_OPTIONS),{iconCleaner:"tuiIconChevronUp"})}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:13,vars:5,consts:[["tuiTextfieldSize","m",1,"b-form",3,"tuiTextfieldLabelOutside","tuiTextfieldCleaner"],["tuiLabel","",6,"label"],[3,"value","valueChange","focusedChange"],["tuiTextfield","","type","email"],["tuiLabel","",1,"tui-space_top-4",6,"label"],[3,"value","iconCleaner","valueChange","focusedChange"],["iconCleaner",""],["src","tuiIconDraft"]],template:function(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"label",1),s["\u0275\u0275i18nAttributes"](2,F),s["\u0275\u0275elementStart"](3,"tui-primitive-textfield",2),s["\u0275\u0275listener"]("valueChange",(function(e){return t.onValueChange(e)}))("focusedChange",(function(e){return t.onFocused(e)})),s["\u0275\u0275text"](4," Type an email "),s["\u0275\u0275element"](5,"input",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"label",4),s["\u0275\u0275i18nAttributes"](7,H),s["\u0275\u0275elementStart"](8,"tui-primitive-textfield",5),s["\u0275\u0275listener"]("valueChange",(function(e){return t.onValueChange(e)}))("focusedChange",(function(e){return t.onFocused(e)})),s["\u0275\u0275text"](9," Type an email "),s["\u0275\u0275element"](10,"input",3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](11,$,1,0,"ng-template",null,6,s["\u0275\u0275templateRefExtractor"])),2&e){var n=s["\u0275\u0275reference"](12);s["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("tuiTextfieldCleaner",!0),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("value",t.value),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("value",t.value)("iconCleaner",n)}},directives:[r["\u0275angular_packages_forms_forms_y"],r.NgControlStatusGroup,r.NgForm,z.b,R.b,N.b,D.a,V.a,w.a,S.a,j.a],encapsulation:2,changeDetection:0}),G),B=n("EPR0"),U=n("CDxv"),W=n("RKv1"),q=n("kr92"),J=n("KzL3"),X=n("pQcr"),Z=n("WKKg"),Y=n("RlDx"),ee=n("yHor"),te=n("zGJC"),ne=n("W/bl"),ie=n("D3Xw"),oe=n("FSyC"),ae=n("cweO"),re=n("u8jZ"),le=["interactiveContent"];K=$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f4b2b0c0a7bb462722d699b9dc746c409b0ea9cb7\u241f7220885685317963345: PrimitiveTextfield is a flexible string input that can be used as a base for complex inputs. Use it as a basis for other components. ",":START_TAG_STRONG:Does not work with Angular forms",":CLOSE_TAG_STRONG:"])),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var ce,ue,de,pe,se,me,fe,be,ye,ge,ve,he,xe=["heading",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd\u241f5960739619447908905:sizes"])))],Ce=["heading",$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f24813b8a3e45f0b57136c18d003027262cfe2d1f\u241f8432562579042371182:Options"])))];function _e(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18nStart"](1,K),s["\u0275\u0275element"](2,"strong"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"tui-doc-example",2),s["\u0275\u0275i18nAttributes"](4,xe),s["\u0275\u0275elementStart"](5,"tui-notification",3),s["\u0275\u0275text"](6," Simplified version of "),s["\u0275\u0275elementStart"](7,"a",4),s["\u0275\u0275elementStart"](8,"code"),s["\u0275\u0275text"](9,"InputPassword"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"tui-primitive-textfield-example-1",5),s["\u0275\u0275listener"]("ngModelChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().password=e})),s["\u0275\u0275text"](11," Type a password "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"tui-doc-example",6),s["\u0275\u0275i18nAttributes"](13,Ce),s["\u0275\u0275elementStart"](14,"tui-notification",3),s["\u0275\u0275text"](15," If you need to set some attributes or listen to events on native "),s["\u0275\u0275elementStart"](16,"code"),s["\u0275\u0275text"](17,"input"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](18," , you can put it inside with "),s["\u0275\u0275elementStart"](19,"code"),s["\u0275\u0275text"](20,"Textfield"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275text"](21," directive as shown below "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](22,"tui-primitive-textfield-example-2",7),s["\u0275\u0275listener"]("ngModelChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().example2Value=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){var i=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("content",i.example1),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("ngModel",i.password),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("content",i.example2),s["\u0275\u0275advance"](10),s["\u0275\u0275property"]("ngModel",i.example2Value)}}function Te(e,t){if(1&e&&(s["\u0275\u0275element"](0,"tui-avatar",21),s["\u0275\u0275text"](1)),2&e){var n=t.$implicit;s["\u0275\u0275property"]("text",n),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",n," ")}}function Oe(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-svg",22),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"](2).onClick()})),s["\u0275\u0275elementEnd"]()}}function Pe(e,t){1&e&&s["\u0275\u0275i18n"](0,ce)}function Ve(e,t){1&e&&s["\u0275\u0275i18n"](0,ue)}function we(e,t){1&e&&s["\u0275\u0275i18n"](0,de)}function Se(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,pe),s["\u0275\u0275elementStart"](1,"a",23),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"]())}function je(e,t){1&e&&s["\u0275\u0275i18n"](0,se)}function Ee(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,me),s["\u0275\u0275elementStart"](1,"a",24),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"]())}function Ie(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,fe),s["\u0275\u0275elementStart"](1,"a",24),s["\u0275\u0275element"](2,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"]())}function Me(e,t){1&e&&s["\u0275\u0275i18n"](0,be)}function Le(e,t){1&e&&s["\u0275\u0275i18n"](0,ye)}function ke(e,t){1&e&&s["\u0275\u0275i18n"](0,ge)}function Ae(e,t){if(1&e){var n=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tui-doc-demo"),s["\u0275\u0275elementStart"](1,"tui-primitive-textfield",8),s["\u0275\u0275listener"]("valueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().value=e})),s["\u0275\u0275text"](2," Component label "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](3,Te,2,2,"ng-template",null,9,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275template"](5,Oe,1,0,"ng-template",null,10,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementStart"](7,"tui-doc-documentation"),s["\u0275\u0275template"](8,Pe,1,0,"ng-template",11),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().disabled=e})),s["\u0275\u0275template"](9,Ve,1,0,"ng-template",12),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().editable=e})),s["\u0275\u0275template"](10,we,1,0,"ng-template",13),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().filler=e})),s["\u0275\u0275template"](11,Se,3,0,"ng-template",14),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().selectedIcon=e})),s["\u0275\u0275template"](12,je,1,0,"ng-template",15),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().iconAlign=e})),s["\u0275\u0275template"](13,Ee,3,0,"ng-template",16),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().prefix=e})),s["\u0275\u0275template"](14,Ie,3,0,"ng-template",17),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().postfix=e})),s["\u0275\u0275template"](15,Me,1,0,"ng-template",18),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().readOnly=e})),s["\u0275\u0275template"](16,Le,1,0,"ng-template",19),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().invalid=e})),s["\u0275\u0275template"](17,ke,1,0,"ng-template",20),s["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return s["\u0275\u0275restoreView"](n),s["\u0275\u0275nextContext"]().value=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](18,"hint-controller-documentation"),s["\u0275\u0275element"](19,"textfield-controller-documentation"),s["\u0275\u0275element"](20,"inherited-documentation")}if(2&e){var i=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("focusable",i.focusable)("tuiTextfieldAutocomplete",i.autocomplete)("tuiTextfieldCleaner",i.cleaner)("tuiTextfieldCustomContent",i.customContent)("tuiTextfieldInputMode",i.inputMode)("tuiTextfieldMaxLength",i.maxLength)("tuiTextfieldExampleText",i.exampleText)("tuiTextfieldLabelOutside",i.labelOutside)("tuiTextfieldSize",i.size)("tuiTextfieldType",i.type)("pseudoPressed",i.pseudoPressed)("pseudoFocused",i.pseudoFocused)("pseudoHovered",i.pseudoHovered)("disabled",i.disabled)("editable",i.editable)("filler",i.filler)("iconAlign",i.iconAlign)("iconContent",i.iconContent)("readOnly",i.readOnly)("prefix",i.prefix)("postfix",i.postfix)("invalid",i.invalid)("tuiHintContent",i.hintContent)("tuiHintDirection",i.hintDirection)("tuiHintMode",i.hintMode)("value",i.value),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("documentationPropertyValue",i.disabled),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",i.editable),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",i.filler),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",i.iconVariants)("documentationPropertyValue",i.selectedIcon),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValues",i.iconAlignVariants)("documentationPropertyValue",i.iconAlign),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",i.prefix),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",i.postfix),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",i.readOnly),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",i.invalid),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("documentationPropertyValue",i.value)}}function ze(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",25),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,ve),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",26),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"li"),s["\u0275\u0275elementStart"](7,"p"),s["\u0275\u0275i18n"](8,he),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](9,"tui-doc-code",27),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.exampleImportModule),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}ce=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241f5195232cc6d6804f2b83c984b763d494b95728e8\u241f4703780784365037889: Disabled state "]))),ue=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241f1d3f6ac88d0dbe1d1ac7b30b1eb00e4aebbf2060\u241f873865768272363635: Native input allows inputing "]))),de=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241ff29074f0478b44322b1dc718b7bb03de7fe2b4d8\u241f4151292360106248726: Gray background text as a hint (e.g. HH:MM:SS for time) "]))),pe=$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f70357bf735b0a536fe7bb080d9b9046e8e9bacde\u241f2243205173135870760: Icon content. If content is a string, it is used as stringified svg or a name of icon registered in ",":START_LINK:",":START_TAG_CODE:SvgService",":CLOSE_TAG_CODE:",":CLOSE_LINK:"])),"\ufffd#1\ufffd","\ufffd#2\ufffd","\ufffd/#2\ufffd","\ufffd/#1\ufffd"),se=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241fad56fc4e1a9650890c372aa93c2c426f8467baab\u241f561630626973828969: Icon align "]))),me=$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241f33c14f705b72544c3881517af4881b87d397d8f6\u241f4259878861045276785: Uneditable text before value. For example, currency symbol in ",":START_LINK:",":START_TAG_CODE:InputNumber",":CLOSE_TAG_CODE:",":CLOSE_LINK: . "])),"\ufffd#1\ufffd","\ufffd#2\ufffd","\ufffd/#2\ufffd","\ufffd/#1\ufffd"),fe=$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241fd24fc719133afa770a5d50c273a967e6b447bda8\u241f1195719053204982784: Uneditable text after value. For example, currency symbol in ",":START_LINK:",":START_TAG_CODE:InputNumber",":CLOSE_TAG_CODE:",":CLOSE_LINK: . "])),"\ufffd#1\ufffd","\ufffd#2\ufffd","\ufffd/#2\ufffd","\ufffd/#1\ufffd"),be=$localize(_templateObject13||(_templateObject13=_taggedTemplateLiteral([":\u241f88dd77c990e5f7fb83a3e3e006bb58f82260ca7e\u241f2592823355336045770: Component is read only "]))),ye=$localize(_templateObject14||(_templateObject14=_taggedTemplateLiteral([":\u241f28900c6ae3d4c1ba49407b4808673d3273f10d95\u241f6963908824346094281: Invalid state "]))),ge=$localize(_templateObject15||(_templateObject15=_taggedTemplateLiteral([":\u241f616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3\u241f206010917694362071: Value "]))),ve=$localize(_templateObject16||(_templateObject16=_taggedTemplateLiteral([":\u241fd9976023c60bcfadd11e6b545cc66aeee8d631af\u241f6346211509068135211: Import ",":START_TAG_CODE:TuiPrimitiveTextfieldModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),he=$localize(_templateObject17||(_templateObject17=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var Re,Ne,De=((Re=function(e){_inherits(i,e);var t=_createSuper(i);function i(){var e;return _classCallCheck(this,i),(e=t.apply(this,arguments)).interactiveIcon="",e.example1={TypeScript:n.e(366).then(n.bind(null,"W+6H")),HTML:n.e(364).then(n.bind(null,"UzLJ")),LESS:n.e(365).then(n.bind(null,"qFkp"))},e.example2={TypeScript:n.e(368).then(n.bind(null,"vF5f")),HTML:n.e(367).then(n.bind(null,"zU60"))},e.exampleImportModule=n.e(369).then(n.bind(null,"FW0/")),e.exampleInsertTemplate=n.e(370).then(n.bind(null,"S7OX")),e.themes=["Taiga UI","Bootstrap","Material"],e.theme=e.themes[0],e.iconVariants=["","tuiIconSearch","Interactive content"],e.selectedIcon=e.iconVariants[0],e.iconAlignVariants=["left","right"],e.iconAlign=e.iconAlignVariants[1],e.typeVariants=["text","email","password","tel","url"],e.type="text",e.cleaner=!1,e.editable=!0,e.filler="",e.prefix="",e.postfix="",e.maxLengthVariants=[10],e.maxLength=null,e.autocompleteVariants=["off","cc-name","cc-number","cc-exp-month","cc-exp-year","cc-type","given-name","additional-name","family-name","username","email","street-address","postal-code","country-name"],e.autocomplete=null,e.inputModeVariants=["text","numeric"],e.inputMode=e.inputModeVariants[0],e.customContentVariants=["Bell"],e.customContentSelected=null,e.password="",e.example2Value="mail@example.com",e.value="",e.exampleText="",e.disabled=!1,e.readOnly=!1,e.labelOutside=!1,e.sizeVariants=["s","m","l"],e.size=e.sizeVariants[2],e.hintContentVariants=["Ivan Ivanov"],e.hintDirectionVariants=["left","right","bottom-left","bottom-right","top-left","top-right"],e.hintModeVariants=["error","onDark"],e.invalid=!1,e.hintContent=null,e.hintDirection=e.hintDirectionVariants[2],e.hintMode=null,e}return _createClass(i,[{key:"customContent",get:function(){return null!==this.customContentSelected?'<svg xmlns="http://www.w3.org/2000/svg"\nwidth="24px"\nheight="24px"\nviewBox="0 0 24 24">\n<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n</svg>':null}},{key:"iconContent",get:function(){return""===this.selectedIcon?"":this.interactiveIcon&&"tuiIconSearch"!==this.selectedIcon?this.interactiveIcon:"tuiIconSearch"}},{key:"isBootstrap",get:function(){return this.theme===this.themes[1]}},{key:"isMaterial",get:function(){return this.theme===this.themes[2]}},{key:"placeholder",get:function(){return this.isBootstrap?"Type a value":"Theming sample"}},{key:"customizationSize",get:function(){return this.isBootstrap?"s":"l"}},{key:"onClick",value:function(){console.info("Interactive icon clicked")}}]),i}(h.a)).\u0275fac=function(e){return Fe(e||Re)},Re.\u0275cmp=s["\u0275\u0275defineComponent"]({type:Re,selectors:[["example-tui-primitive-textfield"]],viewQuery:function(e,t){var n;1&e&&s["\u0275\u0275viewQuery"](le,!0),2&e&&s["\u0275\u0275queryRefresh"](n=s["\u0275\u0275loadQuery"]())&&(t.interactiveIcon=n.first)},features:[s["\u0275\u0275ProvidersFeature"]([{provide:v.a,useExisting:Object(s.forwardRef)((function(){return Re}))}]),s["\u0275\u0275InheritDefinitionFeature"]],decls:4,vars:0,consts:[["header","PrimitiveTextfield","package","CORE","type","components"],["pageTab",""],["id","example-size",3,"content",6,"heading"],[1,"tui-space_bottom-4","b-form"],["tuiLink","","routerLink","/components/input-password"],[1,"b-form",3,"ngModel","ngModelChange"],["id","options",3,"content",6,"heading"],[3,"ngModel","ngModelChange"],[3,"focusable","tuiTextfieldAutocomplete","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldInputMode","tuiTextfieldMaxLength","tuiTextfieldExampleText","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiTextfieldType","pseudoPressed","pseudoFocused","pseudoHovered","disabled","editable","filler","iconAlign","iconContent","readOnly","prefix","postfix","invalid","tuiHintContent","tuiHintDirection","tuiHintMode","value","valueChange"],["template",""],["interactiveContent",""],["documentationPropertyName","disabled","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","editable","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","filler","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","iconContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","iconAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","readOnly","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","invalid","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input-output","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["size","xs",1,"avatar",3,"text"],["src","tuiIconCalendarLarge",1,"icon-button",3,"click"],["tuiLink","","routerLink","/services/svg-service"],["tuiLink","","routerLink","/components/input-number"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,_e,23,4,"ng-template",1),s["\u0275\u0275template"](2,Ae,21,38,"ng-template",1),s["\u0275\u0275template"](3,ze,10,2,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[x.a,C.a,_.a,T.a,O.a,l.e,A,r.NgControlStatus,r.NgModel,Q,B.a,V.a,w.a,U.b,N.b,W.b,q.b,J.b,X.b,R.b,z.b,Z.b,Y.a,ee.a,te.a,ne.a,ie.a,oe.a,ae.a,j.a,re.a],styles:["[_nghost-%COMP%]{display:block}.icon-button[_ngcontent-%COMP%]{position:relative}.avatar[_ngcontent-%COMP%]{margin-right:.5rem}.label[_ngcontent-%COMP%]{width:22.5rem}.input[_ngcontent-%COMP%]{margin-top:.25rem}"],changeDetection:0}),Re),Fe=s["\u0275\u0275getInheritedFactory"](De),He=((Ne=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=s["\u0275\u0275defineNgModule"]({type:Ne}),Ne.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Ne)},imports:[[a.c,r.FormsModule,r.ReactiveFormsModule,y.a,b.a,g.a,u.TuiPrimitiveTextfieldModule,u.TuiTextfieldControllerModule,u.TuiNotificationModule,u.TuiHintControllerModule,d.TuiAvatarModule,u.TuiLinkModule,u.TuiSvgModule,u.TuiButtonModule,p.c,u.TuiHintModule,d.TuiRadioListModule,m,u.TuiLabelModule,f,c.i,l.f.forChild(Object(c.p)(De))]]}),Ne)}}]);