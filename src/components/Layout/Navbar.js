import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {connect} from 'react-redux'
import Logo from '../assets/news-logo.svg'

function NavbarLayout({ setData, setTitle }) {
    const history = useHistory();
    const [search, setSearch] = useState ("");

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios("https://newsapi.org/v2/everything", {
            params: {
                q: search,
                apiKey: process.env.REACT_APP_API_KEY,
                pageSize:8
            }
        })
            .then((res) =>  {
                setData(res.data.articles)
                setTitle(search)
                localStorage.setItem('title', search)

                localStorage.setItem('mainCard', JSON.stringify(res.data.articles.slice(0,1)[0]))
                localStorage.setItem('bottomCard', JSON.stringify(res.data.articles.slice(1,4)))
                localStorage.setItem('rightCard', JSON.stringify( res.data.articles.slice(4,)))
            })
        history.push('/search')
    }
    return (
        <>
        <Container>
            <div className="d-flex align-items-center my-2">
                <div className="col-xl-3 col-lg-3 col-md-3 d-none d-md-block">
                    <img src="https://preview.colorlib.com/theme/news/assets/img/logo/logo.png" alt=""  />
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                    <div className="f-right">
                        <img src="https://preview.colorlib.com/theme/news/assets/img/gallery/header_card.png" alt="" style={{width:"100%"}} />
                    </div>
                </div>
            </div>
        </Container>
        <Navbar bg="dark" expand="lg" >
            <Navbar.Brand href="/"> <img src={Logo} alt="news-logo" width="50"/> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" style={{color:"white"}}>
                    <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>
                </Nav>
                {/* <Form inline onSubmit={handleSubmit}>
                    <FormControl type="text" placeholder="Search news about..." className="mr-sm-2" value={search} onChange={updateSearch} />
                    <Button type='submit' variant="outline-success">Search</Button>
                </Form> */}
                <Form onSubmit={handleSubmit}>
                    <Form.Row className="align-items-center">
                        <Col xs="auto">
                            <FormControl type="text" placeholder="Search news about..." className="mr-sm-2" value={search} onChange={updateSearch} />
                        </Col>
                        <Col xs="auto">
                            <Button type='submit' variant="outline-success">Search</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </Navbar.Collapse>
    </Navbar>
    </>
    )
}

  const mapDispactToProps = dispatch => {
    return {
        setData : (data) => dispatch({
            type : "SET_DATA",
            payload:data
        }),
        setTitle : (title) => dispatch({
            type : "SET_TITLE",
            payload:title
        })
    }}
  
  export default connect(null, mapDispactToProps)(NavbarLayout);
