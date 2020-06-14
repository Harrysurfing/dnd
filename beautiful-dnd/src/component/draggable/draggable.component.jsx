import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";

export class DragComponent extends Component {
	render() {
		return (
			<Draggable draggableId={this.props.id} index={this.props.index}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<h4
							style={{
								height: "2rem",
								margin: "2px",
								backgroundColor: `${
									snapshot.isDragging ? "lightgreen" : "white"
								}`,
							}}
						>
							{this.props.text}
						</h4>
					</div>
				)}
			</Draggable>
		);
	}
}

export default DragComponent;
