declare global {
    interface Window {
        productFruitsIsReady?: boolean;
        productFruitsReady?: () => void;
        productFruits?: ProductFruitsObject;
    }
}

type ProductFruitsObject = {
    init: (workspaceCode: string, language: string, userObject: ProductFruitsUserObject, options?: ProductFruitsInitOptions) => void;
    safeExec: (callback: ($productFruits: ProductFruitsPushObject) => void) => void;
    api?: any;
    identifyUser?: (user: ProductFruitsUserObject) => void;
};

type ProductFruitsPushObject = Array<any> & {};

type ProductFruitsInitOptions = {
    disableLocationChangeDetection?: boolean;
    disableBannersAutoMargin?: boolean;
    hideInAppCenterLauncher?: boolean;
    customNavigation?: {
        use?: boolean;
        onGet?: () => string;
        navigate?: (location: string) => void;
    };
};

type ProductFruitsUserObject = {
    username: string;
    email?: string;
    role?: string;
    signUpAt?: string;
    firstname?: string;
    lastname?: string;
    props?: UserCustomProps;
    hmac?: {
        hash: string;
        expiration?: string | null | undefined;
    };
    group?: {
        groupId?: string;
        props?: UserGroupCustomProps;
    };
};

type UserCustomProps = {
    [key: string]: string | number | boolean | Array<string> | Array<number> | UserCustomProps;
};

type UserGroupCustomProps = {
    [key: string]: string | number | boolean | Array<string> | Array<number> | UserCustomProps;
};

declare const productFruits: ProductFruitsObject;

export { productFruits, ProductFruitsObject, ProductFruitsInitOptions, ProductFruitsUserObject };
