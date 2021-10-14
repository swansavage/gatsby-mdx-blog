import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Headings, Code, Blockquote, Example } from './src/components/Complete'

const Testing = ({ children }) => {
  return <code className="code">{children}</code>
}

const components = {
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: Example,
}

export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
