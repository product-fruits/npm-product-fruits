
declare global {
    type ProductFruitsPushObject = Array<any> & {
    }

    type ProductFruitsInitOptions = {
        disableLocationChangeDetection?: boolean;
    }
}

// declare function init(workspaceCode: string, language: string, userObject: any, options?: Options): void;
// declare function safeExec(callback: ($productFruits: ProductFruitsPushObject) => void): void;

declare const productFruits: {
    init: (workspaceCode: string, language: string, userObject: any, options?: ProductFruitsInitOptions) => void,
    safeExec: (callback: ($productFruits: ProductFruitsPushObject) => void) => void
}

export { productFruits };