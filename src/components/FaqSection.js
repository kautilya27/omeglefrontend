import React, { useState } from 'react';

const faqs = [
  {
    q: "What is Omegle Online?",
    a: "Omegle Online is a free online chat platform that connects users anonymously with random strangers for text or video chat."
  },
  {
    q: "How do I start a chat on Omegle Online?",
    a: "Simply visit the website, choose between text or video chat, and click the \"Start\" button. You will be instantly connected with a random user from around the world."
  },
  {
    q: "Is Omegle Online free to use?",
    a: "Yes, Omegle Online is completely free. There are no hidden fees or charges for using the platform."
  },
  {
    q: "Can I use Omegle Online on my mobile device?",
    a: "Yes, Omegle Online is accessible on both web browsers and mobile devices, allowing you to chat from anywhere."
  },
  {
    q: "Is Omegle Online safe?",
    a: "While Omegle Online offers moderation and reporting features, users may still encounter inappropriate content or behavior. It is important not to share personal information and to end any conversation that makes you uncomfortable."
  },
  {
    q: "Is Omegle Online suitable for children?",
    a: "No, Omegle Online is not recommended for children or minors. The platform may contain adult content, and users under 18 should not use it without parental supervision."
  },
  {
    q: "What should I do if my camera or microphone isn’t working?",
    a: "Ensure your camera and microphone are properly connected and that you have granted the necessary permissions to the website or app."
  }
];

function FaqSection() {
  const [open, setOpen] = useState(-1);

  return (
    <section style={{
      maxWidth: 700,
      margin: '0 auto 30px auto',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
      padding: '26px 18px'
    }}>
      <h2 style={{
        fontSize: 23,
        fontWeight: 700,
        marginBottom: 20,
        textAlign: 'center',
        color: '#000'
      }}>
        FAQs
      </h2>
      {faqs.map((item, idx) => (
        <div key={item.q} style={{ marginBottom: 10, borderBottom: '1px solid #eee' }}>
          <div
            onClick={() => setOpen(open === idx ? -1 : idx)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: 17,
              padding: '10px 0',
              fontWeight: 600,
              color: '#464b5a'
            }}
          >
            {item.q}
            <span>{open === idx ? '-' : '+'}</span>
          </div>
          {open === idx && (
            <div style={{
              fontSize: 15,
              color: '#222',
              margin: '2px 0 8px 4px',
              textAlign: 'left'
            }}>
              {item.a}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default FaqSection;
