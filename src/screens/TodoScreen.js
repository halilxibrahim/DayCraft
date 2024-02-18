import React, { useState } from "react"; 
import { 
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	FlatList, 
	StyleSheet, 
	Image
} from "react-native"; 
import { AntDesign } from '@expo/vector-icons';
const TodoScreen = () => { 
	const [task, setTask] = useState(""); 
	const [tasks, setTasks] = useState([]); 
	const [editIndex, setEditIndex] = useState(-1); 

	const handleAddTask = () => { 
		if (task) { 
			if (editIndex !== -1) { 
				// Edit existing task 
				const updatedTasks = [...tasks]; 
				updatedTasks[editIndex] = task; 
				setTasks(updatedTasks); 
				setEditIndex(-1); 
			} else { 
				// Add new task 
				setTasks([...tasks, task]); 
			} 
			setTask(""); 
		} 
	}; 

	const handleEditTask = (index) => { 
		const taskToEdit = tasks[index]; 
		setTask(taskToEdit); 
		setEditIndex(index); 
	}; 

	const handleDeleteTask = (index) => { 
		const updatedTasks = [...tasks]; 
		updatedTasks.splice(index, 1); 
		setTasks(updatedTasks); 
	}; 

	const renderItem = ({ item, index }) => ( 
		<View style={styles.task}> 
			<Text 
				style={styles.itemList}>{item}</Text> 
			<View 
				style={styles.taskButtons}> 
				<TouchableOpacity 
					onPress={() => handleEditTask(index)}> 
					<Text 
						style={styles.editButton}>Edit</Text> 
				</TouchableOpacity> 
				<TouchableOpacity 
					onPress={() => handleDeleteTask(index)}> 
					<Text 
						style={styles.deleteButton}>Delete</Text> 
				</TouchableOpacity> 
			</View> 
		</View> 
	); 

	return ( 
		
		<View style={styles.container}> 
			<Image
				style={styles.Logo}
				source={{
				uri: 'https://media.licdn.com/dms/image/D4D03AQGFdfBzzSMjHg/profile-displayphoto-shrink_800_800/0/1707992133924?e=1714003200&v=beta&t=3eB-CGKc2L96YxFRGvK7jNRIPd_PPjc4nkG-9lq3fqE',
				}}
			/>
			
			<Text style={styles.name}>Halil ibrahim Kamacı</Text>

			<TouchableOpacity
				onPress={handleAddTask}>
				<AntDesign style={styles.icon}name="plus"size={25} />
					<Text style={styles.addButtonText}> 
							{editIndex !== -1 ? "Update" : "Add Task"} 
					</Text> 
			</TouchableOpacity>

			
			<View style={styles.topContainer}>
				<TextInput 
					style={styles.input} 
					placeholder="Enter task"
					value={task} 
					onChangeText={(text) => setTask(text)} 
				/> 
			<FlatList 
				data={tasks.reverse()} 
				renderItem={renderItem} 
				keyExtractor={(item, index) => index.toString()} 
			/> 	
			</View>
			
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 

	container: { 
		backgroundColor:'white',
		flex: 1, 
		padding: 50, 
	}, 
	Logo:{
		position: 'absolute',
		top: 20,
		left: 20,
		width: 50,
		height: 50,
		borderRadius: 100,
	}, 
	name: {
		position: 'absolute',
		top: 35,
		left: 85,
		fontSize:18,	
		fontWeight: "500",
	},
	icon: {
		color:'blue',		
		position:'absolute',
		right:37,
		top:-16,
	},
	addButtonText: { 
		color: "blue", 
		fontWeight: "bold", 
		textAlign: "center", 
		fontSize: 15, 
		position:'absolute',
		right:-30,
		top:-13,
	}, 
	topContainer:{
		flex:1,
		top:40,
		
	},
	title: {
		fontSize: 24, 
		fontWeight: "bold", 
		marginBottom: 20, 
	}, 
	heading: { 
		fontSize: 30, 
		fontWeight: "bold", 
		marginBottom: 7, 
		color: "#aab0f0"
	}, 
	input: { 
		borderWidth: 3, 
		borderColor: "#7498d6", 
		padding: 10, 
		marginBottom: 10, 
		borderRadius: 100, 
		fontSize: 20, 
	}, 
	addButton: { 
		backgroundColor: "#6691ed", 
		padding: 10, 
		borderRadius: 5, 
		marginBottom: 10, 
	}, 
	
	task: { 
		flexDirection: "row", 
		justifyContent: "space-between", 
		alignItems: "center", 
		marginBottom: 15, 
		fontSize: 18, 
	}, 
	itemList: { 
		fontSize: 19, 
	}, 
	taskButtons: { 
		flexDirection: "row", 
	}, 
	editButton: { 
		marginRight: 10, 
		color: "green", 
		fontWeight: "bold", 
		fontSize: 18, 
	}, 
	deleteButton: { 
		color: "red", 
		fontWeight: "bold", 
		fontSize: 18, 
	}, 
}); 

export default TodoScreen;
