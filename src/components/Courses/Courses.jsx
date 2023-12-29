import { FaBookOpen, FaDollarSign } from 'react-icons/fa';
import { useState } from 'react';
import './Courses.css'
import { useEffect } from 'react';
import Swal from 'sweetalert2';



const Courses = () => {
    const [coursesInfo, setCoursesinfo] = useState([]);
    const [allCourse, setAllcourses] = useState([]);
    const [credit, setCredit] = useState(0);
    const [remainig, setRemaining] = useState(20);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        fetch('./course.json')
            .then(res => res.json())
            .then(data => setCoursesinfo(data))
    }, [])

    const courseinfoHandaler = courses => {
        const courseSingleName = allCourse.find(item => item.id === courses.id);
        let totalCredit = courses.credit;
        let totalPrice = courses.course_price;
        if (courseSingleName) {
            return Swal.fire({
                icon: 'error',
                text: 'You already added this course!'
            })
        }
        else {
            allCourse.forEach(course => {
                totalCredit = totalCredit + course.credit;
            })
            if (totalCredit > 20) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Your total credit was 20 and this is out of your budget now so you can not purchase another course'
                })
            }
            else {
                const remaining = 20 - totalCredit;
                if (remaining < 0) {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Your remaining money is 0 and you can not add another course'
                    })
                }
                allCourse.forEach(coursePrice => {
                    totalPrice = totalPrice + coursePrice.course_price;
                })
                console.log(totalPrice);
                setRemaining(remaining);
                setCredit(totalCredit);
                setTotalPrice(totalPrice);
                setAllcourses([...allCourse, courses])
            }


        }

    }
    return (
        <div className='lg:flex gap-4 px-4 pb-14'>
            {/* card area */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-3/4'>
                {
                    coursesInfo.map(course =>
                        <div key={course.id} className="card bg-white p-4">
                            <figure><img src={course.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-lg font-semibold">{course.title}</h2>
                                <p className='text-sm'>{course.details}</p>
                                <div className='flex font-medium justify-between'>
                                    <div className="flex items-center">
                                        <p className='text-lg'><FaDollarSign /></p>
                                        <p>Price: {course.course_price}</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <p className='text-lg'><FaBookOpen /></p>
                                        <p>Credit : {course.credit} hr</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-end">
                                    <button onClick={() => courseinfoHandaler(course)} className="card-btn w-full py-2">Select</button>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>

            {/* cart area */}
            <div className='w-1/4'>
                <div className='bg-white p-5 rounded-xl'>
                    <h3 className='text-[#2F80ED] text-lg font-bold pb-3'>Credit Hour Remaining {remainig} hr</h3>
                    <hr className='pb-3' />
                    <h2 className='text-xl font-bold pb-3'>Course Name</h2>
                    <ol className='pb-3 order-list px-5'>
                        {
                            allCourse.map((item, idx) => <li key={idx}>{item.title}</li>)
                        }

                    </ol>
                    <hr className='pb-3' />
                    <h5 className='font-medium pb-3'>Total Credit Hour : {credit}</h5>
                    <hr className='pb-3' />
                    <h5 className='font-semibold'>Total Price : {totalPrice} USD</h5>
                </div>
            </div>
        </div>
    );
};



export default Courses;