import React from "react";
import styles from "./GalleryItem.module.scss";
import {ProductType} from "../../../types/types";
import { Avatar } from "./Avatar/Avatar";

type GalleryItemProps = {
    product: ProductType;
}

export const GalleryItem: React.FC<GalleryItemProps> = ({product}) => {

    return (
        <div className={styles.item}>
            <div className={styles.body}>
                <Avatar className={styles.background} avatar={product.avatar}/>

                <div className={styles.author}>
                    <div className={styles.subtitle}>created by</div>
                    <div className={styles.name}>{product.created_by.display_name}</div>
                </div>

                <div className={styles.title}>
                    {product.name}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.column}>
                    <div className={styles.label}>available</div>
                    <div className={styles.amount}>{product.quantity} of 50</div>
                </div>

                <div className={styles.column}>
                    <div className={styles.label}>price</div>
                    <div className={styles.price}>{product.initial_price} ETH</div>
                </div>
            </div>
        </div>
    );
}

