export default class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    const {bpi} = this.props;
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin rate for {bpi.USD.description}:{" "}
            <span className="badge badge-primary">{bpi.USD.code}</span>{" "}
            <strong>{bpi.USD.rate}</strong>
          </li>
        </ul>
      </div>
    );
  }
}
