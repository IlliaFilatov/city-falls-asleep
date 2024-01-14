'use client'

import { useEffect, useState } from 'react'
import { Container, RoleTitle, RoleDescription } from './styles'
import { ICardProps } from './props'
import { RoleType } from 'types'
import { COLORS } from 'constants/theme'

export const Card: React.FC<ICardProps> = ({ title, description, type }) => {
  const [color, setColor] = useState(COLORS.white)

  useEffect(() => {
    if (type === RoleType.mafia) setColor(COLORS.accent)
    if (type === RoleType.town) setColor(COLORS.secondary)
    if (type === RoleType.neutral) setColor(COLORS.white)
  }, [])

  return (
    <Container>
      <RoleTitle color={color}>{title}</RoleTitle>
      <RoleDescription color={color}>{description}</RoleDescription>
    </Container>
  )
}
