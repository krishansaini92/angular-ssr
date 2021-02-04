export { I18nService, componentStringsDefault } from '@cds/core/internal';
declare global {
    interface HTMLElement {
        'cds-text': string;
        'cds-layout': string;
        'cds-list': string;
    }
    interface HTMLElementTagNameMap {
        'cds-card': HTMLElement;
        'cds-demo': HTMLElement;
        'cds-placeholder': HTMLElement;
    }
}
