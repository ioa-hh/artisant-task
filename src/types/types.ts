type AuthorType = {
    user_id: number;
    display_name: string;
}
export type AvatarType = {
    original: string;
    compressed: string;
}

export type ProductType = {
    product_id: number;
    name: string;
    //description: string;
    quantity: number;
    initial_price: number;
    created_by: AuthorType;
    avatar: AvatarType
}

export type FilterType = {
    isAvailable: boolean;
}