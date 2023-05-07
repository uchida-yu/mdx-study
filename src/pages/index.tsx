import { Content } from '../posts/example.mdx'
import Link from "next/Link";




function HomePage() {
    return (
      <div>
        <Link href="/example">example</Link><br/>
        <Content/><br/>
      </div>
    )
  }
  
export default HomePage