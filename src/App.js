
import './App.css';
import React, { Component } from 'react';

class App extends Component {

  state={
        titre: `L'empire Ottoman`,
      
  }

  changeTitle = (e) =>{
    this.setState({

        titre: 'La Republique de la Turquie',
        
      
    });
  }

  changePara = (p)=>{

      let para = document.querySelector(`p`)
      para.innerHTML = 'Je suis le nouveau para '
    
  }

  render() {

    return (
      <div className="ElementParent">

        <h1 onClick={this.changeTitle}>{this.state.titre} </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione alias perspiciatis modi sequi distinctio delectus.
        </p>
        <button onClick={this.changePara}>Modifier le paragraphe</button>

      </div>
    )
  }
}


export default App;
