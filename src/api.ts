import axios from "axios"

export const api=axios.create({
    baseURL:'http://bilim.pythonanywhere.com/api/v1/school/' 
})


/*'http://192.168.0.114:1080/api/v1/school'*/