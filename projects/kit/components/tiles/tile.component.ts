import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    OnDestroy,
} from '@angular/core';
import {MutationObserverService} from '@ng-web-apis/mutation-observer';
import {tuiArrayShallowEquals, TuiResizeService} from '@taiga-ui/cdk';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, startWith} from 'rxjs/operators';

import {TuiTilesComponent} from './tiles.component';

@Component({
    selector: 'tui-tile',
    templateUrl: './tile.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTileComponent implements OnDestroy {
    @Input()
    width = 1;

    @Input()
    height = 1;

    @HostBinding('class._dragged')
    dragged = false;

    readonly offset$ = new BehaviorSubject<[number, number]>([NaN, NaN]);

    readonly position$ = combineLatest([
        this.offset$.pipe(distinctUntilChanged(tuiArrayShallowEquals)),
        this.resize$.pipe(startWith(null)),
        this.mutation$.pipe(startWith(null)),
        this.tiles.order$.pipe(debounceTime(0)),
    ]);

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiTilesComponent) private readonly tiles: TuiTilesComponent,
        @Inject(TuiResizeService) private readonly resize$: Observable<unknown>,
        @Inject(MutationObserverService) private readonly mutation$: Observable<unknown>,
    ) {}

    @HostBinding('style.gridColumn')
    get column(): string {
        return `span var(--tui-width, ${this.width})`;
    }

    @HostBinding('style.gridRow')
    get row(): string {
        return `span var(--tui-height, ${this.height})`;
    }

    get element(): HTMLElement {
        return this.el.nativeElement;
    }

    @HostListener('pointerenter')
    onEnter(): void {
        this.tiles.rearrange(this.element);
    }

    onDrag(dragged: boolean): void {
        this.dragged = this.dragged || dragged;
        this.tiles.element = dragged ? this.element : null;
    }

    onTransitionEnd(): void {
        this.dragged = false;
    }

    getRect([left, top]: [number, number]): ClientRect {
        return {
            top: Number.isNaN(top) ? this.element.offsetTop : top,
            left: Number.isNaN(left) ? this.element.offsetLeft : left,
            width: this.element.clientWidth,
            height: this.element.clientHeight,
            right: NaN,
            bottom: NaN,
        };
    }

    ngOnDestroy(): void {
        if (this.tiles.element === this.element) {
            this.tiles.element = null;
        }
    }
}
