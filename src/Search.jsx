import React,  {useState}from 'react'

const Search = ({inputValue}) => {

    const [input, setInput] = useState("")

    const handleChange = (event) => {
            const value = event.target.value.toLowerCase()
              setInput(value)
              inputValue(value)
        }

  return (
    <div>
        <input onChange={handleChange} placeholder="Search by Name" value ={input}/>
    </div>
  )
}

export default Search