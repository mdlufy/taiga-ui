(window.webpackJsonp=window.webpackJsonp||[]).push([[912],{"4lgc":function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiContextWithImplicit} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-input-slider-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputSliderExample5 {\n    readonly max = 100;\n    readonly min = 0;\n\n    readonly controlWithMinLabel = new FormControl(this.min);\n    readonly controlWithMaxLabel = new FormControl(this.max);\n\n    readonly customLabel = ({\n        $implicit,\n    }: TuiContextWithImplicit<number>): string | number => {\n        switch ($implicit) {\n            case this.max:\n                return `Digits can't describe my love!`;\n            case this.min:\n                return `Just a label for min value`;\n            case (this.max - this.min) / 2:\n                return `Middle`;\n            default:\n                return $implicit;\n        }\n    };\n}\n"}}]);