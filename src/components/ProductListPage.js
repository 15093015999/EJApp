import React from 'react';
import { connect } from 'dva';
class ProductListPage extends React.Component {


    render() {
        return (
            <div>
                <h1>this ProductListPage</h1>
            </div>

        );
    }

}

export default connect()(ProductListPage);