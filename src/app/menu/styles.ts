import Image from 'next/image'
import styled from 'styled-components'

import { COLORS, TRANSITION } from 'constants/theme'

export const Container = styled.div`
  position: relative;
  padding: 64px;
  width: 100%;
  height: 100vh;
`

export const BgContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: grid;
  justify-content: flex-end;
  top: 0;
  left: 0;
  z-index: -1;
`

export const StyledImage = styled(Image)<{ transparent: boolean }>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  opacity: ${({ transparent }) => (transparent ? 0 : 1)};
  transition: ${TRANSITION.regular};
`

export const BackgroundOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(to right, ${COLORS.darkRGBA}, ${COLORS.lightRGBA});
`

export const Logo = styled.h3`
  position: absolute;
  padding: 64px;
  width: 160px;
  color: ${COLORS.white};
  font-size: 80px;
  line-height: 0.7;
  letter-spacing: -5px;
`
export const ControlBtn = styled.button`
  position: fixed;
  top: 64px;
  right: 64px;
  display: flex;
  align-self: flex-start;
  padding: 16px 32px;
  background-color: rgba(0, 0, 0, 1);
  border: 2px solid ${COLORS.white};
  color: ${COLORS.white};
  border-radius: 4px;
  cursor: pointer;
  transition: ${TRANSITION.regular};
  opacity: 0.4;

  &:hover {
    box-shadow: 0px 4px 12px 0px ${COLORS.black};
    opacity: 0.8;
  }
`
