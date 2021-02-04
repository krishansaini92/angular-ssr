import { css } from 'lit-element';
/* @internal */
export const styles = css `:host{--backdrop-background: var(--cds-alias-object-overlay-backdrop-background, rgba(0,0,0,0.6));--layered-backdrop-background: var(--cds-alias-object-opacity-0, rgba(0,0,0,0));position:fixed;top:0;bottom:0;left:0;right:0;z-index:1000000;display:inline-flex;align-items:center;justify-content:center}.private-host{position:relative}.overlay-backdrop{width:100%;height:100%;background:var(--backdrop-background);position:fixed}.layered{background:var(--layered-backdrop-background, var(--backdrop-background))}:host([_demo-mode]){position:absolute}:host([_demo-mode]) .overlay-backdrop{position:absolute}
`;
//# sourceMappingURL=overlay.element.css.js.map