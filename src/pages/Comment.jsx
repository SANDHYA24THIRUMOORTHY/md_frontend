import React, { useState } from 'react';
import './Comment.css';

function Comment() {
  const [isReporting, setIsReporting] = useState(false);
  const [reportData, setReportData] = useState({
    transactionId: "",
    description: "",
  });

  const handleReportOpen = () => {
    setIsReporting(true);
  };

  const handleReportClose = () => {
    setIsReporting(false);
    setReportData({ transactionId: "", description: "" });
  };

  const handleReportSubmit = (event) => {
    event.preventDefault();
    // Handle report submission logic here (e.g., send data to server)
    console.log("Report submitted:", reportData);
    handleReportClose();
  };

  return (
    <div className="report-page">
      {/* ... other report sections ... */}
      <div className="report-fraud-section">
        <h2>Report Fraudulent Activity</h2>
        <button onClick={handleReportOpen}>Report</button>
        {isReporting && (
          <form onSubmit={handleReportSubmit}>
            <label htmlFor="transactionId">Transaction ID:</label>
            <input
              type="text"
              id="transactionId"
              value={reportData.transactionId}
              onChange={(e) => setReportData({ ...reportData, transactionId: e.target.value })}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={reportData.description}
              onChange={(e) => setReportData({ ...reportData, description: e.target.value })}
            />
            <button type="submit">Submit Report</button>
            <button onClick={handleReportClose}>Cancel</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Comment;
