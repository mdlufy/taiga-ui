import type {TuiTextMaskList} from './text-mask-list';
import type {TuiTextMaskListHandler} from './text-mask-list-handler';
import type {TuiTextMaskPipeHandler} from './text-mask-pipe-handler';

/**
 * @deprecated Use {@link https://github.com/taiga-family/maskito Maskito}
 * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md}
 */
export interface TuiTextMaskOptions {
    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask}
     */
    mask: TuiTextMaskList | TuiTextMaskListHandler | false;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#guide}
     */
    guide?: boolean;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#placeholderchar}
     */
    placeholderChar?: string;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#pipe}
     */
    pipe?: TuiTextMaskPipeHandler;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#keepcharpositions}
     */
    keepCharPositions?: boolean;

    /**
     * {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#showmask}
     */
    showMask?: boolean;
}
