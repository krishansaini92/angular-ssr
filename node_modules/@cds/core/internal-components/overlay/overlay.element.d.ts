import { CdsBaseFocusTrap, EventEmitter, FocusTrapTracker } from '@cds/core/internal';
export declare function isNestedOverlay(myId: string, overlayPrefix: string, trapIds: string[]): boolean;
export declare function overlayIsActive(overlayId: string, focusTrapService?: typeof FocusTrapTracker): boolean;
declare type CloseChangeSources = 'backdrop-click' | 'escape-keypress' | 'close-button-click' | 'custom';
/**
 *
 * ```typescript
 * import '@cds/core/internal-components/overlay/register.js';
 * ```
 *
 * ```html
 * <cds-internal-overlay>
 *  <section cds-layout="vertical align:horizontal-stretch">
 *    <div cds-layout="vertical pad:md gap:md">
 *      <h2 cds-text="display">A Title</h2>
 *      <div>
 *        <p cds-text="body">
 *          Content inside a generic overlay.
 *        </p>
 *      </div>
 *    </div>
 *  </section>
 * </cds-internal-overlay>
 * ```
 *
 * @beta
 * @element cds-internal-overlay
 * @slot - Content slot for the content inside the overlay's panel
 * @event closeChange - Notify user when close event has occurred
 * @cssprop --backdrop-background
 * @cssprop --layered-backdrop-background
 */
export declare class CdsInternalOverlay extends CdsBaseFocusTrap {
    ariaModal: string;
    role: string;
    protected createRenderRoot(): Element | ShadowRoot;
    private overlayIdPrefix;
    protected closeChange: EventEmitter<CloseChangeSources>;
    protected isLayered: boolean;
    protected backdrop: HTMLElement;
    firstUpdated(props: Map<string, any>): void;
    updated(props: Map<string, any>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    constructor();
    closeOverlay(trigger?: CloseChangeSources): void;
    protected get backdropTemplate(): import("lit-element").TemplateResult;
    protected render(): import("lit-element").TemplateResult;
    get overlayIsActive(): boolean;
    protected fireEventOnBackdropClick: () => void;
    protected fireEventOnEscape: (e: KeyboardEvent) => void;
    static get styles(): import("lit-element").CSSResult[];
}
export {};
