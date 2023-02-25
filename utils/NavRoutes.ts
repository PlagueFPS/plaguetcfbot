export const NavRoutes = [
  {
    id: 1,
    name: 'Commands',
    href: '#commands'
  },
  {
    id: 2,
    name: 'Add Bot To Twitch',
    href: 'https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=jmvhgbt1te7mm7ckrkre4kueqdor9n&redirect_uri=https://main--plaguetcfbot.netlify.app&scope=chat:edit+chat:read',
  },
  {
    id: 3,
    name: 'Add Bot To Discord',
    href: 'https://discord.com/api/oauth2/authorize?client_id=1078690524791324733&permissions=274878032960&scope=bot',
    target: '_blank'
  }
]