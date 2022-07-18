import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SwitchTheme } from '../switch-theme'
import * as S from './style'
import React from 'react'
import { ThemeContext } from 'styled-components'

type PropsMenu = {
  positionLeft: string
}

export const ToggleMenu = ({ positionLeft }: PropsMenu) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { title } = React.useContext(ThemeContext)

  const openMenu = () => setIsOpen(prev => !prev)

  return (
    <S.MenuContainer isOpen={isOpen} position={positionLeft} >
      {isOpen && (
        <S.NavOptions>
          <S.ButtonBox>
            <SwitchTheme />
            <span>
              {title !== 'light' ? 'Switch to light mode' : 'Switch to dark mode'}
            </span>
          </S.ButtonBox>
          <S.SocialLink href='https://www.github.com/mateuscorreiaazevedo/page-auth' target='_blank'>
            <FaGithub/>
            <span>Repository</span>
          </S.SocialLink>
          <S.SocialLink href='https://www.instagram.com/mateuscorreiaazevedo/' target='_blank'>
            <FaInstagram/>
            <span>Instagram</span>
          </S.SocialLink>
          <S.SocialLink href='https://www.linkedin.com/in/mateuscorreiaazevedo' target='_blank'>
            <FaLinkedin/>
            <span>LinkedIn</span>
          </S.SocialLink>
        </S.NavOptions>
      )}
      <S.ToggleContainer>
        <S.Switch onChange={openMenu} />
        {isOpen ? <IoMdArrowDropleft/> : <IoMdArrowDropright/>}
      </S.ToggleContainer>
    </S.MenuContainer>
  )
}
