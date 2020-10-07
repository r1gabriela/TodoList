import React from 'react';
import ReactDOM from 'react-dom';


export default class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { items: [], text: '' }
    }

    render() {
        return (
            <div>
                <h1>Tarefas</h1>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='new-todo'>
                        Adicionar tarefa
                    </label>
                    <br></br>
                    <input
                        id='new-todo'
                        onChange={this.handleChange}
                        value={this.state.text}
                    />

                    <button>
                        Adicionar #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ' '

        }))
    }
}

class TodoList extends React.Component {
    render(){
        return(
            <ul>
        {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
        ))}
    </ul>
        )
    }
}

  
       











