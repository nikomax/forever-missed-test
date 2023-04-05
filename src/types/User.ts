export enum Roles {
  Admin = 'Admin',
  Guest = 'Guest'
}

export default interface User {
  id: string;
  name: string;
  email: string;
  role: Roles
}
