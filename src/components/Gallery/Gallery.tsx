import React from "react";
import styles from "./Gallery.module.scss";
import {GalleryItem} from "./GalleryItem/GalleryItem";
import {ProductType} from "../../types/types";

type GalleryProps = {
    products: ProductType[];
}

export const Gallery: React.FC<GalleryProps> = ({products}) => {

    const productsList = products.map(product => {
        return (
            <GalleryItem key={product.product_id} product={product}/>
        );
    })

  return (
      <div className={styles.gallery}>
          {productsList}
      </div>
  );
}