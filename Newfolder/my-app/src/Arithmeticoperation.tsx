import * as  React from 'react';

 export default class Arithmeticoperation extends React.Component <{},any>{
    
       public state = {
         result: 0,
         input1: 0,
         input2: 0,
       };
       
      
    
       public handleChange = (e:any) =>{
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    public reset=()=> {
      
      this.setState({ input1: 0, input2: 0, result: 0 })
      
    }
    
   public add = () => {
        const{input1, input2} :any= this.state;
        this.setState({
           result: (parseInt(input1)+parseInt(input2))
        });
    };
    
   public sub = () => {
      const{input1, input2}:any = this.state;
      this.setState({
          result: (parseInt(input1)-parseInt(input2))
      })
    }
    
   public multiply = () => {
      const{input1, input2}:any = this.state;
      this.setState({
          result: (parseInt(input1)*parseInt(input2))
      })
    }
    
   public divide = () => {
      const{input1, input2}:any = this.state;
      this.setState({
          result: (parseInt(input1)/parseInt(input2))
      })
    }
    
    
    public render() {
      return (
        <div>
           
           Input 1:<input type="text" name="input1" onChange={this.handleChange} /><br/>
           Input 2:<input type="text" name="input2" onChange={this.handleChange} /><br/>
            <button onClick={() => { this.add() }}>Add</button>                                                                                
            <button onClick={()=>{this.sub()}}>Sub</button>
            <button onClick={()=>{this.multiply()}}>Multiply</button>
            <button onClick={()=>{this.divide()}}>Divide</button>
            <button onClick={()=>{this.reset()}}>Reset</button><br/><br/>
            
            <input id="result" value={this.state.result} disabled={true}/>
    
    
        </div>
      );
    
     }
    
    }