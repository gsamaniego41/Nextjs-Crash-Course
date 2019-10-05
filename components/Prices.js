export default class Prices extends React.Component {
  state = {
    currency: "USD"
  };

  render() {
    const {currency} = this.state;
    const {bpi} = this.props;
    let list = "";

    if (currency === "USD") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {bpi.USD.description}:{" "}
          <span className="badge badge-primary">{bpi.USD.code}</span>{" "}
          <strong>{bpi.USD.rate}</strong>
        </li>
      );
    } else if (currency === "GBP") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {bpi.GBP.description}:{" "}
          <span className="badge badge-primary">{bpi.GBP.code}</span>{" "}
          <strong>{bpi.GBP.rate}</strong>
        </li>
      );
    } else if (currency === "EUR") {
      list = (
        <li className="list-group-item">
          Bitcoin rate for {bpi.EUR.description}:{" "}
          <span className="badge badge-primary">{bpi.EUR.code}</span>{" "}
          <strong>{bpi.EUR.rate}</strong>
        </li>
      );
    }

    return (
      <div>
        <ul className="list-group">{list}</ul>
        <br />
        <select
          onChange={e => this.setState({currency: e.target.value})}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}
