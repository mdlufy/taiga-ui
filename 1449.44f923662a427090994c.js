(window.webpackJsonp=window.webpackJsonp||[]).push([[1449],{pWEX:function(n,e,o){"use strict";o.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-toolbar-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiToolbarExample1 {\n    open = false;\n\n    model = '<p>Lorem ipsum</p><p><b>Lorem ipsum</b></p>';\n\n    onActiveZone(active: boolean): void {\n        this.open = active;\n    }\n}\n"}}]);