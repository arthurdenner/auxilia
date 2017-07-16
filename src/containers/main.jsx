import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { NavLink, Route } from 'react-router-dom';
import Programas from './programas';
import Selecoes from './selecoes';
import actions from '../store/actions';
import * as selectors from '../store/selectors';
import { menuOptions } from '../constants';

const { Content, Header } = Layout;

class Main extends PureComponent {
  changeView = ({ key }) => this.props.dispatch(actions.selectTab([key]));

  render() {
    const { selectedTab } = this.props;
    return (
      <Layout className="container">
        <Header style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
          <span>AUXILIA</span>
          <Menu theme="dark" mode="horizontal" selectedKeys={selectedTab} onClick={this.changeView}>
            {menuOptions.map(option => (
              <Menu.Item key={option.key}>
                <NavLink to={option.route}>
                  <span>
                    <Icon type={option.icon} />
                    <span className="nav-text">{option.name}</span>
                  </span>
                </NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content>
          <Route exact path="/" component={Programas} />
          <Route path="/selecoes" component={Selecoes} />
        </Content>
      </Layout>
    );
  }
};

const mapStateToProps = state => ({
  selectedTab: selectors.getSelectedTab(),
});

export default connect(mapStateToProps)(Main);
