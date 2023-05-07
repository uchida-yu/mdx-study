import Example from '../../posts/example.mdx'
import { FancyLink } from '../../components/fancyLink'
import Link from "next/Link";

function HomePage() {
    return (
      <div>
        <Link href="/">home</Link><br/>
        <Example
          name="Mars"
          components={{ 
            // Pass a component.
            Planet: () => <span style={{ backgroundColor:'aquamarine'}}>this is component</span>,
            // Map `h1` (`# heading`) to use `h2`s.
            h1: 'h2',
            // Map `a` (`[link](href)`) to use `FancyLink`s.
            a:(props) => FancyLink(props),
            // Rewrite `em`s (`*like so*`) to `i` with a goldenrod foreground color.
            em: (props) => <i style={{color: 'goldenrod'}} {...props} />,
            // Pass a layout (using the special `'wrapper'` key). -> これはMDXの特殊なキーで、MDXのコンテンツをラップするために使用されます。
            wrapper: ({components, ...rest}) => <main style={{ backgroundColor:'pink' }} {...rest} />,
            // This nested component can be used as `<theme.text>hi</theme.text>`
            theme: {
              danger: (props) => <span style={{color: 'tomato'}} {...props}/>,
              muted: (props) => <a style={{color: 'gray'}} {...props}/>
            }
          }}
        /><br/>
      </div>
    )
  }
  
export default HomePage