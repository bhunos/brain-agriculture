import { UserState } from '@/types';

export function totalHectares(users: UserState[]) {
  return users.reduce((total, user) => total + user.totalHectaresFarm, 0);
}
