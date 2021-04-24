import React from 'react';
import Sidebar from './components/global/Sidebar';
import { Layout } from 'antd';
import Headbar from './components/global/Headbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPanel from './pages/MainPanel';
import Gallery from './pages/Gallery';
const { Content } = Layout;
const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar />
        <Layout>
          <Headbar />
          <Content>
            <Switch>
              <Route exact path='/' component={MainPanel} />
              <Route exact path='/gallery' component={Gallery} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
