import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.red100};
    padding: ${theme.spacings.xxsmall};
    text-align: center;
    max-height: ${theme.spacings.xxlarge};

    .slick-prev,
    .slick-next {
      display: block;
      color: ${theme.colors.white};
      cursor: pointer;
      position: absolute;
      top: 50%;
      width: 2rem;
      height: 2rem;
      padding: 0;
      transform: translate(0, -50%);
    }
    .slick-prev {
      left: 30%;
    }
    .slick-next {
      right: 30%;
    }
    .slick-prev.slick-disabled,
    .slick-next.slick-disabled {
      visibility: hidden;
    }
    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }
    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      cursor: pointer;
    }

    ${media.lessThan('medium')`
      .slick-prev {
        left: 10%;
      }
      .slick-next {
        right: 10%;
      }
    `}
  `}
`
export const Text = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
  `}
`
