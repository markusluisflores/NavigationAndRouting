import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainLayout from '../layouts/MainLayout';


function AboutScreen() {

    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const currDate = month + '/' + date + '/' + year;

    return (
        <MainLayout>
            <SafeAreaView>
                <Text>To Do List Application</Text>
                <Text>Markus Luis Flores</Text>
                <Text>{currDate}</Text>
            </SafeAreaView>
        </MainLayout>
    );
}

export default AboutScreen;