import { SafeAreaView } from "react-native-safe-area-context";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import { useState } from "react";
import { Button } from "react-native";
import MainLayout from '../layouts/MainLayout';


function HomeScreen({ navigation }) {

    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ])

    const addTask = (taskText) => {
        setTasks(
            [...tasks, taskText]
        );
    };


    return (
        <MainLayout>
            <SafeAreaView>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
                <ToDoList tasks={tasks} />
                <ToDoForm addTask={addTask} />
            </SafeAreaView>
        </MainLayout>
    );
}

export default HomeScreen;