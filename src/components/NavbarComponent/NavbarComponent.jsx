import { useEffect, useState } from 'react';
import styles from '../../components/NavbarComponent/NavbarComponet.module.scss';
import * as CategorySevice from '../../service/CategoriService';

function NavbarComponent(type, productType) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await CategorySevice.getCategoryname();
                setCategories(data); // Lưu danh sách vào state
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchCategories();
    }, []);

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
                {categories.map((categorie) => {
                    return (
                        <li className={styles.wrapperItem}>
                            <a href="" className={styles.wrapperItemLink}>
                                <img src={categorie.image} alt="" className={styles.wrapprerImg} />
                                <span className={styles.wrapperName}>{categorie.name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default NavbarComponent;
