import {BASE_URL,HOME_URL} from '../config/apiConfig';

export async function getSlider() {

    try{
        let slider = await fetch('https://fitbook.fit/fitbookadmin/api_v1/home.php', {
            method:'POST'
        }
        )

        let result = await slider.json();
        slider = null;

        return result.slider;
    }
    catch(error) {
        throw error;
    }

}