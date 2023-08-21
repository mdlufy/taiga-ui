import {NgModule} from '@angular/core';

import {TuiTileComponent} from './tile.component';
import {TuiTileDirective} from './tile.directive';
import {TuiTileHandleDirective} from './tile-handle.directive';
import {TuiTilesComponent} from './tiles.component';

@NgModule({
    declarations: [
        TuiTilesComponent,
        TuiTileComponent,
        TuiTileHandleDirective,
        TuiTileDirective,
    ],
    exports: [TuiTilesComponent, TuiTileComponent, TuiTileHandleDirective],
})
export class TuiTilesModule {}
