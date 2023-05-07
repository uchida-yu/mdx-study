export function FancyLink(props){
    const { children, ...rest } = props;
    return <>
        <a style={{ color: 'orange' }} {...rest}>{ children }</a>
    </>
}

export default FancyLink