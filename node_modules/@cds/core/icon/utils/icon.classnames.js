/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isTshirtSize, pxToRem, updateElementStyles } from '@cds/core/internal';
import isNil from 'ramda/es/isNil.js';
export function getUpdateSizeStrategy(size) {
    if (isNil(size) || size === '') {
        return "value-is-nil" /* NilSizeValue */;
    }
    if (isTshirtSize(size)) {
        return "value-is-string" /* ValidSizeString */;
    }
    if (!isNaN(parseInt(size, 10)) && size.match(/^[0-9 ]+$/)) {
        return "value-is-numeric" /* ValidNumericString */;
    }
    return "bad-value" /* BadSizeValue */;
}
export function updateIconSizeStyle(el, size) {
    const updateStrategy = getUpdateSizeStrategy(size);
    const val = pxToRem(parseInt(size));
    switch (updateStrategy) {
        case "value-is-numeric" /* ValidNumericString */:
            updateElementStyles(el, ['width', val], ['height', val]);
            return;
        case "value-is-string" /* ValidSizeString */:
            updateElementStyles(el, ['width', ''], ['height', '']);
            return;
        case "value-is-nil" /* NilSizeValue */: // nil values empty out all sizing
            updateElementStyles(el, ['width', ''], ['height', '']);
            return;
        case "bad-value" /* BadSizeValue */:
            // bad-value is ignored
            return;
        default:
            return;
    }
}
//# sourceMappingURL=icon.classnames.js.map