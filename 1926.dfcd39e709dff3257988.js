(window.webpackJsonp=window.webpackJsonp||[]).push([[1926],{pQnN:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {clamp} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-math-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMathExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl(0),\n        min: new FormControl(5),\n        max: new FormControl(42),\n    });\n\n    get clamped(): number {\n        const {value, min, max} = this.parametersForm.value;\n\n        return clamp(value, min, max);\n    }\n}\n"}}]);