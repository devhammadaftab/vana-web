import Route from 'routes'
import './App.css';
import Store from 'store';
import Layout from 'components/layout';

function App() {
  return (
    <Store>
      <Layout>
        <Route />
      </Layout>
    </Store>
  );
}

export default App;
