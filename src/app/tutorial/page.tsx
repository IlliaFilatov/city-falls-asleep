'use client'

import { Card } from 'components'
import { ROLES } from 'constants/roles'
import { COLORS } from 'constants/theme'
import { RoleType } from 'types'

import {
  CardWrapper,
  CardsContainer,
  Container,
  SectionTitle,
  Section,
  TextContainer,
  SectionDescription,
} from './styles'

export default function Tutorial() {
  return (
    <Container>
      <Section color={COLORS.mafiaRGBA}>
        <CardsContainer>
          {ROLES.filter((el) => el.type === RoleType.mafia).map(({ title, description, type }) => (
            <CardWrapper key={title}>
              <Card title={title} description={description} type={type} />
            </CardWrapper>
          ))}
        </CardsContainer>
        <TextContainer>
          <SectionTitle color={COLORS.accent}>{RoleType.mafia}</SectionTitle>
          <SectionDescription color={COLORS.accent}>
            The Mafia consists of secretive individuals working together to eliminate the innocent
            townspeople. Their goal is to outnumber the town through covert actions and deception
            during the night.
          </SectionDescription>
        </TextContainer>
      </Section>
      <Section color={COLORS.townRGBA}>
        <CardsContainer>
          {ROLES.filter((el) => el.type === RoleType.town).map(({ title, description, type }) => (
            <CardWrapper key={title}>
              <Card title={title} description={description} type={type} />
            </CardWrapper>
          ))}
        </CardsContainer>
        <TextContainer>
          <SectionTitle color={COLORS.secondary}>{RoleType.town}</SectionTitle>
          <SectionDescription color={COLORS.secondary}>
            The Town represents the innocent civilians aiming to identify and eliminate the Mafia
            members. They use discussion, deduction, and unique abilities to protect the town and
            eliminate the Mafia.
          </SectionDescription>
        </TextContainer>
      </Section>
      <Section color={COLORS.neutralRGBA}>
        <CardsContainer>
          {ROLES.filter((el) => el.type === RoleType.neutral).map(
            ({ title, description, type }) => (
              <CardWrapper key={title}>
                <Card title={title} description={description} type={type} />
              </CardWrapper>
            ),
          )}
        </CardsContainer>
        <TextContainer>
          <SectionTitle color={COLORS.white}>{RoleType.neutral}</SectionTitle>
          <SectionDescription color={COLORS.white}>
            The Neutral roles are independent players with individual win conditions separate from
            the Mafia or Town. They add complexity to the game, pursuing their goals regardless of
            the other factions` success.
          </SectionDescription>
        </TextContainer>
      </Section>
    </Container>
  )
}
