import { ClipLoader } from "react-spinners";
import "../assets/css/spinner.css";
import { useSelector } from "react-redux";

function Spinner() {
    const isLoading = useSelector((state) => state.loading.isLoading);

    return (
        <>
            {
                !isLoading ? "" :
                <div className="loading-spinner">
                    <ClipLoader />
                </div>
            }
        </>
    )
}

export default Spinner;