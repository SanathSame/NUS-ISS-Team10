import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const FilterContainer = styled.div`
  ${tw`flex flex-col items-center mt-8`}
`
const SearchInput = tw.input`border rounded p-2 mx-1 my-1`
const SearchButton = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mx-1 my-1`}
`
const ResetButton = styled.button`
  ${tw`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg mx-1 my-1`}
`

const ResultsText = tw.p`text-sm font-semibold text-gray-800 text-center`

export default (props) => {
  const { setFilteredFlights, filteredFlights, flightData } = props
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')

  const handleReset = () => {
    setFilteredFlights(flightData)
    setInput1('')
    setInput2('')
    setInput3('')
    setInput4('')
  }

  const handleSearch = () => {
    console.log('inputs: ', input1, input2, input3, input4)
    if (input1 === '' && input2 === '' && input3 === '' && input4 === '') {
      return
    }
    const res = flightData.filter(flight => {
      const arrivalCity = flight.arrival_city.toLowerCase()
      const arrivalCountry = flight.arrival_country.toLowerCase()
      const departureCity = flight.departure_city.toLowerCase()
      const departureCountry = flight.departure_country.toLowerCase()
      const price = flight.ticket_price
      return (
        (arrivalCity.includes(input1.toLowerCase()) ||
        arrivalCountry.includes(input1.toLowerCase())) &&
        (departureCity.includes(input2.toLowerCase()) ||
        departureCountry.includes(input2.toLowerCase())) &&
        (price <= parseFloat(input3))
      )
    })
    setFilteredFlights(res)
  }

  return (
    <FilterContainer>
      <div>
        <SearchInput id='input1' type="text" placeholder="Destination" value={input1} onChange={(e) => setInput1(e.target.value)} />
        <SearchInput id='input2' type="text" placeholder="Origin" value={input2} onChange={(e) => setInput2(e.target.value)} />
      </div>
      <div>
        <SearchInput id='input3' type="number" placeholder="Budget" value={input3} onChange={(e) => setInput3(e.target.value)} />
        <SearchInput id='input4' type="text" placeholder="..." value={input4} onChange={(e) => setInput4(e.target.value)} />
      </div>
      <div>
        <ResetButton onClick={handleReset}>Reset</ResetButton>
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
      <div>
        <ResultsText>Showing {filteredFlights.length} results</ResultsText>
      </div>
    </FilterContainer>
  )
}
