import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_r8mhf0t', 'template_wk04fdj', form.current, 'FETV3k6vg508xBaiO')
        .then((result: { status: number; text: string }) => {
          if (result.status === 200) {
            alert('Mensagem enviada com sucesso!');
          } else {
            alert('Erro ao enviar mensagem.');
          }
        })
        .catch(() => {
          alert('Erro ao enviar mensagem.');
        });
    }
  };

  return (
    <section id="contact">
      <h2>Contato</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Seu Nome" required />
        <input type="email" name="email" placeholder="Seu Email" required />
        <textarea name="message" placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
