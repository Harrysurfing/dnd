import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import DraggComponent from "../draggable/draggable.component";

export class DroppableComponent extends Component {
	render() {
		return (
			<Droppable droppableId="list" type="list">
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						style={{
							backgroundColor: snapshot.isDraggingOver ? "blue" : "grey",
							height: "100vh",
							width: "200px",
							padding: "5px 0",
						}}
						{...provided.droppableProps}
					>
						<DraggComponent id="dragg1" index={0} text="dragg1" />
						<DraggComponent id="dragg2" index={1} text="dragg2" />
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		);
	}
}

export default DroppableComponent;
