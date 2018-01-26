import React from "react";

class Name extends React.Component {
    handleChange = () => {
        if (typeof this.props.onChange === "function") {
            this.props.onChange();
        }
    };

    render() {
        return (
            <div>
                <p>Nazwa potrawy:</p>
                <input type={'text'} onChange={this.props.onChange} value={this.props.name}/>
            </div>
        )
    }
}
class AddIngredients extends React.Component{
    render(){
        return(
            <div>
                <fieldset>
                <input type={'text'}></input>
                <input type={'text'}></input>
                <div>+</div>
                <ul>
                </ul>
                </fieldset>
            </div>
        )
    }
}
class IngredientToAdd extends React.Component{

    handleChangeNumber = (e) =>{
        if (typeof this.props.onChangeNum === 'function') {
            this.props.onChangeNum(e);
        }
    };
    handleChangeIngr = (e) =>{
        if (typeof this.props.onChangeIngr=== 'function') {
            this.props.onChangeIngr(e);
        }
    };
    handleClick = (e) => {
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(e);
        }
    };
    render(){
        return(
            <div>
                <p>Nazwa składnika</p>
                <input type={"text"} value={this.props.ingr} onChange={this.handleChangeIngr}/>
                <p>Ilość składnika</p>
                <input type={"text"} value={this.props.number} onChange={this.handleChangeNumber}/>
                <div className={"addIngr"} onClick={this.handleClick}>DODAJ</div>
            </div>
        )
    }
}
class Ingredients extends React.Component {
    constructor(props){
        super(props);
        this.state={
            display: 'none',
            number: '',
            ingr: '',
            list: []
        }
    }
    handleClickAdd = () =>{
        this.setState({
            display: 'block',
        })
    };
    handleClickAddList = () =>{
        this.setState({
            display: 'none',
        })
    };
    handleChangeIngr = (e) =>{
        let ingr = e.target.value;
        this.setState({
            ingr: ingr,
        });
    };
    handleChangeNum = (e) =>{
        let num = e.target.value;
        this.setState({
            number: num,
        });
    };
    handleClickAddToList = () =>{
        let item = `${this.state.ingr}  ${this.state.number}`;
        if (typeof this.props.onClick === 'function') {
            this.props.onClick(item);
        }
    };

    render() {
        const list = this.props.ingredients.map(item => <li key={item}>{item}</li>);
        return (
            <div>
                <p>Składniki:</p>
                <div className={'add'}>
                <label>Dodaj składnik</label>
                <div onClick={this.handleClickAdd}>+</div>
                </div>
                <div className={'close'} onClick={this.handleClickAddList} style={{display: this.state.display}}>X</div>
                <fieldset style={{display: this.state.display}}>
                    <IngredientToAdd onClick={this.handleClickAddToList} ingr={this.state.ingr} number={this.state.number} onChangeIngr={this.handleChangeIngr} onChangeNum={this.handleChangeNum}/>
                    <ul>
                        {list}
                    </ul>
                </fieldset>

            </div>
        )
    }
}

class Type extends React.Component {
    handleChange = (e) => {
        if (typeof this.props.onChange === "function") {
            this.props.onChange(e);
        }
    };

    render() {
        return (
            <div >
                <p>Typ potrawy:</p>
                <div className={'type'}>
                <label>Śniadanie</label>
                <input type={'checkbox'} onChange={e=>this.props.onChange('breakfast', e.target.checked)} checked={this.props.breakfast}></input>
                <label>Obiad</label>
                <input type={'checkbox'} onChange={e=>this.props.onChange('dinner', e.target.checked)} checked={this.props.dinner}></input>
                <label>Kolacja</label>
                <input type={'checkbox'} onChange={e=>this.props.onChange('supper', e.target.checked)} checked={this.props.supper}></input>
                <label>Deser</label>
                <input type={'checkbox'} onChange={e=>this.props.onChange('desert', e.target.checked)} checked={this.props.desert}></input>
                <label>Przekąska</label>
                <input type={'checkbox'} onChange={e=>this.props.onChange('sideDish', e.target.checked)} checked={this.props.sideDish}></input>
                </div>
            </div>
        )
    }
}

class Image extends React.Component {
    handleChange = (e) => {
        if (typeof this.props.onChange === "function") {
            this.props.onChange(e);
        }
    };

    render() {
        return (
            <div>
                <p>Dodaj zdjęcie potrawy:</p>
                <input type={'text'} onChange={this.props.onChange} value={this.props.img}/>
            </div>
        )
    }
}

class Time extends React.Component {
    handleChange = (e) => {
        if (typeof this.props.onChange === "function") {
            this.props.onChange(e);
        }
    };

    render() {
        return (
            <div>
                <p>Czas przygotowania w minutach:</p>
                <input type={'text'} onChange={this.props.onChange} value={this.props.time}/>
            </div>
        )
    }
}

class Recipe extends React.Component {

    handleChange = (e) => {
        if (typeof this.props.onChange === "function") {
            this.props.onChange(e);
        }
    };

    render() {
        return (
            <div>
                <p>Przygotowanie</p>
                <textarea onChange={this.props.onChange} value={this.props.recipe}></textarea>
            </div>
        )
    }
}

class Form extends React.Component {
    state = {
        name: '',
        img: '',
        time: '',
        ingredients: [],
        recipe: '',
        breakfast: false,
        dinner: false,
        supper: false,
        desert: false,
        sideDish: false
    };
//Form methods
    handleSubmit = (e) => {
        e.preventDefault();
        if (typeof this.props.addRecipe === "function") {
            this.props.addRecipe(this.state);
        }
    };
    handleChangeName = (e) => {
        this.setState({
            name: e.target.value,
        });
        this.state.name = '';
    };
    handleChangeIngredients = (e) => {
        const ingr = this.state.ingredients.slice();
        ingr.push(list);
        this.setState({
            ingredients: ingr,
        });
        this.state.ingredients = [];
    };

    handleChangeType = (e) => {
        this.setState({
            type: e.target.value,
        });
        this.state.type = '';
    };
    setStateForm = (name, value) =>{
        this.setState({
            [name]: value,
        })
    };
    handleChangeImage = (e) => {
        this.setState({
            img: e.target.value,
        });
        this.state.img = '';
    };
    handleChangeTime = (e) => {
        this.setState({
            time: Number(e.target.value),
        });
        this.state.time = '';
    };
    handleChangeRecipe = (e) => {
        this.setState({
            recipe: e.target.value,
        });
        this.state.recipe = '';
    };
    handleAddIngredients = (item) => {
        const list = this.state.ingredients.slice();
        list.push(item);
        this.setState({
            ingredients: list,
        });
        this.state.ingredients = [];
    };
    render() {
        return (
            <div className={'form'}>
                <fieldset>
                    <form onSubmit={this.handleSubmit}>
                        <Name name={this.state.name} onChange={this.handleChangeName} value={this.state.nameInput}/>
                        <Ingredients ingredients={this.state.ingredients} onChange={this.handleChangeIngredients} onClick={this.handleAddIngredients}>
                            <AddIngredients/>
                        </Ingredients>
                        <Type type={this.state.type} onChange={this.setStateForm} breakfast={this.state.breakfast} dinner={this.state.dinner} supper={this.state.supper} desert={this.state.desert} sideDish={this.state.sideDish}/>
                        <Image img={this.state.img} onChange={this.handleChangeImage}/>
                        <Time time={this.state.time} onChange={this.handleChangeTime}/>
                        <Recipe recipe={this.state.recipe} onChange={this.handleChangeRecipe}/>
                        <button type={"submit"}>DODAJ</button>
                    </form>
                </fieldset>
            </div>
        )
    }
}


export default Form