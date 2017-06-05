import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink, Route } from 'react-router-dom';
import Informativos from './informativos';
import Programas from './programas';
import Selecoes from './selecoes';

const { Sider } = Layout;

class Main extends Component {
  render() {
    return (
      <Layout className="container">
        <Sider breakpoint="lg" collapsedWidth="0">
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <NavLink to="/">
                <span>
                  <Icon type="info-circle-o" />
                  <span className="nav-text">Informativos</span>
                </span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/programas">
                <span>
                  <Icon type="appstore-o" />
                  <span className="nav-text">Programas</span>
                </span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/selecoes">
                <span>
                  <Icon type="calendar" />
                  <span className="nav-text">Seleções</span>
                </span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Route exact path="/" component={Informativos} />
        <Route path="/programas" component={Programas} />
        <Route path="/selecoes" component={Selecoes} />
      </Layout>
    );
  }
}

export default Main;
