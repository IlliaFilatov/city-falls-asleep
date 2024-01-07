import styled from 'styled-components'
import { COLORS } from 'constants/theme'

export const Container = styled.div`
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const MafiaSection = styled(Section)`
  border: 1px solid ${COLORS.main};
  background: linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(120, 60, 60, 0.4));
`

export const TownSection = styled(Section)`
  border: 1px solid ${COLORS.main};
  background: linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(60, 120, 90, 0.4));
`

export const NeutralSection = styled(Section)`
  border: 1px solid ${COLORS.main};
  background: linear-gradient(to left, rgba(0, 0, 0, 0.4), rgba(120, 120, 120, 0.4));
`

export const CardsContainer = styled.div`
  display: flex;
  width: 50%;
  flex-wrap: wrap;
`

export const CardWrapper = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`
