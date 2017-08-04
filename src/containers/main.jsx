import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import NotFound from '~/components/not-found';
import Topbar from './topbar';
import Cadastro from './cadastro';
import Login from './login';
import Programas from './programas';
import Selecoes from './selecoes';
import styles from './main.less';

const { Content, Header } = Layout;

const Main = () => (
  <Layout className={styles.container}>
    <Header className={styles.header}>
      <a className={styles.image} href="/">
        <img src="http://i.imgur.com/zoYZVLz.png" alt="AUXILIA" />
        <span>AUXILIA</span>
      </a>
      <Topbar />
      <Login />
      <Cadastro />
    </Header>
    <Content className={styles.content}>
      <Switch>
        <Route exact path="/" component={Programas} />
        <Route path="/selecoes" component={Selecoes} />
        <Route component={NotFound} />
      </Switch>
    </Content>
  </Layout>
);

export default Main;
