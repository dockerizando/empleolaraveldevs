import React from "react";
import { Media, Label } from "react-bootstrap";
import { Link } from "react-router-dom";

class DeveloperCard extends React.Component {
  render() {
    const { available_for_hire, avatar, name, username } = this.props.developer;
    return (
      <div className="developer-card">
        <Media>
          <Media.Left>
            <img width={128} height={128} src={avatar} alt={name} />
          </Media.Left>
          <Media.Body>
            <Media.Heading>{name ? name : "Sin Nombre"}</Media.Heading>
            <Label bsStyle={available_for_hire ? "success" : "danger"}>
              {available_for_hire
                ? "Disponible para contratar"
                : "No disponible para contratar"}
            </Label>
            <br />
            <br />
            <Link to={`/${username}`} className="btn btn-sm btn-primary">Ver perfil</Link>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default DeveloperCard;
