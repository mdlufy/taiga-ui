"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[73525],{73525:o=>{o.exports="import {NgModule} from '@angular/core';\nimport {RouterModule} from '@angular/router';\nimport {TuiButtonModule} from '@taiga-ui/core';\nimport {TuiRoutableDialogModule} from '@taiga-ui/kit';\n\nimport {TuiPage1ExampleComponent} from './page-1.component';\n\n@NgModule({\n    imports: [\n        // step 2: add TuiRoutableDialogModule\n        TuiRoutableDialogModule,\n        TuiButtonModule,\n        RouterModule.forChild([\n            {\n                path: ``,\n                component: TuiPage1ExampleComponent,\n                children: [\n                    // step 3: add lazy loading for component module as usual\n                    {\n                        path: `path/to/dialog`,\n                        loadChildren: async () =>\n                            (await import(`./dialog-content/dialog-content.module`))\n                                .DialogContentModule,\n                    },\n                ],\n            },\n        ]),\n    ],\n    declarations: [TuiPage1ExampleComponent],\n    exports: [TuiPage1ExampleComponent],\n})\nexport class TuiPage1ExampleModule {}\n"}}]);