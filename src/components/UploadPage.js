import "../styles/UploadPage.css"
import MergeParseList from "./MergeParsedList";
import Dropzone from "./Dropzone";

function UploadPage () {

    return (
        <div className="uploadPageContainer">
            <Dropzone/>
            <MergeParseList/>
        </div>
    )
}

export default UploadPage