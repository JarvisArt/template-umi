import React, { PureComponent } from 'react';
import styles from './index.css';
import { connect } from 'dva';
import { Form, Button } from 'antd';

class Home extends PureComponent {

  change = () => {
    this.props.dispatch({
      type: 'global/fetchTableData',
    })
  };

  render() {
    const { global } = this.props;
    
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>
            <a href="https://umijs.org/zh/">
              Getting Started
            </a>
            <p>{global.text}</p>
            <Button type="primary" onClick={this.change}>Primary</Button>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(({ global }) => ({global}))(Form.create()(Home));