import AuthContext from "@/context/AuthContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";

const loginPage = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  const {login, loading, profile} = useContext(AuthContext);
  const handleLogin = (data) => {
    login(data.email, data.password);
  }

    return(
   <section className="login-section mt-3 mt-lg-5">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: '1rem'}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

           <form onSubmit={handleSubmit(handleLogin)}>
           <div className="form-outline mb-4 text-start">
              <input {...register('email', {required: 'Email is required!', pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g , message: "Email format is not correct!"} })} type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email" />
              <div className="form-text text-danger ms-3">{errors.email?.message}</div>
            </div>

            <div className="form-outline mb-4 text-start">
              <input {...register('password', {required: 'password is required!'})} type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="password" />
              <div className="form-text text-danger ms-3">{errors.password?.message}</div>
            </div>

            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label ms-2" htmlFor="form1Example3"> Remember password </label>
            </div>

            <button className="btn btn-primary btn-lg btn-block w-100 text-center" disabled={loading} type="submit">Login 
            {loading && <div class="ms-2 spinner-border spinner-border-sm" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>}
            </button>
           </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
)
}

export default loginPage;