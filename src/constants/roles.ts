import { Role, RoleType } from 'types'

export const ROLES: Array<Role> = [
  {
    title: 'Mafia member',
    description:
      'Regular member of the Mafia group. Work together to eliminate the other players during the night phases.',
    type: RoleType.mafia,
  },
  {
    title: 'Don',
    description:
      'Often has a special ability, such as the power to influence lynching decisions or a night action.',
    type: RoleType.mafia,
  },
  {
    title: 'Citizen',
    description: 'Innocent player aiming to identify Mafia members.',
    type: RoleType.town,
  },
  {
    title: 'Sheriff',
    description: 'Investigates players alignments (Mafia or innocent).',
    type: RoleType.town,
  },
  {
    title: 'Doctor',
    description: 'Protects one player each night from Mafia attacks.',
    type: RoleType.town,
  },
  {
    title: 'Vigilante',
    description:
      'Can eliminate a player of their choosing, potentially at the risk of eliminating an innocent.',
    type: RoleType.town,
  },
  {
    title: 'Serial Killer',
    description: 'Seeks to be the last player standing by eliminating others at night.',
    type: RoleType.neutral,
  },
  {
    title: 'Jester/Fool',
    description: 'Wins if they are eliminated by the town during the day phase.',
    type: RoleType.neutral,
  },
  {
    title: 'Survivor',
    description: 'Wins by surviving until the game`s end, regardless of which faction wins.',
    type: RoleType.neutral,
  },
]
