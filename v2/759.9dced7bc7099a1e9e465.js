(window.webpackJsonp=window.webpackJsonp||[]).push([[759],{JexF:function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-count-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputCountExample2 {\n    testForm = new FormGroup({\n        testValue1: new FormControl(10, Validators.required),\n        testValue2: new FormControl(10, Validators.required),\n    });\n}\n"}}]);