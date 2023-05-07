import {MDXProvider} from '@mdx-js/react'
import Code from "../components/code";
import CodeBlock from "../components/codeBlock";

const components = {
  code: (props) => <Code {...props} />,
  pre: (props) => <CodeBlock {...props} />,
}

export default function App({Component, pageProps}) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}