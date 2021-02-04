/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIcons } from '../icon.service.js';
export function hasAlertBadge(icon) {
    return icon.badge && (icon.badge === 'inherit-triangle' || icon.badge === 'warning-triangle');
}
export function getIconBadgeSVG(icon) {
    let badge = '';
    if (icon.badge && hasAlertBadge(icon)) {
        badge =
            '<path d="M26.85 1.14L21.13 11a1.28 1.28 0 001.1 2h11.45a1.28 1.28 0 001.1-2l-5.72-9.86a1.28 1.28 0 00-2.21 0z" class="alert" />';
    }
    else if (icon.badge) {
        badge = '<circle cx="30" cy="6" r="5" class="badge" />';
    }
    return badge;
}
export function getIconSVG(icon) {
    var _a, _b, _c, _d, _e;
    const iconShape = ((_a = ClarityIcons.registry[icon.shape]) !== null && _a !== void 0 ? _a : ClarityIcons.registry['unknown']);
    let shape = icon.solid && iconShape.solid ? iconShape.solid : iconShape.outline;
    if (icon.badge && !hasAlertBadge(icon)) {
        shape = icon.solid ? (_b = iconShape.solidBadged) !== null && _b !== void 0 ? _b : shape : (_c = iconShape.outlineBadged) !== null && _c !== void 0 ? _c : shape;
    }
    if (hasAlertBadge(icon)) {
        shape = icon.solid ? (_d = iconShape.solidAlerted) !== null && _d !== void 0 ? _d : shape : (_e = iconShape.outlineAlerted) !== null && _e !== void 0 ? _e : shape;
    }
    return shape;
}
//# sourceMappingURL=icon.svg-helpers.js.map