"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[11124],{11124:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-editor-nested-groups-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            useValue: [\n                import(`@taiga-ui/addon-editor/extensions/starter-kit`).then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import(`@taiga-ui/addon-editor/extensions/group`).then(\n                    ({createGroupExtension}) =>\n                        createGroupExtension({\n                            draggable: false,\n\n                            // @note: you can override css styles with your own classes\n                            groupNodeClass: `group`,\n                            groupPointerNodeClass: ``, // anyway element doesn't exists if `draggable` is false\n                        }),\n                ),\n            ],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorNestedGroupsExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Group];\n\n    control = new FormControl(``);\n\n    constructor() {\n        this.control.patchValue(\n            `<p>This is a boring paragraph.</p><div data-type=\"group\"><p>And another paragraph.</p><div data-type=\"group\"><p>And a nested paragraph.</p><div data-type=\"group\"><p>But can we go deeper?</p></div></div></div><p>Let\u2019s finish with a boring paragraph.</p>`,\n        );\n    }\n}\n"}}]);