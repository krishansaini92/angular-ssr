/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { camelCaseToKebabCase } from './string.js';
class BrowserFeatures {
    constructor() {
        this.supports = {
            js: true,
            flexGap: supportsFlexGap(),
        };
        if (!document.body.hasAttribute('cds-supports') || document.body.getAttribute('cds-supports') === 'no-js') {
            const supports = camelCaseToKebabCase(Object.keys(this.supports).reduce((prev, next) => `${prev} ${this.supports[next] ? next : `no-${next}`}`, '')).trim();
            document.body.setAttribute('cds-supports', supports);
        }
    }
}
export const browserFeatures = new BrowserFeatures();
function supportsFlexGap() {
    const flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';
    // create two, elements inside it
    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));
    // append to the DOM (needed to obtain scrollHeight)
    document.body.appendChild(flex);
    const isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
    flex.parentNode.removeChild(flex);
    return isSupported;
}
//# sourceMappingURL=supports.js.map