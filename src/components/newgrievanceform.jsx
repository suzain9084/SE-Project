import React, { useState, useRef } from 'react';
import "../css/newgrievanceform.css";


const NewGrievanceForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('Maintenance Committee');

  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);

  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Grievance submitted!');
  };

  const startRecording = async () => {
    setIsRecording(true)
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const recorder = new MediaRecorder(stream);
    mediaRecorderRef.current = recorder;

    chunksRef.current = [];

    recorder.ondataavailable = (event) => {
      chunksRef.current.push(event.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunksRef.current, { type: "audio/webm" });
      const url = URL.createObjectURL(blob);
      setAudioURL(url);
      setIsRecording(false);
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false)
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
  };


  return (
    <div className='gri-cont-to-fit-in-page'>
      <div className="grievance-container">
        <h2 className="grievance-heading">New Grievance</h2>
        <p className="grievance-subtext">
          Fill out the form below or record your grievance using the microphone
        </p>

        <form onSubmit={handleSubmit} className="grievance-form">
          <div>
            <label className="grievance-label">Title</label>
            <input
              type="text"
              className="grievance-input"
              placeholder="Brief title of your grievance"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="grievance-label">Description</label>
            <div className="description-row">
              <textarea
                className="grievance-textarea"
                rows="4"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {isRecording ? 
                (<button
                  type="button"
                  className="record-button"
                  onClick={stopRecording}
                >
                  🎤 stop Recording
                </button>) : (
                  <div
                    type="button"
                    className="record-button"
                    onClick={startRecording}
                  >
                    🎤 start Recording
                  </div>
                )}
                {audioURL && (
                  <audio controls src={audioURL}></audio>
                )}
            </div>
          </div>

          <div className="grievance-assignment-box">
            <p>
              Based on your description, this grievance will be assigned to:
            </p>
            <strong>{assignedTo}</strong>
          </div>

          <button type="submit" className="submit-button">
            Submit Grievance
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewGrievanceForm;
