import { Stack } from "@mui/material"
import Presentation from "../../partials/Presentation/Presentation";
import Services from "../../partials/Services/Services";

const HomeView = () => {
    return (
        <Stack>
            <Presentation />
            <Services />
        </Stack>
    )
}

export default HomeView;