(window.webpackJsonp=window.webpackJsonp||[]).push([[773],{sVd8:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_DATE_TIME_VALUE_TRANSFORMER} from '@taiga-ui/kit';\n\nimport {ExampleDateTimeTransformer} from './value-transformer';\n\n@Component({\n    selector: `tui-input-date-time-example-4`,\n    templateUrl: `./index.html`,\n    providers: [\n        {\n            provide: TUI_DATE_TIME_VALUE_TRANSFORMER,\n            useClass: ExampleDateTimeTransformer,\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputDateTimeExample4 {\n    readonly control = new FormControl(`19.01.2022, 12:33`);\n}\n"}}]);