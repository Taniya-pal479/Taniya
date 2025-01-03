import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <section id="contact"  className={styles.container}>
    <h1 className="sectionTitle">Contact</h1>
    <form  action="https://formspree.io/f/xyzzbelq"  method="post">
        <div className="fromGroup">
          <label htmlForm="name" hidden>
          Name
          </label>
          <input type="text"
           name="name"
            id="name"
            placeholder="Name"
            required></input>
        </div>

        <div className="fromGroup">
          <label htmlForm="email" hidden>
          Email
          </label>
          <input type="email"
           name="email"
            id="email"
            placeholder="mail"
            required></input>
        </div>

        <div className="fromGroup">
          <label htmlForm="message" hidden>
          Message
          </label>
          <textarea type="message"
           name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>

        <input className="hover btn" type="submit" value="Submit"></input>
    </form> 
    </section>
  );
}

export default Contact;