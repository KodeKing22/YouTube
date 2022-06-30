import React from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"

let initialValues = {
    make: "",
    model: "",
    year: "",
};

const AddVideoPage = () => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewVideo)

    async function postNewVideo(){
        try {
            let response = await axios.post("Need the URL for POST", formData, {
                headers: {
                    Authorization: 'Bearer' + token
                }
            })
            navigate("")
        } catch (error) {
            console.log(error.message)
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Make:{" "}
                    <input
                     type="text"
                     name="make"
                     value={formData.make}
                     onChange={handleInputChange}
                    />
                </label>
                <label>
                    Model:{" "}
                    <input
                     type="text"
                     name="make"
                     value={formData.make}
                     onChange={handleInputChange}
                    />
                </label>
                <label>
                    Year:{" "}
                    <input
                     type="text"
                     name="make"
                     value={formData.make}
                     onChange={handleInputChange}
                    />
                </label>
            </form>
        </div>
    )
}

export default AddVideoPage