/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { html, property } from 'lit-element';
import { assignSlotNames, baseStyles, CdsBaseButton, hasAttributeAndIsNotEmpty, querySlot, setOrRemoveAttribute, } from '@cds/core/internal';
import { styles } from './control-action.element.css.js';
import { LogService } from '@cds/core/internal';
/**
 * Control Action
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control-action>
 *
 * </cds-control-action>
 * ```
 * @internal
 * @element cds-control-action
 * @slot - For projecting text content or cds-icon
 */
export class CdsControlAction extends CdsBaseButton {
    constructor() {
        super(...arguments);
        this.readonly = false;
        this.ariaLabel = '';
    }
    static get styles() {
        return [baseStyles, styles];
    }
    render() {
        return html `
      <div class="private-host">
        <slot></slot>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.syncAria();
    }
    syncAria() {
        const iAmReadonly = this.readonly;
        const iHaveAriaLabel = hasAttributeAndIsNotEmpty(this, 'aria-label');
        setOrRemoveAttribute(this, ['aria-hidden', 'true'], () => {
            return iAmReadonly && !iHaveAriaLabel;
        });
    }
    updated(props) {
        super.updated(props);
        if (props.has('action')) {
            this.setSlotLocation();
        }
        if (props.has('readonly') || props.has('ariaLabel')) {
            this.validateAriaLabel();
            this.syncAria();
        }
    }
    setSlotLocation() {
        var _a;
        assignSlotNames([this, (_a = this.action) !== null && _a !== void 0 ? _a : false]);
    }
    validateAriaLabel() {
        var _a;
        if (!this.readonly && !((_a = this.getAttribute('aria-label')) === null || _a === void 0 ? void 0 : _a.length)) {
            LogService.warn('A aria-label is required for interactive cds-control-actions', this);
        }
    }
}
__decorate([
    property({ type: String })
], CdsControlAction.prototype, "action", void 0);
__decorate([
    property({ type: Boolean })
], CdsControlAction.prototype, "readonly", void 0);
__decorate([
    property({ type: String })
], CdsControlAction.prototype, "ariaLabel", void 0);
__decorate([
    querySlot('cds-icon')
], CdsControlAction.prototype, "icon", void 0);
//# sourceMappingURL=control-action.element.js.map