import React from 'react'
import randomColor from 'randomcolor'



export default function Banner() {
  const [quote, setQuote] = React.useState([{quote: "no pain, no gain", author: "me"}])
  const [picture, setPicture] = React.useState("")
  const [state, setState] = React.useState({color: "#000000",
                                             url: "https://images.unsplash.com/photo-1609377375722-46264cf88939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNzUwMTV8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY2NzkwMzc&ixlib=rb-4.0.3&q=80&w=1080",
                                            quote: "No Pain No Gain",
                                          author: "Me"})
  
  React.useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/quotes?category=courage&limit=10&key=8xzhuHBVuOETPKmD4qVPAQ==6Ke6nTWytmDSpFOd", 
            {method: "GET",
            headers: { 'X-Api-Key': '8xzhuHBVuOETPKmD4qVPAQ==6Ke6nTWytmDSpFOd'},
            contentType: 'application/json',
            success: function(result) {
              console.log(result);
            },
          error: function ajaxError(jqXHR) {
              console.error('Error: ', jqXHR.responseText);
          }})
    .then((response) => response.json())
    .then((data) => setQuote(() => {
      console.log(data)
      return {
              data
              }
    }))
  }, [])

  function handleChange() {
    let randomIndex=Math.floor(Math.random() * 10)
    setState(prevState => {
    return {url: picture.data[randomIndex].urls.regular,
      quote: quote.data[randomIndex].quote,
      author: quote.data[randomIndex].author,
      color: randomColor()}})
  }

  React.useEffect(() => {
    fetch("https://api.unsplash.com/photos/random?query=courage&client_id=WQdvohzvQrvMHEPpkbORIed4p3v-61T1x9ez4vh3KnQ&page=2&color=black_and_white&orientation=landscape&count=11")
    .then((response) => response.json())
    .then((data) => setPicture(() => {
      return {data}
    }))
}, [])
console.log(picture)
  return(
    <div className="h-screen flex items-center justify-center ease-in duration-700" style={{backgroundColor: state.color}}>
          <div className="flex flex-col justify-center items-center  w-[400px] bg-white p-3 text-white gap-3 rounded ease-in duration-700">
            <img className = "w-[400px] h-[300px] shadow-lg rounded ease-in duration-700" src={state.url} />
            <p className="text-center p-2 w-3/4 text-xl ease-in duration-700" style={{color: state.color}}>"{state.quote}"</p>
            <p className="text-center  text-xl italic ease-in duration-700" style={{color: state.color}}>{state.author}</p>
            <button className="text-white p-4 rounded-xl ease-in duration-700" style={{backgroundColor: state.color}} onClick={handleChange}>New Stuff</button>

          </div>
        </div>
    )
}



