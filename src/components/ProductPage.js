import React from 'react';
import { connect } from 'dva';
import { Carousel, Grid, } from 'antd-mobile';
import styles from './ProductPage.css'
import { routerRedux } from 'dva/router'


class ProductPage extends React.Component {

    // constructor(props) {
    //     super(props)
    // }
    state = {
        data: ['jiazheng', 'suiyi', 'yueshao'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading

        setTimeout(() => {
            this.setState({
                data: ['jiazheng', 'suiyi', 'yueshao'],
            });
        }, 0);
    }
    handleClick(index){
        if(index===4){
            this.props.dispatch(routerRedux.push({
                pathname: '/productList'
            }))
        }
    }
    render() {
        let datasourse = [
            { icon: 'http://47.100.17.233:5000/avatars/tu/xihu.png', text: '洗护' },
            { icon: 'http://47.100.17.233:5000/avatars/tu/baojie.jpg', text: '保洁' },
            { icon: 'http://47.100.17.233:5000/avatars/tu/kanhu.jpg', text: '看护' },
            { icon: 'http://47.100.17.233:5000/avatars/tu/yueshao.jpg', text: '月嫂' },
            { icon: 'http://47.100.17.233:5000/avatars/tu/qita.jpg', text: '其他' },
            { icon: 'http://47.100.17.233:5000/avatars/tu/jingqingqidai.jpg', text: '敬请期待' }
        ]

        return (
            <div>
                <Carousel
                    autoplay={false}
                    infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                // autoplay="true"
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`http://47.100.17.233:5000/avatars/tu/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>

                <Grid data={datasourse} columnNum={3} hasLine={false} onClick={(dataItem,itemIndex)=>{this.handleClick(itemIndex)}}/>

                <div className={styles.main}>
                    <div className={styles.one}>
                        <div className={styles.oneA}></div>
                        <div className={styles.oneB}></div>
                        <div className={styles.oneC}></div>
                    </div>
                    <div className={styles.two}>
                        <div className={styles.twoA}></div>
                        <div className={styles.twoB}></div>
                    </div>
                    <div className={styles.three}>
                        <div className={styles.threeA}></div>
                        <div className={styles.threeB}></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect()(ProductPage);