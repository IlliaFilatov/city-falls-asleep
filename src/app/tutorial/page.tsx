'use client'

import { Card } from 'components'
import { ROLES } from 'constants/roles'
import { RoleType } from 'types'

import {
  CardWrapper,
  CardsContainer,
  Container,
  MafiaSection,
  NeutralSection,
  TownSection,
} from './styles'

export default function Tutorial() {
  return (
    <Container>
      <MafiaSection>
        <CardsContainer>
          {ROLES.filter((el) => el.type === RoleType.mafia).map(({ title, description, type }) => (
            <CardWrapper key={title}>
              <Card title={title} description={description} type={type} />
            </CardWrapper>
          ))}
        </CardsContainer>
      </MafiaSection>
      <TownSection>
        <CardsContainer>
          {ROLES.filter((el) => el.type === RoleType.town).map(({ title, description, type }) => (
            <CardWrapper key={title}>
              <Card title={title} description={description} type={type} />
            </CardWrapper>
          ))}
        </CardsContainer>
      </TownSection>
      <NeutralSection>
        <CardsContainer>
          {ROLES.filter((el) => el.type === RoleType.neutral).map(
            ({ title, description, type }) => (
              <CardWrapper key={title}>
                <Card title={title} description={description} type={type} />
              </CardWrapper>
            ),
          )}
        </CardsContainer>
      </NeutralSection>
    </Container>
  )
}
