import nextra from 'nextra'

const withNextra = nextra({
  // Enable LaTeX support
  latex: true,
  // Enable default copy code button
  defaultShowCopyCode: true,
})

export default withNextra({
  reactStrictMode: true,
})
