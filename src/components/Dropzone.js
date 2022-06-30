import React, {useCallback } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { parsedList } from '../features/studentLists';
import { useDropzone } from "react-dropzone"
import Papa from "papaparse"

function Dropzone() {

    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length) {
            parseFile(acceptedFiles[0])
          }
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const dispatch = useDispatch()
    const parseFile = file => {
        Papa.parse(file, {
          header: true,
          complete: results => {
             dispatch(parsedList(results.data))
          },
        });
      };
    
    return (
      <div className='MyDropZoneContainer'>
        <div className='MyDropzone' {...getRootProps()}>
            <input {...getInputProps()} />
            {
            isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </div>
      </div>
    )
  }
  export default Dropzone