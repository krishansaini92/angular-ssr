/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { baseStyles, hasStringPropertyChanged, hasStringPropertyChangedAndNotNil, property, internalProperty, isString, pxToRem, } from '@cds/core/internal';
import { html, LitElement, query, svg } from 'lit-element';
import { styles } from './icon.element.css.js';
import { ClarityIcons } from './icon.service.js';
import { updateIconSizeStyle } from './utils/icon.classnames.js';
import { getIconBadgeSVG, getIconSVG } from './utils/icon.svg-helpers.js';
/**
 * Icon component that renders svg shapes that can be customized.
 * To load an icon, import the icon with the icon service.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { ClarityIcons, userIcon } from '@cds/core/icon';
 *
 * ClarityIcons.addIcons(userIcon);
 * ```
 *
 * ```html
 * <cds-icon shape="user"></cds-icon>
 * ```
 *
 * @element cds-icon
 * @cssprop --color
 * @cssprop --badge-color
 */
export class CdsIcon extends LitElement {
    constructor() {
        super(...arguments);
        this._shape = 'unknown';
        /**
         * Displays most icons in their "filled" version if set to `true`.
         */
        this.solid = false;
        /**
         * Inverts color of icon fills and outlines if `true`.
         * Useful for displaying icons on a dark background.
         */
        this.inverse = false;
    }
    static get styles() {
        return [baseStyles, styles];
    }
    get shape() {
        return this._shape;
    }
    /**
     * Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if
     * the specified icon cannot be found in the icon registry.
     */
    set shape(val) {
        if (hasStringPropertyChangedAndNotNil(val, this._shape)) {
            const oldVal = this._shape;
            this._shape = val;
            this.requestUpdate('shape', oldVal);
        }
    }
    get size() {
        return this._size;
    }
    /**
     * @type {string | sm | md | lg | xl | xxl}
     * Apply numerical width-height or a t-shirt-sized CSS classname
     */
    set size(val) {
        if (hasStringPropertyChanged(val, this._size)) {
            const oldVal = this._size;
            this._size = val;
            updateIconSizeStyle(this, val);
            this.requestUpdate('size', oldVal);
        }
    }
    updated(props) {
        if (props.has('innerOffset') && this.innerOffset > 0) {
            const val = pxToRem(this.innerOffset);
            const dimension = `calc(100% + ${Number(val.replace('rem', '')) * 2}rem)`;
            this.svg.style.width = dimension;
            this.svg.style.height = dimension;
            this.svg.style.margin = `-${val} 0 0 -${val}`;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.subscription = ClarityIcons.iconUpdates.subscribe(shape => {
            if (shape === this.shape) {
                this.requestUpdate();
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.subscription.unsubscribe();
    }
    render() {
        return isString(ClarityIcons.registry[this.shape])
            ? html `<span .innerHTML="${ClarityIcons.registry[this.shape]}"></span>`
            : svg `<svg .innerHTML="${getIconSVG(this) + getIconBadgeSVG(this)}" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"></svg>`;
    }
}
__decorate([
    property({ type: String })
], CdsIcon.prototype, "shape", null);
__decorate([
    property({ type: String })
], CdsIcon.prototype, "size", null);
__decorate([
    property({ type: String })
], CdsIcon.prototype, "direction", void 0);
__decorate([
    property({ type: String })
], CdsIcon.prototype, "flip", void 0);
__decorate([
    property({ type: Boolean })
], CdsIcon.prototype, "solid", void 0);
__decorate([
    property({ type: String })
], CdsIcon.prototype, "status", void 0);
__decorate([
    property({ type: Boolean })
], CdsIcon.prototype, "inverse", void 0);
__decorate([
    property({ type: String })
], CdsIcon.prototype, "badge", void 0);
__decorate([
    internalProperty({ type: Number })
], CdsIcon.prototype, "innerOffset", void 0);
__decorate([
    query('svg')
], CdsIcon.prototype, "svg", void 0);
//# sourceMappingURL=icon.element.js.map