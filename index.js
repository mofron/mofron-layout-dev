/**
 * @file mofron-layout-xxx/index.js
 * @author simpart
 */

/**
 * @class xxx
 * @brief layout class
 */
mofron.layout.xxx = class extends mofron.Layout {
    
    constructor (prm) {
        try {
            super();
            this.name('xxx');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            // layout contents
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.xxx;
