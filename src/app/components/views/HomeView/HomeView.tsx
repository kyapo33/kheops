import { Stack } from "@mui/material"
import Presentation from "../../partials/Presentation/Presentation";
import Services from "../../partials/Services/Services";
import Contact from "../../partials/Contact/Contact";

const HomeView = () => {
    return (
        <Stack>
            <Presentation />
            <Services />
            <Contact />
        </Stack>
    )
}

export default HomeView;