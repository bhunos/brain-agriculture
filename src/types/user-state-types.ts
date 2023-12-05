export type UserState = {
  id?: number;
  document: string;
  producerName: string;
  farmName: string;
  city: string;
  state: string;
  totalHectaresFarm: number;
  arableHectares: number;
  vegetationHectares: number;
  plantedCrops: number[];
};
