import { Platform } from "react-native";

export default Constant = {
    font:{
        notoBold: Platform.OS === "android" ? "NotoSerif-Bold" : "NotoSerif-Bold",
        notoBoldItalic: Platform.OS === "android" ? "NotoSerif-BoldItalic" : "NotoSerif-BoldItalic",
        notoItalic: Platform.OS === "android" ? "NotoSerif-Italic" : "NotoSerif-Italic",
        notoRegular: Platform.OS === "android" ? "NotoSerif" : "NotoSerif",

    },
    asyncData:{
        token:'token',
        userData:'userData'
    },
}