import React from 'react';
// import { connect } from 'dva';
import styles from './ProductPage.css';
import { Carousel, WhiteSpace, WingBlank, SearchBar, Badge, Tabs, } from 'antd-mobile';


class ProductPage extends React.Component {


    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 0);
    }

    render() {
        const tabs = [
            { title: <Badge dot>工具</Badge> },
            { title: <Badge dot>消耗品</Badge> },
            { title: <Badge dot>其他</Badge> },
        ];

        return (
            <div>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                // autoplay="true"
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            // href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', height: '5%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                {/* <h1>产品</h1> */}
                <WingBlank className={styles.title}>
                    e&nbsp;&nbsp;洁&nbsp;&nbsp;产&nbsp;&nbsp;品&nbsp;&nbsp;页&nbsp;&nbsp;面
                </WingBlank>
                <SearchBar placeholder="输入您要查找的产品" maxLength={8} />
                <WhiteSpace />

                <div>
                    <Tabs tabs={tabs}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            没钱买
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            没人卖
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            别问
                        </div>
                    </Tabs>
                </div>
            </div>

        );

    }


}

export default ProductPage;