export function nav() {
  return [
    { text: '随手记', link: '/src/notes/' },
    {
      text: 'Bug笔记',
      items: [
        {
          items: [
            { text: '测试', link: '/src/bugs/' },
          ],
        },
      ],
    },
    {
      text: 'Fun',
      items: [
        {
          items: [
            { text: '前端', link: '/src/fun/' },
          ],
        },
      ],
    },
  ]
}
