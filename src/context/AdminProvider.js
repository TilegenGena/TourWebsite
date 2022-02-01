import axios from 'axios';
import React, { useReducer } from 'react';
import { toast } from 'react-toastify';
import { API } from '../helpers/const'


export const AdminContext = React.createContext();

const INIT_STATE = {
    blog: null
}; 
const reducer = (state, action ) => {
    switch ( action.type ) {
        case "GET_BLOGS":
            return{ ...state, blogs: action.payload}
        default:
            return state;
    }
} 
const AdminProvider = (props) => {
    const [ state, dispatch] = useReducer( reducer, INIT_STATE)

    const addBlog = async (newBlog) =>{
        try{
            await axios.post(API, {...newBlog, price: +newBlog.price, comments: []})
        }catch (error) {
            console.log(error);
        }
    }
    const getBlog = async () =>{
        try{
             const response = await axios(API);
            let action = {
                type: 'GET_BLOGS', 
                payload: response.data,
            }
            dispatch(action)
            console.log(response)
        }catch (error){
            console.log(error);
        }
    }


    const saveEditedBlog = async (blog) => {
        try {
          await axios.patch(`${API}/${blog.id}`, {
            ...blog,
            price: +blog.price,
          });
          getBlog();
          
        } catch (error) {
          console.log(error);
        }
      };

      const deleteBlog = async (id) => {
        try {
          await axios.delete(`${API}/${id}`);
          getBlog();
          
        } catch (error) {
          console.log(error);
        }
      };

      
    return (
        <AdminContext.Provider
        value={{
            addBlog,
            getBlog,
            saveEditedBlog,
            deleteBlog,
            blogs: state.blogs,
        }}
        >
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;