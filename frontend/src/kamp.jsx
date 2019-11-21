import React, { Component } from "react";
import { Card, Button, Container, CardColumns } from "react-bootstrap";
//import { authProvider } from "./authProvider";

export default class Kamp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: [
        {
          "KonkurranseId": 12,
          "GrenId": 14,
          "Dato": new Date(2019,12,15),
          "Sted": "Surnadal"
        },  
        {
          "KonkurranseId": 13,
          "GrenId": 14,
          "Dato": new Date(2020,1,20),
          "Sted": "Åndalsnes"
        }
      ],
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

    // this.setState({ isLoading: true });
    // fetch("http://localhost:3000/api/match")
    //   .then(response => response.json())
    //   .then(response => this.setState({ matches: response, isLoading: false }));

    this.setState({ isLoading: true });
    fetch("http://localhost:50486/api/kamp")
      .then(response => response.json())
      .then(data => this.setState({ matches: data, isLoading: false }));
  }

  render() {
    const { matches, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading matches</p>;
    } else {
      return (
        <div>
          <Container>
          <CardColumns >
            {matches.map(d => (
              <Card key={d.id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{d.sted}</Card.Title>
                  <Card.Text>
                    Sat whaaaaaaaayeyyeryeryeyryre
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