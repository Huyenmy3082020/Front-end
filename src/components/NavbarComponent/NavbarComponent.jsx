import styles from '../../components/NavbarComponent/NavbarComponet.module.scss';
function NavbarComponent(type, productType) {
    console.log('type, productType', type, productType);
    return (
        <div className={styles.wrapper}>
            <ul className={styles.wrapperList}>
                <li className={styles.wrapperItem}>
                    <a href="" className={styles.wrapperItemLink}>
                        <img
                            src="https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp"
                            alt=""
                            className={styles.wrapprerImg}
                        />
                        <span className={styles.wrapperName}>Card</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavbarComponent;
