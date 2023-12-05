import { UserState } from '@/types';

export function countStates(users: UserState[]): [string, number][] {
  const stateQuantity: Map<string, number> = new Map();

  for (const user of users) {
    const { state } = user;
    stateQuantity.set(state, (stateQuantity.get(state) || 0) + 1);
  }

  return Array.from(stateQuantity.entries());
}
