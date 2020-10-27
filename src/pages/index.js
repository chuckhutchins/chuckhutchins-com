import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <main className="homepage">
      <SEO title={'Chuck Hutchins - Front-End Developer'}/>
      <div className="mission">
        <h2>I'm a design-oriented front-end developer looking to work on interesting solutions to important
          questions.</h2>
      </div>
      <div className="hr--mini hr--1" />
      <div className="experience">
        <h2>Experience</h2>
        <div className="entry">
          <h3>Front-End Developer</h3>
          <ul>
            <li>Wayne State University</li>
            <li>May 2020 &ndash; Present</li>
          </ul>
        </div>
        <div className="entry">
          <h3>Front-End Developer</h3>
          <ul>
            <li>Nextep Solutions</li>
            <li>March 2020 &ndash; May 2020</li>
          </ul>
        </div>
        <div className="entry">
          <h3>Lead Front-End Developer</h3>
          <ul>
            <li>Art Van Furniture</li>
            <li>January 2019 &ndash; February 2020</li>
          </ul>
          <ul className="list">
            <li>Created and maintained custom responsive web design framework for rapid prototyping and finished product delivery across all device types
            </li>
            <li>Worked as technical member/resource on cross-functional teams addressing new and existing web, marketing, and product initiatives
            </li>
            <li>Maintained website style guide, enabling other developers and UX designers to produce consist and compliant user experiences
            </li>
            <li>Integrated ADA compliant markup and semantic HTML into new and existing code templates and modules</li>
            <li>Established process and code standards for day-to-day promotional content on the website</li>
            <li>Trained new team members on development and design processes and tools</li>
            <li>Responsible for cross-browser/device testing/QA/UAT and internal development team code reviews</li>
          </ul>
        </div>
        <div className="entry">
          <h3>Senior Web Designer</h3>
          <ul>
            <li>Art Van Furniture</li>
            <li>March 2018 &ndash; January 2019</li>
          </ul>
          <ul className="list">
            <li>Lead web design team in daily promotional site operations</li>
            <li>Created development and design processes allowing for rapid day-to-day promotional changes</li>
            <li>Designed and developed mockups and wireframes for new landing pages</li>
            <li>Standardized and organized code and image assets to facilitate team communication and execution</li>
            <li>Trained team members to use new techniques, internal templates, and tools</li>
            <li>Developed responsive HTML to give the customer a seamless experience across any device</li>
          </ul>
        </div>
        <div className="entry">
          <h3>Digital Designer &amp; Developer</h3>
          <ul>
            <li>Art Van Furniture</li>
            <li>September 2017 &ndash; March 2018</li>
          </ul>
          <ul className="list">
            <li>Worked on a cross-functional team addressing web and mobile initiatives</li>
            <li>Provided ongoing updates and enhancements for the company’s aggressive retail promotional schedule</li>
          </ul>
        </div>
        <div className="entry">
          <h3>Web Developer</h3>
          <ul>
            <li>Fullerton Tool Company</li>
            <li>October 2013 &ndash; August 2016</li>
          </ul>
        </div>
      </div>
      <div className="hr--mini hr--2" />
      <div className="skills">
        <h2>Skills</h2>
        <div className="entry">
          <h3>Development</h3>
          <ul className="list">
            <li>ADA Compliance</li>
            <li>CSS3</li>
            <li>Git</li>
            <li>HTML5</li>
            <li>Javascript</li>
            <li>Responsive Web Design</li>
            <li>Sass</li>
          </ul>
        </div>
        <div className="entry">
          <h3>Creative</h3>
          <ul className="list">
            <li>Adobe CC (Illustrator, InDesign, Photoshop, XD)</li>
            <li>Sketch</li>
            <li>User Experience/Interface Design</li>
            <li>Wireframing &amp; Prototyping</li>
          </ul>
          <h3>Process</h3>
          <ul className="list">
            <li>Agile/SCRUM</li>
            <li>Jira &amp; Confluence</li>
          </ul>
        </div>
      </div>
      <div className="hr--mini hr--3" />
      <div className="training">
        <h2>Training</h2>
        <ul className="list">
          <li>Deque University Web Accessibility Curriculum 2.0, 2020</li>
          <li>Developing for Salesforce B2C Commerce: CCD 101, 2019</li>
          <li>An Event Apart: Seattle, 2018</li>
        </ul>
      </div>
      <div className="hr--mini hr--4 mobile-only" />
      <div className="education">
        <h2>Education</h2>
        <h3>BA Graphic Design</h3>
        <ul>
          <li>Saginaw Valley State University</li>
          <li>September 2010 &ndash; December 2014</li>
        </ul>
      </div>
    </main>
  </Layout>
)

export default IndexPage
