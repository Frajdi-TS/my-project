const CardTitle = ({titleColor, title}) =>{ 


console.log(titleColor)
console.log(title)

return <h2 style={{color: titleColor}}>
    {title}
    </h2>
}

export default CardTitle;