import React, { Component } from "react";
import { Card, Button, Container, CardColumns } from "react-bootstrap";
import { authProvider } from "./authProvider";

export default class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  componentDidMount() {
    // this.fetcAccessToken();
    // var headers = new Headers();
    // var bear = window.msal.acquireTokenSilent({scopes: ["https://<domain>.onmicrosoft.com/<API>/user_impersonation"]});
    // var bearer = "Bearer " + access_token;
    // headers.append("Authorization", bearer);
    // var options = {
    //      method: "GET",
    //      headers: headers
    // };
    // var graphEndpoint = "https://graph.microsoft.com/v1.0/me";

    this.setState({ isLoading: true });
    fetch("http://localhost:50976/api/todo")
      .then(response => response.json())
      .then(data => this.setState({ data: data, isLoading: false }));
  }

  render() {
    const { data, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading Todolist</p>;
    } else {
      return (
        <div>
          <Container>
          <CardColumns>
            {data.map(d => (
              <Card key={d.id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{d.name}</Card.Title>
                  <Card.Text>
                  The todo is <b>{d.isComplete ? 'currently' : 'not'}</b> finished.
                  </Card.Text>
                </Card.Body>
                <Button variant="primary">Delete</Button>
              </Card>
            ))}
          </CardColumns>
        </Container>
        </div>
      );
    }
  }
}
