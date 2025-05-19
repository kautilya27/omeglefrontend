import React from "react";

function InfoSection() {
  return (
    <section style={{
      maxWidth: 900,
      margin: '0 auto 32px auto',
      background: '#fff',
      borderRadius: 15,
      boxShadow: '0 2px 12px 0 rgba(0,0,0,0.06)',
      padding: '30px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: 26, fontWeight: "700", marginBottom: 10, color: 'black' }}>
        Omegle Online: Video Chat With Strangers
      </h1>

      {/* NEW CONTENT STARTS HERE */}
      <p style={{
        fontSize: 15,
        color: '#464b5a',
        textAlign: 'left',
        maxWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
      }}>
        Looking for a fun and exciting way to meet new people? Omegle Online offers you a platform for live video call interactions with strangers from around the globe. Just like the original Omegle, we randomly pair you with someone for a one-on-one chat. Enjoy online chat random encounters and forge connections through spontaneous conversations.
      </p>
      <p style={{
        fontSize: 15,
        color: '#464b5a',
        textAlign: 'left',
        maxWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20
      }}>
        If you're seeking an Omegle alternative, our platform provides a seamless experience for Omegle chat with strangers. Engage in random video call sessions and experience the thrill of meeting someone new. It’s simple: start a live video call online and talk to strangers instantly.
      </p>
      <p style={{
        fontSize: 15,
        color: '#464b5a',
        textAlign: 'left',
        maxWidth: 650,
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Our platform is designed for those seeking a stranger video call online without the hassle of registration. Enjoy an online video call free of charge and discover new friends through Omegle online.
      </p>
      {/* NEW CONTENT ENDS HERE */}

      <div style={{
        width: '100%',
        textAlign: 'center',
        fontSize: 15,
        color: '#68a8f5',
        paddingTop: 8
      }}>
        Welcome to Omegle Online, the latest addition to the world of video chat! Jump in, chat, and meet friends right now.
      </div>
    </section>
  );
}

export default InfoSection;
