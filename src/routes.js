import { useRoutes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Crud from './Crud';
import Kalkulator from './Kalkulator';

function Router() {
  let element = useRoutes([
		{
			path: '/',
			element: (
				<Layout>
					<Home />
				</Layout>
			),
		},
		{
			path: 'crud-js',
			element: (
				<Layout>
					<Crud />
				</Layout>
			),
		},
		{
			path: 'kalkulator-js',
			element: (
				<Layout>
					<Kalkulator />
				</Layout>
			),
		},
	]);
  return element;
}

export default Router;
