import Link from 'next/link'
import styled from 'styled-components'
import { COLORS, TRANSITION } from 'constants/theme'

export const Container = styled.div`
  position: relative;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`

export const MenuOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`

export const MenuOption = styled(Link)`
  color: ${COLORS.white};
  transition: ${TRANSITION.regular};
  font-size: 32px;
  text-transform: uppercase;

  &:hover {
    text-shadow: 0px 4px 12px ${COLORS.white};
  }
`
