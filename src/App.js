import React from 'react'
import Counter from './components/Counter/Counter'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      mount: false
    }

    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
  }

  render(){
    return (
      <main className="flex flex-col items-center justify-center min-h-screen gap-y-2">
        { this.state.mount ? <Counter factor={10} /> : null }
        <button 
          className="bg-red-400 text-2xl w-52 flex justify-center py-2 rounded-md font-semibold text-white mt-2"
          onClick={this.unmountCounter}  
        >
          Desmontar
        </button>
        <button 
          className="bg-green-400 text-2xl w-52 flex justify-center py-2 rounded-md font-semibold text-white"
          onClick={this.mountCounter}  
        >
          Montar
        </button>
      </main>
    );
  }
}

export default App;
