import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm';

let defaultValues = {
    comment: ""
}

const CommentForm = () => {
    // const [user, token] = useAuth()
    // const navigate = useNavigate()
    // const  [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues)

    // async function postComment(){
    //     let response = await axios.post("")
    // }
}

export default CommentForm;