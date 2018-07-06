import React from 'react';

class Recipe extends React.Component {
    url = "http://localhost:3000/recipe";
    state = {
        recipies: null,
        display: 'none',
        text: '',
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

    handleOnChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    };

    componentDidMount() {
        this.showRecipe()
    };

    render() {
        if (this.state.recipies === null) {
            return <p>Dodaj przepis</p>;
        }
        let recipeList = [];
        if (this.state.text === '') {
            recipeList = this.state.recipies.map((i) => <li key={i.id}>
                <div><RecipeToShow name={i.name} img={i.img} time={i.time} ingredients={i.ingredients.join(' , ')}
                                   recipe={i.recipe}/>
                </div>
            </li>);
        } else {
            this.state.recipies.forEach(el => {
                el.ingredients.forEach(ing => {
                    if (ing.includes(this.state.text)) {
                        recipeList.push(<div><RecipeToShow name={el.name} img={el.img} time={el.time}
                                                           ingredients={el.ingredients.join(' , ')} recipe={el.recipe}/></div>);

                    }
                })
            })
        }

        return (<div><SearchBar recipies={this.state.recipies} textChange={this.handleOnChange}
                                searchClick={this.handleOnClick} filterText={this.state.text}/>
                <ul className={'recipes'}>
                    {recipeList}
                </ul>
            </div>
        )
    }
}

class RecipeToShow extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.img}/>
                <h2>Czas przygotowania: {this.props.time} minut</h2>
                <p className={'ingr'}><span style={{fontWeight:'bold'}}>Składniki:</span> {this.props.ingredients}</p>
                <p className={'content'}><span style={{fontWeight:'bold'}}>Sposób przygotowania:</span> {this.props.recipe}</p>
            </div>
        )
    }
}

class SearchBar extends React.Component {

    handleClick = () => {
        if (typeof this.props.searchClick === 'function') {
            this.props.searchClick(this.props.recipies)
        }
    };

    render() {
        return (
            <input className={'searchbar'} type="text" placeholder="Co masz w lodówce?" value={this.props.filterText}
                   onChange={this.props.textChange}/>
        )
    }
}


export {Recipe, SearchBar};
