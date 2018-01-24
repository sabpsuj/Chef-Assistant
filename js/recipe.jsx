import React from 'react';

class Recipe extends React.Component{
    render(){
        return(
            <div style={{width: '150px', height: '300px', border: '1px solid black', display: 'flex', flexWrap: 'nowrap'}}>
                <h1>Nazwa potrawy</h1>
                <div style={{width: '80px', height: '80px', border: '1px solid black'}}>zdjęcie potrawy</div>
                <p>Treść przepisu</p>
            </div>

        )
    }
}

export default Recipe