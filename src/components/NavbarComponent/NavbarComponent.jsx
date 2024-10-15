import styles from '../../components/NavbarComponent/NavbarComponet.module.scss';
function NavbarComponent(type, productType) {
    console.log('type, productType', type, productType);
    return (
        <div className={styles.wrapper}>
            <p
                style={{
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    paddingTop: '16px',
                    fontWeight: '500',
                    fontSize: '1.6rem',
                }}
            >
                Danh mục
            </p>
            <ul className={styles.wrapperList}>
                <li className={styles.wrapperItem}>
                    <a href="" className={styles.wrapperItemLink}>
                        <img
                            src="https://salt.tikicdn.com/cache/100x100/ts/category/ed/20/60/afa9b3b474bf7ad70f10dd6443211d5f.png.webp"
                            alt=""
                            className={styles.wrapprerImg}
                        />
                        <span className={styles.wrapperName}>Nhà sách tiki</span>
                    </a>
                </li>
                <li className={styles.wrapperItem}>
                    <a href="" className={styles.wrapperItemLink}>
                        <img
                            src="https://salt.tikicdn.com/cache/100x100/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png.webp"
                            alt=""
                            className={styles.wrapprerImg}
                        />
                        <span className={styles.wrapperName}>Điện thoại máy tính bảng</span>
                    </a>
                </li>
                <li className={styles.wrapperItem}>
                    <a href="" className={styles.wrapperItemLink}>
                        <img
                            src="https://salt.tikicdn.com/cache/100x100/ts/category/f6/22/46/7e2185d2cf1bca72d5aeac385a865b2b.png.webp"
                            alt=""
                            className={styles.wrapprerImg}
                        />
                        <span className={styles.wrapperName}>Nhà cửa đời sống</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default NavbarComponent;
