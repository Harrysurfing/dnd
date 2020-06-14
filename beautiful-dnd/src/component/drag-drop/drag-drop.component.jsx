import React, { Component } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DroppableComponent from "../droppable/droppable.component";

export class DragDrop extends Component {
	onDragEnd = (result) => {
		const { destination, source, draggableId } = result;
		if (!destination) {
			return;
		}
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}
	};
	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<DroppableComponent />
			</DragDropContext>
		);
	}
}

export default DragDrop;
