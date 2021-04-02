import "./index.scss";
import { infos } from "../../constants/cardContent";
import { user } from "../../img/user.svg";

export const Card = () => {
  return (
    <div className="card-container">
      {infos.map((info) => (
        <div className="card-content">
          <span className="icon" alt="icon from card service">{user}</span>
          <div className="card-info">
            <h2>{info.title}</h2>
            <span>{info.description}</span>
            <button>
              <span>Learn More</span>
              <i className="fa fa-arrow-right" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
