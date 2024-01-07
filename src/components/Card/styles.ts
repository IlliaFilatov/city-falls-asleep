import styled from 'styled-components'
import { COLORS, TRANSITION } from 'constants/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 250px;
  height: 320px;
  border-radius: 8px;
  background-color: ${COLORS.main};
  cursor: pointer;
  transition: ${TRANSITION.regular};

  &:hover {
    box-shadow: 0px 4px 12px 0px ${COLORS.black};
    transform: perspective(1000px) rotateX(20deg) skewX(0deg);
  }
`

export const RoleTitle = styled.h2`
  color: ${COLORS.accent};
  font-size: 24px;
  margin-bottom: 10px;
`

export const RoleDescription = styled.p`
  color: ${COLORS.secondary};
  font-size: 16px;
`
