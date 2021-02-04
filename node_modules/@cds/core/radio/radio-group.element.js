/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { __decorate } from "tslib";
import { querySlotAll, id } from '@cds/core/internal';
import { CdsInternalControlGroup } from '@cds/core/forms';
/**
 * Radio Group
 *
 * ```typescript
 * import '@cds/core/radio/register.js';
 * ```
 *
 * ```html
 * <cds-radio-group>
 *   <label>radio group</label>
 *   <cds-radio>
 *     <label>item 1</label>
 *     <input type="radio" />
 *   </cds-radio>
 *
 *   <cds-radio>
 *     <label>item 2</label>
 *     <input type="radio" />
 *   </cds-radio>
 * </cds-radio-group>
 * ```
 *
 * @element cds-radio-group
 * @slot - For projecting cds-radio controls
 */
export class CdsRadioGroup extends CdsInternalControlGroup {
    static get styles() {
        return [...super.styles];
    }
    firstUpdated(props) {
        super.firstUpdated(props);
        this.associateRadioControls();
        this.syncRadioControls();
    }
    associateRadioControls() {
        this.controls.forEach(radio => radio && radio.inputControl.setAttribute('name', this.radioName));
    }
    syncRadioControls() {
        this.controls.forEach(c => c.addEventListener('checkedChange', (e) => {
            if (e.detail) {
                Array.from(this.controls).forEach(c => (c.inputControl.checked = false));
                e.target.inputControl.checked = true;
            }
        }));
    }
}
__decorate([
    querySlotAll('cds-radio', { assign: 'controls' })
], CdsRadioGroup.prototype, "controls", void 0);
__decorate([
    id()
], CdsRadioGroup.prototype, "radioName", void 0);
//# sourceMappingURL=radio-group.element.js.map