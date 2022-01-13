import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';
import loading from "../assests/loading.gif"
import { getDatabase,onValue,query,ref} from "firebase/database"
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";


const Dashboard = () => {
    const [isLoading, setIsLoading] = useState();
    const [card, setCard] = useState();

    useEffect(() => {
        setIsLoading(true)
        const db = getDatabase();
        const userRef = ref(db, "fireblog")

        onValue(query(userRef), snapshot => {
            const dashboard = snapshot.val()
            const dashboardArray = [];
            for(let id in dashboard){
                dashboardArray.push({id, ...dashboard[id]})
            }
            setCard(dashboardArray)
            setIsLoading(false)
        })
    },[])
    const dateTime = moment( dateTime, 'MM-DD-YYYY HH:mm:ss',true).format("YYYY-MM-DD HH:mm:ss");

    return (
        <div className='dashboard-card'>
            <h1 id='dashboard-text'>—— DASHBOARD ——</h1>
            <div className='dashboard-loading'>
                {isLoading?
                (
                    <img id='loading-img' src={loading}  />):
                card?.length === 0?
                (<p>Ekrana yazdıralacak veri yok</p>):
                
                (
                    card?.map((item, index) => {
                       return(
                        <Card className='card-body' key={index} style={{maxWidth:'20rem', maxHeight:"20rem"}}>
                            <Card.Img id='card-img' variant="top" src={item.ımgUrl} />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                {dateTime}
                                <Card.Text>
                                {item.content}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Cras justo odio</ListGroupItem>
    
                            </ListGroup>
                        </Card>
                       )
                        
                   }) 
                )
               
            }
            </div>
            
        </div>
    )
}

export default Dashboard;
