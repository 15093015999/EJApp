import React from 'react';
import { connect } from 'dva';
import styles from './HelpPage.css';

class HelpPage extends React.Component {
    constructor() {
        super();
        this.state = {
            display: [
                'none',
                'none',
                "none",
                "none",
                "none"
            ],
            textview:[
                'none',
                'none',
                'none',
                'none',
                'none'
            ]
        }
    }

    liclick = (id, e) => {
        if (this.state.display[id - 1] === 'none') {
            let tempArray = [];
            for (let i = 0; i < this.state.display.length; i++) {
                if (i === (id - 1)) {
                    tempArray.push('block')
                } else {
                    tempArray.push('none')
                }
            }
            this.setState({ display: tempArray })
        }
        else {
            let tempArray = [];
            for (let i = 0; i < this.state.display.length; i++) {
                if (i === (id - 1)) {
                    tempArray.push('none')
                } else {
                    tempArray.push('none')
                }
            }
            this.setState({ display: tempArray })
        }
        return this.state.display
    }

    bclick=(id) => {
        if (this.state.textview[id] === 'none') {
            let tempArray = [];
            for (let i = 0; i < this.state.textview.length; i++) {
                if (i === id) {
                    tempArray.push('block')
                } else {
                    tempArray.push('none')
                }
            }
            this.setState({ textview: tempArray })
        }
        else {
            let tempArray = [];
            for (let i = 0; i < this.state.textview.length; i++) {
                if (i === id) {
                    tempArray.push('none')
                } else {
                    tempArray.push('none')
                }
            }
            this.setState({ textview: tempArray })
        }
        return this.state.textview
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className={`${styles.bottomborder} ${styles.usepadding} ${styles.left}`}>常见问题</h1>
                    <ul className={`${styles.left} ${styles.listtotal} ${styles.nomargin}`}>
                        <li>
                            <button onClick={this.liclick.bind(this, 1)}>
                                1.优惠卷该如何使用?
                            </button>
                        </li>
                        <span className={`${styles.textblock} `} style={{ display: this.state.display[0] }}>
                            谢绝使用优惠卷偶( ˇωˇ )
                        </span>
                        <li>
                            <button onClick={() => { this.liclick(2) }}>
                                2.取消订单后钱什么时候到账？
                            </button>
                        </li>
                        <span className={`${styles.textblock} `} style={{ display: this.state.display[1] }}>
                            由买家发起的订单的取消应由买家自己承担所有损失 ( ╯ω╰)/
                        </span>
                        <li>
                            <button onClick={() => { this.liclick(3) }}>
                                3.可以固定同一个阿姨服务吗？
                            </button>
                        </li>
                        <span className={`${styles.textblock} `} style={{ display: this.state.display[2] }}>
                            ( -__-)--- 你想干啥
                        </span>
                        <li>
                            <button onClick={() => { this.liclick(4) }}>
                                4.可以选择上一次服务的阿姨？
                            </button>
                        </li>
                        <span className={`${styles.textblock} `} style={{ display: this.state.display[3] }}>
                            你到底想干什么，变态！！（掏枪） \(‵^′)>
                        </span>
                        <li>
                            <button onClick={() => { this.liclick(5) }}>
                                5.预约成功后在那查看？
                            </button>
                        </li>
                        <span className={`${styles.textblock} `} style={{ display: this.state.display[4] }}>
                            预约成功后工作人员也无法保证在当天到达呦(‵▽′)
                        </span>
                    </ul>
                </div>
                <div>
                    <h1 className={`${styles.usepadding} ${styles.left}`}>更多问题</h1>
                </div>
                <div className={styles.widthauto}>
                    <div className={`${styles.useflex} `}>
                        <button onClick={() => { this.bclick(0) }}>
                            订单相关
                        </button>
                        <button onClick={() => { this.bclick(1) }}>
                            客户端使用
                        </button>
                        <button onClick={() => { this.bclick(2) }}>
                            优惠卷与活动
                        </button>
                    </div>
                    <div className={`${styles.useflex} `}>
                        <button onClick={() => { this.bclick(3) }}>
                            支付与费用
                        </button>
                        <button onClick={() => { this.bclick(4) }}>
                            服务相关
                        </button>
                        <button>

                        </button>
                    </div>
                </div>
                <div className={`${styles.textblock} `}>
                    <span className={`${styles.textblock} ${styles.displayblock}`}>
                        回答你的更多疑问哟ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚
                    </span>
                    <div>
                    <span className={`${styles.textblock} `} style={{ display: this.state.textview[0] }}>
                        订单页面有专门人员负责为什么不去订单页面转转呢(๑•̀ㅂ•́)و✧
                    </span>
                    <span className={`${styles.textblock} `} style={{ display: this.state.textview[1] }}>
                        多玩玩手机就会了，经验之谈︿(￣︶￣)︿
                    </span>
                    <span className={`${styles.textblock} `} style={{ display: this.state.textview[2] }}>
                        本店只有涨价没有优惠，还不快来抢购吧（づ￣3￣）づ╭❤～
                        <div>

                        </div>
                        至于活动，别问，问就是在做了o(*≧▽≦)ツ┏━┓
                    </span>
                    <span className={`${styles.textblock} `} style={{ display: this.state.textview[3] }}>
                        花钱一时爽，一直花钱一直爽，爽就完事了，问嫩么多干嘛(*￣rǒ￣)
                    </span>
                    <span className={`${styles.textblock} `} style={{ display: this.state.textview[4] }}>
                        问这个问题之前请具体到人（○｀ 3′○）
                    </span>
                    </div>
                </div>
            </div>
        );
    }

}


export default connect()(HelpPage);