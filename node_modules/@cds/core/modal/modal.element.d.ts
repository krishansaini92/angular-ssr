import { CdsInternalOverlay } from '@cds/core/internal-components/overlay';
/**
 * Web component modal.
 *
 * ```typescript
 * import '@cds/core/modal/register.js';
 * ```
 *
 * ```html
 * <cds-modal>
 *   <cds-modal-header>
 *      <h3 cds-text="title">My Modal</h3>
 *   </cds-modal-header>
 *   <cds-modal-content>
 *     <p>Lorem Ipsum</p>
 *   </cds-modal-content>
 *   <cds-modal-actions>
 *       <cds-button>Ok</cds-button>
 *   </cds-modal-actions>
 * </cds-modal>
 * ```
 *
 * @element cds-modal
 * @slot
 * @slot cds-modal-content
 * @slot cds-modal-header
 * @slot cds-modal-actions
 * @event closeChange - notify when the user has clicked the close button
 * @cssprop --backdrop-background - inherited from the internal overlay component
 * @cssprop --layered-backdrop-background - inherited from the internal overlay component
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 * @cssprop --background
 * @cssprop --box-shadow
 * @cssprop --width
 */
export declare class CdsModal extends CdsInternalOverlay {
    static get styles(): import("lit-element").CSSResult[];
    i18n: {
        closeButtonAriaLabel: string;
        contentStart: string;
        contentBox: string;
        contentEnd: string;
    };
    /** If false, the modal will not render the close button.  */
    closable: boolean;
    /** Sets the overall height and width of the modal and icon based on value */
    size: 'default' | 'sm' | 'lg' | 'xl';
    toggleCloseButton(): void;
    updated(props: Map<string, any>): void;
    render(): import("lit-element").TemplateResult;
}
