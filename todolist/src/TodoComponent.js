import React from 'react';



export default class Todo extends React.Component{
    constructor(props){
        super(props)
        this.state = { items:[], text:''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        return(
            <div>
                <h3>Tarefas</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='new-todo'></label>
                    <input 
                    id='new-todo'
                    onChange={this.handleChange}
                    value={this.state.text}
                    />
                    <button>
                        Adicionar#{this.state.items.length +1}
                    </button>
                </form>
            </div>
        );
    };

    handleChange(e){
        this.setState({ text: e.target.value })
    }

    handleSubmit(e){
        e.preventDefault()
        if(this.state.text.length === 0){
            return;
        };

        const newItem = {
            text: this.state.text,
            id: Date.now()
        };

        this.setState(state => ({
            items: this.state.items.concat(newItem),
            text: ' '
        }));
    }
}

class TodoList extends React.Component{
    render(){
        return(
            <ul>
                {this.props.items.map(item=> (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}





















//export default class Todo extends React.Component {

//     state = {
//         edit: false,
//         id: null,
//         mockData: [
//             {
//                 id: '1',
//                 title: 'Buy Milk',
//                 done: false,
//                 date: new Date()
//             },
//             {
//                 id: '2',
//                 title: 'Study',
//                 done: false,
//                 date: new Date()
//             },
//             {
//                 id: '3',
//                 title: 'Run',
//                 done: false,
//                 date: new Date()
//             }
//         ]
//     }


//     render() {

//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit.bind(this)}>
//                     <input
//                         type='text'
//                         name='item'
//                         className='item'
//                     />
//                     <button className='btn-add-item'>
//                         Add
//                 </button>
//                 </form>
//                 <ul>
//                     {this.state.mockData.map(item => (
//                         <li key={item.id} className={item.done? 'done': 'hidden'}>
//                             {item.title}<button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
//                             <button onClick={this.handleEdit.bind(this, item.id, item.title)}>Edit</button>
//                             <button onClick={this.handleComplete.bind(this)}>Complete</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.setState({ mockData: [...this.state.mockData, { id: Date.now() }, { title: e.target.item.value }, { done: false }, { date: new Date() }] });
//         e.target.item.value = '';
//     }

//     handleDelete(e) {
//         let id = arguments[0]
//         this.setState({
//             mockData: this.state.mockData.filter(item => {
//                 if (item.id !== id) {
//                     return item;
//                 }
//             }
//             )
//         })
//     }

//     renderEditForm(){
//         if(this.state.edit){
//             return(
//                 <div>
//                     <form onSubmit={this.handleUpdate.bind(this)}>
//                     <input 
//                     type='text'
//                     name='updatedItem'
//                     className='item'
//                     defaultValue={this.state.title}
//                     />
//                     <button className='update-add-item'>
//                         Update
//                     </button>
//                     </form>
//                     {this.renderEditForm()}
//                 </div>        
//             )
//         }
//     }

//     handleEdit(e){
//         this.setState({ edit:true, id: arguments[0], title: arguments[1] });
//     }

//     handleUpdate(e){
//         e.preventDefault();
//         this.setState({ mockData: this.state.mockData.map(item =>{
//             if(item.id === this.state.id){
//                 item['title'] = e.target.updatedItem.value;
//                 return item;
//             }
//             this.setState({ edit: false})
//         }) })
//     }

//     handleComplete(){
//         let id = arguments[0]
//         this.setState( { mockData: this.state.mockData.map(item => {
//             if(item.id === id){
//                 item['done'] = true;
//                 return item;
//             }
//             return item;
//         })})
//     }

// }
