import { Environment } from 'src/environments/environment.model';

export const environment: Environment = new Environment({
  production: true,
  appVersion: require('../../package.json').version + '-prod',
  websiteURL: 'https://www.ng-multi-module-starter.com'
});
