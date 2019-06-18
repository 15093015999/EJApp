import React from 'react';
import { connect } from 'dva';
class OrderPage extends React.Component {


    render() {
        return (
            <div>
                <h1>this is OrderPage</h1>
                {/* <img src="http://localhost:5000/avatars/2C69FDBA57F827607EA9FA954EBD0D02.jpg"/> */}
            </div>

        );
    }

}

export default connect()(OrderPage);