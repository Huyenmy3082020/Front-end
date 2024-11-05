import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';

// Danh sách sản phẩm giả lập
const products = [
    { id: 1, name: 'Áo thun thời trang' },
    { id: 2, name: 'Giày thể thao' },
    { id: 3, name: 'Túi xách nữ' },
    { id: 4, name: 'Điện thoại thông minh' },
    { id: 5, name: 'Laptop gaming' },
    { id: 6, name: 'Balo học sinh' },
    { id: 7, name: 'Đồng hồ thông minh' },
    { id: 8, name: 'Kính mát thời trang' },
    { id: 9, name: 'Mũ bảo hiểm' },
    { id: 10, name: 'Áo khoác nữ' },
    { id: 11, name: 'Giày cao gót' },
    { id: 12, name: 'Sandal nữ' },
    { id: 13, name: 'Quần jean nam' },
    { id: 14, name: 'Quần shorts nữ' },
    { id: 15, name: 'Áo sơ mi nam' },
    { id: 16, name: 'Áo len nữ' },
    { id: 17, name: 'Giày lười' },
    { id: 18, name: 'Bộ đồ thể thao' },
    { id: 19, name: 'Đầm maxi' },
    { id: 20, name: 'Giày thể thao nữ' },
    { id: 21, name: 'Túi du lịch' },
    { id: 22, name: 'Áo phao nam' },
    { id: 23, name: 'Quần jogger' },
    { id: 24, name: 'Đồ bơi nữ' },
    { id: 25, name: 'Bikini' },
    { id: 26, name: 'Thắt lưng nam' },
    { id: 27, name: 'Đồng hồ nam' },
    { id: 28, name: 'Kính áp tròng' },
    { id: 29, name: 'Dép xỏ ngón' },
    { id: 30, name: 'Áo thun nữ' },
    { id: 31, name: 'Áo khoác nam' },
    { id: 32, name: 'Quần legging' },
    { id: 33, name: 'Giày sneaker' },
    { id: 34, name: 'Áo hoodie' },
    { id: 35, name: 'Quần ống rộng' },
    { id: 36, name: 'Bikini hai mảnh' },
    { id: 37, name: 'Đồ ngủ nữ' },
    { id: 38, name: 'Áo ba lỗ nam' },
    { id: 39, name: 'Giày boot' },
    { id: 40, name: 'Áo cardigan' },
    { id: 41, name: 'Quần tây nam' },
    { id: 42, name: 'Giày tây' },
    { id: 43, name: 'Bộ pijama' },
    { id: 44, name: 'Mũ len' },
    { id: 45, name: 'Áo thun in hình' },
    { id: 46, name: 'Quần short nam' },
    { id: 47, name: 'Giày thể thao cổ cao' },
    { id: 48, name: 'Túi đeo chéo' },
    { id: 49, name: 'Giày lười nam' },
    { id: 50, name: 'Đồng hồ nữ' },
    { id: 51, name: 'Dép nữ' },
    { id: 52, name: 'Thắt lưng nữ' },
    { id: 53, name: 'Socks nữ' },
    { id: 54, name: 'Áo crop top' },
    { id: 55, name: 'Quần tây nữ' },
    { id: 56, name: 'Balo thời trang' },
    { id: 57, name: 'Túi tote' },
    { id: 58, name: 'Mũ snapback' },
    { id: 59, name: 'Áo phông nam' },
    { id: 60, name: 'Quần ống suông' },
    { id: 61, name: 'Áo bomber' },
    { id: 62, name: 'Giày chạy bộ' },
    { id: 63, name: 'Giày lười nữ' },
    { id: 64, name: 'Bikini một mảnh' },
    { id: 65, name: 'Áo choàng tắm' },
    { id: 66, name: 'Túi xách công sở' },
    { id: 67, name: 'Đầm ôm' },
    { id: 68, name: 'Quần jeans rách' },
    { id: 69, name: 'Áo sơ mi họa tiết' },
    { id: 70, name: 'Dép sandal' },
    { id: 71, name: 'Áo khoác da' },
    { id: 72, name: 'Quần ống dài' },
    { id: 73, name: 'Giày cao cổ' },
    { id: 74, name: 'Áo thun dài tay' },
    { id: 75, name: 'Quần legging thể thao' },
    { id: 76, name: 'Balo laptop' },
    { id: 77, name: 'Kính mắt thể thao' },
    { id: 78, name: 'Giày thể thao nữ đẹp' },
    { id: 79, name: 'Áo hoodie nữ' },
    { id: 80, name: 'Túi xách thời trang' },
    { id: 81, name: 'Mũ thể thao' },
    { id: 82, name: 'Áo sơ mi trắng' },
    { id: 83, name: 'Quần kaki nam' },
    { id: 84, name: 'Giày thể thao Adidas' },
    { id: 85, name: 'Đồng hồ nữ đẹp' },
    { id: 86, name: 'Quần jogger nữ' },
    { id: 87, name: 'Giày sandal nữ' },
    { id: 88, name: 'Áo len nam' },
    { id: 89, name: 'Quần shorts thể thao' },
    { id: 90, name: 'Áo khoác mỏng' },
    { id: 91, name: 'Dép đi trong nhà' },
    { id: 92, name: 'Quần dài nữ' },
    { id: 93, name: 'Áo phao nữ' },
    { id: 94, name: 'Giày lười da' },
    { id: 95, name: 'Túi xách nhỏ' },
    { id: 96, name: 'Áo thun họa tiết' },
    { id: 97, name: 'Quần legging yoga' },
    { id: 98, name: 'Giày thể thao Nike' },
    { id: 99, name: 'Áo khoác thể thao' },
    { id: 100, name: 'Đầm xuân hè' },
];

const AutoSearch = () => {
    const [options, setOptions] = useState([]); 
    const [searchHistory, setSearchHistory] = useState([]); // Lịch sử tìm kiếm

    const handleSearch = (value) => {
        // Cập nhật danh sách kết quả tìm kiếm
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value) => {
        
        
        if (value && !searchHistory.includes(value)) {
            // Cập nhật lịch sử tìm kiếm
            setSearchHistory((prevHistory) => {
                const newHistory = [...prevHistory, value]; // Thêm truy vấn mới vào lịch sử
                return newHistory.length > 10 ? newHistory.slice(-10) : newHistory; // Giữ lại tối đa 10 mục
            });
        }
    };



    // Hàm tìm kiếm sản phẩm
    const searchResult = (query) => {
        const normalizedQuery = removeDiacritics(query.toLowerCase()); // Chuẩn hóa truy vấn tìm kiếm
        return products
            .filter((product) => removeDiacritics(product.name.toLowerCase()).startsWith(normalizedQuery)) // So sánh đã chuẩn hóa
            .map((product) => {
                return {
                    value: product.name,
                    label: (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <span>
                                <a
                                    href={`https://example.com/product/${product.id}`} // Thay đổi liên kết đến trang sản phẩm thực tế
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {product.name}
                                </a>
                            </span>
                        </div>
                    ),
                };
            });
    };

    // Hiển thị lịch sử tìm kiếm
    const historyOptions = searchHistory.map((item) => ({
        value: item,
        label: (
            <div>
                <span>{item}</span>
            </div>
        ),
    }));

    return (
        <AutoComplete
            popupMatchSelectWidth={252}
            style={{
                width: 300,
            }}
            options={options.length > 0 ? options : historyOptions} // Hiển thị kết quả tìm kiếm hoặc lịch sử
            onSelect={onSelect} // Hàm khi chọn một tùy chọn
            onSearch={handleSearch} // Hàm khi tìm kiếm
            size="large"
        >
            <Input.Search size="large" placeholder="Tìm sản phẩm..." enterButton />
        </AutoComplete>
    );
};

export default AutoSearch;
