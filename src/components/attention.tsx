import { MDXComponents, MDXContent } from "mdx/types";
import { ReactComponentElement, ReactDOM, ReactElement } from "react";
import styled from "styled-components";

function component({className, children}: {className?: string, children?: ReactElement}) {
    return (
        <div className={className}>
            <div className="header">attnetion</div>
            <div>{children}</div>
        </div>
    )
}

const Attention = styled(component)`
    border: 1px solid tomato;
    border-radius: 5px;
    color: tomato;
    padding: 10px;
    font-size: 14px;
    & .header{
        font-size: 20px;
    }
`;
export default Attention;