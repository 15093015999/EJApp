import React from 'react';
import { connect } from 'dva';
class OrderPage extends React.Component {


    render() {
        return (
            <div>
                <h1>this is OrderPage</h1>
            </div>

        );
    }

}

export default connect()(OrderPage);