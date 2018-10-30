import React, { Component } from 'react';
import AccordionItem from './AccordionItem';

class Accordion extends Component {
	constructor(props) {
		super(props);

		this.state = { uncollapsedTab: {} };
	}

	onClick = (id) => {
		const { uncollapsedTab } = this.state;

		const isUncollapsed = !!uncollapsedTab[id];

		this.setState({
			uncollapsedTab: {
				[id]: !isUncollapsed
			}
		});
	};

	render() {
		const { uncollapsedTab } = this.state;
		const { data } = this.props;

		return (
			<div className="Accordion">
				{data.map((item, index) => (
					<AccordionItem
						key={index}
						id={index}
						title={item.title}
						content={item.content}
						isUncollapsed={!!uncollapsedTab[index]}
						onClick={this.onClick}
					/>
				))}
			</div>
		);
	}
}

export default Accordion;
