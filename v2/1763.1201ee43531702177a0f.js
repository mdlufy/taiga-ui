(window.webpackJsonp=window.webpackJsonp||[]).push([[1763],{lavb:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\nexport interface Item {\n    readonly name: string;\n    readonly price: number;\n}\n\n@Component({\n    selector: `tui-filter-example1`,\n    templateUrl: `./template.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample1 {\n    readonly items: readonly Item[] = [\n        {\n            name: `Sword`,\n            price: 1000,\n        },\n        {\n            name: `Axe`,\n            price: 100,\n        },\n        {\n            name: `Spear`,\n            price: 500,\n        },\n    ];\n\n    readonly matcher = (item: Item, search: number): boolean => item.price > search;\n}\n"}}]);