(window.webpackJsonp=window.webpackJsonp||[]).push([[1584],{GLJW:function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-context-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownContextExample3 {\n    testForm = new FormGroup({\n        reportText: new FormControl('Misspell HERE!'),\n    });\n\n    report(): void {\n        console.info(this.testForm.value);\n    }\n}\n"}}]);