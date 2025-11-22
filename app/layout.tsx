import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: {
    default: 'SealTrust Documentation',
    template: '%s | SealTrust Docs'
  },
  description: 'Documentation for SealTrust - AI Dataset Verification & Encrypted Storage Platform',
  openGraph: {
    title: 'SealTrust Documentation',
    description: 'AI Dataset Verification & Encrypted Storage Platform built on Sui',
    siteName: 'SealTrust Docs',
  },
}

const logo = (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
    <img src="/logo.svg" alt="SealTrust" width={24} height={24} style={{ display: 'block' }} />
    <span>SealTrust</span>
  </span>
)

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/Seal-Trust"
  />
)

const footer = (
  <Footer>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ fontSize: '12px', color: '#666' }}>Powered by</span>
        <span style={{ background: '#4DA2FF', padding: '4px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
          <img src="/sui-logo.svg" alt="Sui" height={16} style={{ height: '16px', width: 'auto' }} />
        </span>
        <span style={{ background: '#fff', padding: '4px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
          <img src="/walrus-logo.svg" alt="Walrus" height={16} style={{ height: '16px', width: 'auto' }} />
        </span>
        <span style={{ background: '#fff', padding: '4px 8px', borderRadius: '6px', display: 'flex', alignItems: 'center' }}>
          <img src="/seal-logo.svg" alt="Seal" height={16} style={{ height: '16px', width: 'auto' }} />
        </span>
      </div>
      <p style={{ fontSize: '12px', color: '#666' }}>
        MIT {new Date().getFullYear()} © SealTrust
      </p>
    </div>
  </Footer>
)

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Seal-Trust/sealtrust-docs/tree/main"
          footer={footer}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink="Edit this page on GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
