import { LitElement } from 'lit-element';
/**
 * Dividers are a convenient way to place lined dividers or "rules"
 * between blocks of content.
 *
 * ```typescript
 * import '@cds/core/divider/register.js';
 * ```
 *
 * ```html
 * <cds-divider></cds-divider>
 * ```
 * @beta
 * @element cds-divider
 * @cssprop --color
 * @cssprop --padding
 * @cssprop --size
 */
export declare class CdsDivider extends LitElement {
    orientation: 'horizontal' | 'vertical';
    render(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
}
