import React from 'react';
import { connect } from 'react-redux';
import { Icon, Layout, Menu } from 'antd';
import { NavLink, Route } from 'react-router-dom';
import Programas from './programas';
import Selecoes from './selecoes';
import actions from '../store/actions';
import * as selectors from '../store/selectors';
import { menuOptions } from '../constants';

const { Content, Header } = Layout;

const Main = ({ changeTab, selectedTab }) => (
  <Layout className="container">
    <Header style={{ height: '50px', display: 'flex', alignItems: 'center' }}>
      <span>AUXILIA</span>
      <Menu theme="dark" mode="horizontal" selectedKeys={selectedTab} onClick={changeTab}>
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

const mapStateToProps = state => ({
  selectedTab: selectors.getSelectedTab(),
});

const mapDispatchToProps = dispatch => ({
  changeTab: ({ key }) => dispatch(actions.selectTab([key])),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
