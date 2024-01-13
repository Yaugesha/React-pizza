import { useNavigate, useRouteError } from "react-router-dom";
import { error } from "../utils/types";
import "./error.scss";

function Error() {
  const error = useRouteError() as error;
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="error-header">Error.Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <div
        className="link"
        onClick={() => {
          navigate(-1);
        }}
      >
        &larr; Go back
      </div>
    </div>
  );
}

export default Error;
