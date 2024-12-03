import { useEffect, useState } from 'react';
import styles from '../../components/NavbarComponent/NavbarComponet.module.scss';
import * as CategorySevice from '../../service/CategoriService';
import { useNavigate, useParams } from 'react-router-dom';

function NavbarComponent(type, productType) {
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();
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

    const id = useParams();
    console.log('id', id);
    const handleGetTypeProduct = async (id) => {
        try {
            navigate(`/categories/${id}`);
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
                {categories.map((categorie, index) => {
                    return (
                        <li
                            key={index}
                            className={styles.wrapperItem}
                            onClick={() => {
                                handleGetTypeProduct(categorie._id);
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
