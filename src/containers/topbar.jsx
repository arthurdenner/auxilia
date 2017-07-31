import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Icon, Menu } from 'antd';
import FlexElement from '~/components/flex-element';
import actions from '~/store/actions';
import * as selectors from '~/store/selectors';
import { menuOptions } from '~/constants';
import styles from './topbar.less';

const Topbar = ({
  changeTab,
  handleDropdown,
  isLogged,
  selectedTab,
  // showCadastro,
  showLogin,
  username,
}) => (
  <FlexElement full justify="space-between" className={styles.menu}>
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
    {isLogged ? (
      <Dropdown
        className={styles.dropdown}
        trigger={['click']}
        overlay={
          <Menu onClick={handleDropdown}>
            <Menu.Item key="sair">Sair</Menu.Item>
          </Menu>
        }
      >
        <FlexElement as={'a'} align="center" className={styles.nome}>
          <span>Olá, {username}</span>&nbsp;
          <Icon type="down" className={styles.userIcon} />
        </FlexElement>
      </Dropdown>
    ) : (
      <FlexElement>
        {/* <Button
          type="primary"
          icon="solution"
          className={styles.login}
          onClick={() => showCadastro()}
        >
          Cadastrar
        </Button>*/}
        <Button
          type="primary"
          icon="login"
          className={styles.login}
          onClick={() => showLogin()}
        >
          Login
        </Button>
      </FlexElement>
    )}
  </FlexElement>
);

Topbar.propTypes = {
  changeTab: PropTypes.func.isRequired,
  handleDropdown: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  selectedTab: PropTypes.array.isRequired,
  // showCadastro: PropTypes.func.isRequired,
  showLogin: PropTypes.func.isRequired,
  username: PropTypes.string,
};

Topbar.defaultProps = {
  username: '',
};

const mapStateToProps = () => ({
  isLogged: selectors.isLogged(),
  username: selectors.getUser().criador,
  selectedTab: selectors.getSelectedTab(),
});

const mapDispatchToProps = dispatch => ({
  changeTab: ({ key }) => dispatch(actions.selectTab([key])),
  handleDropdown: ({ key }) => {
    switch (key) {
      case 'sair':
        dispatch(actions.logout());
        break;
      default:
    }
  },
  showCadastro: () => dispatch(actions.showModalCadastro()),
  showLogin: () => dispatch(actions.showModalLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Topbar);
