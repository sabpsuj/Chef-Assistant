import React from 'react';
import {Recipe, SearchBar} from "./recipe.jsx";


class Home extends React.Component{
    render(){
        return(
            <div>
                <SearchBar />
                <div>
                    <Recipe/>
                </div>
            </div>
        )
    }
}

export default Home