
declare global {
    type ProductFruitsPushObject = Array<any> & {
    }

    type ProductFruitsInitOptions = {
        disableLocationChangeDetection?: boolean;
        disableBannersAutoMargin?: boolean;
    }

    type ProductFruitsUserObject = {
        username: string;
        email?: string;
        role?: string;
        signUpAt?: string;
        firstname?: string;
        lastname?: string;
        props?: UserCustomProps,
        hmac?: {
            hash: string,
            expiration?: string | null | undefined
        }
        group?: {
            groupId?: string;
            props?: UserGroupCustomProps
        }
    }

    type UserCustomProps = {
        [key: string]: string | number | Array<string> | Array<number> | Boolean | UserCustomProps;
    }

    type UserGroupCustomProps = {
        [key: string]: string | number | Array<string> | Array<number> | UserCustomProps;
    }
}

// declare function init(workspaceCode: string, language: string, userObject: any, options?: Options): void;
// declare function safeExec(callback: ($productFruits: ProductFruitsPushObject) => void): void;

declare const productFruits: {
    init: (workspaceCode: string, language: string, userObject: ProductFruitsUserObject, options?: ProductFruitsInitOptions) => void,
    //updateUserData: (user: ProductFruitsUserObject) => void,
    safeExec: (callback: ($productFruits: ProductFruitsPushObject) => void) => void
}

export { productFruits };
