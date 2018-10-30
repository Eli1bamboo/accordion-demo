import React, { Component } from 'react';

class AccordionItem extends Component {
	onClick = () => {
		const { onClick, id } = this.props;

		onClick(id);
	};

	render() {
		const { title, content, isUncollapsed } = this.props;

		return (
			<div className="AccordionItem">
				<div className="AccordionItemHeader" onClick={this.onClick}>
					{title} {isUncollapsed ? <span>-</span> : <span>+</span>}
				</div>
				{isUncollapsed ? <div className="AccordionItemContent">{content}</div> : null}
			</div>
		);
	}
}

export default AccordionItem;
