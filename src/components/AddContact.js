import React from "react";

class AddContact extends React.Component {

    state = {
        name:"",
        email:"",
    }

    addToContact = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("Please fill all the fields");
            return
        }
        // Recieving and calling function from props
        this.props.addContactHandler(this.state);
        // console.log(this.state);
        this.setState({name:"", email:""});
    } 

    render() {
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.addToContact}>
                <div className="field">
                    <label>Name</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e)=> this.setState({name:e.target.value})}
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e)=>this.setState({email:e.target.value})}
                    />
                </div>
                <button className="ui button blue">Add</button>
                </form>
        </div>
        )
    }
        
    
}

export default AddContact;