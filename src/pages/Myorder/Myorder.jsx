import { Col, Empty, Row } from 'antd';
import AllOrder from './AllOrder/AllOrder';
import { Tabs } from 'antd';
import NavbarProfile from '../../components/NavbarProfile/NavbarProfile';

const onChange = (key) => {
    console.log(key);
};

function Myorder() {
    const items = [
        {
            key: '1',
            label: 'Tất cả đơn',
            children: <AllOrder></AllOrder>,
        },
        {
            key: '2',
            label: <div style={{ padding: '6px' }}>Chờ thanh toán</div>,
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Đang vận chuyển',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '4',
            label: 'Đang xử lí',
            children: <Empty></Empty>,
        },
        {
            key: '5',
            label: 'Đã giao',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '6',
            label: 'Đã hủy',
            children: 'Content of Tab Pane 3',
        },
    ];
 
    return (
        <div
            style={{
                paddingTop: '60px',
                paddingLeft: '60px',
                paddingRight: '60px',
                backgroundColor: 'rgb(245 245 250)',
            }}
        >
            <Row>
                <Col span={6}>
                    <NavbarProfile></NavbarProfile>
                </Col>
                <Col span={16}>
                    <div>
                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} size="medium" />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Myorder;
