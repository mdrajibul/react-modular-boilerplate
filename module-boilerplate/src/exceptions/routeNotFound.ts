export class RouteNotFoundError extends Error {
  constructor(id: string) {
    super(`The route id "${id}" is not declared in the routes file.`);
    this.name = 'RouteNotFoundError';
  }
}
