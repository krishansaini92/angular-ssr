/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export const componentStringsDefault = {
    alert: {
        closeButtonAriaLabel: 'Close',
        loading: 'Loading',
        info: 'Info',
        success: 'Success',
        warning: 'Warning',
        danger: 'Error',
    },
    dropdown: {
        open: 'Open',
    },
    file: {
        browse: 'browse',
        files: 'files',
        removeFile: 'remove file',
    },
    modal: {
        closeButtonAriaLabel: 'Close modal',
        contentStart: 'Beginning of Modal Content',
        contentBox: 'Scrollable Modal Body',
        contentEnd: 'End of Modal Content',
    },
    password: {
        showButtonAriaLabel: 'Show password',
        hideButtonAriaLabel: 'Hide password',
    },
};
/**
 * I18nService is a static class that gives users the ability to use and override
 * strings within the components for internationalization / globalization. One
 * can override default values globally for their application or override per
 * component instance as needed.
 *
 * Use the localize method to override values globally. For per component instance,
 * use the i18n decorator.
 */
export class I18nService {
    static get keys() {
        return I18nService.strings;
    }
    static localize(overrides) {
        for (const key of Object.keys(overrides)) {
            I18nService.strings[key] = Object.assign(Object.assign({}, I18nService.strings[key]), overrides[key]);
        }
    }
}
I18nService.strings = Object.assign({}, componentStringsDefault);
//# sourceMappingURL=i18n.service.js.map