import React,{Component} from 'react';
import Footer from './footerComponent';
import Header from './headComponent';
class Signup extends Component{
    constructor(props)
    {
        super(props);
        this.state={};
        this.OnSubmit = this.OnSubmit.bind(this); 
    }
    OnSubmit(values)
    {
        console.log(values)
        // this.setState(e);
        console.log("hello");
        
        console.log(this.state)
    }
    
    render()
    {
        return(
            <div>
            <Header/>
            <br/>
            <br/>
            <div class="container col-md-4 offset-4 loginform">
                <form onSubmit={(values)=>this.OnSubmit(values)}>
                    <div class="mheaders">Signup</div>
                    <br/>
                    <div class="form-group">
                        <label  for="username">Username/Email</label>
                        <input type="text" name="username" class="form-control " placeholder="username or email"/>
                    </div>
                    <div class="form-group">
                        <label  for="username">Password</label>
                        <input type="password" name="password" class="form-control " placeholder="Password"/>
                    </div>
                    <button class="btn btn-success" type="submit">Signup</button>
                </form>
                
                
            </div>
            <Footer/>
            </div>
        )
    }
}
export default Signup;