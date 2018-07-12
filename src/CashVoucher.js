import React, { Component } from 'react';

import CachVoucherService from './cashVoucher';

class CashVoucher extends Component {
    render() {
        const service = new CachVoucherService();
        service.addItem('Harry Potter and the Prisoner of Azkaban', 360, 3);
        service.addItem('Harry Potter and the Philosopher\'s Stone', 240, 10);
        service.addItem('Harry Potter and the Chamber of Secrets', 400, 7);
        service.addItem('Sausages', 100, 10);
        service.incrementItem('Harry Potter and the Prisoner of Azkaban', 2);
        service.decrementItem('Harry Potter and the Philosopher\'s Stone', 5);
        service.removeItem('Sausages');
        const voucherItems = service.list.map(item => {
            return <li>
                <strong>{item.name}</strong> : {item.cost} &times; {item.quantity} | {item.totalCost}
            </li>
        });
        return (
            <div>
                <h1>Your voucher</h1>
                <ul>{voucherItems}</ul>
                <hr />
                <strong> Total positions </strong>: {service.totalItems()} <br />
                <strong> Total cost </strong>: {service.totalCost()}
            </div>
        );
    }
}

export default CashVoucher;