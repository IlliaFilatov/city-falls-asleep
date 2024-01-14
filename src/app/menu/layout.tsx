'use client'

import { useContext, useMemo } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Inter, Bebas_Neue, Anton, Playfair_Display_SC, Josefin_Sans } from 'next/font/google'

import { ThemeContext } from 'context/themeContext'
import Routes from 'constants/routes'
import { Container, StyledImage, BackgroundOverlay, Logo, BgContainer, ControlBtn } from './styles'
import { IMenuLayoutProps } from './props'

const font = Bebas_Neue({ weight: '400', subsets: ['latin'] })

const Layout: React.FC<IMenuLayoutProps> = ({ children }) => {
  const pathname = usePathname()
  const router = useRouter()
  const { isNight, switchTheme } = useContext(ThemeContext)

  const controlBtnLabel = useMemo(
    () => (pathname === Routes.menuRoute ? 'Switch Theme' : 'Back to menu'),
    [pathname],
  )

  const controlBtnHandler = () => {
    if (pathname === Routes.menuRoute) {
      switchTheme()
    } else {
      router.push(Routes.menuRoute)
    }
  }

  return (
    <Container>
      <BgContainer>
        <StyledImage
          transparent={!isNight}
          src='/night.png'
          width={1920}
          height={1180}
          alt='Cityscape'
        />
        <StyledImage
          transparent={isNight}
          src='/day.jpg'
          width={1920}
          height={1180}
          alt='Cityscape'
        />
        <BackgroundOverlay />
        <Logo className={font.className}>City falls asleep</Logo>
      </BgContainer>
      {children}
      <ControlBtn onClick={controlBtnHandler}>{controlBtnLabel}</ControlBtn>
    </Container>
  )
}

export default Layout
