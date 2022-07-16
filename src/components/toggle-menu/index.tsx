import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SwitchTheme } from '../switch-theme'
import * as S from './style'
import React from 'react'

export const ToggleMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  const openMenu = () => setIsOpen(prev => !prev)

  return (
    <S.MenuContainer isOpen={isOpen}>
      {isOpen && (
        <S.NavOptions>
          <SwitchTheme />
          <S.SocialLink href='https://www.github.com/mateuscorreiaazevedo/page-auth' target='_blank'>
            <FaGithub/>
          </S.SocialLink>
          <S.SocialLink href='https://www.instagram.com/mateuscorreiaazevedo/' target='_blank'>
            <FaInstagram/>
          </S.SocialLink>
          <S.SocialLink href='https://www.linkedin.com/in/mateuscorreiaazevedo' target='_blank'>
            <FaLinkedin/>
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
