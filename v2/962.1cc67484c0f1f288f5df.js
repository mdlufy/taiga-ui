(window.webpackJsonp=window.webpackJsonp||[]).push([[962],{"KG+l":function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: `tui-input-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputExample2 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(`mail@mail.ru`),\n    });\n}\n"}}]);