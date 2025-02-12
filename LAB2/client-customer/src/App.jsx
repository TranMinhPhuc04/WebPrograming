import axios from "axios";
import { Component } from "react";

// cấu hình axios
const api = axios.create({
  baseURL: `http://localhost:3000`,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Loading...",
    };
  }

  // render trang Admin
  render() {
    return (
      <div>
        <h2>Customer Page</h2>
        <p>{this.state.message}</p>
      </div>
    );
  }

  // Lấy dữ liệu từ backend API
  componentDidMount() {
    api.get("/").then((res) => {
      const result = res.data;
      console.log(result);
      this.setState({ message: result.message });
    });
  }
}

export default App;
