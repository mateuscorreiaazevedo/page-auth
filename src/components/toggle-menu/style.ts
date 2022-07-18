import { transparentize } from 'polished'
import styled from 'styled-components'

type Props ={
  isOpen: boolean
}

export const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  top: 80px;
  left: 10px;
  width: ${({ isOpen }: Props) => isOpen ? '10rem' : '2.5rem'};
  height: 80px;
  border-radius: 0 20px  20px 0;
  border: 1.2px solid #fff;
  border-left: none;
  background: ${transparentize(0.35, '#8DEEF9')};
  backdrop-filter: blur(2px);
  transition: 400ms;
  box-shadow: inset 0px 6px 10px rgba(255,255,255, 0.8);
`

export const ButtonBox = styled.div`
  &:hover {
    span {
      display: block;
    }
  }
  span {
    font-size: .8rem;
    display: none;
    position: absolute;
    top: 80px;
    left: 14px;
    animation: view-name 800ms;
    @keyframes view-name {
      from {
        opacity: 0%;
      }
    }
  }
`

export const NavOptions = styled.nav`
  display: flex;
  gap: 8px;
  svg {
    animation: icons 500ms;
    @keyframes icons {
      from {
        transform: scale(0);
      }
    }
  }
`

export const SocialLink = styled.a`
  text-decoration: none;
  font-size: 25px;
  transition: 400ms;
  color: ${({ theme }) => theme.colors.text};
  &:hover {
    span {
      display: block;
    }
  }
  span {
    font-size: .8rem;
    display: none;
    position: absolute;
    top: 80px;
    animation: view-name 800ms;
    @keyframes view-name {
      from {
        opacity: 0%;
      }
    }
  }
`

export const ToggleContainer = styled.div`
  display: flex;
  position: absolute;
  right: 1px;
  top: 24px;
  svg {
    font-size: 25px;
    animation: scale-icon 600ms;
    @keyframes scale-icon {
      from {
        transform: scale(0);
      }
    }
  }
`
export const Switch = styled.input.attrs({ type: 'checkbox' })`
  cursor: pointer;
  height: 25px;
  width: 25px;
  position: absolute;
  appearance: none;
`
