import {useContext, useState} from "react";
import {StateContext} from "./App";
import {Button, Card, Col, Container, FormControl, Row} from "react-bootstrap";
import {FaTrash} from "react-icons/fa";
import {addPurchase, removePurchase} from "./Actions";
import moment from 'moment'
import {Link} from "react-router-dom";

function Category({name}) {

    const [state, dispatch] = useContext(StateContext)
    let total = 0
    const [desc, setDesc] = useState("");
    const [cost, setCost] = useState(0);
    const [date, setDate] = useState(new Date());


    return (
        <div className="App">
            <Container>
                <header>
                    <span style={{float:'left'}}><Link to={{pathname: "/"}}>&#8592; Home</Link></span>
                    <h1>{name}</h1>
                </header>

                {state.purchases.map(p => {
                    if(p.cat===name) {
                        return (
                            <Card style={{margin:'1em', color:'black'}}>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Card.Title>{p.desc}</Card.Title>
                                        </Col>
                                        <Col>
                                            <Card.Subtitle>{p.date.format("DD MMMM YYYY")}</Card.Subtitle>
                                            <Card.Body>{p.cost.toFixed(2)} €</Card.Body>
                                        </Col>
                                        <Col>
                                            <FaTrash onClick={() => {
                                                if(window.confirm('Sei sicuro di voler eliminare questa spesa?')) {
                                                    dispatch(removePurchase(p.key));
                                                }
                                            }}/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        )
                    }
                })}

                {state.purchases.map(p => {
                    if(p.cat===name) {
                        total += Number(p.cost)
                    }
                })}

                <h2 style={{marginTop:'50px', marginBottom:'50px'}}>Totale: {total.toFixed(2)} €</h2>


                <Row>
                    <Col>
                        <FormControl type="text" placeholder="Descrizione" value={desc} onChange={e => {setDesc(e.target.value)}} />
                    </Col>
                    <Col>
                        <FormControl type="number" placeholder="Importo" value={cost} onChange={e => {setCost(e.target.value)}} />
                    </Col>
                    <Col>
                        <FormControl type="date" onChange={e => {setDate(moment(e.target.value, "YYYY-MM-DD"))}}/>
                    </Col>
                    <Col md="auto">
                        <Button onClick={() => {
                            if(desc==="" || cost===null || date===null) {
                                window.alert("Per favore, riempi tutti i campi e riprova.")
                            }else if(date.isBefore(moment())) {
                                window.alert("Data non valida. Inserire una data antecedente alla data odierna.")
                            }else if(cost<=0.0) {
                                window.alert("Importo non valido. Inserire un importo maggiore di 0.00€")
                            }else {
                                dispatch(addPurchase(name, desc, Number(cost), date));
                                setDesc("");
                                setCost(0.0);
                                setDate(moment());
                            }
                        }}>Aggiungi</Button>
                    </Col>
                </Row>


            </Container>
        </div>
    )
}

export default Category