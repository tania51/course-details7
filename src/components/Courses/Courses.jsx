import { FaBookOpen, FaDollarSign } from 'react-icons/fa';
import { useState } from 'react';
import './Courses.css'
import { useEffect } from 'react';
const Courses = () => {
    const [coursesInfo, setCoursesinfo] = useState([]);

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCoursesinfo(data))
    }, [])


    return (
        <div>
            {/* card area */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    coursesInfo.map(course =>
                        <div key={course.id} className="card bg-white p-4">
                            <figure><img src={course.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-lg font-semibold">{course.title}</h2>
                                <p className='text-sm'>{course.details}</p>
                                <div className='flex gap-5 font-medium'>
                                    <div className="flex items-center gap-2">
                                        <p className='text-lg'><FaDollarSign /></p>
                                        <p>Price: {course.course_price}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <p className='text-lg'><FaBookOpen /></p>
                                        <p>Credit : {course.credit} hr</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="card-btn w-full py-2">Select</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

            {/* cart area */}
            <div>

            </div>
        </div>
    );
};

export default Courses;