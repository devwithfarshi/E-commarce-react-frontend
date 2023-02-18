import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.7256319305807!2d90.38477361467685!3d23.93476778762575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4bc7b7e5efd%3A0x27e3e646bcde81ce!2z4Kas4KecIOCmrOCmvuCnnOCmvyDgpqzgpr7gprgg4Ka44KeN4Kaf4Kaq!5e0!3m2!1sbn!2sbd!4v1675788116432!5m2!1sbn!2sbd"
        width="100%"
        height="400"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="container">
        <div className="contact-form">
          <form
            className="contact-inputs"
            action="https://formspree.io/f/mdovekyz"
            method="POST"
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="off"
              required
            />
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              required
            />
            <textarea
              name="Message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
