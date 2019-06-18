import React from 'react';
import { connect } from 'dva';
import styles from './MyPage.css'
import { List } from 'antd-mobile';
import TellMeModal from './TellMeModal'
const Item = List.Item;
class MyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        }
    }
    onCancel=()=>{
        this.setState({visible:false})
    }


    render() {
        return (
            <div className={styles.my}>
                <div className={styles.main}>
                    <img className={styles.avatar} src="http://10.84.130.41:5000/avatars/8DB1CA7756E2350A9BC8040B43699A52.jpg" />
                    <div className={styles.hello}><i>你好,150****5999</i></div>
                    <div className={styles.money}>
                        <div className={styles.left}>
                            <div className={styles.leftTitle}>
                                账号余额
                        </div>
                            <div className={styles.leftBody}>
                                ￥888.00
                        </div>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.rightBody}>
                                充值
                        </div>
                        </div>
                    </div>
                </div>
                <List className={styles.myList}>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => { }}
                        platform="android"
                        multipleLine
                    >
                        常用地址
                    </Item>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
                        onClick={() => {this.setState({visible:true})}}
                        arrow="horizontal"
                        platform="android"
                        multipleLine
                    >
                        联系我们
                    </Item>
                </List>
                <TellMeModal
                    onCancel={this.onCancel}
                    visible={this.state.visible}
                />

            </div>

        );
    }

}

export default connect()(MyPage);