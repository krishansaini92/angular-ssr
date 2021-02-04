/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { html } from 'lit-element';
import { baseStyles, i18n, I18nService, property } from '@cds/core/internal';
import { CdsInternalOverlay } from '@cds/core/internal-components/overlay';
import { appendCloseButton, removeCloseButton } from '@cds/core/internal-components/close-button';
import { styles } from './modal.element.css.js';
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
export class CdsModal extends CdsInternalOverlay {
    constructor() {
        super(...arguments);
        this.i18n = I18nService.keys.modal;
        /** If false, the modal will not render the close button.  */
        this.closable = true;
    }
    static get styles() {
        return [baseStyles, ...super.styles, styles];
    }
    toggleCloseButton() {
        const closeButtonAttrs = [
            ['cds-layout', 'align:top'],
            ['slot', 'close-button'],
            ['aria-label', this.i18n.closeButtonAriaLabel],
            ['icon-size', '24'],
        ];
        if (this.closable) {
            appendCloseButton(this, closeButtonAttrs, () => this.closeOverlay('close-button-click'));
        }
        else {
            removeCloseButton(this);
        }
    }
    // TODO: Document what's going on here with the role dialog and aria modal true
    // Also document why we have to keep everything in the light Dom
    updated(props) {
        if (props.has('closable')) {
            this.toggleCloseButton();
        }
        super.update(props);
    }
    // modal-body requires a tab index so it can be scrolled
    render() {
        return html `
      ${this.backdropTemplate}
      <div cds-layout="horizontal p:md p@md:xl align:center">
        <div class="modal-dialog private-host" tabindex="-1">
          <div cds-layout="display:screen-reader-only">${this.i18n.contentStart}</div>
          <div class="modal-content" cds-layout="vertical gap:md gap@md:lg align:stretch">
            <div cds-layout="horizontal gap:md wrap:none align:vertical-center p-x:lg p-t:lg">
              <div>
                <slot name="modal-header"></slot>
              </div>
              <div cds-layout="align:right">
                <slot name="modal-header-actions"></slot>
              </div>
              <slot name="close-button"></slot>
            </div>
            <div class="modal-body" tabindex="0" aria-label="${this.i18n.contentBox}" cds-layout="p-x:lg">
              <slot></slot>
            </div>
            <div cds-layout="align-stretch p-x:lg p-b:lg">
              <slot name="modal-actions"></slot>
            </div>
          </div>
          <div cds-layout="display:screen-reader-only">${this.i18n.contentEnd}</div>
        </div>
      </div>
    `;
    }
}
__decorate([
    i18n()
], CdsModal.prototype, "i18n", void 0);
__decorate([
    property({ type: Boolean })
], CdsModal.prototype, "closable", void 0);
__decorate([
    property({ type: String })
], CdsModal.prototype, "size", void 0);
//# sourceMappingURL=modal.element.js.map