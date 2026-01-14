import React, { useState, useEffect } from 'react';
import { getEnquiries } from '../../services/api';
import './AdminPages.css';

function EnquiriesAdmin() {
  const [enquiries, setEnquiries] = useState([]);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await getEnquiries();
      setEnquiries(res.data.enquiries || []);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };

  return (
    <div className="admin-section">
      <div className="section-header">
        <h2>Enquiries</h2>
        <p>Total: {enquiries.length}</p>
      </div>

      <div className="admin-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Project Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map(enquiry => (
              <tr key={enquiry._id}>
                <td>{enquiry.name}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.phone}</td>
                <td>{enquiry.projectType}</td>
                <td><span className={`status-${enquiry.status}`}>{enquiry.status}</span></td>
                <td>
                  <button className="btn-edit" onClick={() => setSelectedEnquiry(enquiry)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedEnquiry && (
        <div className="detail-modal">
          <div className="modal-content">
            <h3>{selectedEnquiry.name}</h3>
            <p><strong>Email:</strong> {selectedEnquiry.email}</p>
            <p><strong>Phone:</strong> {selectedEnquiry.phone}</p>
            <p><strong>Project Type:</strong> {selectedEnquiry.projectType}</p>
            <p><strong>Budget:</strong> {selectedEnquiry.budget}</p>
            <p><strong>Timeline:</strong> {selectedEnquiry.timeline}</p>
            <p><strong>Location:</strong> {selectedEnquiry.location}</p>
            <p><strong>Description:</strong> {selectedEnquiry.description}</p>
            <button className="btn btn-secondary" onClick={() => setSelectedEnquiry(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EnquiriesAdmin;
