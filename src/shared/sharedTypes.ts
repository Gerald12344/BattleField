export type SettingsType = object &
  {
    name: string;
    Shirt?: number;
    pants?: number;
    price: number;
    level: number;
    UUID: number;
    Cover?: Model;
    Tool?: Model;
    Gadet?: Model;
    Perk?: String;
    group?: number;
    rank?: number;
  }[];

export type SettingsTypeObject = object &
{
  name: string;
  Shirt?: number;
  pants?: number;
  price: number;
  level: number;
  UUID: number;
  Cover?: Model;
  Tool?: Model;
  Gadet?: Model;
  Perk?: String;
  group?: number;
  rank?: number;
}
