export class EthereumNetworkError extends Error {
  public name = this.constructor.name;

  public message = 'Current network is not supported';
}
