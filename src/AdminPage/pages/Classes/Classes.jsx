/* eslint-disable react-hooks/exhaustive-deps */


import { colors } from "../../color";
import "./classes.css"
import { useEffect, useState } from "react";
import StudentsMenu from "./StudentsMenu";
import {  useParams } from "react-router-dom";
import EachClass from "./EachClass";

function Classes() {


    const {id} = useParams()

    const [school, setSchool] = useState({});
    const [classes, setClasses] = useState([]);

    const [studentCount, setStudentCount] = useState(0);
    const [teacherCount, setTeacherCount] = useState(0);
    

    
    

    const ip = import.meta.env.VITE_IP;

    const fetchDatas = async () => {
        const res = await fetch(ip+"admin/get-school-detail/" + id)
        const data = await res.json();
        setSchool(data.data[0])
        const res2 = await fetch(ip+"admin/list-classes/" + id)
        const data2 = await res2.json();

        const fetchPromises = data2?.data?.map(async (element ) => {
            const res = await fetch( ip + "admin/list-students/" + element.id )
            const data = await res.json();
            element.students = data.data
            if (element.students) {
                setStudentCount((prevCount) => prevCount + element.students.length);
            }
        
            // ClassTeachers kontrolü ve eklenen öneri
            setTeacherCount((prevCount) => prevCount + (element.ClassTeachers ? element.ClassTeachers.length : 0));
        })

        await Promise.all(fetchPromises);
        setClasses(data2.data)



    }

    useEffect(() => {
        fetchDatas();
        
    },[])

    
    
    return (
        <div className="">
            <div className="classesust border-bottom p-4">
                <div className="d-flex h-100 w-100 justify-content-center align-items-center">
                    <div>
                        <h2 className="text-center mb-2" style={{ color: colors.text.main }}>{school?.schoolName}(#{school?.id})</h2>
                        <div className="d-flex">

                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" height="8rem" fill="#3A416F" viewBox="0 0 640 512"><path d="M337.8 5.4C327-1.8 313-1.8 302.2 5.4L166.3 96H48C21.5 96 0 117.5 0 144V464c0 26.5 21.5 48 48 48H592c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H473.7L337.8 5.4zM256 416c0-35.3 28.7-64 64-64s64 28.7 64 64v96H256V416zM96 192h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V208c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V208zM96 320h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm400 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H512c-8.8 0-16-7.2-16-16V336zM232 176a88 88 0 1 1 176 0 88 88 0 1 1 -176 0zm88-48c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H336V144c0-8.8-7.2-16-16-16z" /></svg>
                            </div>
                            <div className="d-flex flex-column justify-content-center mx-5">
                                <p className="fw-bold" style={{ color: colors.text.main }}>

                                    Sınıf Sayısı: {classes?.length || 0}
                                </p>
                                <p className="fw-bold" style={{ color: colors.text.main }}>
                                    Öğrenci Sayısı: {studentCount}
                                </p>
                                <p className="fw-bold" style={{ color: colors.text.main }}>
                                    Öğretmen Sayısı: {teacherCount}
                                </p>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <div className="classesalt p-3">
                <div className="d-flex flex-wrap">
                    {classes?.map((element, index) => {

                        return (
                            <EachClass id={element.id}  key={element.id} element={element} index={index}> </EachClass>
                            )
                    })}

                </div>
            </div>

        </div>
    );
}

export default Classes;