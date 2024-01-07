export enum RoleType {
  mafia = 'Mafia',
  town = 'Town',
  neutral = 'Neutral',
}

export interface Role {
  title: string
  description: string
  type: RoleType
  detailedDescription?: string
}
