import React, {Component} from'react';
import Todoitem from '../Todoitem';



class Formulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            tarefa: '',  
            item: []

        };
        this.add = this.add.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    add(e){
        let state = this.state
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };  
            this.setState({item: [...state.item, newItem]});
        }
        e.preventDefault();
        this.setState({ tarefa: ''});
    }
    log(){
        console.log(this.state.item);
    }

    deleteItem(key){
        console.log('Item a ser deletado:' + key)
        let filtro = this.state.item.filter((items)=>{
            return(items.key !== key)
        })
        this.setState({item: filtro})
        
    }
    
    render(){
        return(
            
            <div>
                <header className="top">
                    <h1>CS<span>code</span></h1>
                </header>
                <form onSubmit={this.add} className="form" >
                    <input type="text" placeholder="Nova tarefa?" name="tarefa"
                            value={this.state.tarefa} onChange={ (ev) => this.setState({tarefa: ev.target.value})} 
                            ref={(event)=>this._tarefaInput = event }/>
                    
                    <input type="password" placeholder="*******"/>                    <button type="submit">Adicionar</button>
                    <button onClick={this.log}>log</button>

                   
                </form>
                <Todoitem lista={this.state.item } delete={this.deleteItem}/>
               
            </div>
        );
    }
}

export default Formulario;