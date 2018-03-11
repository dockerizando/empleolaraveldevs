import React from "react";
import Header from "./../layout/Header";
import Footer from "./../layout/Footer";
import { Grid, PageHeader, Row, Col, Media, Label } from "react-bootstrap";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import lodash from "lodash";

class DevPage extends React.Component {
  state = {
    developer: {}
  };

  getProfile = () => {
    axios
      .get(
        `https://empleolaravel.com/api/developers?username=${
          this.props.match.params.username
        }`
      )
      .then(response => {
        this.setState({
          developer: response.data.data
        });
      });
  };

  componentDidMount() {
    this.getProfile();
  }

  renderSkills = () => {
    if (this.state.developer.skills) {
      const skills = lodash.map(this.state.developer.skills.data, skill => {
        return (
          <span
            key={skill.id}
            className="label label-default"
            style={{ marginRight: `5px` }}
          >
            {skill.name}
          </span>
        );
      });
      return skills;
    }
    return "";
  };

  render() {
    return (
      <div className="main">
        <Header titleline="Empleo Laravel Devs" />
        <Grid>
          <PageHeader>
            {this.state.developer.name}{" "}
            <small>{this.state.developer.email}</small>
          </PageHeader>
          <Row>
            <Col md={12}>
              <Media>
                <Media.Left>
                  <img
                    width={300}
                    height={300}
                    src={this.state.developer.avatar}
                    alt={this.state.developer.name}
                  />
                </Media.Left>
                <Media.Body>
                  <Media.Heading>Perfil</Media.Heading>
                  <Label
                    bsStyle={
                      this.state.developer.available_for_hire
                        ? "success"
                        : "danger"
                    }
                  >
                    {this.state.developer.available_for_hire
                      ? "Disponible para contratar"
                      : "No disponible para contratar"}
                  </Label>
                  <hr />
                  <ReactMarkdown source={this.state.developer.bio} />
                  <hr />
                  <h3>Skills:</h3>
                  {this.renderSkills()}
                </Media.Body>
              </Media>
            </Col>
          </Row>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default DevPage;
