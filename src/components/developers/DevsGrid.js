import React from "react";
import axios from "axios";
import DeveloperCard from "./DeveloperCard";
import { Grid, Row, Col } from "react-bootstrap";
import lodash from "lodash";
import Header from "./../layout/Header";
import Footer from './../layout/Footer';

class DevsGrid extends React.Component {
  state = {
    developers: [],
    pagination: {},
    hasNext: false
  };

  getDevelopers = (link) => {
    const currentDevs = this.state.developers;
    axios.get(link).then(results => {
      lodash.each(results.data.data, dev => {
        currentDevs.push(dev);
      });
      this.setState({
        developers: currentDevs,
        pagination: results.data.meta.pagination,
        hasNext: results.data.meta.pagination.links.next
      });
    });
  };

  getNextPage = () => {
    if(this.state.hasNext) {
      this.getDevelopers(this.state.pagination.links.next);
    }
  }

  componentDidMount() {
    this.getDevelopers("https://empleolaravel.com/api/developers");
  }

  render() {
    const devs = () => {
      return lodash.map(this.state.developers, dev => {
        return (
          <Col key={dev.id} md={4}>
            <DeveloperCard developer={dev} />
          </Col>
        );
      });
    };
    return (
      <div className="main">
        <Header titleline="Empleo Laravel Devs" />
        <Grid>
          <h1>Desarrolladores registrados en Empleo Laravel.</h1>
          <hr />
          <Row>{devs()}</Row>
          <hr />
          <Row>
            <Col md={4}>
              <button disabled={!this.state.hasNext} className="btn btn-success" onClick={this.getNextPage}>Cargar Mas</button>
            </Col>
          </Row>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default DevsGrid;
