'use client'

const Login = () => {
    
  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form className="card-body text-lg">
              <div className="form-control">
                <label className="label ">
                  <span className="label-text">Wallet Address</span>
                </label>
                <input
                  type="walletaddress"
                  placeholder="walletaddress"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      
    </>
  );
};

export default Login;
