import { StyleNameProduct, WrapperPriceText, Discount, WrapperCardStyle, SupperShipperText } from './style';
import { WrapperReportText } from './style';
import { StarFilled } from '@ant-design/icons';
import now from '../../assets/images/now.png';
import sale from '../../assets/images/sale.png';
import { useNavigate } from 'react-router-dom';
import { convertPrice } from '../../ultil';
function CardComponent(props) {
    const { countInStock, description, image, name, price, rating, type, discount, selled, id, width } = props;

    const navigate = useNavigate();

    const handleDetailProduct = (id) => {
        navigate(`/product_detail/${id}`);
    };

    return (
        <WrapperCardStyle
            onClick={() => {
                handleDetailProduct(id);
            }}
            hoverable
            headStyle={{ width: '150px', height: '150px' }}
            style={{
                width: width || '200px', // Sử dụng width từ props, nếu không có thì mặc định là 200px
            }}
            bodyStyle={{ padding: '10px' }}
            cover={<img alt="example" src={image} style={{ position: 'relative' }} />}
        >
            <StyleNameProduct>{name}</StyleNameProduct>
            <WrapperReportText>
                <span style={{ marginRight: '16px' }}>
                    <span>{rating}</span>
                    <StarFilled style={{ fontSize: '14px', color: 'yellow' }} />
                    <span style={{ marginLeft: '10px' }}>Đã bán {countInStock}</span>
                    <span style={{ marginLeft: '6px', position: 'relative' }}>{selled}</span>
                </span>
            </WrapperReportText>
            <WrapperPriceText>
                {convertPrice(price)} <Discount>{discount || 5}%</Discount>
            </WrapperPriceText>
            <div
                style={{
                    display: 'flex',
                    gap: '4px',
                    borderTop: ' 1px solid rgb(235, 235, 240)',
                    paddingTop: '6px',
                    alignItems: 'center',
                }}
            >
                <img src={now} style={{ width: '28px', height: '13px' }} />
                <SupperShipperText>Giao siêu tốc 2h</SupperShipperText>
            </div>
        </WrapperCardStyle>
    );
}

export default CardComponent;
