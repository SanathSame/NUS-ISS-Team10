import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { parse } from 'date-fns'

const FilterContainer = styled.div`
  ${tw`flex flex-col items-center mt-8`}
`
const FilterInput = tw.input`border rounded p-2 mx-1 my-1`
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
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange

  const handleReset = () => {
    setFilteredFlights(flightData)
    setInput1('')
    setInput2('')
    setInput3('')
    setDateRange([null, null])
  }

  const handleSearch = () => {
    console.log('inputs: ', input1, input2, input3, input4, startDate, endDate)
    if (input1 === '' && input2 === '' && input3 === '' && startDate === null && endDate === null) {
      return
    }
    const res = flightData.filter(flight => {
      const arrivalCity = flight.arrival_city.toLowerCase()
      const arrivalCountry = flight.arrival_country.toLowerCase()
      const departureCity = flight.departure_city.toLowerCase()
      const departureCountry = flight.departure_country.toLowerCase()
      const price = flight.ticket_price
      const departureDate = parse(flight.departure_date, 'dd-MM-yyyy', new Date())

      const isMatch1 = !input1 || (arrivalCity.includes(input1.toLowerCase()) || arrivalCountry.includes(input1.toLowerCase()))
      const isMatch2 = !input2 || (departureCity.includes(input2.toLowerCase()) || departureCountry.includes(input2.toLowerCase()))
      const isMatch3 = !input3 || (price <= parseFloat(input3))
      const isMatch4 = !startDate || (startDate < departureDate)
      const isMatch5 = !endDate || (endDate > departureDate)

      return (
        isMatch1 && isMatch2 && isMatch3 && isMatch4 && isMatch5
      )
    })
    setFilteredFlights(res)
  }

  return (
    <FilterContainer>
      <div>
        <FilterInput id='input1' type="text" placeholder="Destination" value={input1} onChange={(e) => setInput1(e.target.value)} />
        <FilterInput id='input2' type="text" placeholder="Origin" value={input2} onChange={(e) => setInput2(e.target.value)} />
        <FilterInput id='input3' type="number" placeholder="Budget" value={input3} onChange={(e) => setInput3(e.target.value)} />
      </div>
      <div>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          onChange={(update) => {
            setDateRange(update)
          }}
          isClearable={true}
          showIcon={true}
          placeholderText="Date range"
        />
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
