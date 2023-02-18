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
      <div className="text-content-wrapper about-content">
        <p>
          I'm a Senior Backend Software Engineer currently working at URBN Inc.
          (Urban Outfitters/Anthropologie/Free People and friends). I specialize
          in backend RESTful microservice design and development.
        </p>
        <p>
          I work closely across any teams that will have me, particularly Dev
          Ops, as I love playing with infrastructure and designing new ways to
          make our infra-lives easier. I'm also am a learning and mentor devotee
          and I lead that charge wherever I go.
        </p>
        <ul>
          Some things I do:
          <li>Design/Architecture</li>
          <li>Cloud Design</li>
          <li>Leadership/Mentoring</li>
          <li>ETL</li>
          <li>Python</li>
          <li>Golang</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
