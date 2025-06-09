import { useLocation } from 'react-router-dom';

export function useRouteTitle(defaultTitle = 'Hello there!') {
  const location = useLocation();
  const [routeTitle, setRouteTitle] = useState(defaultTitle);

  useEffect(() => {
    const path = location.pathname;
    const route = path.replace(/^\//, '').split('/')[0];
    if (!route) {
      setRouteTitle(defaultTitle);
    } else {
      setRouteTitle(route.charAt(0).toUpperCase() + route.slice(1));
    }
  }, [location, defaultTitle]);

  return routeTitle;
}
