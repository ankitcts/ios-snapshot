import { observer, PropTypes } from 'mobx-react';
import React from 'react';
import QRCode from 'react-qr-code';

export const Generator = observer((props) => {
    return (
        <div style={{ background: 'white', padding: '16px' }}>
            <QRCode value={props.value} />
        </div>
    )
})
