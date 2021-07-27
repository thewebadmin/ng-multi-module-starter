export class Environment {
  public production: boolean;
  public appVersion: string;
  public websiteURL: string;
  public website = 'ng-multi-module-starter.com';

  constructor(init?: Partial<Environment>) {
    Object.assign(this, init);
  }
}
