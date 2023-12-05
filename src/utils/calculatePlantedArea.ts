import { UserState } from '@/types';

export function calculatePlantedArea(users: UserState[]): [string, number][] {
  let totalVegetationArea = 0;
  let totalFreeArea = 0;

  for (const user of users) {
    totalVegetationArea += user.vegetationHectares;
    totalFreeArea +=
      user.totalHectaresFarm - user.arableHectares - user.vegetationHectares;
  }

  return [
    ['Área de Vegetação', totalVegetationArea],
    ['Área Livre', totalFreeArea]
  ];
}
