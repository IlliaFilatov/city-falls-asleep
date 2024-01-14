export enum RoleType {
  mafia = 'Mafia',
  town = 'Town',
  neutral = 'Neutral',
}

export interface IRole {
  title: string
  description: string
  type: RoleType
  detailedDescription?: string
}
