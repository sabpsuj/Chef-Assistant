import React from 'react';

class Recipe extends React.Component {
    url = "http://localhost:3000/recipe";
    state = {
        recipies: null
    };
    showRecipe = (data) => {
        fetch(this.url)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error('Błąd połaczenia!');
                }
            })
            .then(resp => {
                this.setState({
                    recipies: resp,
                })
            }).catch(err => {
            console.error(err);
        });
    };

    componentDidMount() {
        this.showRecipe();
    }

    render() {
        if (this.state.recipies === null) {
            return <p>Dodaj przepis</p>;
        }
        let recipeList = this.state.recipies ? this.state.recipies.map((i) => <li key={i.id}>
            <div><h1>{i.name}</h1>
                <img src={i.img}/>
                <p>{i.recipe}</p></div>
            <button data-id={i.id} onClick={this.handleClick}>Więcej</button>
        </li>) : <p>Dodaj przepis</p>;
        return (
            <div>
                <ul>
                    {recipeList}
                </ul>
            </div>
        )
    }
}

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Co masz w lodówce?" value={this.props.filterText}
                       onChange={this.props.textChange}/>
                <select>
                    <option>Śniadanie</option>
                    <option>Obiad</option>
                    <option>Kolacja</option>
                    <option>Deser</option>
                    <option>Przekąska</option>
                </select>
                <div style={{border: '1px solid black'}}>Szukaj</div>
            </div>
        )
    }
}

class SearchRecipe extends React.Component {
    render() {
        let rows = [];
        this.state.recipies.forEach(el => {
            el.ingredients.forEach(ing => {
                console.log(ing);
            })
        });
        return (<div></div>)
    }
}

export {Recipe, SearchBar};
