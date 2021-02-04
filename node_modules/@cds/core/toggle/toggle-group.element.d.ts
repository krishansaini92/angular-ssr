import { CdsInternalControlGroup } from '@cds/core/forms';
import { CdsToggle } from './toggle.element.js';
/**
 * Toggle Group
 *
 * ```typescript
 * import '@cds/core/toggle/register.js';
 * ```
 *
 * ```html
 * <cds-toggle-group>
 *   <label>Select an item</label>
 *   <cds-toggle>
 *     <label>toggle</label>
 *     <input type="checkbox" />
 *   </cds-toggle>
 *
 *   <cds-toggle>
 *     <label>toggle</label>
 *     <input type="checkbox" />
 *   </cds-toggle>
 * </cds-toggle-group>
 * ```
 *
 * @element cds-toggle-group
 * @slot - For projecting toggle controls
 */
export declare class CdsToggleGroup extends CdsInternalControlGroup {
    protected controls: NodeListOf<CdsToggle>;
}
