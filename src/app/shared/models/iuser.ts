export interface Iuser {
  userName: string;
  userId: string;
  userRole: 'candidate' | 'superadmin' | 'admin';
}
