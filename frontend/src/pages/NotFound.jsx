import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found | Savariya Overseas" description="The page you are looking for could not be found." path="/404" />
      <section className="container-x flex min-h-[70vh] flex-col justify-center py-32">
        <p className="overline">Error 404</p>
        <h1 className="mt-5 h1">This page could not be found.</h1>
        <p className="mt-5 max-w-xl lead">
          The page you are looking for may have moved. Return to the homepage or get in touch with
          our team.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link to="/" data-testid="notfound-home-btn" className="btn-primary">
            Back to Home
          </Link>
          <Link to="/contact" data-testid="notfound-contact-btn" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
