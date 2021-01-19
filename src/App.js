
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state = {
    titre: `L'empire Ottoman`,
    titre2: `Partie 2`

  }

  changeTitle = (e) => {
    this.setState({

      titre: 'La Republique de la Turquie',


    });
  }

  changePara = (p) => {

    let para = document.querySelector(`p`)
    para.innerHTML = 'Je suis le nouveau para '

  }

  changementViaInput = (e)=>{
    let input = document.querySelector(`input`)
    console.log(e.target);
    console.log(input.value);

    this.setState({
      titre2 : input.value
     })

  
  }

  changementViaArea =(e)=>{

    let para2 = document.querySelector(`.p2`);

   
  
    // let ValeurArea = e.target.value;

    
    para2.innerHTML = e.target.value

  }

  render() {

    return (
      <div className="ElementParent">

        <h1 onClick={this.changeTitle}>{this.state.titre} </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione alias perspiciatis modi sequi distinctio delectus.
        </p>
        <button onClick={this.changePara}>Modifier le paragraphe</button>

        <h2>{this.state.titre2}</h2>
        <input type="text"/>
        <button onClick={this.changementViaInput} >apliquer la modification</button>

        <p className="p2">
          second para
        </p>
        
        <textarea name="" id="" cols="30" rows="10" onInput={this.changementViaArea}></textarea>




      </div>
    )
  }
}


export default App;
