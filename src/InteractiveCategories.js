import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Button, Col, FormControl, Row} from "react-bootstrap";
import {addCategory} from "./Actions";
import {Link} from "react-router-dom";

function InteractiveCategories(){

    const [text, setText] = useState("")
    const [state, dispatch] = useContext(StateContext)

    return(
        <div>
            <div>
                <h2>CATEGORIE</h2>
                {state.categories.map(c => <div><Link to={{pathname: `/${c.name.toLowerCase()}`}}>{c.name}</Link></div>)}
            </div>
            <div style={{marginTop:'50px'}}>
                <Row className="justify-content-center">
                    <Col md="4">
                        <FormControl type="text" value={text} placeholder="Nuova categoria" onChange={e => setText(e.target.value)}/>
                    </Col>
                    <Col md="auto">
                        <Button onClick={() => {
                            let err1 = false;
                            let err2 = false;
                            state.categories.map(c => {if(c.name===text) err1=true});
                            if(text==="") err2=true;
                            if(err1) {
                                window.alert("Nome categoria già inserito. Per favore modifica il nome e riprova.")
                            }else if(err2){
                                window.alert("Impossibile inserire categoria senza nome. Per favore inserisci un nome e riprova.")
                            }else{
                                dispatch(addCategory(text));
                                setText("");
                            }
                        }}>Add</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default InteractiveCategories