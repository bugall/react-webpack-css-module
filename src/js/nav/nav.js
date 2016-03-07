import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../../css/nav/nav.css';

class firstCategory extends React.Component{
  constructor (props,context){
    super(props,contenxt)
  }
  render(){
    return(
      <li className={styles.zhTopNavUlLi}>{this.props.name}</li>
    )
  }
}
export default class Nav extends React.Component{
  constructor (props, context) {
    super(props, context)
    this.state = {
      navItem:['学生列表','作品列表','学生管理'],
    } // 初始化状态
  }
  render(){
    return(
      <div className={styles.wrap}>
        <div className={styles.brand}></div>
        <div className={styles.wrap_content}>
          <div className={styles.zg_top_nav}>
            {
              this.state.navItem.map(name=>{
                return (
                  <a key={name.name} className={styles.zg_top_nav_item}>{name}</a>
                )
              })
            }
            </div>
            <ul className={styles.user_wrap}>
              <li><a>注销</a></li>
              <li><a>bugall</a></li>
            </ul>
        </div>
      </div>
    )
  }
}
