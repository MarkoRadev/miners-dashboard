export interface MinerI {
  TH5s?: number;
  THAvg?: number;
  tB?: number;
  freq?: number;
  w?: number;
  s?: number;
  pdu: number;
  port: number;
}

export interface Container {
  number: number;
  name: string;
  label: string;
  values: MinerI[];
  version: number;
}

export interface DataFormat {
  [key: string]: Container;
}