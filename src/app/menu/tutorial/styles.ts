import styled from 'styled-components'
import { TRANSITION } from 'constants/theme'

export const Container = styled.div`
  padding: 64px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
`

export const Section = styled.div<{ color: string }>`
  display: flex;
  padding: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ color }) => `linear-gradient(to left, rgba(0, 0, 0, 0.8), ${color})`};
  border-radius: 8px;
`

export const TextContainer = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  opacity: 0.6;
  cursor: pointer;
  transition: ${TRANSITION.regular};

  &:hover {
    opacity: 1;
  }
`

export const SectionTitle = styled.h3<{ color: string }>`
  margin-bottom: 16px;
  font-size: 48px;
  color: ${({ color }) => color};
  text-shadow: 0 2px 10px #000;
  border-bottom: ${({ color }) => `1px solid ${color}`};
`

export const SectionDescription = styled.p<{ color: string }>`
  font-size: 24px;
  text-align: right;
  color: ${({ color }) => color};
  text-shadow: 0 2px 20px #000;
`

export const CardsContainer = styled.div`
  display: flex;
  width: 50%;
  gap: 16px;
  flex-wrap: wrap;
`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
