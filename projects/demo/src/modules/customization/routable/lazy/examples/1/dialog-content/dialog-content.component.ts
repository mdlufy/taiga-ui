import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'tui-example-dialog-content',
    template: 'Lazy loaded dialog content',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentComponent {}
