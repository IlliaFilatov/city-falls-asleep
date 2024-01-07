'use client'

import { Container, RoleTitle, RoleDescription } from './styles'
import { CardProps } from './props'

export const Card: React.FC<CardProps> = ({ title, description, type }) => {
  return (
    <Container>
      <RoleTitle>{title}</RoleTitle>
      <RoleDescription>{description}</RoleDescription>
    </Container>
  )
}
