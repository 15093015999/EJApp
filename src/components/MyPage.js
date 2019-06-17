import React from 'react';
import { connect } from 'dva';
class MyPage extends React.Component {


    render() {
        return (
            <div>
                <h1>this is MyPage</h1>
            </div>

        );
    }

}

export default connect()(MyPage);