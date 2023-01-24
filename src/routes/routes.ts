import { RoutesConstent } from 'constants/routes';
import Golf from 'pages/golf';

const routes = [{
    path: RoutesConstent.notFound,
    Component: Golf,
    children: []
}]

export default routes