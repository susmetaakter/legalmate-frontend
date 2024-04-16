import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxios';
import { sendEmailVerification } from 'firebase/auth';

const Register = () => {
  const { signUp, profileUpdate, setLoading, logOut } = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password.length < 6) {
      return toast.warning("password should have at least 6 characters", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
    }
    if (data.password !== data.confirm) {
      return toast.warning("password didn't match", {
        position: "top-right",
        autoClose: 4000,
        theme: "light",
      });
    }

    const userData = {
      name: data.name,
      email: data.email,
      image: "",
      role: data.role,
    }
    signUp(data.email, data.password)
      .then((result) => {
        sendEmailVerification(result?.user)
          .then(() => {
            Swal.fire({
              title: 'Check Your mail to verify email address',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
          })
        profileUpdate(result.user, data.name)
          .then((result) => {
            axiosSecure.post('/users', userData)
              .then(res => {
                if (res.status === 200) {
                  logOut()
                    .then()
                    .catch()
                  navigate('/login');
                }
              })
              .catch((err) => {
                console.log(err)
              });
          })
          .catch((error) => {
            setLoading(false)
            toast.error(error.message, {
              position: "top-right",
              autoClose: 4000,
              theme: "light",
            });
          });
      })
      .catch((error) => {
        console.log(error)
      })
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-center">

        {/* Image */}
        <img className="w-full hidden lg:block h-fit" src="https://img.freepik.com/free-photo/truth-concept-arrangement-with-balance_23-2149051293.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=sph" alt="" />

        {/* Login Form */}
        <div className="w-full min-h-max bg-[url('https://img.freepik.com/free-photo/truth-concept-arrangement-with-balance_23-2149051293.jpg?size=626&ext=jpg&ga=GA1.1.670690934.1670350375&semt=sph')] bg-no-repeat bg-cover bg-center lg:bg-none bg-lightDark flex justify-center items-center h-screen lg:h-auto px-5">
          <div className="max-w-sm mx-auto">
            <h2 className="text-4xl font-semibold my-10">Sign up to <span className="text-secondary">Legalmate</span></h2>

            <form onSubmit={handleSubmit(onSubmit)} >
              {/* Full Name */}
              <input
                className="h-12 w-full outline-none focus:border-b-4 focus:border-primary  px-3 text-dark bg-white"
                type="text"
                placeholder="Full Name: "
                {...register("name", { required: true })}
              />
              {errors.name && <span className='text-sm text-red-500 ml-1'>Name is required</span>}

              {/* Email */}
              <input
                className="h-12 w-full outline-none focus:border-b-4 focus:border-primary  px-3 text-dark mt-5 bg-white"
                type="email"
                placeholder="*Email: "
                {...register("email", { required: true })}
              />
              {errors.email && <span className='text-sm text-red-500 ml-1'>Email is required</span>}

              {/* Password */}
              <input
                className="h-12 w-full outline-none focus:border-b-4 focus:border-primary  px-3 text-dark mt-5 bg-white"
                type="password"
                placeholder="*Password: "
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-sm text-red-500 ml-1'>Password is required</span>}

              {/* Confirm Password */}
              <input
                className="h-12 w-full outline-none focus:border-b-4 focus:border-primary  px-3 text-dark mt-5 bg-white"
                type="password"
                placeholder="*Confirm Password: "
                {...register("confirm", { required: true })}
              />
              {errors.confirm && <span className='text-sm text-red-500 ml-1'>Confirm Password is required</span>}

              {/* user type" */}
              <div className='mt-5'>
                <span className='pr-5'>I am a: </span>
                <input
                  className='outline-none cursor-pointer'
                  type="radio"
                  name="role"
                  id="client"
                  value="client"
                  {...register("role", { required: true })}
                />
                <label className='pl-2 pr-5' htmlFor="client">Client</label>

                <input
                  className='outline-none cursor-pointer'
                  type="radio"
                  name="role"
                  id="attorney"
                  value="attorney"
                  {...register("role", { required: true })}
                />
                <label className='pl-2' htmlFor="attorney">Lawyer</label>
              </div>
              {errors.role && <span className='text-sm text-red-500 ml-1'>User Role is required</span>}


              {/* Submit */}
              <input
                className="h-12 w-full outline-none  px-3 font-bold cursor-pointer bg-white hover:bg-primary hover:text-white text-primary duration-300 mt-5"
                type="submit"
                value="Signup"
              />

              {/* Sign up */}
              <p className='mt-2 text-end text-gray'>Already have an account? <Link className='text-primary' to='/login'>Sign in</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;