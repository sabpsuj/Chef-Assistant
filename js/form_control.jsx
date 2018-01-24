import React from 'react';
import Form from './form.jsx';
import Recipe from './recipe.jsx';

class FormControl extends React.Component {
    url = "http://localhost:3000/recipe";
    state = {
        recipies: null
    };
    addRecipe = (data) => {
        console.log(data);
        fetch(this.url, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Błąd połaczenia!');
                }
            })
            .then(resp => {

            }).catch(err => {
            console.error(err);
        });
    };
    render() {
        return (
            <div>
                <Form recipies={this.state.recipies} addRecipe={this.addRecipe}/>

            </div>
        )
    }
}


export default FormControl