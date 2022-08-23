(window.webpackJsonp=window.webpackJsonp||[]).push([[599],{beTf:function(e,n,o){"use strict";o.r(n),n.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {TUI_ARROW} from '@taiga-ui/kit';\n\n@Component({\n    selector: `tui-data-list-example-6`,\n    templateUrl: `./index.html`,\n    styles: [\n        `\n            .option {\n                white-space: normal;\n            }\n        `,\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDataListExample6 {\n    open = false;\n\n    readonly arrow = TUI_ARROW;\n\n    readonly groups = [\n        {\n            label: `Advantages of Taiga UI`,\n            items: [\n                `\ud83e\udde9 Modular and fully-treeshakable. We harnessed the power of Secondary Entry Points mechanism. You can import even just one entity from our library and be sure that there is no redundant code in your bundle.`,\n                `\ud83e\uddd9 Agnostic. Our components are very flexible and are ready for any use case. But we take care of basic UX aspects to let you focus on your project features.`,\n                `\ud83e\udd8b Customizable. We use CSS custom properties for all our styling and provide easy methods to customize all UI components.`,\n                `\ud83d\udee0 Well engineered. We are not afraid to use DI to the max. All our components use OnPush, and the whole project is developed with strict TypeScript mode.`,\n                `\ud83d\udce6 It is big! We have 130+ components, 100+ directives, dozens of tokens, utils and tools. And it is not over yet.`,\n                `\ud83c\udfd7 Maintained! The library started as an internal product in our company. It is used by 50+ projects in production now and it is here to stay.`,\n            ],\n        },\n        {\n            label: `Well-engineered Taiga UI components`,\n            items: [`Calendar`, `Dialog`, `ComboBox`, `Select`],\n        },\n    ];\n\n    constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}\n}\n"}}]);