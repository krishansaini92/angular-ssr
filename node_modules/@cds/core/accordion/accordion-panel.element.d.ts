import { LitElement } from 'lit-element';
import { EventEmitter } from '@cds/core/internal';
/**
 * Web component accordion panel to be used inside an accordion
 *
 * ```typescript
 * import '@cds/core/accordion/register.js';
 * ```
 *
 * ```html
 * <cds-accordion>
 *   <cds-accordion-panel expanded>
 *     <cds-accordion-header>Item 1</cds-accordion-header>
 *     <cds-accordion-content>Content 1</cds-accordion-content>
 *   </cds-accordion-panel>
 *   <cds-accordion-panel>
 *     <cds-accordion-header>Item 2</cds-accordion-header>
 *     <cds-accordion-content>Content 2</cds-accordion-content>
 *   </cds-accordion-panel>
 *   <cds-accordion-panel disabled>
 *     <cds-accordion-header>Item 3</cds-accordion-header>
 *     <cds-accordion-content>Content 3</cds-accordion-content>
 *   </cds-accordion-panel>
 * </cds-accordion>
 * ```
 *
 * @beta
 * @element cds-accordion-panel
 * @slot
 * @slot cds-accordion-header
 * @slot cds-accordion-content
 * @event expandedChange - notify when the user has clicked the panel header
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 */
export declare class CdsAccordionPanel extends LitElement {
    disabled: boolean;
    expanded: boolean;
    protected expandedChange: EventEmitter<boolean>;
    private toggle;
    render(): import("lit-element").TemplateResult;
    static get styles(): import("lit-element").CSSResult[];
}
