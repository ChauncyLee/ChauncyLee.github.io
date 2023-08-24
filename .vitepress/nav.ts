export function nav() {
  return [
    { text: '随手记', link: '/src/notes/' },
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
