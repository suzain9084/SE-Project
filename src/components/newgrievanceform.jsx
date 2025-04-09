import React, { useState } from 'react';
import "../css/newgrievanceform.css"; // Import external CSS

const NewGrievanceForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignedTo, setAssignedTo] = useState('Maintenance Committee');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Grievance submitted!');
    };

    const handleRecord = () => {
        alert('Recording feature not yet implemented.');
    };

    return (
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
                    <div className="description-row">
                        <div className='label-record'>
                            <div className="grievance-label">Description</div>
                            <button
                                type="button"
                                className="record-button"
                                onClick={handleRecord}
                            >
                                🎤 Record
                            </button>
                        </div>
                        <textarea
                            className="grievance-textarea"
                            rows="6"
                            placeholder="Enter description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
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
    );
};

export default NewGrievanceForm;
