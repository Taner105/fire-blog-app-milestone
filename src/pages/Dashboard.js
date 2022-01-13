import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';
import loading from "../assests/loading.gif"
import { getDatabase,onValue,query,ref} from "firebase/database"
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import moment from "moment"
import {FaHeart} from "react-icons/fa"
import {FiMessageSquare} from "react-icons/fi"







const Dashboard = (item) => {
    const [isLoading, setIsLoading] = useState();
    const [card, setCard] = useState();
    const published_date = item

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
                        <Card className='card-body' key={index} style={{maxWidth:'20rem', maxHeight:"25rem"}}>
                            <Card.Img id='card-img' variant="top" src={item.ımgUrl} />
                            <Card.Body className='body'>
                                <Card.Title style={{color:"blue", fontSize:"28px"}}>{item.title}</Card.Title>
                                <Card.Title style={{fontSize:"15px", color:"grey"}}> {moment(published_date).format("MMM DD, YYYY")}</Card.Title>
                               
                                <Card.Text>
                                {item.content}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><FaHeart/> 0 </ListGroupItem>
                                <ListGroupItem><FiMessageSquare/> 0 </ListGroupItem>
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
