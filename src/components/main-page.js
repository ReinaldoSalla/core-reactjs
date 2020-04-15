import React from "react";
import UpperNavBar from "./upper-nav-bar"
import Header from "./header";
import Footer from "./footer";
import "../styles/main-page.css";

const classNames = [
	"first-header",
	"second-header",
	"third-header"
];

export default class MainPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { index: 0 };
		this.incrementIndex = this.incrementIndex.bind(this);
	}

	incrementIndex() {
		let newIndex = this.state.index + 1;
		if (newIndex === 3) newIndex = 0;
		this.setState({ index: newIndex });
	}

	componentDidMount() {
		setInterval(this.incrementIndex, 3000);
	}

	render() {
		return (
			<div>
				<div className={classNames[this.state.index]}>
					<UpperNavBar />
					<Header />
				</div>
				<div className="content">
					{this.props.children}
				</div>
				<Footer />
			</div>
		);
	}
}