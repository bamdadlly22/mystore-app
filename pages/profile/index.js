import Image from "next/image";
import img from "../../public/images/1.jpg";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

const ProfilePage = () => {
  const { user, logout, loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
         {user && (
                    <section className="my-5 overflow-hidden">
                    <div className="container">
                      <div className="profile-img text-center">
                        <img
                          src={user.avatar}
                          width={250}
                          height={250}
                          className="rounded-circle"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div
                        className="profile-info row justify-content-center align-items-center mt-5 mx-auto p-3 p-lg-4"
                        style={{ width: "1000px" }}
                      >
                        <div className="col-md-5 mb-3 mb-md-0">
                          <span className="text-label">Email: </span>{user.email}
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                          <span className="text-label">name: </span>{user.name}
                        </div>
                        <div className="col-md-3 mb-3 mb-md-0">
                          <button onClick={logout} className="btn btn-primary btn-lg">logout</button>
                        </div>
                      </div>
                    </div>
          </section>
         )}
        </>
      )}
    </>
  );
};

export default ProfilePage;
