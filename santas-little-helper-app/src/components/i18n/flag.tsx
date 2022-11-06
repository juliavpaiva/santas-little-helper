interface FlagProps {
    image: string,
    isSelected: boolean
}

const Flag = function (props: FlagProps) {
    
    return (<img alt="flag" src={props.image} className={props.isSelected ? 'flag selected' : 'flag'} width={30}/>)
}
  
export default Flag