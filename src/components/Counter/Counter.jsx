import React from 'react';

//Icons
import { Icon } from '@iconify/react';
import add16Filled from '@iconify-icons/fluent/add-16-filled';
import subtract16Filled from '@iconify-icons/fluent/subtract-16-filled';

export default class Counter extends React.Component{
    
    // Constructor
    constructor(props){
        super(props);
        
        this.state = {
            counter: 0
        } // Initalize the state

        this.increment = () => this.setState({ counter: this.state.counter + 1 }) // Increment counter state by 1
        this.decrement = () => this.setState({ counter: this.state.counter - 1 }) // Decrement counter state by 1
    }
    
    // Derivade State from props
    static getDerivedStateFromProps(props, state){

        console.log(`The next value will be ${state.counter * props.factor}`)

        return {
            ...state
        }
    }

    // Component Mounted
    componentDidMount(){
        console.log("The counter is ready!!");
    }

    // Should update?, only when the (counter*factor) is more than 100
    shouldComponentUpdate(nextProps, nextState){

        if(nextState.counter * nextProps.factor >= 100){
            this.setState({counter: this.state.counter});
            return false
        }

        return true // Yes, it should
    }
    // Snapshot
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`Before -> counter: ${prevState.counter}`);
        return null
    }

    // Component Updated
    componentDidUpdate(){
        console.log(`Current -> counter: ${this.state.counter}`);
    }

    // Component Unmount
    componentWillUnmount(){
        console.log("The counter died")
    }

    // Display the counter
    render(){
       return(
        <section className="p-2 shadow-md bg-white flex items-center gap-x-1">
            <button 
                className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-md font-bold text-4xl"
                onClick={this.decrement} // Call it when the button is clicked
            >
                <Icon icon={subtract16Filled} className="text-gray-600"/>
            </button>
            <p className="px-3 font-bold text-4xl -mt-1">
                {this.state.counter * this.props.factor /* Display counter state value*/}
            </p>
            <button 
                className="w-10 h-10 flex justify-center items-center bg-gray-200 rounded-md font-bold text-4xl"
                onClick={this.increment}
            >
                <Icon icon={add16Filled} className="text-gray-600"/>
            </button>
        </section>
       )
    };
}