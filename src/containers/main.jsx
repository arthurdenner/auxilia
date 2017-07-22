import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon, Layout, Menu } from 'antd';
import { NavLink, Route, Switch } from 'react-router-dom';
import NotFound from '~/components/not-found';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import { menuOptions } from '~/constants';
import Programas from './programas';
import Selecoes from './selecoes';
import styles from './main.less';

const { Content, Header } = Layout;

const Main = ({ changeTab, selectedTab }) => (
  <Layout className={styles.container}>
    <Header className={styles.header}>
      <a className={styles.image} href="/">
        <img src="http://i.imgur.com/zoYZVLz.png" alt="AUXILIA" />
      </a>
      <Menu
        className={styles.menu}
        theme="dark" mode="horizontal"
        selectedKeys={selectedTab} onClick={changeTab}
      >
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
      <Switch>
        <Route exact path="/" component={Programas} />
        <Route path="/selecoes" component={Selecoes} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Content>
  </Layout>
);

Main.propTypes = {
  changeTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.array.isRequired,
};

const mapStateToProps = () => ({
  selectedTab: selectors.getSelectedTab(),
});

const mapDispatchToProps = dispatch => ({
  changeTab: ({ key }) => dispatch(actions.selectTab([key])),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
