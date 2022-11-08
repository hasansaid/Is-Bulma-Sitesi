import React from 'react';
import './styles.css';
import {useHistory} from 'react-router-dom';
const ApplyModal = ({appliedJob}) => {
  let history = useHistory ();

  return (
    <div className="apply-modal-container" id="applyModalID">
      <div className="apply-modal-layout">
        <div className="a-m-job-container">
          <div className="a-m-job-header">
            {appliedJob.name}
          </div>
          <div className="a-m-job-details">
            {appliedJob.contract + ', ' + appliedJob.location}
            {' '}
            {appliedJob.remote ? ', Uzaktan' : ''}
          </div>
          <div className="a-m-job-content">
            Eleman arıyoruz ..

          </div>
        </div>
        <div className="a-m-resume-container">
          Hemen CV yükleyin
          <input type="file" id="myFile" name="myFile" className="inputfile" />
          <label htmlFor="myFile">Gözat</label>
        </div>
        <div className="a-m-apply-button">
          <button
            onClick={() => {
              document.getElementById ('applyModalID').style.display = 'none';
              history.push ('/applied');
            }}
          >
            Başvur
          </button>
          <button
            onClick={() => {
              document.getElementById ('applyModalID').style.display = 'none';
            }}
          >
            Vazgeç
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
