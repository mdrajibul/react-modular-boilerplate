import { RouteNotFoundError } from '../exceptions/routeNotFound';
import routes from '../routes';

/**
 * Get a prepared route by ID from the routes file.
 * This include the prefix from the coordinator
 * configuration.
 *
 * Note: Use this instead of hard coding the paths.
 *
 * @param id - ID of the route
 */
export const getPreparedRoute = (id: string): string => {
  const route = getRouteById(id);

  return `/${route}`;
};

/**
 * Get a route by ID from the routes file.
 * This does not include the prefix from the
 * coordinator configuration.
 *
 * @param id - ID of the route
 */
export const getRouteById = (id: string): string => {
  const resolved = resolveByChain(id, routes);

  if (typeof resolved !== 'string') {
    throw new RouteNotFoundError(id);
  } else {
    return resolved;
  }
};

/**
 * Resolve a chain of nested IDs from the routes file.
 * Example: "page.one.sub" => "path/defined/in/routes"
 *
 * @param chain - ID chain
 * @param obj - Object of routes
 * @param separator - Optional separator, default is "."
 */
export const resolveByChain = (chain: string, obj: any, separator = '.') => {
  return chain.split(separator).reduce((o: any, p: any) => (o ? o[p] : undefined), obj);
};
