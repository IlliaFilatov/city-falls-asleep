import styled from 'styled-components'
import { COLORS, TRANSITION } from 'constants/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
  width: 250px;
  height: 320px;
  border-radius: 8px;
  background-color: ${COLORS.main};
  cursor: pointer;
  transition: ${TRANSITION.regular};
  opacity: 0.6;

  &:hover {
    box-shadow: 0px 4px 12px 0px ${COLORS.black};
    opacity: 1;
  }
`

export const RoleTitle = styled.h2<{ color: string }>`
  color: ${({ color }) => color};
  font-size: 24px;
  margin-bottom: 16px;
  justify-self: flex-start;
  border-bottom: ${({ color }) => `1px solid ${color}`};
`

export const RoleDescription = styled.p<{ color: string }>`
  flex-grow: 0.5;
  color: ${({ color }) => color};
  font-size: 16px;
  text-align: left;
`
