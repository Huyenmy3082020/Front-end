import React from 'react';
import { Col, Row, Image, InputNumber } from 'antd';
import imgProcduct from '../../assets/images/imgbig.png';
import imgProcductSmall from '../../assets/images/imgsmall.png';
import { WrapperStyleImage, WrapperStyleNameProducted, WrapperAddressProduct, WrapperQualityProduct } from './style';
import { StarFilled, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';

function ProductDetailComponent() {
    const onChange = (value) => {
        // Handle the change event
    };

    return (
        <Row style={{ padding: '16px', background: '#fff' }}>
            <Col span={10}>
                <Image src={imgProcduct} alt="img" preview={false} />
                <div>
                    <Row style={{ paddingTop: '16px' }}>
                        {[...Array(6)].map((_, index) => (
                            <Col span={4} key={index}>
                                <WrapperStyleImage src={imgProcductSmall} alt="img small" preview={false} />
                            </Col>
                        ))}
                    </Row>
                </div>
            </Col>
            <Col span={14} style={{ paddingLeft: '16px' }}>
                <WrapperStyleNameProducted>Sach tham tu lung fanhasdjasdkakdjasl</WrapperStyleNameProducted>
                <div>
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                    <StarFilled style={{ fontSize: '12px', color: 'rgb(253,216,54)' }} />
                    <span style={{ fontSize: '15px', lineHeight: '24px', color: 'rgb(120, 120, 120)' }}>
                        (Xem 5 danh gia)
                    </span>
                </div>
                <div style={{ background: 'rgb(250, 250, 250)', borderRadius: '4px', padding: '16px' }}>
                    <h1 style={{ fontSize: '32px', lineHeight: '40px', fontWeight: '500', marginRight: '8px' }}>
                        500.000.000
                    </h1>
                    <WrapperAddressProduct>
                        <span>Giao đến</span>
                        <span className="address">Q1 phuong ben nghe thanh pho HCM</span>
                        <span className="change_address">Đổi địa chỉ</span>
                    </WrapperAddressProduct>
                </div>
                <div>
                    <div
                        style={{
                            marginBottom: '20px',
                            marginTop: '10px',
                            padding: '10px 0 ',
                            borderTop: '1px solid  #ccc',
                            borderBottom: '1px solid  #ccc',
                        }}
                    >
                        <div>
                            <h2 style={{ marginLeft: '6px' }}>Số lượng</h2>
                        </div>
                        <WrapperQualityProduct
                            style={{ border: '1px solid #ccc', width: '80px', display: 'flex', alignItems: 'center' }}
                        >
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <PlusOutlined style={{ color: '#000', fontSize: '16px' }} />
                            </button>
                            <InputNumber
                                style={{ width: '130px', borderTop: 'none', borderBottom: 'none' }}
                                defaultValue={3}
                                onChange={onChange}
                            />
                            <button style={{ border: 'none', background: 'transparent' }}>
                                <MinusOutlined style={{ color: '#000', fontSize: '16px' }} />
                            </button>
                        </WrapperQualityProduct>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <ButtonComponent
                            bordered={false}
                            size={40}
                            styleButton={{
                                background: 'rgb(255,57,69)',
                                height: '48px',
                                width: '220px',
                                border: 'none',
                                borderRadius: '4px',
                            }}
                            textButton={'Chọn mua'}
                            styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}
                        />
                        <ButtonComponent
                            size={40}
                            styleButton={{
                                background: '#fff',
                                height: '48px',
                                width: '220px',
                                border: '1px solid rgb(13,92,182)',
                                borderRadius: '4px',
                            }}
                            textButton={'Mua trả sau '}
                            styleTextButton={{ color: ' rgb(13,92,182)', fontSize: '15px', fontWeight: 700 }}
                        />
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default ProductDetailComponent;
