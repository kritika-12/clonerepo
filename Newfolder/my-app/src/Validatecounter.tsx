import  React from 'react';

class Validatecounter extends React.Component<{},any> {

  public array: string[] = [];
  public counter: number = 0;
  public state: {
    array: string[];
    count1: number;
    count2: number;
    count3: number;
  }
  constructor(props: any) {
    super(props);
    this.state = {
      array: [],
      count1: 0,
      count2: 0,
      count3: 0,
    };
  }
  public render() {
    return (
      <div>

        <button id='01' onClick={() => { this.inc1() }}>{this.state.count1}</button>
        <button id='02' onClick={() => { this.inc2() }}>{this.state.count2}</button>
        <button id='03' onClick={() => { this.inc3() }}>{this.state.count3}</button><br/><br/>
        <button onClick={() => { this.validate() }}>Validate</button>

      </div>
    );
  }

  public inc1() {
    const array = this.state.array;
    const n = array.includes("01");
    if (n === false) {
      array.push("01");
      this.setState({ count1: this.state.count1 + 1 });
    } else {
      const index = array.indexOf("01");
      const x = array.splice(index, 1).toString();
      array.push(x);
      this.setState({ count1: this.state.count1 + 1 });
    }
  }
  public inc2() {
    const array = this.state.array;
    const n = array.includes("02");
    if (n === false) {
      array.push("02");
      this.setState({ count2: this.state.count2 + 1 });
    } else {
      const index = array.indexOf("02");
      const x = array.splice(index, 1).toString();
      array.push(x);
      this.setState({ count2: this.state.count2 + 1 });
    }
  }
  public inc3() {
    const array = this.state.array;
    const n = array.includes("03");
    if (n === false) {
      array.push("03");
      this.setState({ count3: this.state.count3 + 1 });
    } else {
      const index = array.indexOf("03");
      const x = array.splice(index, 1).toString();
      array.push(x);
      this.setState({ count3: this.state.count3 + 1 });
    }
  }
  public validate() {
    this.counter = 0;
  const array = this.state.array;
    if (array.includes("01") === false) {
      this.setState({ count1: this.state.count1 + 1 });
      this.counter = 1;
    }
    if (array.includes("02") === false) {
      this.setState({ count2: this.state.count2 + 1 });
      this.counter = 1;
    }
    if (array.includes("03") === false) {
      this.setState({ count3: this.state.count3 + 1 });
      this.counter = 1;
    }
    if (this.counter === 0) {
      const val = array[0];
      if (val === "01") {
        this.setState({ count1: this.state.count1 + 1 });
      } else if (val === "02") {
        this.setState({ count2: this.state.count2 + 1 });
      } else if (val === "03") {
        this.setState({ count3: this.state.count3 + 1 });
      }
    }

  }

}

export default Validatecounter;