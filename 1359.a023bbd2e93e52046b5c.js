(window.webpackJsonp=window.webpackJsonp||[]).push([[1359],{Q1kv:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_VALIDATION_ERRORS} from '@taiga-ui/kit';\n\nconst LONG_TEXT_EXAMPLE = `\nIn Java: everything is an object.\nIn Clojure: everything is a list.\nIn JavaScript: everything is a terrible mistake.\n`;\n\nexport function maxLengthMessageFactory(context: {requiredLength: string}): string {\n    return `Maximum length \u2014 ${context.requiredLength}`;\n}\n\n@Component({\n    selector: 'tui-text-area-example-4',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n    styleUrls: ['./index.less'],\n    providers: [\n        {\n            provide: TUI_VALIDATION_ERRORS,\n            useValue: {\n                required: 'Enter this!',\n                maxlength: maxLengthMessageFactory,\n            },\n        },\n    ],\n})\nexport class TuiTextAreaExample4 {\n    readonly maxLength = 97;\n\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(LONG_TEXT_EXAMPLE.trim(), [\n            Validators.required,\n            Validators.maxLength(this.maxLength),\n        ]),\n    });\n\n    constructor() {\n        this.testForm.markAllAsTouched();\n    }\n}\n"}}]);