import { createStyle } from "react-native-theming";
import { StatusBar, Dimensions } from "react-native";

const styles = createStyle({
    container: {
        backgroundColor: "#F9F9F9",
        flex: 1,
    },
    tabs: {
        flex: 1,
    },
    placeholder: {
        backgroundColor: "white",
        padding: 20,
        borderStyle: "solid",
        borderWidth: 1,
        borderTopWidth: 1,
        borderColor: "#e2e5e8",
        borderRadius: 5,
        marginRight: 0,
        marginLeft: 0,
        marginTop: 10,
    },
    header: {
        backgroundColor: "#284b78",
        borderBottomWidth: 0,
        borderColor: "#284b78",
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "white",
    },
    searchButton: {
        color: "white",
        fontWeight: "bold",
    },
    tabView: {
        alignSelf: "center",
        backgroundColor: "transparent",
    },
    tabbar: {
        alignSelf: "center",
        height: 40,
        backgroundColor: "#284b78",
    },
    tabbarItem: {
        flex: 1,
        paddingHorizontal: 7,
        backgroundColor: "#f9f9f9",
        minWidth: Dimensions.get("window").width / 1,
    },
    loginButton: {
        alignSelf: "center",
        marginTop: 100,
    },
});

export default styles;