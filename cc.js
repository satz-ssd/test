class Header extends React.Component {
  render() {
      
    return (
      <div>
        <h1>Hello World</h1>
        <h2>welcome to techno elevate</h2>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    console.log("props",this.props);
    return <h2>I m content {this.props.firstName} {this.props.lastName} </h2>;
  }
}

class Footer extends React.Component {
  render() {
    return <h2>I m Footer</h2>;
  }
}

ReactDOM.render(
  <div>
    <Header />
    <Content />
    <Content firstName="Ranjith" lastName="Reddy" />
    <Content firstName="Mukesh" />
    <Footer />
  </div>,
  document.getElementById("container")
);
