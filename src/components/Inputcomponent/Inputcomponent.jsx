import { Input } from 'antd';
import React from 'react';
const Inputcomponent = ({ size, placehoder, bordered, style, ...rest }) => {
    return <Input size={size} placehoder={placehoder} bordered={bordered} style={style} {...rest} />;
};

export default Inputcomponent;
