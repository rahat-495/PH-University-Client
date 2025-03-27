
import { baseApi } from "@/redux/api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
    endpoints : (builder) => ({
        getAllSemesters : builder.query({
            query : () => ({
                url : '/academic-semesters/get-all-academic-semester' ,
                method : "GET" ,
            })
        })
    })
})

export const {useGetAllSemestersQuery} = academicSemesterApi ;
