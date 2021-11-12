import axios from "axios";
import React from "react";

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        //axios.get('https://jsonplaceholder.typicode.com/comments')
        axios.get('http://localhost:3000/users')
        .then((response) => {
            //console.log(response.data)
            this.setState({data:response.data})
            console.log(this.state.data)
        })
        .catch((error) => {
            console.log("ERROR", error)
        })
    }


    render() {
        return (
        <div>
            <ul>
                {this.state.data.map(rec=><li key={rec.id}>{rec.first_name} {rec.last_name}</li>)}
            </ul>
        </div>
        )
    }

}


export default App2;