import React from 'react';
// import { connect } from 'dva';
import { Menu } from 'antd';
import { Link } from 'dva/router';
// import ProductListViewPage from './ProductListViewPage';
// import { ListView } from 'antd-mobile';


class ProductListPage extends React.Component {

    handleClick = e => {
        console.log('click ', e);
    };


    render() {

        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    style={{ width: '20%' }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <Menu.Item key="1">
                        <Link to="/productListView">
                            <span>
                                <span >上衣</span>
                            </span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">大衣外套</Menu.Item>
                    <Menu.Item key="3">裤装裙装</Menu.Item>
                    <Menu.Item key="4">配件</Menu.Item>
                </Menu >

            </div>
        );
    }

}

export default ProductListPage;