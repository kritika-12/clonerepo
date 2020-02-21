import * as React from'react';
class Comparevalues extends React.Component<{},any> {
    

public state: { input1: number; input2: number; input3: number; color1: string; color2: string; color3: string;};
constructor(props: any) {
super(props);
this.state = {
            input1: 0,
            input2: 0,
            input3: 0,
            color1: "",
            color2: "",
            color3: ""

        }
    }
public handleChange = (e: { target: { name: any; value: any; }; }) => {
const { name, value } = e.target;
this.setState({
            [name]: value
        })
    }

public validate = () => {
const { input1, input2, input3 } = this.state;
const max = Number(input2);
const min = Number(input1);
const mul = Number(input3);

if (min >= max) {
alert("min value in valid");
this.setState({
                color1: "red"
            })

        } 
        else {
this.setState({
                color1: ""
            })
        }// first requirement

if (mul>= max) {
alert("mul value invalid");
this.setState({
                color3: "red"

            })

        } else {
this.setState({
                color3: ""

            })
        }
if (mul> min) {

alert("mul value invalid");

this.setState({
                color3: "red"
            })


        }
else {
this.setState({
                 color3: ""

             })
         }


if (max % mul !== 0) {
alert("Mul should be factor of max");
this.setState({
                color3: "red"
            })
        } else {
this.setState({
                color3: ""
            })
        }
if (max % min !== 0) {
alert( " min should be factor of max " );
this.setState({
                color1: "red"
            })
        } else {
this.setState({
     color1: ""
            })
        }


    }

public render() {
return (
<div>
MIN: <input type="number" style={{ borderColor: this.state.color1 }} name="input1" onChange={this.handleChange}/>
MAX: <input type="number" style={{ borderColor: this.state.color2 }} name="input2" onChange={this.handleChange}/>
MUL: <input type="number" style={{ borderColor: this.state.color3 }} name="input3" onChange={this.handleChange}/>
<button onClick={this.validate}>Validate</button>

</div>
        );
    }
}
export default Comparevalues;