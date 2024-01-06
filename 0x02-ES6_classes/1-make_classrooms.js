import ClassRoom from '0-classroom.js';

export default function initializeRooms() {
	const classA = new ClassRoom(19);
	const classB = new ClassRoom(20);
	const classC = new ClassRoom(34);

	const newList = [classA, classB, classC];

	return (newList);
}
