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
  top: 3rem;
  left: 0;
  width: ${({ isOpen }: Props) => isOpen ? '10rem' : '2.5rem'};
  height: 80px;
  border-radius: 0 20px  20px 0;
  border: 1.2px solid #fff;
  border-left: none;
  background: ${transparentize(0.35, '#3498d8')};
  transition: 400ms;
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
