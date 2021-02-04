/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { property } from 'lit-element';
// Legacy TS Decorator
function legacyI18n(descriptor, protoOrDescriptor, name) {
    const desc = Object.defineProperty(protoOrDescriptor, name, descriptor);
    return property({ type: Object, attribute: 'cds-i18n' })(desc, name);
}
// TC39 Decorators proposal
function standardI18n(descriptor, element) {
    const desc = {
        kind: 'method',
        placement: 'prototype',
        key: element.key,
        descriptor,
    };
    return property({ type: Object })(desc, name);
}
/**
 * A property decorator which accesses a set of string values for use
 * inside the element's template. The values can be overridden at runtime
 * by changing the property value that's reflected through the attribute value.
 *
 * @example
 *
 *     class MyElement {
 *       @i18n()
 *       i18n = {
 *         "open" : "Open my element",
 *         "close" : "Close my element"
 *       };
 *     }
 *
 */
export function i18n() {
    return (protoOrDescriptor, name) => {
        const descriptor = {
            get() {
                return this.__i18n;
            },
            set(value) {
                if (!this.__i18n) {
                    this.__i18n = value;
                }
                else {
                    this.__i18n = Object.assign(Object.assign({}, this.__i18n), value);
                }
            },
            enumerable: true,
            configurable: true,
        };
        return name !== undefined
            ? legacyI18n(descriptor, protoOrDescriptor, name)
            : standardI18n(descriptor, protoOrDescriptor);
    };
}
//# sourceMappingURL=i18n.js.map