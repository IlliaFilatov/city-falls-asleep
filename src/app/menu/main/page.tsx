'use client'
import { useContext } from 'react'

import { ThemeContext } from 'context/themeContext'
import Routes from 'constants/routes'

import { Container, MenuOptionsContainer, MenuOption } from './styles'

export default function Menu() {
  const { switchTheme } = useContext(ThemeContext)

  return (
    <Container>
      <MenuOptionsContainer>
        <MenuOption href={Routes.tutorialRoute}>Create room</MenuOption>
        <MenuOption href={Routes.tutorialRoute}>Join room</MenuOption>
        <MenuOption href={Routes.tutorialRoute}>Tutorial</MenuOption>
      </MenuOptionsContainer>
    </Container>
  )
}
