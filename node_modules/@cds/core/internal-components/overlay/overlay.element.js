/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { baseStyles, createId, CdsBaseFocusTrap, event, FocusTrapTracker, internalProperty, onKey, property, } from '@cds/core/internal';
import { html, query } from 'lit-element';
import { styles } from './overlay.element.css.js';
export function isNestedOverlay(myId, overlayPrefix, trapIds) {
    const overlayIds = trapIds.filter(id => id.indexOf(overlayPrefix) > -1);
    return overlayIds.indexOf(myId) > 0; // id is present and not the first one...
}
export function overlayIsActive(overlayId, focusTrapService = FocusTrapTracker) {
    return focusTrapService.getCurrentTrapId() === overlayId;
}
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
export class CdsInternalOverlay extends CdsBaseFocusTrap {
    constructor() {
        super();
        this.ariaModal = 'true';
        this.role = 'dialog';
        this.overlayIdPrefix = '_overlay-';
        this.isLayered = false;
        this.fireEventOnBackdropClick = () => {
            if (overlayIsActive(this.focusTrapId)) {
                this.closeOverlay('backdrop-click');
            }
        };
        this.fireEventOnEscape = (e) => {
            if (overlayIsActive(this.focusTrapId)) {
                onKey('escape', e, () => {
                    this.closeOverlay('escape-keypress');
                });
            }
        };
        // override focus-trap base id so we know this is an overlay
        this.focusTrapId = createId(this.overlayIdPrefix);
    }
    // renderRoot needs delegatesFocus so that focus can cross the shadowDOM
    // inside an element with aria-modal set to true
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    firstUpdated(props) {
        super.firstUpdated(props);
        this.backdrop.addEventListener('click', this.fireEventOnBackdropClick);
    }
    updated(props) {
        super.updated(props);
        const oldLayered = this.isLayered;
        const isNested = isNestedOverlay(this.focusTrapId, this.overlayIdPrefix, FocusTrapTracker.getTrapIds());
        const newLayered = this.focusTrap.active && isNested;
        if (oldLayered !== newLayered) {
            this.isLayered = newLayered;
            this.requestUpdate('isLayered', oldLayered);
        }
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('keydown', this.fireEventOnEscape);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('keydown', this.fireEventOnEscape);
        this.backdrop.removeEventListener('click', this.fireEventOnBackdropClick);
    }
    closeOverlay(trigger = 'custom') {
        this.closeChange.emit(trigger);
    }
    get backdropTemplate() {
        return html `<div
      class="${this.isLayered ? 'overlay-backdrop layered' : 'overlay-backdrop'}"
      aria-hidden="true"
    ></div>`;
    }
    render() {
        return html `
      ${this.backdropTemplate}
      <div class="private-host" tabindex="-1" aria-modal="true" role="dialog">
        <slot></slot>
      </div>
    `;
    }
    get overlayIsActive() {
        return FocusTrapTracker.getCurrentTrapId() === this.focusTrapId;
    }
    static get styles() {
        return [baseStyles, styles];
    }
}
__decorate([
    property({ type: String })
], CdsInternalOverlay.prototype, "ariaModal", void 0);
__decorate([
    property({ type: String })
], CdsInternalOverlay.prototype, "role", void 0);
__decorate([
    event()
], CdsInternalOverlay.prototype, "closeChange", void 0);
__decorate([
    internalProperty({ type: Boolean })
], CdsInternalOverlay.prototype, "isLayered", void 0);
__decorate([
    query('.overlay-backdrop')
], CdsInternalOverlay.prototype, "backdrop", void 0);
//# sourceMappingURL=overlay.element.js.map