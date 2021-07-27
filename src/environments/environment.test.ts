import { Environment } from 'src/environments/environment.model';

export const environment: Environment = new Environment({
  production: false,
  appVersion: require('../../package.json').version + '-test',
  websiteURL: 'http://test.ng-multi-module-starter.com'
});
