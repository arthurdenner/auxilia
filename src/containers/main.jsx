import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { NavLink, Route } from 'react-router-dom';
import Informativos from './informativos';
import Programas from './programas';
import Selecoes from './selecoes';
import actions from '../store/actions';
import * as selectors from '../store/selectors';
import { menuOptions } from '../constants';

const { Sider } = Layout;

class Main extends PureComponent {
  changeView = ({ key }) => this.props.dispatch(actions.selectTab([key]));

  render() {
    const { selectedTab } = this.props;
    return (
      <Layout className="container">
        <Sider>
          <Menu theme="dark" mode="inline" selectedKeys={selectedTab} onClick={this.changeView}>
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
        </Sider>
        <Route exact path="/" component={Informativos} />
        <Route path="/programas" component={Programas} />
        <Route path="/selecoes" component={Selecoes} />
      </Layout>
    );
  }
};

const mapStateToProps = state => ({
  selectedTab: selectors.getSelectedTab(),
});

export default connect(mapStateToProps)(Main);
