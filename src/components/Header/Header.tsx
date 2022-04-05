import React, {useEffect, useState} from "react";
import styles from "./Header.module.scss";
import {useDispatch} from "react-redux";
import {productsActions} from "../../redux/productsReducer";

export const Header: React.FC = () => {

    const dispatch = useDispatch();
    const [isAvailable, setIsAvailable] = useState(false);

    // When isAvailable changed
    // dispatch new filter to state
    useEffect(() => {
        dispatch(productsActions.filterChanged({isAvailable}))
    }, [isAvailable]);

    const onCheckbox = () => {
        setIsAvailable(current => !current)
    }

    const checkboxStyle = isAvailable ? `${styles.icon} ${styles.active_checkbox}` : styles.icon;

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                Explore
            </h1>
            <h2 className={styles.subtitle}>
                Buy and sell digital fashion NFT art
            </h2>

            <div className={styles.checkbox}>
                <div className={checkboxStyle}
                     onClick={onCheckbox}>
                    {isAvailable && <img src="#" alt=""/>}
                </div>
                <div className={styles.label}>Available</div>
            </div>

        </header>
    );
}