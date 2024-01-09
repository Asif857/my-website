// --- css imports ---
import './css/Contact.css';
// --- end css imports ---

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-details">
        <p>
          <strong>Name:</strong> Assiph Rolant
        </p>
        <p>
          <strong>Phone:</strong> 050-6428830
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:asif857@gmail.com">asif857@gmail.com</a>
        </p>
      </div>
      <div id="contact-last">
        <p>
          Feel free to reach out to me through the provided email or phone
          number. I'm open to discussing opportunities, collaborations, or
          answering any questions you may have.
        </p>
      </div>
    </section>
  );
}
