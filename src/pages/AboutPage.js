const AboutPage = () => {
  return (
    <div className="outer-wrapper">
      <div className="headshot-wrapper">
        <img
          className="headshot"
          src={`${process.env.PUBLIC_URL}/static/20190504_201005.jpg`}
          alt="headshot"
        />
      </div>
      <div className="content">
        <p>
          I'm a Software Engineer who specializes in the backend. Blah blah
          blah, I also make cocktails, blah blah blah and I can kind of
          sing...blah blah blah blah Check out some of my projects
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
