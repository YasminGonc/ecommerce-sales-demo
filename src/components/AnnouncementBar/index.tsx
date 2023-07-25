import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import Slider, { SliderSettings } from '../Slider'
import * as S from './styles'

export type AnnouncementBarProps = {
  announcements: string[]
}

const settings: SliderSettings = {
  infinite: true,
  arrows: false,
  nextArrow: <CaretRight aria-label="Next information" />,
  prevArrow: <CaretLeft aria-label="Previous information" />
}

export function AnnouncementBar({ announcements }: AnnouncementBarProps) {
  if (announcements.length > 1) {
    settings.arrows = true
  }

  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {announcements.map((announcement) => (
          <S.Text key={announcement}>{announcement}</S.Text>
        ))}
      </Slider>
    </S.Wrapper>
  )
}
