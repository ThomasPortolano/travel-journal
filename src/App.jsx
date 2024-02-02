import Navbar from './components/navbar/Navbar'
import Card from './components/card/Card'
import Data from './data.js'

export default function App(props) {
  console.log(props)
  

  const cardArray = Data.map(card => {
    return (
      <Card
      key = {card.id}
      // location = {card.location}
      // title = {card.title}
      // startDate = {card.startDate}
      // endDate = {card.endDate}
      // description = {card.description}
      // url = {card.googleMapsUrl}
      // image = {card.imageUrl}
      card = {card}
      />
    )
    console.log(cardArray)
  })

  return (
    <div>
      <Navbar />
      <div className="card-list">
        {cardArray}
      </div>
    </div>
  )
}