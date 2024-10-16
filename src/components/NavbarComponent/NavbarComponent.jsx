import { useEffect, useState } from 'react';
import styles from '../../components/NavbarComponent/NavbarComponet.module.scss';
import * as CategorySevice from '../../service/CategoriService';
import { useNavigate } from 'react-router-dom';

function NavbarComponent(type, productType) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await CategorySevice.getCategoryname();
                setCategories(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };

        fetchCategories();
    }, []);
    const navigate = useNavigate();

    const handleGetTypeProduct = async (slug) => {
        try {
            navigate(`/categories/${slug}`);
        } catch (error) {}
    };

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
                        <li
                            className={styles.wrapperItem}
                            onClick={() => {
                                handleGetTypeProduct(categorie.slug);
                            }}
                        >
                            <a className={styles.wrapperItemLink}>
                                <img src={categorie.image} alt="" className={styles.wrapprerImg} />
                                <div className={styles.wrapperName}>{categorie.name}</div>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default NavbarComponent;
