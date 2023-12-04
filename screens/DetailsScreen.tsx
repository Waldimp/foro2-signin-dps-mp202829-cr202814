import React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google"
import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential, User } from "firebase/auth"
import { auth } from "../firebaseConfig"
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "./Header";
import Background from "./Background";
import Button from "./Button";

WebBrowser.maybeCompleteAuthSession();

export default function DetailScreen({ navigation }) {
    const [userInfo, setUserInfo] = React.useState<User>();
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: "84003598101-fgqs9mod7hidea5lpk1rjb8gesp6qi50.apps.googleusercontent.com",
        clientId: "815470049308-ru4hqqcm57jdudp27m3urmi4ud4jec3g.apps.googleusercontent.com"
    });



    React.useEffect(() => { // Cuando haya un cambio en el response entrará aca
        if(response?.type === "success"){
            const { id_token } = response.params;
            const credential = GoogleAuthProvider.credential(id_token);
            signInWithCredential(auth, credential);
        }
    }, [response]);

    React.useEffect(() => {
        const unsub = onAuthStateChanged(auth, async (user) => {
            if(user){
                await AsyncStorage.setItem("@user", JSON.stringify(user));
                setUserInfo(user);
                console.log(JSON.stringify(user));


            }else{
                console.log('No hay usuario autenticado');
            }
        });

        return () => unsub();
    }, []);

    const getLocalUser = async () => {

        try {
            const userJSON = await AsyncStorage.getItem("@user");
            const userData = userJSON ? JSON.parse(userJSON) : null;
        } catch (e) {
            console.log(e, "error al obtener local user")
        }

    };

    return (
        <Background>

            <Header>Bienvenido</Header>

            <Button mode="contained" onPress={() => promptAsync()}>
                Iniciar sesión
            </Button>

        </Background>
    );
}
