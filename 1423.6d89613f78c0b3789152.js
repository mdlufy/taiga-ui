(window.webpackJsonp=window.webpackJsonp||[]).push([[1423],{Qhn5:function(n,t,e){"use strict";e.r(t),t.default='<div\n    i18n\n    class="description"\n>\n    To highlight extra characters:\n    <ul class="steps">\n        <li>\n            Set\n            <code>tuiTextfieldMaxLength</code>\n        </li>\n        <li class="steps_optional">\n            (Optional) Dont forget to set form validator (for example,\n            <code>Validators.maxLength</code>\n            ) if you want to make field invalid on exceeding the characters limit\n        </li>\n    </ul>\n</div>\n\n<form\n    class="form tui-row"\n    [formGroup]="testForm"\n>\n    <label\n        tuiLabel\n        label="Write a wise thought"\n        class="tui-col_md-6"\n    >\n        <tui-text-area\n            formControlName="testValue1"\n            tuiHintContent="it\'s just a joke"\n            [expandable]="true"\n            [tuiTextfieldMaxLength]="maxLength"\n            [tuiTextfieldLabelOutside]="true"\n        >\n            Type it\n        </tui-text-area>\n        <tui-error\n            formControlName="testValue1"\n            [error]="[] | tuiFieldError | async"\n        ></tui-error>\n    </label>\n</form>\n'}}]);