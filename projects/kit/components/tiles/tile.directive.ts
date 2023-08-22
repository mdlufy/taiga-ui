import {Directive, ElementRef, forwardRef, Inject, Self} from '@angular/core';
import {TuiDestroyService, tuiPx} from '@taiga-ui/cdk';
import {map, takeUntil, tap} from 'rxjs/operators';

import {TuiTileComponent} from './tile.component';

@Directive({
    selector: '[tuiTile]',
    providers: [TuiDestroyService],
})
export class TuiTileDirective {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(forwardRef(() => TuiTileComponent)) tile: TuiTileComponent,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        const {style} = nativeElement;

        tile.position$
            .pipe(
                tap(([[left]]) => {
                    if (!Number.isNaN(left)) {
                        style.setProperty('position', 'fixed');

                        return;
                    }

                    const rect = nativeElement.getBoundingClientRect();
                    const host = tile.element.getBoundingClientRect();

                    style.removeProperty('position');
                    style.top = tuiPx(rect.top - host.top + tile.element.offsetTop);
                    style.left = tuiPx(rect.left - host.left + tile.element.offsetLeft);
                }),
                map(([offset]) => tile.getRect(offset)),
                takeUntil(destroy$),
            )
            .subscribe(({top, left, width, height}) => {
                style.top = tuiPx(top);
                style.left = tuiPx(left);
                style.width = tuiPx(width);
                style.height = tuiPx(height);
            });
    }
}
