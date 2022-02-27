import React, {useState} from "react";

function App() {
  let base_humans = ['Henry','Jonathan','Alison','Scarlett','Nathalia','Kevin','Dan','Steve','Alan','Al','Lynden','Mike','Patrick','Dianna','Olga','Michael','Harris','Francis']
  let partners = []
  let [partnerState,setPartnerState] = useState([])
  function randomize(){
    partners =[]
    setPartnerState([]);
    let humans = [...base_humans]
    console.log('Randomizing...')
    while (humans.length >0){
      if (humans.length >3){
        let rand = humans[Math.floor(Math.random() *humans.length)]
        // console.log(rand)
        let randloc = humans.indexOf(rand)
        humans.splice(randloc,1)
        let rand2 = humans[Math.floor(Math.random() *humans.length)]
        // console.log(rand2)
        let randloc2 = humans.indexOf(rand2)
        humans.splice(randloc2,1)
        let pair = rand+' - '+rand2
        partners.push(pair)
        setPartnerState([...partnerState,pair]);
        // console.log(rand+'-'+rand2)
        // console.log(humans.length)
      } else if (humans.length==2){
        // console.log(humans[0]+'-'+humans[1])
        let pair = humans[0]+' - '+humans[1]
        partners.push(pair)
        setPartnerState(partners);
        humans.splice(0,2)
        console.log(partners)
        console.log('Randomization complete.')
      }}
  }
  // randomize()

  let partnersToDisplay = partnerState.length>0?partnerState.map((group,index) =>{
    return(
      <React.Fragment>
        <div className="list-container"> 
          <div className="list-group">
            <div className="card" key={index}>
                <div className="card-body" >
                  <h5 className="card-title">{(index+1)+': '+group}</h5>
                </div>
            </div>
            </div>
        </div>
      </React.Fragment>
    )}):''

    function handleRandomizeClick(){
      randomize();
    }
  
  return (
    <body>
    <div className="App">
      <h1 className="title">GROUP RANDOMIZER</h1>
      <header className="App-header">
        <button className='random-button' onClick={handleRandomizeClick}>Roll the Dice</button>
        {partnersToDisplay}
      </header>
      <div className="spacer"></div>
    </div>
    </body>

  );
}

export default App;
