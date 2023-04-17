import { create } from 'zustand'
import axios from 'axios'

const useBoardStore = create((set) => ({
 board:[],
 isLoading: false,
  getBoardList: () =>{
    set({isLoading:true});

    axios.get(`${process.env.API_URL}/board/details/`),
    then((response) =>{
      console.log(response.data, response)

      set({board: response.data,isLoading:false})
    }
        ).catch((error) =>{
            set({isLoading:false})
        })
  }

}))
export default useBoardStore;