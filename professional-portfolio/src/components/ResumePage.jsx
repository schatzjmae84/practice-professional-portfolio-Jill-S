import { useParams } from "react-router-dom";

export default function ResumePage() {

    const { resume } = useParams();

    return (

        <div className="resume-page">
            <h2>{resume}</h2>

            {/* Resume link/button - places the resume at /Jillianne Schatz - Software Engineer Resume.pdf in the public folder */}
            <div className="resume-actions">
                <a href="/Jillianne Schatz - Software Engineer Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">View / Download Resume (PDF)</a>
            </div>

            {/* Embedded preview - will render if /Jillianne Schatz - Software Engineer Resume.pdf exists; some browsers may block inline PDF previews */}
            <div className="resume-embed" style={{ marginTop: '1rem' }}>
                <iframe src="/Jillianne Schatz - Software Engineer Resume.pdf" title="Resume" width="100%" height="800px" style={{ border: 'none' }} />
            </div>
        </div>
    );
};