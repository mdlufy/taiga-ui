(window.webpackJsonp=window.webpackJsonp||[]).push([[965],{bcsf:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-input-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample3 {\n    readonly testForm = new FormGroup({\n        testValue1: new FormControl(''),\n        testValue2: new FormControl(''),\n    });\n\n    readonly textMaskOptions1 = {\n        guide: false,\n        mask: [/\\d/, /\\d/, /\\d/, /\\d/, ' ', /\\d/, /\\d/, /\\d/, /\\d/, /\\d/, /\\d/],\n    };\n\n    readonly textMaskOptions2 = {\n        guide: false,\n        mask: [\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            '-',\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            '-',\n            /\\d/,\n            /\\d/,\n            /\\d/,\n            '-',\n            /\\d/,\n            /\\d/,\n        ],\n    };\n}\n"}}]);