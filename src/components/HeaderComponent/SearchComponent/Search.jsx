import { useEffect, useState } from 'react';
import styles from '../../HeaderComponent/SearchComponent/Search.module.scss';
import * as ProductService from '../../../service/Productservice';
import useDebounce from '../../../../src/ultil'; // Đảm bảo import đúng đường dẫn

function SearchComponent({ search }) {
    const [searchValue, setSearchValue] = useState([]);
    const debouncedSearchTerm = useDebounce(search, 1000); // Thay đổi 300ms theo nhu cầu

    useEffect(() => {
        const fetchSearchValue = async () => {
            if (debouncedSearchTerm) {
                try {
                    const res = await ProductService.getAllProduct1(debouncedSearchTerm);
                    setSearchValue(res.data);
                } catch (error) {
                    console.error('Failed to fetch categories:', error);
                }
            } else {
                setSearchValue([]); // Nếu không có tìm kiếm, xóa kết quả
            }
        };

        fetchSearchValue();
    }, [debouncedSearchTerm]); // Thay đổi thành debouncedSearchTerm

    return (
        <div className={styles.wrapper}>
            {searchValue.map(
                (
                    item,
                    index, // Sửa tên biến từ search thành item
                ) => (
                    <div className={styles.wrapperList} key={index}>
                        {' '}
                        {/* Thêm key */}
                        <div className={styles.warpperItem}>
                            <img
                                width="35px"
                                height="35px"
                                src="https://salt.tikicdn.com/ts/upload/e8/aa/26/42a11360f906c4e769a0ff144d04bfe1.png"
                                alt=""
                            />
                            <span>{item.name}</span> {/* Sửa từ search thành item */}
                        </div>
                    </div>
                ),
            )}
        </div>
    );
}

export default SearchComponent;
