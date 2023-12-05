import { MockCultures } from '@/mocks';
import { UserState } from '@/types';

export function countCultures(users: UserState[]): [string, number][] {
  const cultureQuantity: Map<string, number> = new Map();

  for (const user of users) {
    for (const cultureId of user.plantedCrops) {
      const culture = MockCultures.find(row => row.id === cultureId)?.cultures;

      if (culture) {
        cultureQuantity.set(culture, (cultureQuantity.get(culture) || 0) + 1);
      }
    }
  }

  return Array.from(cultureQuantity.entries());
}
