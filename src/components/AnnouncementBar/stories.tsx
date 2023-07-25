import { StoryObj, Meta } from '@storybook/react'
import { AnnouncementBar, AnnouncementBarProps } from '.'

export default {
  title: 'Announcement Bar',
  component: AnnouncementBar,
  args: {
    announcements: ['Free shipping', '10% off on first purchase']
  }
} as Meta<AnnouncementBarProps>

export const Basic: StoryObj<AnnouncementBarProps> = {}
