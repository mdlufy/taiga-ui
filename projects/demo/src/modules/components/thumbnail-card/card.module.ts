import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiThumbnailCardModule} from '@taiga-ui/addon-commerce';
import {TuiAddonDocModule, tuiGenerateRoutes} from '@taiga-ui/addon-doc';

import {ExampleTuiThumbnailCardComponent} from './card.component';
import {TuiThumbnailCardExample1} from './examples/1';
import {TuiThumbnailCardExample2} from './examples/2';
import {TuiThumbnailCardExample3} from './examples/3';

@NgModule({
    imports: [
        CommonModule,
        TuiThumbnailCardModule,
        RouterModule,
        TuiAddonDocModule,
        RouterModule.forChild(tuiGenerateRoutes(ExampleTuiThumbnailCardComponent)),
    ],
    declarations: [
        ExampleTuiThumbnailCardComponent,
        TuiThumbnailCardExample1,
        TuiThumbnailCardExample2,
        TuiThumbnailCardExample3,
    ],
    exports: [ExampleTuiThumbnailCardComponent],
})
export class ExampleTuiThumbnailCardModule {}
