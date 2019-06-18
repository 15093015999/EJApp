import React from 'react';
import { connect } from 'dva';
import { Carousel, Grid } from 'antd-mobile';
import ProductService from '../services/ProductService'
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
        }, 100);
    }

    render() {
        const data = Array.from(new Array(6)).map((_val, i) => ({
            icon: 'http://10.84.130.41:5000/avatars/8DB1CA7756E2350A9BC8040B43699A52.jpg',
            text: `name${i}`,
        }));
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
                            // href="http://www.alipay.com"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
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
                <Grid data={data} hasLine={false} columnNum={3} />
            </div>

        );
    }

}

export default connect()(ProductPage);