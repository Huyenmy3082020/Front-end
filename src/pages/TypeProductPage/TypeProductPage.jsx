import CardComponent from '../../components/CardComponent/CardComponent';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import { Pagination } from 'antd';
import { Col, Row } from 'antd';
function TypeProductPage() {
    return (
        <Row style={{ padding: '0 90px', background: '#efefef', flexWrap: 'nowrap', paddingTop: '16px' }}>
            <Col span={4} style={{ background: '#fff', marginRight: '10px', padding: '14px', borderRadius: '6px' }}>
                <NavbarComponent />
            </Col>

            <Col span={20}>
                <Col
                    style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}
                >
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </Col>
                <Pagination defaultCurrent={1} total={50} style={{ marginTop: '16px' }} />
            </Col>
        </Row>
    );
}

export default TypeProductPage;
