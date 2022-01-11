interface infoPeopleProps {
    name: string,
    age: string,
    hobby: string
  }

function Card({name, age, hobby} : infoPeopleProps) {
    return(
        <>
            <li>{name} - {age} - {hobby}</li>
        </>
    )
}

export default Card; 