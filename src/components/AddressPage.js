import React from 'react';
import { connect } from 'dva';
class AddressPage extends React.Component {


    render() {
        return (
            <div>
                <h1>this AddressPage</h1>
            </div>

        );
    }

}

export default connect()(AddressPage);