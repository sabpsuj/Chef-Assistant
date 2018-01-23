import React from 'react';
import ReactDOM from 'react-dom';


document.addEventListener('DOMContentLoaded', function () {

    class Name extends React.Component {
        handleChange = (e) => {
            console.log(e.target.element);
        };

        render() {
            return (
                <div>
                    <p>Nazwa potrawy:</p>
                    <input type={'text'} onChange={this.handleChange} value={this.props.name}/>
                </div>
            )
        }
    }

    class Ingredients extends React.Component {
        handleChange = (e) => {
            console.log(e.target.element);
        };

        render() {
            return (
                <div>
                    <p>Składniki:</p>
                    <label>Dodaj składnik</label>
                    <button>+</button>
                </div>
            )
        }
    }

    class Type extends React.Component {
        handleChange = (e) => {
            console.log(e.target.element);
        };

        render() {
            return (
                <div>
                    <p>Typ potrawy:</p>
                    <label>Śniadanie</label>
                    <input type={'checkbox'} onChange={this.handleChange} checked={false}></input>
                    <label>Obiad</label>
                    <input type={'checkbox'} onChange={this.handleChange} checked={false}></input>
                    <label>Kolacja</label>
                    <input type={'checkbox'} onChange={this.handleChange} checked={false}></input>
                    <label>Deser</label>
                    <input type={'checkbox'} onChange={this.handleChange} checked={false}></input>
                    <label>Przekąska</label>
                    <input type={'checkbox'} onChange={this.handleChange} checked={false}></input>
                </div>
            )
        }
    }

    class Image extends React.Component {
        handleChange = (e) => {
            console.log(e.target.element);
        };

        render() {
            return (
                <div>
                    <p>Dodaj zdjęcie potrawy:</p>
                    <input type={'text'} onChange={this.handleChange} value={this.props.url}/>
                </div>
            )
        }
    }

    class Time extends React.Component {
        handleChange = (e) => {
            console.log(e.target.element);
        };

        render() {
            return (
                <div>
                    <p>Czas przygotowania w minutach:</p>
                    <input type={'text'} onChange={this.handleChange} value={this.props.time}/>
                </div>
            )
        }
    }

    class Recipe extends React.Component {
        handleChange = (e) => {
            console.log(e.target.element);
        };

        render() {
            return (
                <div>
                    <p>Przygotowanie</p>
                    <textarea onChange={this.handleChange} value={this.props.recipe}></textarea>
                </div>
            )
        }
    }

    class Form extends React.Component {
        state = {
            name: '',
            url: '',
            time: 0,
            ingredients: '',
            recipe: `Opisz jak przygotować Twoje danie... `,
            type: ''
        };

        render() {
            return (
                <div>
                    <fieldset>
                        <legend>Dodaj przepis</legend>
                        <form>
                            <Name name={this.state.name}/>
                            <Ingredients ingredients={this.state.ingredients}/>
                            <Type type={this.state.type}/>
                            <Image url={this.state.url}/>
                            <Time time={this.state.time}/>
                            <Recipe recipe={this.state.recipe}/>
                        </form>
                    </fieldset>
                </div>
            )
        }
    }

    class App extends React.Component {
        render() {
            return (
                <Form/>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});