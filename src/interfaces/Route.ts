interface Route {
  path: string;
  serviceId?: string;
  url?: string;
  stripPrefix?: 1;
  retryable?: 0;
  status?: 1;
  routeName: string;
  routeDesc?: string;
  filters?: string;
  isAuth?: 1;
}

export default Route;
