import {Directive, HostListener, Inject} from '@angular/core';
import {tuiGetActualTarget, tuiIsElement} from '@taiga-ui/cdk';
import {shouldCall} from '@tinkoff/ng-event-plugins';

import {TuiTileComponent} from './tile.component';

function isInteracting(this: TuiTileHandleDirective, x = NaN): boolean {
    return !Number.isNaN(x) || !Number.isNaN(this['x']);
}

@Directive({
    selector: '[tuiTileHandle]',
    host: {
        '[style.touchAction]': '"none"',
    },
})
export class TuiTileHandleDirective {
    private x = NaN;
    private y = NaN;

    constructor(@Inject(TuiTileComponent) private readonly tile: TuiTileComponent) {}

    @HostListener('pointerdown.silent.prevent', ['$event'])
    onStart(event: PointerEvent): void {
        const target = tuiGetActualTarget(event);
        const {x, y, pointerId} = event;

        if (tuiIsElement(target)) {
            target.releasePointerCapture(pointerId);
        }

        this.onPointer(x, y);
    }

    @shouldCall(isInteracting)
    @HostListener('document:pointerup.silent')
    onPointer(x = NaN, y = NaN): void {
        const {left, top} = this.tile.element.getBoundingClientRect();
        this.x = x - left;
        this.y = y - top;
        this.tile.onDrag(!Number.isNaN(x));
        this.tile.offset$.next([NaN, NaN]);
    }

    @HostListener('document:pointermove.silent', ['$event.x', '$event.y'])
    onMove(x: number, y: number): void {
        if (!Number.isNaN(this.x)) {
            this.tile.offset$.next([x - this.x, y - this.y]);
        }
    }
}
