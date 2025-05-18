import React, { useState } from 'react';
import { submitComplaint } from '../services/complaintService';

function ReportIssue() {
    const [formData, setFormData] = useState({ name: '', issue: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await submitComplaint(formData);
        alert('Complaint submitted!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <textarea
                placeholder="Issue"
                value={formData.issue}
                onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ReportIssue;
